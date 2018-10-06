import { createStore, applyMiddleware, compose } from 'redux';
import {routerMiddleware} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducer';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}, history) {


    const middlewares = [
        sagaMiddleware,
        routerMiddleware(history),
      ];

    const enhancers = [
        applyMiddleware(...middlewares),
      ];

    const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // TODO: Try to remove when `react-router-redux` is out of beta, LOCATION_CHANGE should not be fired more than once after hot reloading
          // Prevent recomputing reducers for `replaceReducer`
          shouldHotReload: false,
        })
      : compose;

        const store = createStore(
            createReducer(),
            initialState,
            composeEnhancers(...enhancers),
        );


        store.runSaga = sagaMiddleware.run;
        store.injectedReducer = {};
        store.asyncReducers = {};
        store.injectedSagas = {};

    return store; 
}





