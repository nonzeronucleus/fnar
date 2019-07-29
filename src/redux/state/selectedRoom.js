import { createReducer } from 'redux-act';
import * as actions from '../actions';
import rooms from '../../consts/building/rooms';

export default createReducer({
  [actions.selectRoom]: (state, payload) => payload
}, rooms.OFFICE);
