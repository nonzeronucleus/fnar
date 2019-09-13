import reducer from '../state';
import * as actions from '../actions';
import rooms from '../../consts/rooms';
import {getBuilding, isDoorOpen, isDoorReleaseTriggered, getSelectedRoom, getDoorReleaseStatusForSelectedRoom} from '../selectors';
import {createSagaTestEngine} from 'redux-saga-test-engine';
import handleDoorRelease from '../sagas/handleDoorRelease';
import { getCurrentTick } from '../selectors';
import {select} from 'redux-saga/effects';
import releaseButtonStatus from '../../consts/releaseButtonStatus';


const executeSaga = (state, actualEffects ) => {
    actualEffects.forEach(effect => {
        const {action} = effect.payload;
        state = reducer(state, action)
    })

    return state;
}

describe('getting doorways' ,() =>{
    let state = reducer();

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

describe('door release' ,() =>{
    const initTick = 1;
    let state = reducer();

    it("start in the dining room" ,() => {
        expect(getSelectedRoom(state)).toEqual(rooms.DINING_ROOM)
        expect(getDoorReleaseStatusForSelectedRoom(state)).toEqual(null)
    })


    it("should move camera to fusion cove" ,() => {
        const selectAction = actions.selectRoom(rooms.FUSION_COVE)

        state = reducer(state, selectAction);

        expect(getSelectedRoom(state)).toEqual(rooms.FUSION_COVE)
        expect(getDoorReleaseStatusForSelectedRoom(state)).toEqual(releaseButtonStatus.disabled)
    })


    it("should close just the left door" ,() => {
        const doorCloseAction = actions.toggleDoor(rooms.LEFT_DOOR, false)
        state = reducer(state, doorCloseAction);

        expect(isDoorReleaseTriggered(state, rooms.LEFT_DOOR)).toEqual(false);
        expect(getDoorReleaseStatusForSelectedRoom(state)).toEqual(releaseButtonStatus.disabled)

        expect(isDoorOpen(state, rooms.LEFT_DOOR)).toEqual(false);
        expect(isDoorOpen(state, rooms.RIGHT_DOOR)).toEqual(true);
    })

    it("should open the left door when the left door release is triggered" ,() => {
        const collectEffects = createSagaTestEngine(['CALL', 'PUT']);
        const payload = {releasedDoor: rooms.LEFT_DOOR};

        const actualEffects = collectEffects(handleDoorRelease,
            [ [select(getCurrentTick), initTick] ],
            {payload}
        );

        state = executeSaga(state, actualEffects);

        expect(isDoorReleaseTriggered(state, rooms.LEFT_DOOR)).toEqual(true);
        expect(getDoorReleaseStatusForSelectedRoom(state)).toEqual(releaseButtonStatus.enabled)

        expect(isDoorOpen(state, rooms.LEFT_DOOR)).toEqual(true);
        expect(isDoorOpen(state, rooms.RIGHT_DOOR)).toEqual(true);
    });
})
