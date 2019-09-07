export default ({doorReleases, tickCount}) =>
    Object.keys(doorReleases)
        .filter(doorRelease =>
            doorReleases[doorRelease].expiryTime && tickCount > doorReleases[doorRelease].expiryTime
        );

