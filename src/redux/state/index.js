import { combineReducers } from 'redux';
import locations from './locations'
import tickCount from './tickCount'

export default combineReducers({
  tickCount,
  locations
});
