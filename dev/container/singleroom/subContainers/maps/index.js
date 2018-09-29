import React, {Component} from 'react';
import './style.css';
import { compose, withProps, withHandlers, withState, withStateHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";

class RoomMap extends Component {
    constructor() {
        super();
    }

    renderdom() {
        var homelat = this.props.lat;
        var homelong = this.props.long;

        const google = window.google;

        const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");

        const API_KEY = "AIzaSyBSpBVcEmUnLMXS1wN9Mx8JcOhWvLA0kvY";

        const MyMapComponent = compose(
            withProps({
                googleMapURL: "https://maps.googleapis.com/maps/api/js?key=" + API_KEY + "&v=3.exp&libraries=geometry,drawing,places",
                loadingElement: <div style={{ height: `100%` }} />,
                containerElement: <div id="hospitalMap" style={{ height: `450px` }} />,
                mapElement: <div style={{ height: `100%` }} />,
            }),
            withStateHandlers(() => ({
                    isOpen: false,
                }), {
                onMainToggleOpen: ({ isOpen }) => () => ({
                  isOpen: !isOpen,
                }),
            }),
            withState('places', 'updatePlaces', ''),
            withState('selectedPlace', 'updateSelectedPlace', null),
            withHandlers(() => {
                const refs = {
                    map: undefined,
                }
                return {
                    onMapMounted: () => ref => {
                        refs.map = ref
                    }
                }
            }),
            withScriptjs,
            withGoogleMap,
        )((props) => {
            return (
                <GoogleMap
                    onTilesLoaded={props.fetchPlaces}
                    ref={props.onMapMounted}
                    onBoundsChanged={props.fetchPlaces}
                    defaultZoom={18}
                    defaultCenter={{ lat: homelat, lng: homelong }}
                >
                <Marker
                    position={{ lat: homelat, lng: homelong }}
                    options={{animation: google.maps.Animation.BOUNCE}}
                    onClick={props.onMainToggleOpen}
                >
                    {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
                        <p>{this.props.address}</p>
                    </InfoWindow>}
                </Marker>
            </GoogleMap>
            )
        })
        return (
            <div className=""> 
                <MyMapComponent />
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

export default RoomMap;
