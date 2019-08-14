import rooms from '../../consts/building/rooms';

import corridor from './corridor.jpg';
import diningRoom from './dining room.jpg';
import fusionCove from './fusion cove.jpg';
import kitchen from './kitchen.jpg';
import leftHall from './left hall.jpg';
import rightHall from './right hall.jpg';
import toilet from './toilet.jpg';
import office from './office.jpg';

export default {
    [rooms.LEFT_HALL]: leftHall,
    [rooms.RIGHT_HALL]:rightHall,
    [rooms.CORRIDOR]: corridor,
    [rooms.FUSION_COVE]: fusionCove,
    [rooms.DINING_ROOM]: diningRoom,
    [rooms.KITCHEN]: kitchen,
    [rooms.TOILET]: toilet,
    [rooms.OFFICE]: office
}
