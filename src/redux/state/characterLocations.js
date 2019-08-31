import { createReducer } from 'redux-act';
import Immutable from 'immutable';
import characters from '../../consts/characters'
import rooms from '../../consts/rooms';
import * as actions from '../actions';

const getInitLocations = () => {
  const o = {
    [ characters.RAINBA]: rooms.RIGHT_CORRIDOR,
    [ characters.MINTY] : rooms.DINING_ROOM,
    [ characters.GINGER] : rooms.FUSION_COVE,
    [ characters.MERWING ]: rooms.TOILET,
    [ characters.PORKIE ]: rooms.CORRIDOR

  }
  return Immutable.Map(o);
};

export default createReducer({
  [actions.moveEnemy]: (state, payload) => state.set(payload.character, payload.to)
}, getInitLocations());

// export default locations;
