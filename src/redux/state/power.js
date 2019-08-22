import { createReducer } from 'redux-act';
import * as actions from '../actions';

export default createReducer({
  [actions.usePower]: (state, payload) => Math.max(state-payload, 0)
}, 1000);
