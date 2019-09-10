import { put, select } from 'redux-saga/effects';
import { getBuilding } from '../../selectors';
import moveCharacter from './moveCharacter';
import releaseButtons from '../../../consts/releaseButtons';
import { getCharacterLocations } from '../../selectors';

import * as actions from '../../actions';

export const getReleaseButton = room => releaseButtons[room]

function *pickCharacterToMove() {
    const chars = yield select(getCharacterLocations);
    const numChars = Object.keys(chars).length;
    const charToMoveId = Math.floor((Math.random() * numChars))
    return chars[charToMoveId];
}

function* handleCharacterAction() {
    const charToMove = yield pickCharacterToMove();
    const building = yield select(getBuilding);
    const currentLocation = building[charToMove.location];
    const releaseButton = getReleaseButton(charToMove.location);
    if (releaseButton && (Math.random() < 0.25)) {
        yield put(actions.pressDoorRelease({releases:releaseButton}));
    }
    else {
        yield moveCharacter(charToMove, currentLocation.exits);
    }
}

export default handleCharacterAction;
