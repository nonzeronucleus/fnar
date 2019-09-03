import releaseButtons from '../../../consts/releaseButtons'

export default ({ doorReleaseExpiryTimes , selectedRoom}) => {
    const triggeredDoor = releaseButtons[selectedRoom];

    if (!triggeredDoor) return null;

    return !!doorReleaseExpiryTimes[triggeredDoor]
}
