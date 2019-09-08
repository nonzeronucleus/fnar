import * as actions from '../../../actions';
import timedActions from '../timedActions'


it('starts with an empty object', () => {
    const state = {};

    const newState = timedActions(state);

    expect(newState).toEqual({})
})


it('adds a new action to a new time', () => {
    const state = {};
    const futureAction = "Future Action";
    const atTick = 23;
    const expectedState = {[atTick]:[futureAction]};
    const action = actions.addFutureAction(futureAction,atTick);

    const newState = timedActions(state, action);

    expect(newState).toEqual(expectedState)
})

it('adds a new action to an existing time', () => {
    const existingAction = "Existing Action";
    const futureAction = "Future Action";
    const atTick = 23;
    const state = {[atTick]:[existingAction]};
    const action = actions.addFutureAction(futureAction,atTick);
    const expectedState = {[atTick]:[existingAction, futureAction]};

    const newState = timedActions(state, action);

    expect(newState).toEqual(expectedState)
})

it('removes events that have already happened', () => {
    const existingAction1 = "Existing Action 1";
    const atTick1 = 23;
    const existingAction2 = "Existing Action 2";
    const atTick2 = 24;
    const state = {
        [atTick1]:[existingAction1],
        [atTick2]:[existingAction2]
    };
    const action = actions.tick(atTick2);
    const expectedState = {[atTick2]:[existingAction2]};

    const newState = timedActions(state, action);

    expect(newState).toEqual(expectedState)
})

