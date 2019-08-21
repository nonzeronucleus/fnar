import { createAction } from 'redux-act';

export const start = createAction('Start');
export const tick = createAction('Tick');
export const moveEnemy = createAction('Move Enemy');
export const selectRoom = createAction('Select Room');
export const toggleDoor = createAction('Toggle Door')
export const disablePower = createAction('Disable Power')
export const loseGame = createAction('Lose Game')
export const winGame = createAction('Win Game')
export const toggleCamera = createAction('Toggle Camera')
export const usePower = createAction('Use Power')
