import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';
import * as actions from '../actions';
import rooms from '../../consts/rooms';


const doorIsReleased = currentRoom => createReducer({
    [actions.toggleDoorRelease]: (state, {releases}) =>
        releases=== currentRoom
            ? true
            : state
}, false);

export default combineReducers({
    [rooms.LEFT_DOOR]:doorIsReleased(rooms.LEFT_DOOR),
    [rooms.RIGHT_DOOR]:doorIsReleased(rooms.RIGHT_DOOR)
})
