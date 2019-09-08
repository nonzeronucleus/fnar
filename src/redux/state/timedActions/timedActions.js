import { createReducer } from 'redux-act';
import * as actions from '../../actions';

export default createReducer({
  [actions.addFutureAction]: (state, {futureAction, atTick}) => {
      let newState = {...state};
      const exisitingActions = state[atTick] || [];

      newState[atTick]=[...exisitingActions, futureAction]

      return newState;
  },
  [actions.tick]: (state, {tickCount}) => {
    let newState = {...state};

    delete newState[tickCount-1];

    return newState;
  }

}, {});
