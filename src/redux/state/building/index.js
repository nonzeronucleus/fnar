import roomsWithDoorways from './roomsWithDoorways';

import { createReducer } from 'redux-act';
import * as actions from '../../actions';

export default createReducer({
  [actions.toggleDoor]: (state, payload) => state
}, roomsWithDoorways);

