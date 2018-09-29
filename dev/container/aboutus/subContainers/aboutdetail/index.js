import React, {Component} from 'react';
import './style.css';

class AboutDetail extends Component {

    renderdom() {
        const obj = {
            header : 'About Us', 
            page : "about-us"
        }
        return (
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

export default AboutDetail;
