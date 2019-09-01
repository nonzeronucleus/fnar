import { put } from 'redux-saga/effects';
import rooms from '../../../consts/rooms';
import * as actions from '../../actions';

function* moveCharacter(charToMove, exits) {
    const newLocationId = Math.floor((Math.random() * exits.length));
    const to = exits[newLocationId];
    yield put(actions.moveEnemy({ character: charToMove.character, to }));
    if (to === rooms.OFFICE) {
        yield put(actions.loseGame());
    }
}

export default moveCharacter;
