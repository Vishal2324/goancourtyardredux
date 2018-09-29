import React, {Component} from 'react';
import './style.css';

class AboutDivide extends Component {

    renderdom() {
        const obj = {
            header : 'About Us', 
            page : "about-us"
        }
        return (
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

export default AboutDivide;
