import { put, select, all } from 'redux-saga/effects';
import { getExpiredDoorReleases } from '../../selectors';
import * as actions from '../../actions';

function* checkDoorReleases() {
    const expiredDoorReleases = yield select(getExpiredDoorReleases);

    if (expiredDoorReleases.length === 0)
        return;

    yield all(expiredDoorReleases.map(release => {
        return put(actions.toggleDoorRelease({ releases: release }));
    }));
}

export default checkDoorReleases;
