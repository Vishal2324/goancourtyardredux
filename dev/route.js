import { getAsyncInjectors } from './utils/asyncInjectors';


const loadModule = cb => (componentModule) => {
	cb(null, componentModule.default);
};

export default function createRoutes(store) {
	const { injectReducer, injectSagas } = getAsyncInjectors(store); 

	return [
			{
				path: '/',
				name: 'home',
				getComponent(nextState, cb) {
					const importModules = Promise.all([
						import('./container/home'),
						import('./js/sagas/sagas'),
						import('./js/reducers')
					]);
					const renderRoute = loadModule(cb);
					importModules.then(([component, sagas, reducer]) => {
						injectSagas(sagas.default);
						injectReducer('spectelsClaim', reducer.default);
						renderRoute(component);
					  });
					importModules.catch(()=>{
						console.log('error ...')
					})
				}	
			}
	]
}
