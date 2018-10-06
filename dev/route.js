

const loadModule = (callback) => componentModule => {
	callback(null, componentModule.default);
}

export default function reactRoutes(store) {
	return [
		{
			//route configuration
			path : '/',
			name : 'our-apartments',
			getComponent(nextState, callback) {
				const importModule = promise.all([
					import('./container/rooms')
				]);
				const moduleRoutes = loadModule(callback);
				importModule.then( ([component])=>{
					loadModule(component);
				})
				importModule.catch((error)=>{
					console.log(error);
				})
			}	
		},
		{
			//route configuration
			path : '/our-apartments',
			name : 'our-apartments',
			getComponent(nextState, callback) {
				const importModule = promise.all([
					import('./container/rooms')
				]);
				const moduleRoutes = loadModule(callback);
				importModule.then( ([component])=>{
					loadModule(component);
				})
				importModule.catch((error)=>{
					console.log(error);
				})
			}	
		}
	];
}



{/* <Switch>
	<Route exact path={'/our-apartments'} component={Home}/>
	<Route exact path={'/'} component={Rooms}/>
	<Route exact path={'/studio-apartment'} component={SingleRoom}/>
	<Route exact path={'/2bhk-apartment'} component={SingleRoom}/>
	<Route exact path={'/penthouse-1bhk-apartment'} component={SingleRoom}/>
	<Route exact path={'/about-us'} component={AboutUs}/>
	<Route exact path={'/contact-us'} component={ContactUs}/>
	<Route exact path={'/gallery'} component={MainGallery}/>
	<Route exact path={'/login'} component={Login}/>
</Switch> */}