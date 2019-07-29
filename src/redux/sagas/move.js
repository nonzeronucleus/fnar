import { put, select } from 'redux-saga/effects';
import { getCharacterLocations } from '../selectors';
import building from '../../consts/building';

import * as actions from '../actions';

export function* move() {
    const chars = yield select(getCharacterLocations);
    const numChars = Object.keys(chars).length;
    const charToMoveId = Math.floor((Math.random() * numChars))
    const charToMove = chars[charToMoveId];
    const locations =  building[charToMove.location];
    const exits = locations.exits;


    const newLocationId = Math.floor((Math.random() * exits.length));
    // console.log(exits, newLocationId);

    yield put(actions.moveEnemy({character:charToMove.character, to:exits[newLocationId]}))

    // yield call(console.log, 'move', )

}
