import { createReducer } from 'redux-act';
import gameStates from '../../consts/gameStates';
import * as actions from '../actions';

export default createReducer({
  [actions.winGame]: () => gameStates.WON,
  [actions.loseGame]: () => gameStates.LOST
}, gameStates.IN_PROGRESS);
