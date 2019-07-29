import { createReducer } from 'redux-act';
import Immutable from 'immutable';
import characters from '../characters'
import rooms from '../building/rooms';
import * as actions from '../actions';

const getInitLocations = () => {
  const o = {
    [ characters.RAINBA]: rooms.CORRIDOR,
    [ characters.MINTY] : rooms.DINING_ROOM,
    [ characters.GINGER] : rooms.FUSION_COVE,
    [ characters.MERWING ]: rooms.TOILET,
    [ characters.PORKIE ]: rooms.CORRIDOR

  }
  return Immutable.Map(o);
};

const locations = createReducer({
  [actions.moveEnemy]: (state, payload) => state.set(payload.character, payload.to)
}, getInitLocations());

export default locations;
