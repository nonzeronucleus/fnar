import { createSelector } from 'reselect';
import getRoomsWithDoors from './getRoomsWithDoors';
import getDoorways from './getDoorways';

const getBuilding = createSelector(getDoorways, doorways => getRoomsWithDoors(doorways));

export default getBuilding;