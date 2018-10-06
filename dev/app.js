import '@babel/polyfill';
import 'promise-polyfill';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import App from './route.js';

import configureStore from  './configureStore';
import reactRoutes from './route';
// import {useScroll} from 'react-router-scroll';
require('es6-promise').polyfill();

const initialState = {};
const store = configureStore(initialState, browserHistory);
var rootroute = {component : App, childRoutes : reactRoutes(store)};

console.log(store, "store =========================")

ReactDOM.render(
	<Provider store={store}>
		{console.log(browserHistory, "browserHistory")}
		<Router history={browserHistory} routes={rootroute} render={applyRouterMiddleware()}/>
	</Provider>
	,document.getElementById('root'));





















/*// create the saga middleware
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
	,document.getElementById('root'));*/