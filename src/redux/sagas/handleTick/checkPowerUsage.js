import { put, select } from 'redux-saga/effects';
import { getPowerUsage, getPower } from '../../selectors';
import * as actions from '../../actions';

export function* checkCurrentPowerUsage() {
    const powerUsage = yield select(getPowerUsage);
    if (powerUsage > 0) {
        yield put(actions.usePower(powerUsage));
    }
}

export function* checkAvailablePower() {
    const power = yield select(getPower);
    if (power <= 0) {
        yield put(actions.disablePower());
    }
}

function* checkPowerUsage() {
    yield checkCurrentPowerUsage();
    yield checkAvailablePower();
}

export default checkPowerUsage;
