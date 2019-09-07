import { combineReducers } from 'redux';
import rooms from '../../../consts/rooms';
import expiryTime from './expiryTime';

const doorRelease = currentRoom => combineReducers({
    expiryTime:expiryTime(currentRoom)
})


export default combineReducers({
    [rooms.LEFT_DOOR]:doorRelease(rooms.LEFT_DOOR),
    [rooms.RIGHT_DOOR]:doorRelease(rooms.RIGHT_DOOR)
})
