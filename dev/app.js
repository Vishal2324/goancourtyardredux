import '@babel/polyfill';
import 'promise-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import App from './route.js';
import {applyRouterMiddleware, Router, BrowserHistory} from 'react-router';
import configureStore from  './configureStore';
import reactRoutes from './route';
// import {useScroll} from 'react-router-scroll';

const store = configureStore(initialState, BrowserHistory);
var rootroute = {component : App, childRoutes : reactRoutes(store)};

ReactDOM.render(
	<Provider store={store}>
		<Router history={BrowserHistory} routes={rootroute} render={applyRouterMiddleware()}/>
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