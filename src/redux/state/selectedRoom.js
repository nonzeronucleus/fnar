import { createReducer } from 'redux-act';
import * as actions from '../actions';
import rooms from '../../consts/rooms';

export default createReducer({
  [actions.selectRoom]: (state, {room}) => (room),
}, rooms.DINING_ROOM);
