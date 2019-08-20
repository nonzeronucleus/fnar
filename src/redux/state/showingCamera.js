import { createReducer } from 'redux-act';
import * as actions from '../actions';

export default createReducer({
  [actions.toggleCamera]: (state) => !state,
  [actions.loseGame]: () => false
}, false);
