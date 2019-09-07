import releaseButtons from '../../../consts/releaseButtons'

export default ({ doorReleases, selectedRoom}) => {
    const triggeredDoor = releaseButtons[selectedRoom];

    // console.log({selectedRoom, triggeredDoor, doorReleases})


    if (!triggeredDoor) return null;

    return !!doorReleases[triggeredDoor].expiryTime
}
