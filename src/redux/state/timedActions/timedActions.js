import { createReducer } from 'redux-act';
import * as actions from '../../actions';

export default createReducer({
  [actions.addFutureAction]: (state, {futureAction, atTick, repeatFrequency}) => {
      let newState = {...state};
      const exisitingActions = state[atTick] || [];

      newState[atTick]=[...exisitingActions,
        repeatFrequency
          ? {action:futureAction, repeatFrequency}
          : {action:futureAction}
        ]

      return newState;
  },
  [actions.tick]: (state, {tickCount}) => {
    let newState = {...state};
    const actionsAtCurrentTick = state[tickCount] || [];

    actionsAtCurrentTick.forEach(({action, repeatFrequency}) => {
      if (repeatFrequency) {
        const nextTick = tickCount + repeatFrequency;
        const exisitingActions = state[nextTick] || [];
        newState[nextTick] = [...exisitingActions, {action, repeatFrequency}]
      }
    })

    // Remove events that have passed.
    delete newState[tickCount-1];

    return newState;
  }

}, {});
