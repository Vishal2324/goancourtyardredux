import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';
import { Profile } from './subContainer';

class Carousel extends Component {

    renderdom() {

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
                    <img style={{height:'65px'}} src={'https://res.cloudinary.com/' + this.props.header.admin.cloud_name + '/image/upload/h_100,w_219,c_fill/reputize/logo/' + this.props.header.admin.logo_img + '.png'} />
                  </div>
                  <ul className={['nav', 'navbar-nav', 'navbar-right'].join(' ')} style={{display: 'inline-block'}}>
                    {/* <Profile /> */}
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

export default Carousel;
