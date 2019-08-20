import { createAction } from 'redux-act';

export const start = createAction('Start');
export const tick = createAction('Tick');
export const moveEnemy = createAction('Move Enemy');
export const selectRoom = createAction('Select Room');
export const toggleDoor = createAction('Toggle Door')
export const loseGame = createAction('Lose Game')
export const toggleCamera = createAction('Toggle Camera')
