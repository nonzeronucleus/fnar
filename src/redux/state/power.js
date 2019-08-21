import { createReducer } from 'redux-act';
import * as actions from '../actions';

export default createReducer({
  [actions.usePower]: (state, payload) => state-payload
}, 40);
