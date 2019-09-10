import { put, select, all } from 'redux-saga/effects';
import {  getTimedActions } from '../../selectors';
// import {  getCurrentTick, getTimedActions } from '../../selectors';
// import * as actions from '../../actions';
import checkPowerUsage from './checkPowerUsage';
// import handleCharacterAction from './handleCharacterAction';

// const ticksPerHour = 60
// const ticksPerMove = 5;

// const endTime = ticksPerHour * 6; // Finishes at 6:00 AM

// function* checkTime() {
//     const tickCount = yield select(getCurrentTick);

//     if (tickCount >= endTime) { // 6:00 AM
//         yield put(actions.winGame())
//     }
// }


// function* checkMove() {
//     const tickCount = yield select(getCurrentTick);

//     if (tickCount % ticksPerMove !==(ticksPerMove -1)) return; // Don't move except on last tick

//     yield handleCharacterAction();
// }

function* checkTimedActions() {
    const timedActions = yield select(getTimedActions)

    yield all(timedActions.map(({action}) => put(action)))
}





export function* handleTick() {
    // yield checkTime();

    yield checkTimedActions();

    // yield checkMove();

    yield checkPowerUsage();
}
