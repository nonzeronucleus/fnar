import { takeLatest } from 'redux-saga/effects';
import * as actions from '../actions';
import {start} from './start';
import {move} from './move';

function* sagas() {
    yield takeLatest(actions.start.getType(), start);
    yield takeLatest(actions.tick.getType(), move);
}



export default sagas;
