import { createReducer } from 'redux-act';
import gameStates from '../../consts/gameStates';
import rooms from '../../consts/rooms'
import * as actions from '../actions';

export default createReducer({
  [actions.moveEnemy]: (state, {to}) => to === rooms.OFFICE ? gameStates.LOST : state
}, gameStates.IN_PROGRESS);
