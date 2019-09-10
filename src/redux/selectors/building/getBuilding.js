import { createSelector } from 'reselect';
import getRoomsWithDoors from './getRoomsWithDoors';

const getDoorways = ({ doorways }) => doorways;

const getBuilding = createSelector(getDoorways, doorways => getRoomsWithDoors(doorways));

export default getBuilding;