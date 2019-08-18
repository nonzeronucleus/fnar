import { createSelector } from 'reselect'
import characters from '../../consts/characters';
import getRoomsWithDoors from './getRoomsWithDoors';

export const getCharacterLocations = ({locations}) => {
    return Object.values(characters).map(character => ({character:character, location:locations.get(character)}))
}

export const getSelectedRoom = ({selectedRoom}) => selectedRoom;
export const getCharactersInSelectedRoom = ({selectedRoom,locations}) => Object.keys(locations.filter(location => (location === selectedRoom)).toJSON());
export const getCharactersInRoom = ({locations}, room) => Object.keys(locations.filter(location => (location === room)).toJSON());

const pad = num => num < 10 ? "0"+num : ""+ num

export const getTime = ({time}) => {
    var hour = 10+Math.floor(time/60);
    var mins = time % 60;

    if(hour>12) {
        hour-=12;
    }
    return pad(hour)+":"+pad(mins);
}

export const isDoorOpen = ({officeDoors}, door) => officeDoors[door];

const getDoorways = ({doorways}) => doorways

export const getBuilding = createSelector(
    getDoorways,
    doorways => getRoomsWithDoors(doorways)
)
