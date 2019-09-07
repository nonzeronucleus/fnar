import getDoorReleaseInSelectedRoom from '../getDoorReleaseInSelectedRoom';


it('returns null if room has no door release', () => {
    const doorReleases= {
        "left door": {
            expiryTime: null
        },
        "right door": {
            expiryTime: null
        },
    }

    const selectedRoom= "left corridor"
    const release = getDoorReleaseInSelectedRoom({doorReleases, selectedRoom});

    expect(release).toEqual(null);
});

it('returns false if room has disabled door release', () => {
    const doorReleases = {
        "left door": {
            expiryTime: null
        },
        "right door": {
            expiryTime: null
        },
    }
    const selectedRoom= "toilet"
    const release = getDoorReleaseInSelectedRoom({doorReleases, selectedRoom});

    expect(release).toEqual(false);
});

it('returns true if room has enabled door release', () => {
    const doorReleases = {
        "left door": {
            expiryTime: null
        },
        "right door": {
            expiryTime: 1
        },
    }
    const selectedRoom= "toilet"
    const release = getDoorReleaseInSelectedRoom({doorReleases, selectedRoom});

    expect(release).toEqual(true);
});



