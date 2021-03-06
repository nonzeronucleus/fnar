import { createSelector } from 'reselect'
import characters from '../../consts/characters';
import gameStates from '../../consts/gameStates'
export {default as isDoorReleaseTriggered } from './doorReleases/isDoorReleaseTriggered';
export {default as getDoorReleaseStatusForSelectedRoom } from './doorReleases/getDoorReleaseStatusForSelectedRoom';
export {default as getDoorReleaseInSelectedRoom } from './doorReleases/getDoorReleaseInSelectedRoom';
export {default as getCharactersInRoom} from './characters/getCharactersInRoom';
export {default as getCharactersInSelectedRoom} from './characters/getCharactersInSelectedRoom';
export {default as getPower } from './power/getPower';
export {default as getBuilding} from './building/getBuilding';
export {default as isDoorOpen} from './building/isDoorOpen';

export const getCharacterLocations = ({characterLocations}) => {
    return Object.values(characters).map(character => ({character:character, location:characterLocations.get(character)}))
}

export const getSelectedRoom = ({selectedRoom}) => selectedRoom;


const pad = num => num < 10 ? "0"+num : ""+ num

export const getTime = ({tickCount}) => {
    const time = tickCount;
    var hour = Math.floor(time/60);
    var mins = time % 60;

    return pad(hour)+":"+pad(mins);
}

export const getCurrentTick =({tickCount}) => tickCount;

export const getPowerUsage = ({officeDoors, showingCamera}) => {
    const getDoorUsage = officeDoors => Object.values(officeDoors).filter(doorOpen => !doorOpen).length * 5;

    const getCameraUsage = showingCamera => showingCamera ? 1 : 0;

    return (getDoorUsage(officeDoors)+ getCameraUsage(showingCamera));
}

export const getGameState = ({gameState}) => gameState;

export const isPlaying = createSelector(
    getGameState,
    gameState => gameState === gameStates.IN_PROGRESS
)

export const isShowingCamera = ({showingCamera}) => showingCamera;

export const getTimedActions= ({timedActions, tickCount}) => timedActions[tickCount] || [];
