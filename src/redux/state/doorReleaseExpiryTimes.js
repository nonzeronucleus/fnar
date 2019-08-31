import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';
import * as actions from '../actions';
import rooms from '../../consts/rooms';


const numTicksBeforeDoorReleaseExpires = 10;




const doorReleaseExpiryTime = currentRoom => createReducer({
    [actions.toggleDoorRelease]: (state, {releases, currentTick}) =>
        releases=== currentRoom
            ? currentTick
                ? currentTick + numTicksBeforeDoorReleaseExpires
                : null
            : state
}, null);

export default combineReducers({
    [rooms.LEFT_DOOR]:doorReleaseExpiryTime(rooms.LEFT_DOOR),
    [rooms.RIGHT_DOOR]:doorReleaseExpiryTime(rooms.RIGHT_DOOR)
})
