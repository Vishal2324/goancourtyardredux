import React, {Component} from 'react';
import {connect} from 'react-redux';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class Contact extends Component {

    renderdom() {
        return(
            <div>
                <div className="aboutoverlay">
                    <div className="container" style={{textAlign:'center'}}>
                        <h1 style={{color: '#ffffff',fontSize: '4.5em'}}>Contact Us</h1>
                        <p style={{color: '#ffffff',fontSize: '1.2em',fontWeight:'500'}}>Home / Contact us</p>
                        <br/> 
                    </div>
                </div>
                <div>
                    <img src="images/contactbg.jpeg" className="contactback" alt="ContactBackground" />
                </div>
                <br/>
                <br/> 
                <div className="container-fluid">
                    <div className="row">        
                        <h1 style={{textAlign:'center',color:'rgb(0, 44, 92)',fontWeight:'600',fontSize:'3em',textTransform:'uppercase'}}></h1>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm-4">
                            <div style={{padding:'0px 60px'}}>
                                {/*<ScrollAnimation animateIn='bounceInDown' animateOut='bounceOutLeft' animateOnce={true}>*/}
                                <h1 style={{fontSize:'4em',textAlign:'center',color: '#30a077'}}>
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                </h1>
                                {/*</ScrollAnimation>*/}
                                <h2 style={{fontSize:'3em'}}>Address</h2>
                                <div className="divider">
                                    <hr style={{height: '1.5px'}} className="line1"/>
                                </div>
                                <p style={{fontSize:'1.3em',textAlign:'center'}}></p>
                            </div> 
                        </div>
                        <div className="col-sm-4">
                            <div style={{padding:'0px 60px'}}>
                                {/*<ScrollAnimation animateIn='bounceInDown' animateOut='bounceOutLeft' animateOnce={true}>*/}
                                <h1 style={{fontSize:'4em',textAlign:'center',color: '#30a077'}}>
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                </h1>
                                {/*</ScrollAnimation>*/}
                                <h2 style={{fontSize:'3em'}}>Phone</h2>
                                <div className="divider">
                                    <hr style={{height: '1.5px'}} className="line1"/>
                                </div>
                                <p style={{fontSize:'1.3em',textAlign:'center'}}></p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div style={{padding:'0px 60px'}}>
                                {/*<ScrollAnimation animateIn='bounceInDown' animateOut='bounceOutLeft' animateOnce={true}>*/}
                                <h1 style={{fontSize:'4em',textAlign:'center',color: '#30a077'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </h1>
                                {/*</ScrollAnimation>*/}
                                <h2 style={{fontSize:'3em'}}>Email</h2>
                                <div className="divider">
                                    <hr style={{height: '1.5px'}} className="line1"/>
                                </div>
                                <p style={{fontSize:'1.3em',textAlign:'center'}}></p>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        )
    }

    render() {
        // if (!this.props.home) {
        //     return (<div>Select a user...</div>);
        // }
        return (
            <div>
                {this.renderdom()}
            </div>
        );
    }
}


export default Contact;
