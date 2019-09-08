import releaseButtons from '../../../consts/releaseButtons'

export default ({ doorReleases, selectedRoom} ) => {
    const triggeredDoor = releaseButtons[selectedRoom];

    if (!triggeredDoor) return null;

    return doorReleases[triggeredDoor].status;
}
