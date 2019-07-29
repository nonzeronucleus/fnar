import { combineReducers } from 'redux';
import locations from './locations';
import tickCount from './tickCount';
import selectedRoom from './selectedRoom';

export default combineReducers({
  tickCount,
  locations,
  selectedRoom
});
