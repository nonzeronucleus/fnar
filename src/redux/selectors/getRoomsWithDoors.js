import rooms from '../../consts/rooms';

const addExit = room => (exits, door) => {
  if (door[0] === room) {
    exits.push(door[1])
  }
  if (door[1] === room) {
    exits.push(door[0])
  }
  return exits;
}

const getExits = (doorways, room) => {
  return doorways.reduce(addExit(room), [])
}

const addRoom =  doorways=> (building, room) => {
    building[rooms[room]] = {exits: getExits(doorways, rooms[room])}

    return building;
}

export default (doorways) => Object.keys(rooms).reduce(addRoom(doorways), {})
