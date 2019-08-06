import { put } from 'redux-saga/effects';
import * as actions from '../actions';
import delay from '@redux-saga/delay-p'

export function* start() {
    while (true) {
        yield put(actions.tick());
        yield delay(2000000);
    }
}
