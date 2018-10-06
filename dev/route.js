

const loadModule = cb => (componentModule) => {
	cb(null, componentModule.default);
  };

export default function createRoutes(store) {

	return [
		{
			path: '/',
			name: 'our-apartments',
			getComponent(nextState, cb) {
			  const importModules = Promise.all([
				import('./container/rooms')
			  ]);
	  
			  const renderRoute = loadModule(cb);
	  
			  importModules.then(([component]) => {
				renderRoute(component);
			  });
	  
			  importModules.catch(()=>{
				  console.log('error ...')
			  });
			},
		  },
	];
}
