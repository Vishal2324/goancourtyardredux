import React, {Component} from 'react';
import { compose, withProps, withHandlers, withState, withStateHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import ReactHtmlParser from 'react-html-parser';
import {MapAttraction, HospitalMap, SchoolMap, ShopMap, MapHome} from './subContainer';
import './style.css';


class HomeMap extends Component {
    constructor(){
        super();
        this.state = {
            nearby : {place : 'hospital', icon : 'hospitals'}
        }
        this.updateMap = this.updateMap.bind(this);
    }

    updateMap(data){
        this.setState({nearby : data})
    }

    renderdom() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="container-fluid nopadding">
                        <HospitalMap Onclick={()=>{this.updateMap({place : 'hospital', icon : 'hospitals'})}}/>
                        <SchoolMap Onclick={()=>{this.updateMap({place : 'school', icon : 'blue'})}}/>
                        <ShopMap Onclick={()=>{this.updateMap({place : 'shopping_mall', icon : 'green'})}}/>
                        <MapAttraction/>
                    </div>
                    <div className="nearattract">
                        <p style={{color:'#fff',fontSize:'1.2em'}}></p>
                    </div>
                    <MapHome place={this.state.nearby}/>
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


export default HomeMap;
