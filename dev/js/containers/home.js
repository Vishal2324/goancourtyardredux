import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {homeData} from '../actions/index';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import {Router, Route, NavLink, BrowserRouter, Switch, Redirect} from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';
import Slider from 'react-slick';
import "animate.css/animate.min.css";
import { compose, withProps, withHandlers, withState, withStateHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";

class Home extends Component {

    constructor() {
      super();
      this.state = {
        roomarr : [],
        showmap : true,
        showschoolmap : false,
        showmallmap : false,
        showaddmap : false
      }
      this.renderdom = this.renderdom.bind(this);
    }

    componentDidMount() {
      this.props.homeData();
    }

    renderdom() {
        var roomstemp = [];

        if (!this.props.home) {
          return (<div></div>);
        }
        
        if(this.props.home.roomcontent.length > 0){
            this.props.home.roomcontent.map((roomtype,i)=>{
                if(roomstemp.indexOf(roomtype.roomID) == -1){
                    roomstemp.push(roomtype.roomID);
                    this.state.roomarr.push(roomtype);
                }
            })
        }
        var hospitalmap = this.state.showmap ? "mapselect" : "mapunselect";
        var schoolmap = this.state.showschoolmap ? "mapselect" : "mapunselect";
        var mallmap = this.state.showmallmap ? "mapselect" : "mapunselect";
        var addmap = this.state.showaddmap ? "mapselect" : "mapunselect";

        var homelat = this.props.home.admin.lat;
        var homelong = this.props.home.admin.long;

        // var servicesettings = {
        //   dots: false,
        //   infinite: true,
        //   speed: 500,
        //   slidesToShow: 1,
        //   slidesToScroll: 1,
        //   arrows: false,
        //   autoplay:true,
        //   centerMode:false,
        //   lazyLoad:false
        // }
        const google = window.google;

        const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");

        const API_KEY = "AIzaSyBCqz_eVOYYZdf3KbB-Dp1iTSTRJZJg7cA";

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
                            type: ['hospital']
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
                          <p>{this.state.homeaddress}</p>
                      </InfoWindow>}
                   </Marker>
                    {props.places && props.places.map((place, i) =>
                        <Marker key={i} onClick={() => props.onToggleOpen(i)} options={{icon: 'http://maps.google.com/mapfiles/ms/icons/hospitals.png',scale: 5}} position={{ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }}>
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

        // const MyMapComponentSchool = compose(
        //     withProps({
        //         googleMapURL: "https://maps.googleapis.com/maps/api/js?key=" + API_KEY + "&v=3.exp&libraries=geometry,drawing,places",
        //         loadingElement: <div style={{ height: `100%` }} />,
        //         containerElement: <div id="schoolMap" style={{ height: `450px`,border:'5px solid #ddd'}} />,
        //         mapElement: <div style={{ height: `100%` }} />,
        //     }),
        //     withScriptjs,
        //     withGoogleMap,
        //     withStateHandlers(() => ({
        //       isOpen: false,
        //     }), {
        //       onMainToggleOpen: ({ isOpen }) => () => ({
        //         isOpen: !isOpen,
        //       }),
        //     }),
        //     withState('places', 'updatePlaces', ''),
        //     withState('selectedPlace', 'updateSelectedPlace', null),
        //     withHandlers(() => {
        //         const refs = {
        //             map: undefined,
        //         }

        //         return {
        //             onMapMounted: () => ref => {
        //                 refs.map = ref
        //             },
        //             fetchPlaces: ({ updatePlaces }) => () => {
        //                 let places;
        //                 const bounds = refs.map.getBounds();
        //                 const service = new google.maps.places.PlacesService(refs.map.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED);
        //                 const request = {
        //                     location: {lat: homelat, lng: homelong},
        //                     radius: 1000,
        //                     type: ['school']
        //                 };
        //                 service.nearbySearch(request, (results, status) => {
        //                     if (status == google.maps.places.PlacesServiceStatus.OK) {
        //                         console.log(results);
        //                         updatePlaces(results);
        //                     }
        //                 })
        //             },
        //             onToggleOpen: ({ updateSelectedPlace }) => key => {
        //                 updateSelectedPlace(key);
        //             }
        //         }
        //     }),
        // )((props) => {
        //     return (
        //         <GoogleMap
        //             onTilesLoaded={props.fetchPlaces}
        //             ref={props.onMapMounted}
        //             onBoundsChanged={props.fetchPlaces}
        //             defaultZoom={18}
        //             defaultCenter={{ lat: homelat, lng: homelong }}
        //         >
        //           <Marker
        //               position={{ lat: homelat, lng: homelong }}
        //               options={{animation: google.maps.Animation.BOUNCE}}
        //               onClick={props.onMainToggleOpen}
        //             >
        //               {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
        //                   <p>{this.state.homeaddress}</p>
        //               </InfoWindow>}
        //            </Marker>
        //             {props.places && props.places.map((place, i) =>
        //                 <Marker key={i} onClick={() => props.onToggleOpen(i)} options={{icon:{url: "http://maps.google.com/mapfiles/ms/icons/blue.png"},scale: 5}} position={{ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }}>
        //                  {props.selectedPlace === i && <InfoWindow onCloseClick={props.onToggleOpen}>
        //                   <div>
        //                       {props.places[props.selectedPlace].name}
        //                   </div>
        //               </InfoWindow>}
        //           </Marker>
        //             )}
        //         </GoogleMap>
        //     )
        // })

        // const MyMapComponentMall = compose(
        //     withProps({
        //         googleMapURL: "https://maps.googleapis.com/maps/api/js?key=" + API_KEY + "&v=3.exp&libraries=geometry,drawing,places",
        //         loadingElement: <div style={{ height: `100%` }} />,
        //         containerElement: <div id="mallMap" style={{ height: `450px`,border:'5px solid #ddd'}} />,
        //         mapElement: <div style={{ height: `100%` }} />,
        //     }),
        //     withScriptjs,
        //     withGoogleMap,
        //     withStateHandlers(() => ({
        //       isOpen: false,
        //     }), {
        //       onMainToggleOpen: ({ isOpen }) => () => ({
        //         isOpen: !isOpen,
        //       }),
        //     }),
        //     withState('places', 'updatePlaces', ''),
        //     withState('selectedPlace', 'updateSelectedPlace', null),
        //     withHandlers(() => {
        //         const refs = {
        //             map: undefined,
        //         }

        //         return {
        //             onMapMounted: () => ref => {
        //                 refs.map = ref
        //             },
        //             fetchPlaces: ({ updatePlaces }) => () => {
        //                 let places;
        //                 const bounds = refs.map.getBounds();
        //                 const service = new google.maps.places.PlacesService(refs.map.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED);
        //                 const request = {
        //                     location: {lat: homelat, lng: homelong},
        //                     radius: 1000,
        //                     type: ['shopping_mall']
        //                 };
        //                 service.nearbySearch(request, (results, status) => {
        //                     if (status == google.maps.places.PlacesServiceStatus.OK) {
        //                         console.log(results);
        //                         updatePlaces(results);
        //                     }
        //                 })
        //             },
        //             onToggleOpen: ({ updateSelectedPlace }) => key => {
        //                 updateSelectedPlace(key);
        //             }
        //         }
        //     }),
        // )((props) => {
        //     return (
        //         <GoogleMap
        //             onTilesLoaded={props.fetchPlaces}
        //             ref={props.onMapMounted}
        //             onBoundsChanged={props.fetchPlaces}
        //             defaultZoom={18}
        //             defaultCenter={{ lat: homelat, lng: homelong }}
        //         >
        //           <Marker
        //               position={{ lat: homelat, lng: homelong }}
        //               options={{animation: google.maps.Animation.BOUNCE}}
        //               onClick={props.onMainToggleOpen}
        //             >
        //               {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
        //                   <p>{this.state.homeaddress}</p>
        //               </InfoWindow>}
        //            </Marker>
        //             {props.places && props.places.map((place, i) =>
        //                 <Marker key={i} onClick={() => props.onToggleOpen(i)} options={{icon: 'http://maps.google.com/mapfiles/ms/icons/green.png',scale: 5}} position={{ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }}>
        //                  {props.selectedPlace === i && <InfoWindow onCloseClick={props.onToggleOpen}>
        //                   <div>
        //                       {props.places[props.selectedPlace].name}
        //                   </div>
        //               </InfoWindow>}
        //           </Marker>
        //             )}
        //         </GoogleMap>
        //     )
        // })

        return (
            <div>
                <div id="myCarousel" className={['carousel', 'slide'].join(' ')} data-ride="carousel">
                    <div className="carousel-inner carheight">
                        {
                            this.props.home.homeslider.map((imagepath,i)=>
                                <div className={['item', (i === 0 ? 'active' : '')].join(' ')} key={i}>
                                    <img src={'http://res.cloudinary.com/' + this.props.home.admin.data.cloud_name + '/image/upload/h_750,w_1500,c_fill/reputize/homepage-slider/' + imagepath.hsimg + '.jpg'} className="carimage" alt="Los Angeles" style={{width:'100%'}} />
                                    <div className={['carousel-caption',((imagepath.hshead1 == '' && imagepath.hshead2 == '') ? 'hide' : '')].join(' ')} key={i} style={{right:'0%',left:'30%',textAlign:'right'}}>
                                        <h3>{imagepath.hshead1}</h3>
                                        <p className="Carosalcap">{imagepath.hshead2}</p>
                                    </div>
                                </div> 
                            )
                        }
                    </div>
                    <a className={['left', 'carousel-control'].join(' ')} href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className={['right', 'carousel-control'].join(' ')} href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6" style={{minHeight:'500px',boxShadow:'rgb(153, 153, 153) 3px 2px 6px',backgroundColor: 'rgba(0, 122, 255, 0.07)'}}>
                            <div className="mainpara">
                                <br/>
                                <br/>
                                <ScrollAnimation animateIn='slideInUp' animateOnce={true}>
                                    <h1 style={{color:'#002c5c',fontSize: '3em',fontWeight:'600',textTransform:'uppercase'}}>{this.props.home.homecontent.h1tag}</h1>
                                </ScrollAnimation>
                                <br/>
                                <br/>
                                <div>
                                    <ScrollAnimation animateIn='slideInUp' animateOnce={true}>
                                        <span className="webview" style={{fontSize:'1.2em',textAlign:'justify'}}>{ReactHtmlParser(this.props.home.homecontent.H1Content)}</span>
                                    </ScrollAnimation>
                                    <span className="mobileview" style={{fontSize:'1.2em',textAlign:'justify'}}>
                                    </span> 
                                </div>
                                <br/>
                            </div>
                        </div>
                        <div className="col-sm-6" style={{minHeight:'500px',boxShadow:'rgb(153, 153, 153) 3px 2px 6px',backgroundColor: 'rgb(31, 61, 96)'}}>
                            <br/>
                            <div style={{padding:'0px 50px'}}>
                                <div className="row">
                                    <div className="col-sm-6 icondivpad">
                                        <div style={{minHeight:'100px',padding: '5%'}}>
                                            <ScrollAnimation animateIn='slideInUp' animateOnce={true}>
                                                <i style={{fontSize: '4em',color:'rgb(18, 181, 149)'}} className={['fa', 'fa-thumbs-up'].join(' ')}></i>
                                            </ScrollAnimation>
                                            <br/>   
                                            <ScrollAnimation animateIn='slideInUp' animateOnce={true}>                      
                                                <p style={{fontSize:'1.2em',color:'#fff',textTransform:'uppercase'}}>{this.props.home.homecontent.subhead1}</p>
                                            </ScrollAnimation>
                                        </div> 
                                    </div>
                                    <div className="col-sm-6 icondivpad">
                                        <div style={{minHeight:'100px',padding: '5%'}}>
                                            <ScrollAnimation animateIn='slideInUp' animateOnce={true}>
                                                <i className="material-icons" style={{fontSize: '4em',color:'rgb(18, 181, 149)'}}>&#xe55f;</i>
                                            </ScrollAnimation>
                                            <br/>
                                            <ScrollAnimation animateIn='slideInUp' animateOnce={true}>
                                                <p style={{fontSize:'1.2em',color:'#fff',textTransform:'uppercase'}}>{this.props.home.homecontent.subhead2}</p>
                                            </ScrollAnimation>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-sm-6 icondivpad">
                                        <div style={{minHeight:'100px',padding: '5%'}}>
                                            <ScrollAnimation animateIn='slideInUp' animateOnce={true}>
                                                <i className={['fa', 'fa-cutlery'].join(' ')} style={{fontSize: '4em',color:'rgb(18, 181, 149)'}}></i>
                                            </ScrollAnimation>
                                            <br/>
                                            <ScrollAnimation animateIn='slideInUp' animateOnce={true}>
                                                <p style={{fontSize:'1.2em',color:'#fff',textTransform:'uppercase'}}>{this.props.home.homecontent.subhead3}</p>
                                            </ScrollAnimation>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 icondivpad">
                                        <div style={{minHeight:'100px',padding: '5%'}}>
                                            <ScrollAnimation animateIn='slideInUp' animateOnce={true}>
                                                <i style={{fontSize: '4em',color:'rgb(18, 181, 149)'}} className={['fa', 'fa-building-o'].join(' ')}></i>
                                            </ScrollAnimation>
                                            <br/>
                                            <ScrollAnimation animateIn='slideInUp' animateOnce={true}>
                                                <p style={{fontSize:'1.2em',color:'#fff',textTransform:'uppercase'}}>{this.props.home.homecontent.subhead4}</p>
                                            </ScrollAnimation>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="container webview">
                    <h1 style={{textAlign:'center',textTransform:'uppercase',fontSize:'3em',fontWeight:'600',color:'#002c5c'}}>{this.props.home.homecontent.aptgalleryhead}</h1>
                    <div class="row">
                        {
                            this.state.roomarr.map((roomtype,i)=>
                                <NavLink style={{cursor: 'pointer'}} to={{pathname : roomtype.room_url}} key={i}>
                                    <div class="col-sm-6">
                                        <br/>
                                        <br/>
                                        <img className="roomimgopa" style={{width:'100%',height:'450px'}} src={'http://res.cloudinary.com/' + this.props.home.admin.data.cloud_name + '/image/upload/w_545,h_450,c_fill/reputize/room/' + roomtype.imageURL}/>
                                        <div style={{minHeight:'110px',width:'70%',backgroundColor:'#fff',boxShadow:'rgb(153, 153, 153) 3px 2px 6px',right:'0',marginTop:'-125px',position:'absolute'}}>
                                            <div style={{padding:'10px 30px'}}>
                                                <h3 style={{color:'rgb(10, 50, 93)',fontSize: '2.2em',textTransform:'uppercase',textAlign:'left'}}>{roomtype.roomType}</h3>
                                                <p style={{color:'#000',fontSize: '1.2em',textTransform:'uppercase',textAlign:'left'}}>INR <font style={{fontSize:'1.7em'}}>{roomtype.roomPriceINR}</font> / Night</p>
                                            </div>
                                            <button class="btn newbookroombtn pull-right">BOOK NOW</button> 
                                        </div>
                                        <br/>
                                    </div>
                                </NavLink>
                            )
                        }
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/> 
                <div className="container-fluid webview">
                    <h1 style={{textAlign:'center',textTransform:'uppercase',fontSize:'3em',fontWeight:'600',color:'#002c5c'}}>{this.props.home.homecontent.splheadmain}</h1>
                    <br/>
                    <div className="row" style={{height:'5px',backgroundColor:'rgba(0, 44, 92, 0.82)'}}>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 servediv">
                            <div className="serviceimgopacity">
                                <div className="servicemove">
                                    <p className="serviceh" style={{fontSize:'2.5em', textAlign:'left',fontFamily: 'DINlight'}}>{this.props.home.homecontent.splheadcorporate}</p>
                                    <p className="servicep" style={{fontSize:'1.2em', textAlign:'left'}}>{this.props.home.homecontent.splheadcorporatecontent}</p>
                                    <a href="#"><button className="btn btn-default servicebtnmove">READ MORE</button></a>
                                </div>
                            </div>
                            <img className="servedivimg" src={'http://res.cloudinary.com/' + this.props.home.admin.data.cloud_name + '/image/upload/w_600,h_350,c_fill/reputize/team_members/' + this.props.home.homecontent.image2} alt="Los Angeles"/>
                        </div> 
                        <div className="col-sm-4 servediv">
                            <div className="serviceimgopacity">
                                <div className="servicemove">
                                    <p className="serviceh" style={{fontSize:'2.5em', fontFamily: 'DINlight'}}>{this.props.home.homecontent.splheadgoa}</p>
                                    <p className="servicep" style={{fontSize:'1.2em', textAlign:'left'}}>{this.props.home.homecontent.splheadgoacontent}</p>
                                    <a href="#"><button className="btn btn-default servicebtnmove">READ MORE</button></a>
                                </div>
                            </div>
                            <img className="servedivimg" src={'http://res.cloudinary.com/' + this.props.home.admin.data.cloud_name + '/image/upload/w_600,h_350,c_fill/reputize/team_members/' + this.props.home.homecontent.image3} alt="Los Angeles"/>
                        </div>
                        <div className="col-sm-4 servediv">
                            <div className="serviceimgopacity">
                                <div className="servicemove">
                                    <p className="serviceh" style={{fontSize:'2.5em', fontFamily: 'DINlight'}}>{this.props.home.homecontent.splheadjp}</p>
                                    <p className="servicep" style={{fontSize:'1.2em', textAlign:'left'}}>{this.props.home.homecontent.splheadjpcontent}</p>
                                    <a href=""><button className="btn btn-default servicebtnmove">READ MORE</button></a>
                                </div>
                            </div>
                            <img className="servedivimg" src={'http://res.cloudinary.com/' + this.props.home.admin.data.cloud_name + '/image/upload/w_600,h_350,c_fill/reputize/team_members/' + this.props.home.homecontent.image4} alt="Los Angeles"/>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="container-fluid">
                    {/*<Lightbox images={photos}
                        onClose={this.closeLightbox}
                        onClickPrev={this.gotoPrevious}
                        onClickNext={this.gotoNext}
                        currentImage={this.state.currentImage}
                        isOpen={this.state.lightboxIsOpen} />*/}
                    <h1 style={{textAlign:'center',textTransform:'uppercase',fontSize:'3em',fontWeight:'600',color:'#002c5c'}}>{this.props.home.homecontent.content1}</h1>
                    <div style={{padding:'0px 15px'}}>
                        {/*<ScrollAnimation animateIn='bounceInLeft' animateOnce={true}>*/}
                            <div className="col-sm-6 insidepara" style={{backgroundColor:'rgb(237, 246, 255)',boxShadow:'rgb(153, 153, 153) 3px 2px 6px',border:'5px solid #002c5e21', minHeight:'400px',marginTop:'40px',padding: '20px 80px'}}>
                                <h1 style={{color:'#002c5c',fontSize: '2.8em',fontWeight: '600',textTransform: 'uppercase'}}>{this.props.home.homecontent.content1}</h1>
                                <br/>
                                <span style={{fontSize:'1.1em',textAlign:'justify',color:'#000'}}>{ReactHtmlParser(this.props.home.homecontent.awardcontent)}</span>
                            </div>
                        {/*</ScrollAnimation>*/}
                        {/*<ScrollAnimation animateIn='bounceInRight' animateOnce={true}>*/}
                            <div className="col-sm-6" style={{backgroundColor:'#fff',minHeight:'400px',padding:'0px'}}>
                                <div className="videooverlay">
                                    <div className="pull-right" style={{height:'70px',width:'70px',backgroundColor: '#002c5cd1',padding:'13px 17px',cursor:'pointer'}}> 
                                        <i className="fa fa-play" style={{textAlign:'center',fontSize:'3em',color:'#fff'}} data-toggle="modal" data-target="#videoModal"></i>
                                    </div>
                                    <div className="pull-right" style={{height:'70px',width:'70px',backgroundColor: '#002c5cd1',padding:'13px 17px',marginRight:'2px',cursor:'pointer'}}>
                                        <i className="fa fa-file-image-o" style={{textAlign:'center',fontSize:'3em',color:'#fff'}} aria-hidden="true"></i>
                                    </div>
                                </div>
                                <img className="videomargin" style={{width:'100%',height:'400px'}} alt="img" src="http://res.cloudinary.com/the-perch/image/upload/h_750,w_1500,c_fill/reputize/homepage-slider/2017-07-11_17-12-00.jpg"></img>
                                {/*<iframe className="iframesize" src={this.state.homearr.videourl}>
                                </iframe>*/}
                            </div>
                        {/*</ScrollAnimation>*/}
                    </div>
                </div>
                <br/>
                <br/>
                <div className="container-fluid">
                    <div className="row">
                        <h1 style={{textAlign:'center',fontSize:'3em',fontWeight:'600',color:'#002c5c',textTransform:'uppercase'}}>The Perfect LOCATION</h1>
                        <div className="mobileview">
                            <p style={{fontSize:'1.4em',textAlign:'left',padding:'0px 30px'}}></p>
                        </div>
                        <br/>
                        <div className="container-fluid">
                            <div className="container-fluid nopadding">
                                <div id="hospital" className={['col-xs-4','col-sm-3',(hospitalmap)].join(' ')} onClick={()=>{this.setState({showmap : true, showschoolmap : false,showmallmap : false})}} style={{cursor:'pointer'}}>
                                    <a style={{color:'#fff',cursor:'pointer',fontSize:'1.3em'}}><i className="fa fa-hospital-o" aria-hidden="true"></i>{ReactHtmlParser('&nbsp;')} Hospitals</a>
                                </div>
                                <div id="school" className={['col-xs-4','col-sm-3',(schoolmap)].join(' ')} onClick={()=>{this.setState({showmap : false, showschoolmap : true,showmallmap : false})}} style={{cursor:'pointer'}}>
                                    <a style={{color:'#fff',cursor:'pointer',fontSize:'1.3em'}}><i className="fa fa-university" aria-hidden="true"></i>{ReactHtmlParser('&nbsp;')}  Schools</a>
                                </div>
                                <div id="mall" className={['col-xs-4','col-sm-3',(mallmap)].join(' ')} onClick={()=>{this.setState({showmap : false, showschoolmap : false,showmallmap : true})}} style={{cursor:'pointer'}}>
                                    <a style={{color:'#fff',cursor:'pointer',fontSize:'1.3em'}}><i className="fa fa-shopping-bag"></i>{ReactHtmlParser('&nbsp;')} Shopping</a>
                                </div>
                                <div id="attract" className={['webview','col-sm-3',(addmap)].join(' ')} onClick={()=>{this.setState({showaddmap : !this.state.showaddmap})}} style={{cursor:'pointer'}}>
                                    <a style={{color:'#fff',cursor:'pointer',fontSize:'1.3em'}}><i className="fa fa-fire" aria-hidden="true"></i>{ReactHtmlParser('&nbsp;')} ATTRACTIONS</a>
                                </div>
                            </div>
                            <div className="nearattract">
                                <p style={{color:'#fff',fontSize:'1.2em'}}></p>
                            </div>
                            {this.state.showmap && <MyMapComponent />}
                            {/*{this.state.showschoolmap && <MyMapComponentSchool />}
                            {this.state.showmallmap && <MyMapComponentMall />}*/}
                        </div>
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

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        home: state.home
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({homeData: homeData}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(Home);
