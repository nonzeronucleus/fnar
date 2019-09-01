import Immutable from 'immutable';
import characters from '../../../../consts/characters';
import rooms from '../../../../consts/rooms';
import getCharactersInRoom from '../getCharactersInRoom';
import checkDoorReleases from '../../../sagas/handleTick/checkDoorReleases';


it("returns characters found in room", () => {
    const characterLocations = Immutable.Map({
        [ characters.RAINBA]: rooms.LEFT_CORRIDOR,
        [ characters.MINTY] : rooms.DINING_ROOM,
        [ characters.GINGER] : rooms.FUSION_COVE,
        [ characters.MERWING ]: rooms.FUSION_COVE,
        [ characters.PORKIE ]: rooms.LEFT_CORRIDOR

    })

    const state = {
        characterLocations
    }
    expect(getCharactersInRoom(state, rooms.FUSION_COVE)).toEqual([characters.GINGER, characters.MERWING]);
});

it("returns empty array if nothing in room", () => {
    const characterLocations = Immutable.Map({
        [ characters.RAINBA]: rooms.LEFT_CORRIDOR,
        [ characters.MINTY] : rooms.DINING_ROOM,
        [ characters.GINGER] : rooms.FUSION_COVE,
        [ characters.MERWING ]: rooms.FUSION_COVE,
        [ characters.PORKIE ]: rooms.LEFT_CORRIDOR

    })

    const state = {
        characterLocations
    }
    expect(getCharactersInRoom(state, rooms.TOILET)).toEqual([]);
});
