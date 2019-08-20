import { createReducer } from 'redux-act';
import gameStates from '../../consts/gameStates';
import * as actions from '../actions';

export default createReducer({
  [actions.loseGame]: () => gameStates.LOST
}, gameStates.IN_PROGRESS);
