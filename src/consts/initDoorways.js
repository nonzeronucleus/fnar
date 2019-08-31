import rooms from "./rooms";

export default [
  [rooms.OFFICE, rooms.LEFT_DOOR],
  [rooms.OFFICE, rooms.RIGHT_DOOR],
  [rooms.LEFT_DOOR, rooms.LEFT_HALL],
  [rooms.RIGHT_DOOR, rooms.RIGHT_HALL],
  [rooms.LEFT_CORRIDOR, rooms.LEFT_HALL],
  [rooms.RIGHT_CORRIDOR, rooms.RIGHT_HALL],
  [rooms.LEFT_CORRIDOR, rooms.FUSION_COVE],
  [rooms.LEFT_CORRIDOR, rooms.DINING_ROOM],
  [rooms.RIGHT_CORRIDOR, rooms.DINING_ROOM],
  [rooms.RIGHT_CORRIDOR, rooms.TOILET],
  [rooms.RIGHT_CORRIDOR, rooms.LEFT_CORRIDOR],
  [rooms.DINING_ROOM, rooms.KITCHEN],
];
