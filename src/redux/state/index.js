import { combineReducers } from 'redux';
import locations from './locations';
import tickCount from './tickCount';
import selectedRoom from './selectedRoom';
import time from './time';
import officeDoors from './officeDoors'
import doorways from './doorways';
import gameState from './gameState';

export default combineReducers({
  tickCount,
  locations,
  selectedRoom,
  time,
  officeDoors,
  doorways,
  gameState
});
