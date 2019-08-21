import { put, select } from 'redux-saga/effects';
import rooms from '../../consts/rooms'
import { getCharacterLocations, getBuilding, getPowerUsage, getPower } from '../selectors';
import * as actions from '../actions';

export function* move() {
    const chars = yield select(getCharacterLocations);
    const numChars = Object.keys(chars).length;
    const charToMoveId = Math.floor((Math.random() * numChars))
    const charToMove = chars[charToMoveId];
    const building = yield select(getBuilding);


    const locations =  building[charToMove.location];
    const exits = locations.exits;


    const newLocationId = Math.floor((Math.random() * exits.length));
    const to = exits[newLocationId]

    yield put(actions.moveEnemy({character:charToMove.character, to}))

    if (to === rooms.OFFICE) {
        yield put(actions.loseGame())
    }

    const powerUsage = yield select(getPowerUsage);

    console.log(powerUsage);

    if (powerUsage>0) {
        yield put(actions.usePower(powerUsage));
    }

    const power = yield select(getPower);
    if (power <= 0) {
        yield put(actions.disablePower())
    }
}
