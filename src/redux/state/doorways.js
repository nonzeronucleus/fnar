import { createReducer } from 'redux-act';
import * as actions from '../actions';
import rooms from "../../consts/rooms";


const initDoorways = [
  [rooms.OFFICE, rooms.LEFT_DOOR],
  [rooms.OFFICE, rooms.RIGHT_DOOR],
  [rooms.LEFT_DOOR, rooms.LEFT_HALL],
  [rooms.RIGHT_DOOR, rooms.RIGHT_HALL],
  [rooms.CORRIDOR, rooms.LEFT_HALL],
  [rooms.CORRIDOR, rooms.RIGHT_HALL],
  [rooms.CORRIDOR, rooms.FUSION_COVE],
  [rooms.CORRIDOR, rooms.DINING_ROOM],
  [rooms.CORRIDOR, rooms.TOILET],
  [rooms.DINING_ROOM, rooms.KITCHEN],
];

export default createReducer({
  [actions.toggleDoor]: (state, {room, isOpen}) =>
    isOpen
      ? [...state, [rooms.OFFICE, room]]
      : state.filter (doorway => doorway[1]!==room)
}, initDoorways);
