import { combineReducers } from 'redux';
import locations from './locations';
import tickCount from './tickCount';
import selectedRoom from './selectedRoom';
import time from './time';
import officeDoors from './officeDoors'
import building from './building';

export default combineReducers({
  tickCount,
  locations,
  selectedRoom,
  time,
  officeDoors,
  building
});
