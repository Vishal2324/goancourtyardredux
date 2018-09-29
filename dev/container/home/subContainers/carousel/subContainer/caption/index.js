import React, {Component} from 'react';
import './style.css'

class Caption extends Component {

    renderdom() {
        return (
            <div className="carousel-caption" style={{right:'0%',left:'30%',textAlign:'right'}}>
                <h3>{this.props.head}</h3>
                <p className="Carosalcap">{this.props.para}</p>
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

export default Caption;
