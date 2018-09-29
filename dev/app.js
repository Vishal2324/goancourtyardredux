import '@babel/polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import allReducers from './js/reducers';
import App from './route.js';
import mySaga from './js/sagas/sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// initial store setup
const configureStore = (initialState) => {
  const enhancers = applyMiddleware(sagaMiddleware, logger);
  return createStore(allReducers, initialState, enhancers);
};
// create store
const store = configureStore({});

sagaMiddleware.run(mySaga);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	,document.getElementById('root'));