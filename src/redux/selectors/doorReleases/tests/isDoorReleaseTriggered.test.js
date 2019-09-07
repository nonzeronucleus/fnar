import isdoorReleaseTriggered from '../isdoorReleaseTriggered'
import doors from '../../../../consts/rooms'

it("returns true only for trigered release", () => {
    const state = {
        doorReleases:{
            "left door": {
                expiryTime: 10
            },
            "right door": {
                expiryTime: null
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
                expiryTime: 10
            },
            "right door": {
                expiryTime: 8
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
                expiryTime: null
            },
            "right door": {
                expiryTime: null
            },
        }
    }
    expect(isdoorReleaseTriggered(state, doors.LEFT_DOOR)).toEqual(false);
    expect(isdoorReleaseTriggered(state, doors.RIGHT_DOOR)).toEqual(false);
});
