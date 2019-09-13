import { createAction } from 'redux-act';

export const start = createAction('Start');
export const tick = createAction('Tick', tickCount => ({tickCount}));
export const addFutureAction = createAction('Add future action', (futureAction, atTick, repeatFrequency) => ({futureAction, atTick, repeatFrequency}));
export const triggerCharacterAction = createAction('Trigger character action', () => ({}))
export const toggleDoor = createAction('Toggle Door', (door, isOpen) => ({door, isOpen}))
export const pressDoorRelease = createAction('Press Door Release', (releasedDoor) => ({releasedDoor}))
export const moveEnemy = createAction('Move Enemy', (character, to) =>({character,to}));
export const selectRoom = createAction('Select Room', (room) => ({room}));


// export const moveEnemy = createAction('Move Enemy');
export const setDoorReleaseStatus = createAction('Set Door Release Status', (door, status) => ({door, status}))
export const disablePower = createAction('Disable Power')
export const loseGame = createAction('Lose Game')
export const winGame = createAction('Win Game')
export const toggleCamera = createAction('Toggle Camera')
export const usePower = createAction('Use Power')
