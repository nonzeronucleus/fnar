import { put } from 'redux-saga/effects';
import * as actions from '../actions';

export function* handleDoorRelease({payload: {releases}}) {
    yield put(actions.toggleDoorRelease({releases}));
    yield put(actions.toggleDoor({room: releases, isOpen:true}));
}
