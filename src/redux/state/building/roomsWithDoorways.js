import rooms from '../../../consts/rooms';
import doorways from './doorways';

const addExit = room => (exits, door) => {
    if (door[0] === room) {
      exits.push(door[1])
    }
    if (door[1] === room) {
      exits.push(door[0])
    }
    return exits;
  }

  const getExits = room => {

    return doorways.reduce(addExit(room), [])
  }

const addRoom =  (building, room) => {
    building[rooms[room]] = {exits: getExits(rooms[room])}

    return building;
}


export default Object.keys(rooms).reduce(addRoom, {})
