import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';
import * as actions from '../actions';
import rooms from '../../consts/rooms';


const doorIsOpen = currentRoom => createReducer({
    [actions.toggleDoor]: (state, {room, isOpen}) => {
        return room === currentRoom
            ? isOpen
            : state
    },
    [actions.disablePower]: () => true
}, true);

export default combineReducers({
    [rooms.LEFT_DOOR]:doorIsOpen(rooms.LEFT_DOOR),
    [rooms.RIGHT_DOOR]:doorIsOpen(rooms.RIGHT_DOOR)
})
