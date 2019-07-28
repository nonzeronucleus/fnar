import { createReducer } from 'redux-act';
import * as actions from '../actions';

export default createReducer({
  [actions.tick]: (state, payload) => state + 1
}, 0);
