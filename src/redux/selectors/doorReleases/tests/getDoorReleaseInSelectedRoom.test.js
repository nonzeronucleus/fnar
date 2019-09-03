import getDoorReleaseInSelectedRoom from '../getDoorReleaseInSelectedRoom';


it('returns null if room has no door release', () => {
    const doorReleaseExpiryTimes = {
        'left door': null,
        'right door': null
    }

    const selectedRoom= "left corridor"
    const doorRelease = getDoorReleaseInSelectedRoom({doorReleaseExpiryTimes, selectedRoom});

    expect(doorRelease).toEqual(null);
});

it('returns false if room has disabled door release', () => {
    const doorReleaseExpiryTimes = {
        'left door': null,
        'right door': null
    }
    const selectedRoom= "toilet"
    const doorRelease = getDoorReleaseInSelectedRoom({doorReleaseExpiryTimes, selectedRoom});

    expect(doorRelease).toEqual(false);
});

it('returns true if room has enabled door release', () => {
    const doorReleaseExpiryTimes = {
        'left door': null,
        'right door': 1
    }
    const selectedRoom= "toilet"
    const doorRelease = getDoorReleaseInSelectedRoom({doorReleaseExpiryTimes, selectedRoom});

    expect(doorRelease).toEqual(true);
});



