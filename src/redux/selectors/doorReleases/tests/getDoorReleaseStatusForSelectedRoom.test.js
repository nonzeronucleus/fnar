import getDoorReleaseStatusForSelectedRoom from '../getDoorReleaseStatusForSelectedRoom'
import releaseButtonStatus from '../../../../consts/releaseButtonStatus'

// import doors from '../../../../consts/rooms'

it("returns enabled for enabled door", () => {
    const state = {
        selectedRoom: "toilet",
        doorReleases:{
            "left door": {
                status: releaseButtonStatus.disabled
            },
            "right door": {
                status: releaseButtonStatus.enabled
            },
        }
    }

    expect(getDoorReleaseStatusForSelectedRoom(state)).toEqual(releaseButtonStatus.enabled);
});

it("returns disabled for disabled door", () => {
    const state = {
        selectedRoom: "fusion cove",
        doorReleases:{
            "left door": {
                status: releaseButtonStatus.disabled
            },
            "right door": {
                status: releaseButtonStatus.enabled
            },
        }
    }

    expect(getDoorReleaseStatusForSelectedRoom(state)).toEqual(releaseButtonStatus.disabled);
});

it("returns null for room with no switch", () => {
    const state = {
        selectedRoom: "dining room",
        doorReleases:{
            "left door": {
                status: releaseButtonStatus.disabled
            },
            "right door": {
                status: releaseButtonStatus.enabled
            },
        }
    }

    expect(getDoorReleaseStatusForSelectedRoom(state)).toEqual(null);
});
