import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import * as actions from './actions';
import sagas from './sagas';
import state from './state';
const sagaMiddleware = createSagaMiddleware();

export default () => {
    // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const composeEnhancers = composeWithDevTools({ actions, trace: true, traceLimit: 25 });

    const store = createStore(
        state,
        composeEnhancers(
            applyMiddleware(sagaMiddleware)
        )
    );

    sagaMiddleware.run(sagas);

    store.dispatch(actions.start())

    return store;
}
