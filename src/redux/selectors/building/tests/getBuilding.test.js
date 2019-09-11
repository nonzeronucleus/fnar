import getBuilding from '../getBuilding';

jest.mock('../../../../consts/rooms', () => {
    return {
        LEFT_HALL: 'left hall',
        RIGHT_HALL:'right hall',
        LEFT_CORRIDOR: 'left corridor',
        RIGHT_CORRIDOR: 'right corridor',
        DINING_ROOM: 'dining room',
        TOILET: 'toilet',
        LEFT_DOOR: 'left door',
    }
  });

it('turns a list of doorways into a list of rooms and all of the doors coming out of those rooms', ()=> {
    const state = {
        doorways:  [
            ['left door','left hall'],
            ['left corridor','left hall'],
            ['right corridor','right hall'],
            ['right corridor','dining room'],
            ['right corridor','toilet'],
        ]
    }

    const expectedRooms = {
        "left hall":{"exits":["left door","left corridor"]},
        "right hall":{"exits":["right corridor"]},
        "left corridor":{"exits":["left hall"]},
        "right corridor":{"exits":["right hall","dining room","toilet"]},
        "dining room":{"exits":["right corridor"]},
        "toilet":{"exits":["right corridor"]},
        "left door":{"exits":["left hall"]},
    }

    expect (getBuilding(state)).toEqual(expectedRooms)
})