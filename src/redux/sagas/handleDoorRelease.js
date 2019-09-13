import { put, select } from 'redux-saga/effects';
import * as actions from '../actions';
import { getCurrentTick } from '../selectors';
import releaseButtonStatus from '../../consts/releaseButtonStatus'

function* handleDoorRelease({payload: {releasedDoor}}) {
    const currentTick = yield select(getCurrentTick);

    yield put(actions.setDoorReleaseStatus(releasedDoor, releaseButtonStatus.enabled));

    yield put(actions.addFutureAction(
        actions.setDoorReleaseStatus(releasedDoor, releaseButtonStatus.disabled),
        currentTick + 5
    ));
}

export default handleDoorRelease;
