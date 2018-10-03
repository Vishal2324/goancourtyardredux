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
            nearby : {place : 'hospital', icon : 'hospitals'},
            hospitalSelect : 'mapselect',
            schoolSelect : 'mapunselect',
            shoppingSelect : 'mapunselect'
        }
        this.updateMap = this.updateMap.bind(this);
    }

    updateMap(data){
        if(data.place == 'school'){
            this.setState({
                nearby : data,
                hospitalSelect : 'mapunselect',
                schoolSelect : 'mapselect',
                shoppingSelect : 'mapunselect'
            })
        }
        if(data.place == 'shopping_mall'){
            this.setState({
                nearby : data,
                hospitalSelect : 'mapunselect',
                schoolSelect : 'mapunselect',
                shoppingSelect : 'mapselect'
            })
        }
        if(data.place == 'hospital'){
            this.setState({
                nearby : data,
                hospitalSelect : 'mapselect',
                schoolSelect : 'mapunselect',
                shoppingSelect : 'mapunselect'
            })
        }
    }

    renderdom() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="container-fluid nopadding">
                        <HospitalMap class={this.state.hospitalSelect} Onclick={()=>{this.updateMap({place : 'hospital', icon : 'hospitals'})}}/>
                        <SchoolMap class={this.state.schoolSelect} Onclick={()=>{this.updateMap({place : 'school', icon : 'blue'})}}/>
                        <ShopMap class={this.state.shoppingSelect} Onclick={()=>{this.updateMap({place : 'shopping_mall', icon : 'green'})}}/>
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
