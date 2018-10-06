
import 'babel-polyfill';
import 'url-polyfill';
import 'url-search-params-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import App from './container/app';

import { useScroll } from 'react-router-scroll';




import configureStore from './configureStore';



import createRoutes from './route';


const initialState = {};
const store = configureStore(initialState, browserHistory);


const MOUNT_NODE = document.getElementById('root');

const rootRoute = {
  component: App,
  childRoutes: createRoutes(store),
};

require('es6-promise').polyfill();

  ReactDOM.render(
    <Provider store={store}>
        <Router
          history={browserHistory}
          routes={rootRoute}
          render={
            applyRouterMiddleware(useScroll())
          }
        />
    </Provider>,
    MOUNT_NODE,
  );
