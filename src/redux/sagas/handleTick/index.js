import { put, select } from 'redux-saga/effects';
import {  getCurrentTick } from '../../selectors';
import * as actions from '../../actions';
import checkDoorReleases from './checkDoorReleases';
import checkPowerUsage from './checkPowerUsage';
import handleCharacterAction from './handleCharacterAction';

const ticksPerHour = 60
const ticksPerMove = 1;

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





export function* handleTick() {
    yield checkTime();

    yield checkDoorReleases();

    yield checkMove();

    yield checkPowerUsage();
}
