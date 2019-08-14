import rooms from "./rooms";

export default [
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
