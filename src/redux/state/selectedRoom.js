import { createReducer } from 'redux-act';
import * as actions from '../actions';
import rooms from '../../consts/rooms';

export default createReducer({
  [actions.selectRoom]: (state, payload) => payload,
  [actions.loseGame]: () => rooms.OFFICE // If game over, go back to office
}, rooms.OFFICE);
