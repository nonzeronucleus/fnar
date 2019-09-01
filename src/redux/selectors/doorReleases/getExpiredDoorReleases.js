export default ({doorReleaseExpiryTimes, tickCount}) => Object.keys(doorReleaseExpiryTimes).filter(doorRelease => doorReleaseExpiryTimes[doorRelease] && tickCount > doorReleaseExpiryTimes[doorRelease] );