import { put, select } from 'redux-saga/effects';
import * as actions from '../actions';
import delay from '@redux-saga/delay-p'
import {getGameState, getCurrentTick} from '../selectors';
import gameStates from '../../consts/gameStates';

export function* start() {
    let gameState = yield select(getGameState);

    while (gameState === gameStates.IN_PROGRESS) {
        const currentTick = yield select(getCurrentTick);

        yield put(actions.tick(currentTick+1));
        yield delay(1000);
        gameState = yield select(getGameState);
    }
}
