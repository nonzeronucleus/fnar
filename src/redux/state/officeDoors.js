import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';
import releaseButtonStatus from '../../consts/releaseButtonStatus';
import * as actions from '../actions';
import rooms from '../../consts/rooms';

const doorIsOpen = currentRoom => createReducer({
    [actions.toggleDoor]: (state, {door, isOpen}) => {
        return door === currentRoom
            ? isOpen
            : state
    },
    [actions.setDoorReleaseStatus]: (state, {door, status}) => {
        return door === currentRoom && status === releaseButtonStatus.enabled
            ? true
            : state
    },
    [actions.disablePower]: () => true
}, true);

export default combineReducers({
    [rooms.LEFT_DOOR]:doorIsOpen(rooms.LEFT_DOOR),
    [rooms.RIGHT_DOOR]:doorIsOpen(rooms.RIGHT_DOOR)
})
