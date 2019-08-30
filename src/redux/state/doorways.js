import { createReducer } from 'redux-act';
import * as actions from '../actions';
import rooms from "../../consts/rooms";
import initDoorways from '../../consts/initDoorways';

export default createReducer({
  [actions.toggleDoor]: (state, {room, isOpen}) =>
    isOpen
      ? [...state, [rooms.OFFICE, room]]
      : state.filter (doorway => doorway[1]!==room)
}, initDoorways);
