import { combineReducers } from 'redux';
import characterLocations from './characterLocations';
import tickCount from './tickCount';
import selectedRoom from './selectedRoom';
import officeDoors from './officeDoors'
import doorways from './doorways';
import gameState from './gameState';
import showingCamera from './showingCamera';
import doorReleaseExpiryTimes from './doorReleaseExpiryTimes';
import power from './power';

export default combineReducers({
  tickCount,
  characterLocations,
  selectedRoom,
  officeDoors,
  doorways,
  gameState,
  showingCamera,
  power,
  doorReleaseExpiryTimes
});
