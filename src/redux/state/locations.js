import { createReducer } from 'redux-act';
import Immutable from 'immutable';
import rooms from '../building/rooms';
import * as actions from '../actions';

const getInitLocations = () => {
  const o = { 0: rooms.CORRIDOR , 1: rooms.DINING_ROOM, 2: rooms.FUSION_COVE, 3: rooms.TOILET, 4: rooms.CORRIDOR };
  const m = Immutable.Map(o);
  // console.log(m.get("1"));
  return m;
};

const locations = createReducer({
  [actions.moveEnemy]: (state, payload) => state.set(payload.enemy, payload.location)
}, getInitLocations());

export default locations;
