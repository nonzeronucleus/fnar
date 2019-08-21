import { combineReducers } from 'redux';
import locations from './locations';
import tickCount from './tickCount';
import selectedRoom from './selectedRoom';
import time from './time';
import officeDoors from './officeDoors'
import doorways from './doorways';
import gameState from './gameState';
import showingCamera from './showingCamera';
import power from './power';

export default combineReducers({
  tickCount,
  locations,
  selectedRoom,
  time,
  officeDoors,
  doorways,
  gameState,
  showingCamera,
  power
});
