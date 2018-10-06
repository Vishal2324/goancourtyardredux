import { createStore, applyMiddleware, compose } from 'redux';
import {routerMiddleware} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducer';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}, history) {

    const middleware = [sagaMiddleware, routerMiddleware(history)];

    const enhancer = applyMiddleware(...middleware);

    const composeEnhancer = (process.env.NODE_ENV === 'production' && typeof window === 'object' &&

        (window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__({shouldHotReload : false}) : compose)
    );  

const store = createStore(
  createReducer(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
    // const store = createStore(createReducer(),  window.__REDUX_DEVTOOLS_EXTENSION__());

    store.runSaga = sagaMiddleware.run;
    store.injectedReducer = {};
    store.asyncReducers = {};
    store.injectedSagas = {};

    return store; 
}





