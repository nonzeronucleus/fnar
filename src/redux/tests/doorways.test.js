import reducer from '../state';
import * as actions from '../actions';
import rooms from '../../consts/rooms';
import {getBuilding, isDoorOpen} from '../selectors';

describe('getting doorways' ,() =>{
    let state;
    it("should default to all doorways, and both doors open" ,() => {
        const expectedBuilding = {
            "dining room": {"exits": ["left corridor", "right corridor", "kitchen"]},
            "fusion cove": {"exits": ["left corridor"]},
            "kitchen": {"exits": ["dining room"]},
            "left corridor": {"exits": ["left hall", "fusion cove", "dining room", "right corridor"]},
            "left door": {"exits": ["office", "left hall"]},
            "left hall": {"exits": ["left door", "left corridor"]},
            "office": {"exits": ["left door", "right door"]},
            "right corridor": {"exits": ["right hall", "dining room", "toilet", "left corridor"]},
            "right door": {"exits": ["office", "right hall"]},
            "right hall": {"exits": ["right door", "right corridor"]},
            "toilet": {"exits": ["right corridor"]}
        }

        state = reducer();

        expect(getBuilding(state).diningRoom).toEqual(expectedBuilding.diningRoom);

        expect(getBuilding(state)["office"].exits.sort()).toEqual(["left door", "right door"].sort());
        expect(getBuilding(state)["left door"].exits.sort()).toEqual(["office", "left hall"].sort());
        expect(getBuilding(state)["right door"].exits.sort()).toEqual(["office", "right hall"].sort());

        expect(isDoorOpen(state, rooms.LEFT_DOOR)).toEqual(true);
        expect(isDoorOpen(state, rooms.RIGHT_DOOR)).toEqual(true);
    })

    it("should remove left door if it's closed", () => {
        const doorCloseAction = actions.toggleDoor(rooms.LEFT_DOOR, false)

        state = reducer(state, doorCloseAction);
        expect(getBuilding(state)["office"].exits.sort()).toEqual(["right door"].sort());
        expect(getBuilding(state)["left door"].exits.sort()).toEqual(["left hall"].sort());
        expect(getBuilding(state)["right door"].exits.sort()).toEqual(["office", "right hall"].sort());

        expect(isDoorOpen(state, rooms.LEFT_DOOR)).toEqual(false);
        expect(isDoorOpen(state, rooms.RIGHT_DOOR)).toEqual(true);
    });

    it("should re-add left door if it's opened", () => {
        const doorOpenAction = actions.toggleDoor(rooms.LEFT_DOOR, true)
        state = reducer(state, doorOpenAction);

        expect(getBuilding(state)["office"].exits.sort()).toEqual(["left door", "right door"].sort());
        expect(getBuilding(state)["left door"].exits.sort()).toEqual(["office", "left hall"].sort());
        expect(getBuilding(state)["right door"].exits.sort()).toEqual(["office", "right hall"].sort());

        expect(isDoorOpen(state, rooms.LEFT_DOOR)).toEqual(true);
        expect(isDoorOpen(state, rooms.RIGHT_DOOR)).toEqual(true);
    });
})