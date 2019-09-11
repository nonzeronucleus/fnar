import initDoorways from '../../../consts/initDoorways';
import rooms from '../../../consts/rooms';
import isDoorOpen from './isDoorOpen';

const getDoorwayIfOpen = (officeDoors, room) =>
    isDoorOpen({officeDoors}, room) ? [room, rooms.OFFICE] : []

const getDoorways = ({officeDoors}) => (
    [
        ...initDoorways,
        [...getDoorwayIfOpen(officeDoors, rooms.LEFT_DOOR)],
        [...getDoorwayIfOpen(officeDoors, rooms.RIGHT_DOOR)],
    ]
)

export default getDoorways;
