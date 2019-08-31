import { put, select, all } from 'redux-saga/effects';
import rooms from '../../consts/rooms'
import releaseButtons from '../../consts/releaseButtons';

import { getCharacterLocations, getBuilding, getPowerUsage, getCurrentTick, getExpiredDoorReleases, getPower } from '../selectors';
import * as actions from '../actions';

const ticksPerHour = 60
const ticksPerMove = 10;

const endTime = ticksPerHour * 6; // Finishes at 6:00 AM

function* checkTime() {
    const tickCount = yield select(getCurrentTick);

    if (tickCount >= endTime) { // 6:00 AM
        yield put(actions.winGame())
    }
}


function* checkMove() {
    const tickCount = yield select(getCurrentTick);

    if (tickCount % ticksPerMove !==(ticksPerMove -1)) return; // Don't move except on last tick

    yield handleCharacterAction();
}


function *pickCharacterToMove() {
    const chars = yield select(getCharacterLocations);
    const numChars = Object.keys(chars).length;
    const charToMoveId = Math.floor((Math.random() * numChars))
    return chars[charToMoveId];
}

const getReleaseButton = room => releaseButtons[room]


function* handleCharacterAction() {
    const charToMove = yield pickCharacterToMove();
    const building = yield select(getBuilding);

    const currentLocation =  building[charToMove.location];
    const releaseButton = getReleaseButton(charToMove.location);

    if (releaseButton && Math.random() < 0.25) {
        yield put(actions.pressDoorRelease(releaseButton))
    }
    else {
        yield moveCharacter(charToMove, currentLocation.exits);
    }
}

function *moveCharacter(charToMove, exits) {
    const newLocationId = Math.floor((Math.random() * exits.length));
    const to = exits[newLocationId]

    yield put(actions.moveEnemy({character:charToMove.character, to}))

    if (to === rooms.OFFICE) {
        yield put(actions.loseGame())
    }
}

function* checkPowerUsage() {
    const powerUsage = yield select(getPowerUsage);

    if (powerUsage>0) {
        yield put(actions.usePower(powerUsage));
    }

    const power = yield select(getPower);
    if (power <= 0) {
        yield put(actions.disablePower())
    }
}

function* checkDoorReleases() {
    const expiredDoorReleases = yield select(getExpiredDoorReleases);

    if (expiredDoorReleases === []) return;

    yield all (expiredDoorReleases.map(release => {
        // call(console.log({release}))
        // // console.log(release);
        return put(actions.toggleDoorRelease({releases:release}))
    }))


}

export function* handleTick() {
    yield checkTime();

    yield checkDoorReleases();

    yield checkMove();

    yield checkPowerUsage();
}
