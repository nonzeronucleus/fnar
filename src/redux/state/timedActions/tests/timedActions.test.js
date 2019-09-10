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
    const expectedState = {[atTick]:[{action: futureAction}]};
    const action = actions.addFutureAction(futureAction,atTick);

    const newState = timedActions(state, action);

    expect(newState).toEqual(expectedState)
})

it('adds a new action to an existing time', () => {
    const existingAction = "Existing Action";
    const futureAction = "Future Action";
    const atTick = 23;
    const state = {[atTick]:[{action: existingAction}]};
    const action = actions.addFutureAction(futureAction,atTick);
    const expectedState = {[atTick]:[{action: existingAction}, {action:futureAction}]};

    const newState = timedActions(state, action);

    expect(newState).toEqual(expectedState)
})

it('removes events that have already happened', () => {
    const existingAction1 = "Existing Action 1";
    const atTick1 = 23;
    const existingAction2 = "Existing Action 2";
    const atTick2 = 24;
    const state = {
        [atTick1]:[{action:existingAction1}],
        [atTick2]:[{action: existingAction2}]
    };
    const action = actions.tick(atTick2);
    const expectedState = {[atTick2]:[{action:existingAction2}]};

    const newState = timedActions(state, action);

    expect(newState).toEqual(expectedState)
})

it('adds repeated events', () => {
    const state = {};
    const futureAction = "Future Action";
    const atTick = 23;
    const repeatFrequency = 5;
    const expectedState = {[atTick]:[{action: futureAction, repeatFrequency}]};
    const action = actions.addFutureAction(futureAction,atTick, repeatFrequency);

    const newState = timedActions(state, action);

    expect(newState).toEqual(expectedState)
})


describe('handling of repeated tests', () => {
    const futureAction = "Future Action";
    const atTick = 23;
    const repeatFrequency = 5;
    const state = {[atTick]:[{action: futureAction, repeatFrequency}]};
    let newState;

    it('re-adds repeated events when previous time has passed', () => {
        const expectedState = {
            [atTick]:[{action: futureAction, repeatFrequency}],
            [atTick+repeatFrequency]:[{action: futureAction, repeatFrequency}
        ]};

        const action = actions.tick(atTick);

        newState = timedActions(state, action);
        expect(newState).toEqual(expectedState)
    })

    it('then remove events when previous time has passed', () => {
        const expectedState = {
            [atTick+repeatFrequency]:[{action: futureAction, repeatFrequency}
        ]};

        const action = actions.tick(atTick+1);

        newState = timedActions(newState, action);
        expect(newState).toEqual(expectedState)
    })
})



