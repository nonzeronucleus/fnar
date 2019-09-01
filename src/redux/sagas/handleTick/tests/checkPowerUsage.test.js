import { getPowerUsage, getPower } from '../../../selectors';
import {checkCurrentPowerUsage, checkAvailablePower} from '../checkPowerUsage';
import { select, put } from 'redux-saga/effects';
import * as actions from '../../../actions';

describe('checkCurrentPowerUsage', () => {
    it("should trigger a request to deplete power if any is being used", () =>{
        const gen = checkCurrentPowerUsage();
        const powerUsage = 4;

        expect(gen.next().value).toEqual(select(getPowerUsage));
        expect(gen.next(powerUsage).value).toEqual(put(actions.usePower(powerUsage)));
    })

    it("should not trigger a request to deplete power if none is being used", () =>{
        const gen = checkCurrentPowerUsage();
        const powerUsage = 0;

        expect(gen.next().value).toEqual(select(getPowerUsage));
        expect(gen.next(powerUsage).done).toEqual(true);
    })
});

describe('checkAvailablePower', () => {
    it("should trigger a request to disable power if none is left", () =>{
        const gen = checkAvailablePower();
        const availablePower = 0;

        expect(gen.next().value).toEqual(select(getPower));
        expect(gen.next(availablePower).value).toEqual(put(actions.disablePower()));
    })

    it("should not trigger a request to deplete power if none is being used", () =>{
        const gen = checkAvailablePower();
        const availablePower = 10;

        expect(gen.next().value).toEqual(select(getPower));
        expect(gen.next(availablePower).done).toEqual(true);
    })
});
