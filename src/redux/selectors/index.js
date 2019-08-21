import { createSelector } from 'reselect'
import characters from '../../consts/characters';
import getRoomsWithDoors from './getRoomsWithDoors';
import gameStates from '../../consts/gameStates'

export const getCharacterLocations = ({locations}) => {
    return Object.values(characters).map(character => ({character:character, location:locations.get(character)}))
}

export const getSelectedRoom = ({selectedRoom}) => selectedRoom;
export const getCharactersInSelectedRoom = ({selectedRoom,locations}) => Object.keys(locations.filter(location => (location === selectedRoom)).toJSON());
export const getCharactersInRoom = ({locations}, room) => Object.keys(locations.filter(location => (location === room)).toJSON());

const pad = num => num < 10 ? "0"+num : ""+ num

export const getTime = ({tickCount}) => {
    const time = tickCount *10;
    var hour = 10+Math.floor(time/60);
    var mins = time % 60;

    if(hour>12) {
        hour-=12;
    }
    return pad(hour)+":"+pad(mins);
}

export const getCurrentTick =({tickCount}) => tickCount;

export const isDoorOpen = ({officeDoors}, door) => officeDoors[door];

export const getPowerUsage = ({officeDoors, showingCamera}) => {
    const getDoorUsage = officeDoors => Object.values(officeDoors).filter(doorOpen => !doorOpen).length * 4;

    const getCameraUsage = showingCamera => showingCamera ? 2 : 0;

    return getDoorUsage(officeDoors)+ getCameraUsage(showingCamera);
}



const getDoorways = ({doorways}) => doorways

export const getBuilding = createSelector(
    getDoorways,
    doorways => getRoomsWithDoors(doorways)
)

export const getGameState = ({gameState}) => gameState;

export const isPlaying = createSelector(
    getGameState,
    gameState => gameState === gameStates.IN_PROGRESS
)

export const isShowingCamera = ({showingCamera}) => showingCamera;

export const getPower = ({power}) => power;
