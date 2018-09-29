import React, {Component} from 'react';
import { compose, withProps, withHandlers, withState, withStateHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import ReactHtmlParser from 'react-html-parser';


class ShopMap extends Component {
    constructor(){
        super();
        this.state={
            showmap : true
        }
    }
    renderdom() {
        return (
            <div id="shooping" className={['col-xs-4','col-sm-3','mapunselect'].join(' ')} style={{cursor:'pointer'}} onClick={this.props.Onclick}>
                <a style={{color:'#fff',cursor:'pointer',fontSize:'1.3em'}}><i className="fa fa-shopping-bag"></i>{ReactHtmlParser('&nbsp;')} Shopping</a>
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


export default ShopMap;
