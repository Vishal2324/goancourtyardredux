import React, {Component} from 'react';
import {connect} from 'react-redux';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class About extends Component {
    renderdom() {
        return(
            <div>
                <div className="aboutoverlay">
                    <div className="container">
                        <h1 style={{color: '#ffffff',fontSize: '4.5em',fontWeight:700,textAlign:'center'}}>About Us</h1>
                        <p style={{textAlign:'center',color: '#ffffff',fontSize: '1.4em',fontWeight:'500'}}>Home / About us</p>
                        <br/>             
                    </div>  
                </div>
                <div>
                    <img src="images/contactbg.jpeg" className="contactback" alt="AboutBackground" />
                </div>
                <br/>
                <br/>   
                <div className="container divalignment" style={{padding:'0px 60px'}}>
                    <div className="col-sm-12">        
                        <h1 style={{textAlign:'center',color:'rgb(0, 44, 92)',fontWeight:'600',fontSize:'3em',textTransform:'uppercase'}}>ABOUT US</h1>
                    </div>
                    <div className="container-fluid">
                        <div style={{padding: '30px'}}>
                            <p style={{fontSize:'1.2em',textAlign:'justify'}}> The Courtyard Apartments affords an ideal mix of serenity and activity. The very popular Anjuna and Candolim beaches are only a few minutes’ drive away. Vagator offers ample things to do, whether it’s lazing at the beach or walking down to the Chapora jetty to buy freshly caught fish. There are several restaurant, clubs and discotheques at Little Vagator, ideal for a fun filled evening. For the more adventurous, a trek up the Chapora Fort and to the nearby rocky cliffs provide the most fantastic and breath taking views of the open bay.</p>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="container-fluid">
                    <div className="row" style={{background: 'linear-gradient(900deg, rgba(18, 80, 148, 0.52), rgba(117, 34, 34, 0.46))'}}>
                        <div className="col-sm-6" style={{padding:'30px 60px'}}>
                            <h2 style={{fontWeight: 600,textAlign:'left',fontSize:'2.5em',textTransform:'uppercase',color:'rgb(0, 44, 92)'}}>ABOUT US</h2>
                            <hr/>
                            <p style={{fontWeight:500,fontSize:'1.2em',textAlign:'justify',color:'#fff'}}>The very popular Anjuna and Candolim beaches are only a few minutes drive away.</p>
                        </div>
                        <div className="col-sm-6" style={{padding:'30px 60px'}}>
                            <h2 style={{fontWeight: 600,textAlign:'left',fontSize:'2.5em',textTransform:'uppercase',color:'rgb(0, 44, 92)'}}>WHY US</h2>
                            <hr/>
                            <p style={{fontWeight:500,fontSize:'1.2em',textAlign:'justify',color:'#fff'}}>The very popular Anjuna and Candolim beaches are only a few minutes drive away.</p>
                        </div>
                    </div>
                </div>
                <br/>
                <br/> 
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


export default About;