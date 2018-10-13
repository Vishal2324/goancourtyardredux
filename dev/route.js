//import './utils/util';
import universal from 'react-universal-component';
import {injectReducer} from 'redux-injector';
import {injectSaga} from 'redux-sagas-injector';


const loadModule = cb => (componentModule) => {
	cb(null, componentModule.default);
};

export default function createRoutes(store) {

	return [
			{
				path: '/',
				name: 'home',
				getComponent(nextState, cb) {
					const importModules = Promise.all([
						import('./container/home'),
						import('./js/sagas/sagas'),
						import('./js/reducers/index')
					]);
					const renderRoute = loadModule(cb);
					importModules.then(([component, saga, reducer]) => {
						const Component = universal(
							props => {
							injectSaga('homesaga', saga);
							injectReducer('homereducer', reducer);
							return component;
						}).preload();
						console.log(Component,'component')
						renderRoute(Component);
					})
					importModules.catch(()=>{
						console.log('error ...')
					})
				}	
			}
	]
}
