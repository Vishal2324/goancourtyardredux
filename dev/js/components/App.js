import React from 'react';
import {Router, Route, NavLink, BrowserRouter, Switch, Redirect} from "react-router-dom";
import Home from '../containers/home';
import Rooms from '../containers/rooms';
import Room from '../containers/room';
import About from '../containers/about';
import Contact from '../containers/contact';
import Login from '../containers/login';
import Header from '../containers/header';
import MainHeader from '../containers/mainheader';
import MainForm from '../containers/mainform';
import Footer from '../containers/footer';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
require('../../scss/style.scss');

const App = () => (
	<BrowserRouter>
	    <div>
	    	<MainHeader />
	        <Header />
	        <Switch>
	        	<Route exact path={'/'} component={Home}/>
	            <Route exact path={'/our-apartments'} component={Rooms}/>
	            <Route exact path={'/studio-apartment'} component={Room}/>
	            <Route exact path={'/2bhk-apartment'} component={Room}/>
	            <Route exact path={'/penthouse-1bhk-apartment'} component={Room}/>
	            <Route exact path={'/about-us'} component={About}/>
	            <Route exact path={'/contact-us'} component={Contact}/>
	            <Route exact path={'/login'} component={Login}/>
	        </Switch>
	        <MainForm />
	        <Footer />
	    </div>
    </BrowserRouter>
);

export default App;
