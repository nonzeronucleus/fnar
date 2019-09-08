import { createAction } from 'redux-act';

export const start = createAction('Start');
export const tick = createAction('Tick', tickCount => ({tickCount}));
export const moveEnemy = createAction('Move Enemy');
export const selectRoom = createAction('Select Room');
export const toggleDoor = createAction('Toggle Door')
export const pressDoorRelease = createAction('Press Door Release')
export const toggleDoorRelease = createAction('Toggle Door Release')
export const setDoorReleaseStatus = createAction('Set Door Release Status', (door, status) => ({door, status}))
export const disablePower = createAction('Disable Power')
export const loseGame = createAction('Lose Game')
export const winGame = createAction('Win Game')
export const toggleCamera = createAction('Toggle Camera')
export const usePower = createAction('Use Power')
export const addFutureAction = createAction('Add future action', (futureAction, atTick) => ({futureAction, atTick}));
