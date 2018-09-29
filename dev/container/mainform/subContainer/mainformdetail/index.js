import React, {Component} from 'react';
import './style.css';

class FormDetail extends Component {

    constructor() {
        super();
    }   

    renderdom() {
        if (!this.props.datadetail) {
            return (<div></div>);
        }
        return (
            <div>
                <h1 style={{color:'rgb(0, 44, 92)',fontFamily:'Merriweather, serif',fontSize: '2.5em',fontWeight:'600',textTransform: 'uppercase'}}>Book Now & Get Our best rate</h1>
                <br/>
                <p style={{fontSize:'1.1em',color:'#4e4646'}}>Plan your Perfect Vacation WITH OUR HOLIDAY ADVISOR Book Now For Our Best Rate Book now to get the best choice of rooms and rates</p>
                <hr style={{borderTop:'1px solid #888'}}/> 
                <p style={{fontSize:'1.2em',textTransform:'uppercase'}}>Telephone :  +91-{this.props.datadetail.reservationNo}</p>
                <p style={{fontSize:'1.2em',textTransform:'lowercase'}}>Email :  {this.props.datadetail.center_email}</p>
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


export default FormDetail;
