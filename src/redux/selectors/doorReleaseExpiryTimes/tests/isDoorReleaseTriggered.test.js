import isDoorReleaseTriggered from '../isDoorReleaseTriggered'
import doors from '../../../../consts/rooms'

it("returns true only for trigered release", () => {
    const state = {
        doorReleaseExpiryTimes: {
            "left door": 10,
            "right door": null
        }
    }
    expect(isDoorReleaseTriggered(state, doors.LEFT_DOOR)).toEqual(true);
    expect(isDoorReleaseTriggered(state, doors.RIGHT_DOOR)).toEqual(false);
});

it("returns true for both if both trigered ", () => {
    const state = {
        doorReleaseExpiryTimes: {
            "left door": 10,
            "right door": 8
        }
    }
    expect(isDoorReleaseTriggered(state, doors.LEFT_DOOR)).toEqual(true);
    expect(isDoorReleaseTriggered(state, doors.RIGHT_DOOR)).toEqual(true);
});

it("returns false for both if neither trigered ", () => {
    const state = {
        doorReleaseExpiryTimes: {
            "left door": null,
            "right door": null
        }
    }
    expect(isDoorReleaseTriggered(state, doors.LEFT_DOOR)).toEqual(false);
    expect(isDoorReleaseTriggered(state, doors.RIGHT_DOOR)).toEqual(false);
});
