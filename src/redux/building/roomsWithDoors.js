import rooms from './rooms';
import doors from './doors';

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

    return doors.reduce(addExit(room), [])
  }

//   export default Object.keys(rooms).map( room => ({id:room, name:rooms[room], exits:getExits(rooms[room])}));


const addRoom =  (building, room) => {
    building[rooms[room]] = {exits: getExits(rooms[room])}

    return building;
}


export default Object.keys(rooms).reduce(addRoom, {})


  //( room => ({id:room, name:rooms[room], exits:getExits(rooms[room])}));
