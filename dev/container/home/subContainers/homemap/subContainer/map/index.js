import React, {Component} from 'react';
import { compose, withProps, withHandlers, withState, withStateHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import ReactHtmlParser from 'react-html-parser';


class MapHome extends Component {
    constructor(){
        super();
        this.state={
            showmap : true
        }
    }
    renderdom() {
        var homelat = 15.599022;
        var homelong = 73.745947;

        const google = window.google;

        const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");

        const API_KEY = "AIzaSyBSpBVcEmUnLMXS1wN9Mx8JcOhWvLA0kvY";

        const MyMapComponent = compose(
            withProps({
                googleMapURL: "https://maps.googleapis.com/maps/api/js?key=" + API_KEY + "&v=3.exp&libraries=geometry,drawing,places",
                loadingElement: <div style={{ height: `100%` }} />,
                containerElement: <div id="hospitalMap" style={{ height: `450px`,border:'5px solid #ddd'}} />,
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
                    },
                    fetchPlaces: ({ updatePlaces }) => () => {
                        let places;
                        const bounds = refs.map.getBounds();
                        const service = new google.maps.places.PlacesService(refs.map.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED);
                        const request = {
                            location: {lat: homelat, lng: homelong},
                            radius: 1000,
                            type: [this.props.place.place]
                        };
                        service.nearbySearch(request, (results, status) => {
                            if (status == google.maps.places.PlacesServiceStatus.OK) {
                                console.log(results);
                                updatePlaces(results);
                            }
                        })
                    },
                    onToggleOpen: ({ updateSelectedPlace }) => key => {
                        updateSelectedPlace(key);
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
                          {/* <p>{this.state.homeaddress}</p> */}
                      </InfoWindow>}
                   </Marker>
                    {props.places && props.places.map((place, i) =>
                        <Marker key={i} onClick={() => props.onToggleOpen(i)} options={{icon: 'http://maps.google.com/mapfiles/ms/icons/'+(this.props.place.icon)+'.png',scale: 5}} position={{ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }}>
                         {props.selectedPlace === i && <InfoWindow onCloseClick={props.onToggleOpen}>
                          <div>
                              {props.places[props.selectedPlace].name}
                          </div>
                      </InfoWindow>}
                  </Marker>
                    )}
                </GoogleMap>
            )
        })
        return (
            <div>{this.state.showmap && <MyMapComponent />}</div>
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


export default MapHome;
