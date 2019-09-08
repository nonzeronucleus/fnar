import { combineReducers } from 'redux';
import rooms from '../../../consts/rooms';
import expiryTime from './expiryTime';
import status from './status';

const doorRelease = currentRoom => combineReducers({
    expiryTime:expiryTime(currentRoom),
    status:status(currentRoom)
})


export default combineReducers({
    [rooms.LEFT_DOOR]:doorRelease(rooms.LEFT_DOOR),
    [rooms.RIGHT_DOOR]:doorRelease(rooms.RIGHT_DOOR)
})
