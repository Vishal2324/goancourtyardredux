import React, {Component} from 'react';
import ReactHtmlParser from 'react-html-parser';
import './style.css';


class HospitalMap extends Component {
    constructor(){
        super();
        this.state={
            showmap : true
        }
    }
    renderdom() {
        return (
            <div id="hospital" className={['col-xs-4','col-sm-3','mapunselect'].join(' ')} style={{cursor:'pointer'}} onClick={this.props.Onclick}>
                <a style={{color:'#fff',cursor:'pointer',fontSize:'1.3em'}}><i className="fa fa-hospital-o" aria-hidden="true"></i>{ReactHtmlParser('&nbsp;')} Hospitals</a>
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


export default HospitalMap;
