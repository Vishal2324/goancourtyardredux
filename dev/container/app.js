import React from 'react';
import Header from './header';
import PropTypes from 'prop-types';


import MainForm from './mainform';
import Footer from './footer';

class App extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {};
	}
  
  
	render() {
	  const path = this.props.location.pathname;
	  return (
		<div>
			<Header/>
			{React.cloneElement(this.props.children, {
				key: path,
		  	})}
			<MainForm/>
			<Footer/>
		</div>

	  );
	}
  }
  
  App.propTypes = {
	location: PropTypes.object.isRequired,
	children: PropTypes.element.isRequired,
  };
  
  
  export default App;