import { takeLatest } from 'redux-saga/effects';
import * as actions from '../actions';
import {start} from './start';
import {handleTick} from './handleTick';
import {handleDoorRelease} from './handleDoorRelease';

function* sagas() {
    yield takeLatest(actions.start.getType(), start);
    yield takeLatest(actions.tick.getType(), handleTick);
    yield takeLatest(actions.pressDoorRelease.getType(), handleDoorRelease);
}



export default sagas;
