import { put, select } from 'redux-saga/effects';
import * as actions from '../actions';
import { getCurrentTick } from '../selectors';

export function* handleDoorRelease({payload: {releases}}) {
    const currentTick = yield select(getCurrentTick);

    yield put(actions.toggleDoorRelease({releases, currentTick}));
    yield put(actions.toggleDoor({room: releases, isOpen:true}));
}
