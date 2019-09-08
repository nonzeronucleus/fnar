import isdoorReleaseTriggered from '../isdoorReleaseTriggered'
import releaseButtonStatus from '../../../../consts/releaseButtonStatus'

import doors from '../../../../consts/rooms'

it("returns true only for trigered release", () => {
    const state = {
        doorReleases:{
            "left door": {
                status: releaseButtonStatus.enabled
            },
            "right door": {
                status: releaseButtonStatus.disabled
            },
        }
    }
    expect(isdoorReleaseTriggered(state, doors.LEFT_DOOR)).toEqual(true);
    expect(isdoorReleaseTriggered(state, doors.RIGHT_DOOR)).toEqual(false);
});

it("returns true for both if both trigered ", () => {
    const state = {
        doorReleases:{
            "left door": {
                status: releaseButtonStatus.enabled
            },
            "right door": {
                status: releaseButtonStatus.enabled
            },
        }
    }
    expect(isdoorReleaseTriggered(state, doors.LEFT_DOOR)).toEqual(true);
    expect(isdoorReleaseTriggered(state, doors.RIGHT_DOOR)).toEqual(true);
});

it("returns false for both if neither trigered ", () => {
    const state = {
        doorReleases:{
            "left door": {
                status: releaseButtonStatus.disabled
            },
            "right door": {
                status: releaseButtonStatus.disabled
            },
        }
    }
    expect(isdoorReleaseTriggered(state, doors.LEFT_DOOR)).toEqual(false);
    expect(isdoorReleaseTriggered(state, doors.RIGHT_DOOR)).toEqual(false);
});
