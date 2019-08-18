import { combineReducers } from 'redux';
import locations from './locations';
import tickCount from './tickCount';
import selectedRoom from './selectedRoom';
import time from './time';
import doors from './doors'

export default combineReducers({
  tickCount,
  locations,
  selectedRoom,
  time,
  doors
});
