import React, {Component} from 'react';
import './style.css'

class RoomName extends Component {
    constructor() {
        super();
    }

    renderdom() {
        return (
            <div className="container"> 
                <div className="row">
                    <div id="toptop" className="container">
                        <h1 className="pull-left" style={{fontSize:'3.2em',color:'rgb(0, 44, 92)',textTransform:'uppercase'}}>{this.props.roomname.roomType}</h1>
                        <h3 className="pull-right">Start From INR <font style={{color:'#30a077',fontWeight:600,fontSize:'2em'}}>{this.props.roomname.roomPriceINR}</font> / Night</h3>
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

export default RoomName;
