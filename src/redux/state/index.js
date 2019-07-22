import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';
// import _ from 'lodash'
import * as actions from '../actions';

const tickCount = createReducer({
  [actions.tick]: (state, payload) => state+1
}, 0)

export default combineReducers({
  tickCount
});
