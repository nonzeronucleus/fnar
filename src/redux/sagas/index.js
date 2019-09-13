import { takeLatest } from 'redux-saga/effects';
import * as actions from '../actions';
import {start} from './start';
import {handleTick} from './handleTick';
import handleDoorRelease from './handleDoorRelease';
import handleCharacterAction from './handleTick/handleCharacterAction';

function* sagas() {
    yield takeLatest(actions.start.getType(), start);
    yield takeLatest(actions.tick.getType(), handleTick);
    yield takeLatest(actions.pressDoorRelease.getType(), handleDoorRelease);
    yield takeLatest(actions.triggerCharacterAction.getType(), handleCharacterAction);
}

export default sagas;
