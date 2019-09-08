import { createReducer } from 'redux-act';
import * as actions from '../../actions';
import releaseButtonStatus from '../../../consts/releaseButtonStatus'

export default currentRoom => createReducer({
    [actions.setDoorReleaseStatus]: (state, {door, status}) =>
    door=== currentRoom
            ? status
            : state
}, releaseButtonStatus.disabled);

