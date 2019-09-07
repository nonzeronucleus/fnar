import getExpiredDoorReleases from '../getExpiredDoorReleases'

it('returns an empty array when no door releases are currently triggerd', () => {
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
    expect(getExpiredDoorReleases(state)).toEqual([]);
});

it('returns an an array with the correct door when one has expired', () => {
    const state = {
        doorReleases:{
            "left door": {
                expiryTime: 1
            },
            "right door": {
                expiryTime: null
            },
        },
        tickCount: 10
    }

    expect(getExpiredDoorReleases(state)).toEqual(["left door"]);
});

it('returns an an array with both doors when both have expired', () => {
    const state = {
        doorReleases:{
            "left door": {
                expiryTime: 1
            },
            "right door": {
                expiryTime: 2
            },
        },
        tickCount: 5
    }
    expect(getExpiredDoorReleases(state)).toEqual(["left door", "right door"]);
});

it('returns an an array with the correct door when one has expired and the other has not', () => {
    const state = {
        doorReleases:{
            "left door": {
                expiryTime: 3
            },
            "right door": {
                expiryTime: 4
            },
        },
        tickCount: 4
    }
    expect(getExpiredDoorReleases(state)).toEqual(["left door"]);
});
