import { put, select } from 'redux-saga/effects';
import * as actions from '../actions';
import delay from '@redux-saga/delay-p'
import {getGameState, getCurrentTick} from '../selectors';
import gameStates from '../../consts/gameStates';

export function* start() {
    const ticksPerHour = 60
    const characterActionFrequency = 5;
    const endTime = ticksPerHour * 6; // Finishes at 6:00 AM

    let gameState = yield select(getGameState);
    yield put(actions.addFutureAction(
        actions.triggerCharacterAction(), characterActionFrequency, characterActionFrequency
    ))

    yield put(actions.addFutureAction(
        actions.winGame(), endTime
    ))

    while (gameState === gameStates.IN_PROGRESS) {
        const currentTick = yield select(getCurrentTick);

        yield put(actions.tick(currentTick+1));
        yield delay(1000);
        gameState = yield select(getGameState);
    }
}
