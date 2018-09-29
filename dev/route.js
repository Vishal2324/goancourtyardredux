import React from 'react';
import {Router, Route, NavLink, BrowserRouter, Switch, Redirect} from "react-router-dom";
import Home from './container/home';
import Header from './container/header';
import Rooms from './container/rooms';
import SingleRoom from './container/singleroom';
import AboutUs from './container/aboutus';
import ContactUs from './container/contactus';
import MainGallery from './container/Gallery';
// import Rooms from '../containers/rooms';
// import Room from '../containers/room';
// import About from '../containers/about';
// import Contact from '../containers/contact';
// import Login from '../containers/login';
// import Header from '../containers/header';
// import MainHeader from '../containers/mainheader';
import MainForm from './container/mainform';
import Footer from './container/footer';
// import Footer from '../containers/footer';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// require('../scss/style.scss');
import './style.scss';
import Login from './container/login';

const App = () => (
	<BrowserRouter>
	    <div>
	        <Header/>
	        <Switch>
	        	<Route exact path={'/our-apartments'} component={Home}/>
				<Route exact path={'/'} component={Rooms}/>
	            <Route exact path={'/studio-apartment'} component={SingleRoom}/>
	            <Route exact path={'/2bhk-apartment'} component={SingleRoom}/>
	            <Route exact path={'/penthouse-1bhk-apartment'} component={SingleRoom}/>
	            <Route exact path={'/about-us'} component={AboutUs}/>
	            <Route exact path={'/contact-us'} component={ContactUs}/>
	            <Route exact path={'/gallery'} component={MainGallery}/>
				<Route exact path={'/login'} component={Login}/>
	        </Switch>
	        <MainForm/>
	        <Footer/>
	    </div>
    </BrowserRouter>
);

export default App;
