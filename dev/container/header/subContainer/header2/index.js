import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';

class Carousel extends Component {

    renderdom() {

        return (
            <nav className="navbar navbar-default navhomelink">
              <div className="container">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbarlink"> 
                    <span className="icon-bar" style={{position:'inherit',backgroundColor:'#000'}}></span> 
                    <span className="icon-bar" style={{position:'inherit',backgroundColor:'#000'}}></span>
                    <span className="icon-bar" style={{position:'inherit',backgroundColor:'#000'}}></span>                       
                  </button> 
                  {/* <a href={'tel:7876781241'} className="btn mobileview" style={{fontSize: '2.1em',backgroundColor:'#fff',position:'absolute',left:'50%',transform: 'translatex(-50%)'}}> 
                    <i className="fa fa-phone"></i>              
                  </a> 
                  <button type="button" className="btn mobileview" style={{fontSize: '2.1em',backgroundColor:'#fff',float:'right',marginRight:'15px'}} data-toggle="modal" data-target="#myModal"> 
                    <i className="fa fa-bed"></i>               
                  </button>  */}
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

export default Carousel;
