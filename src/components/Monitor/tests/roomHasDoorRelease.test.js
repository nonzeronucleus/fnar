import roomHasDoorRelease from '../roomHasDoorRelease';
import rooms from '../../../consts/rooms';

it ("should return false if there's no door release in the room", ()=> {
    expect(roomHasDoorRelease(rooms.RIGHT_HALL)).toEqual(false);
})

it ("should return true if there is a door release in the room", ()=> {
  expect(roomHasDoorRelease(rooms.TOILET)).toEqual(true);
})

