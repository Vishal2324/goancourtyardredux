import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {homeData} from '../actions/index';
import {Router, Route, NavLink, BrowserRouter, Switch, Redirect} from "react-router-dom";
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';

class MainHeader extends Component {

    componentDidMount() {
      this.props.homeData();
    }

    renderdom() {

        if (!this.props.home) {
          return (<div></div>);
        }

        return (
            <nav className="navbar navbar-inverse navhome" style={{marginTop:'50px'}}>
              <div className="container">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar"> 
                    <span className="icon-bar" style={{position:'inherit',backgroundColor:'#fff'}}></span> 
                    <span className="icon-bar" style={{position:'inherit',backgroundColor:'#fff'}}></span>
                    <span className="icon-bar" style={{position:'inherit',backgroundColor:'#fff'}}></span>                       
                  </button> 
                  <div className="navbar-brand" style={{marginTop:'-5px'}}>
                    <p style={{color: 'rgb(236, 238, 241)',marginLeft: '20px',fontSize: '1.2em'}}><font style={{color:'#12b595'}}><i className="fa fa-phone"></i></font>   +91-7876781241</p>
                    {/*<p style={{color: 'rgb(236, 238, 241)', marginLeft: '20px',fontSize: '1.2em'}}><font style={{color:'#66b2ff'}}><i className="fa fa-envelope"></i></font> +91-{this.state.reservationno}</p>*/}
                  </div>
                </div> 
                <div className={['collapse', 'navbar-collapse'].join(' ')} id="myNavbar">
                  <div className={['nav', 'navbar-nav','navbar-center','mainlogo'].join(' ')}>
                    <img style={{height:'65px'}} src={'https://res.cloudinary.com/' + this.props.home.admin.data.cloud_name + '/image/upload/h_100,w_219,c_fill/reputize/logo/' + this.props.home.admin.data.logo_img + '.png'} />
                  </div>
                  <ul className={['nav', 'navbar-nav', 'navbar-right'].join(' ')} style={{display: 'inline-block'}}>
                    {/*<li>
                      <div className="" style={{backgroundColor: '#fff',padding: '0px 15px'}}>
                        <img src="/" style={{height:'40px',width:'40px',backgroundColor:'#ddd',borderRadius:'50%'}} />
                        <i className="fa fa-angle-down dropdown-toggle" data-toggle="dropdown"  aria-hidden="true" style={{color:'#888',fontSize:'2em',marginLeft:'10px'}}></i>
                        <ul className="dropdown-menu">
                          <li style={{backgroundColor:'#ddd'}}>
                            <p></p>
                          </li>
                          <li><a href="#">Dashboard</a></li>
                          <li><a href="#">Log Out <i className="fa fa-sign-out" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                    </li>*/} 
                    <li><NavLink to={{pathname: '/login'}} style={{color:'#fff',fontSize:'1.5em',textTransform:'uppercase'}}>Login <i className="fa fa-sign-in" aria-hidden="true"></i></NavLink></li>
                    <li><button className="reservebtn" data-toggle="modal" data-target="#myModal">RESERVATIONS</button></li> 
                  </ul> 
                </div> 
              </div>
            </nav>
        );
    }

    render() {
        return (
            <div>
                {this.renderdom()}
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        home: state.home
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({homeData: homeData}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(MainHeader);
