import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {headerData} from '../actions/index'
import {Router, Route, NavLink, BrowserRouter, Switch, Redirect} from "react-router-dom";
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';

class Header extends Component {

    componentDidMount() {
      this.props.headerData();
    }

    renderdom() {

        if (!this.props.header) {
          return (<div></div>);
        }

        return (
            <nav className="navbar navbar-inverse navhomelink">
              <div className="container">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbarlink"> 
                    <span className="icon-bar" style={{position:'inherit',backgroundColor:'#000'}}></span> 
                    <span className="icon-bar" style={{position:'inherit',backgroundColor:'#000'}}></span>
                    <span className="icon-bar" style={{position:'inherit',backgroundColor:'#000'}}></span>                       
                  </button> 
                  <a href={'tel:7876781241'} className="btn mobileview" style={{fontSize: '2.1em',backgroundColor:'#fff',position:'absolute',left:'50%',transform: 'translatex(-50%)'}}> 
                    <i className="fa fa-phone"></i>              
                  </a> 
                  <button type="button" className="btn mobileview" style={{fontSize: '2.1em',backgroundColor:'#fff',float:'right',marginRight:'15px'}} data-toggle="modal" data-target="#myModal"> 
                    <i className="fa fa-bed"></i>               
                  </button> 
                </div> 
                <div className={['collapse', 'navbar-collapse'].join(' ')} id="myNavbarlink" style={{backgroundColor: 'rgb(31, 61, 96)'}}>
                  <ul className={['nav', 'navbar-nav','navbar-center'].join(' ')} style={{display: 'inline'}}>
                    {
                      this.props.header.header.map((head,i)=>
                        <li key={i}>
                          <NavLink id={'navid' + i} className="pagelink" to={{pathname: (head.primary_link_url == '' ? '/' : head.primary_link_url)}}>{head.primary_link}</NavLink>
                        </li>
                      ) 
                    }
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

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        header: state.header
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({headerData: headerData}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(Header);
