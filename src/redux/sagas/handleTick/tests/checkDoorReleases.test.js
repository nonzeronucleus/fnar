import { getExpiredDoorReleases } from '../../../selectors';
import { select, put, all } from 'redux-saga/effects';
import checkDoorReleases from '../checkDoorReleases';
import * as actions from '../../../actions';



it("return immediately if there's no expired door releases", () => {
    const expiredDoorReleases = [];
    const gen = checkDoorReleases();

    expect(gen.next().value).toEqual(select(getExpiredDoorReleases));
    expect(gen.next(expiredDoorReleases).done).toEqual(true);
});

it("turns every expired door release off ", () => {
    const expiredDoorReleases = ["left door", "right door"];
    const gen = checkDoorReleases();

    expect(gen.next().value).toEqual(select(getExpiredDoorReleases));
    expect(gen.next(expiredDoorReleases).value).toEqual(
        all([
            put(actions.toggleDoorRelease({releases:"left door"})),
            put(actions.toggleDoorRelease({releases:"right door"})),
        ])
    );
});

