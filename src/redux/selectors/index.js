import { createSelector } from 'reselect'
import characters from '../../consts/characters';
import getRoomsWithDoors from './getRoomsWithDoors';
import gameStates from '../../consts/gameStates'
import releaseButtons from '../../consts/releaseButtons';

export const getCharacterLocations = ({characterLocations}) => {
    return Object.values(characters).map(character => ({character:character, location:characterLocations.get(character)}))
}

export const getSelectedRoom = ({selectedRoom}) => selectedRoom;

// Handle situation where a character is pressing one of the buttons (so is in a 'room' that isn't actually a room)
const getActualRoom = room =>  releaseButtons[room] || room;

export const getCharactersInRoom = ({characterLocations}, room) =>
    Object.keys(characterLocations.filter(location => (getActualRoom(location) === room)).toJSON());

export const getCharactersInSelectedRoom = ({selectedRoom,characterLocations}) => getCharactersInRoom({characterLocations}, selectedRoom)

const pad = num => num < 10 ? "0"+num : ""+ num

export const getTime = ({tickCount}) => {
    const time = tickCount;
    var hour = Math.floor(time/60);
    var mins = time % 60;

    return pad(hour)+":"+pad(mins);
}

export const getCurrentTick =({tickCount}) => tickCount;

export const isDoorOpen = ({officeDoors}, door) => officeDoors[door];

export const getPowerUsage = ({officeDoors, showingCamera}) => {
    const getDoorUsage = officeDoors => Object.values(officeDoors).filter(doorOpen => !doorOpen).length * 5;

    const getCameraUsage = showingCamera => showingCamera ? 1 : 0;

    return (getDoorUsage(officeDoors)+ getCameraUsage(showingCamera));
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

export const getPower = ({power}) => Math.floor(power/10);

export const isDoorReleaseTriggered = ({doorRelease}, door) => doorRelease[door];
