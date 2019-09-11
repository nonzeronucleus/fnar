import { put, select } from 'redux-saga/effects';
import * as actions from '../actions';
import { getCurrentTick } from '../selectors';
import releaseButtonStatus from '../../consts/releaseButtonStatus'

export function* handleDoorRelease({payload: {releases}}) {
    const currentTick = yield select(getCurrentTick);

    yield put(actions.toggleDoorRelease(releases, currentTick));
    yield put(actions.setDoorReleaseStatus(releases, releaseButtonStatus.enabled));
    yield put(actions.toggleDoor(releases, true));

    yield put(actions.addFutureAction(
        actions.setDoorReleaseStatus(releases, releaseButtonStatus.disabled),
        currentTick + 2
    ));
}
