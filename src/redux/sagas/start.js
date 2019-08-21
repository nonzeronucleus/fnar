import { put, select } from 'redux-saga/effects';
import * as actions from '../actions';
import delay from '@redux-saga/delay-p'
import {getGameState} from '../selectors';
import gameStates from '../../consts/gameStates';

export function* start() {
    let gameState = yield select(getGameState);

    while (gameState === gameStates.IN_PROGRESS) {
        yield put(actions.tick());
        yield delay(5000);
        gameState = yield select(getGameState);
    }
}
