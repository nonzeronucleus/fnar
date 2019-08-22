import { createReducer } from 'redux-act';
import * as actions from '../actions';

export default createReducer({
  [actions.toggleCamera]: (state) => !state,
  [actions.winGame]: () => false,
  [actions.loseGame]: () => false,
  [actions.disablePower]: () => false
}, false);
