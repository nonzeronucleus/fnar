import { createReducer } from 'redux-act';
import * as actions from '../../actions';

const numTicksBeforeDoorReleaseExpires = 10;

export default currentRoom => createReducer({
    [actions.toggleDoorRelease]: (state, {releases, currentTick}) =>
        releases=== currentRoom
            ? currentTick
                ? currentTick + numTicksBeforeDoorReleaseExpires
                : null
            : state
}, null);

