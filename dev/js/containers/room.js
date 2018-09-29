import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {homeData} from '../actions/index';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import {Router, Route, NavLink, BrowserRouter, Switch, Redirect} from "react-router-dom";
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
//import { compose, withProps, withHandlers, withState, withStateHandlers } from "recompose";
//import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/libphonenumber.js';
import 'react-intl-tel-input/dist/main.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import Button from 'react-bootstrap-button-loader';

class Room extends Component {

    constructor() {
        super();
        this.state = {
            singleroomdata : {},
            roomimages : [],
            currentImage: 0,
            similarroom : []
        }
        this.renderdom = this.renderdom.bind(this);
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
    }

    openLightbox(event, obj) {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
    }

    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }

    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }

    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }

    componentDidMount() {
        var roomurl = document.URL.split('/')[3];
        var roomdata = [];
        var similarroomdata = [];
        var similartemp = [];
        roomdata = this.props.home.roomcontent.filter(item => item.room_url == roomurl);
        similarroomdata = this.props.home.roomcontent.filter(item => item.room_url != roomurl);
        var roomamenity = [];
        // roomdata[0].amenitypng = [];
        // roomamenity = roomdata[0].roomAmenties.split('^');
        // for(var l=0;l<roomamenity.length;l++){
        //     if(roomamenity[l] == "Wifi"){
        //         roomdata[0].amenitypng.push({img : 'wifi.png' , tooltip : roomamenity[l]});
        //     }
        //     if(roomamenity[l] == "In Apartment Kitchen"){
        //         roomdata[0].amenitypng.push({img : 'kitchen.png' , tooltip : roomamenity[l]});
        //     }
        //     if(roomamenity[l] == "Room Service"){
        //         roomdata[0].amenitypng.push({img : 'roomservice.png' , tooltip : roomamenity[l]});
        //     }
        //     if(roomamenity[l] == "24x7 Security"){
        //         roomdata[0].amenitypng.push({img : 'security.png' , tooltip : roomamenity[l]});
        //     }
        //     if(roomamenity[l] == "24x7 Reception"){
        //         roomdata[0].amenitypng.push({img : 'reception.png' , tooltip : roomamenity[l]});
        //     }
        //     if(roomamenity[l] == "Gym"){
        //         roomdata[0].amenitypng.push({img : 'gym.png' , tooltip : roomamenity[l]});
        //     }
        //     if(roomamenity[l] == "Free Breakfast"){
        //         roomdata[0].amenitypng.push({img : 'breakfast.png' , tooltip : roomamenity[l]});
        //     }
        //     if(roomamenity[l] == "Swimming Pool"){
        //         roomdata[0].amenitypng.push({img : 'swim.png' , tooltip : roomamenity[l]});
        //     }
        //     if(roomamenity[l] == "Free Meals"){
        //         roomdata[0].amenitypng.push({img : 'food.png' , tooltip : roomamenity[l]});
        //     }
        // }

        this.setState({
            singleroomdata : roomdata[0],
            roomimages : roomdata
        });

        for(var i = 0; i < similarroomdata.length; i++){
            if(similartemp.indexOf(similarroomdata[i].roomID) == -1){
                this.state.similarroom.push(similarroomdata[i]);
                similartemp.push(similarroomdata[i].roomID);
            }
        }
    }

    renderdom() {
        const loadJSONP = (url, callback) => {
            const ref = window.document.getElementsByTagName('script')[0];
            const script = window.document.createElement('script');
            script.src = `${url + (url.indexOf('?') + 1 ? '&' : '?')}callback=${callback}`;
            ref.parentNode.insertBefore(script, ref);
            script.onload = () => {
                script.remove();
            };
        };

        const lookup = (callback) => {
            loadJSONP('http://ipinfo.io', 'sendBack');
            window.sendBack = (resp) => {
                const countryCode = (resp && resp.country) ? resp.country : '';
                callback(countryCode);
            }
        };
        const phoneHandler = function (status, value, countryData, number, id) {
            console.log(status, value, countryData, number, id);
        };

        var photos = [];

        if (!this.props.home) {
            return (<div></div>);
        }

        if(this.state.roomimages.length > 0){
            this.state.roomimages.map((roomtype,i)=>
                {
                    var tempobj = {};
                    tempobj.src = 'http://res.cloudinary.com/' + this.props.home.admin.data.cloud_name + '/image/upload/w_956,h_475,c_fill/reputize/room/' + roomtype.imageURL + '.jpg';
                    tempobj.width = 15;
                    tempobj.height = 10;
                    photos.push(tempobj);
                }
            )   
        }

        if(this.state.similarroom.length > 0){
            this.state.similarroom.map((icon,k)=>
                {
                    var roomamenity = [];
                    icon.amenitypng = [];
                    roomamenity = icon.roomAmenties.split('^');
                    for(var l=0;l<roomamenity.length;l++){
                        if(roomamenity[l] == "Wifi"){
                          icon.amenitypng.push({img : 'wifi.png' , tooltip : roomamenity[l]});
                        }
                        if(roomamenity[l] == "In Apartment Kitchen"){
                            icon.amenitypng.push({img : 'kitchen.png' , tooltip : roomamenity[l]});
                        }
                        if(roomamenity[l] == "Room Service"){
                            icon.amenitypng.push({img : 'roomservice.png' , tooltip : roomamenity[l]});
                        }
                        if(roomamenity[l] == "24x7 Security"){
                            icon.amenitypng.push({img : 'security.png' , tooltip : roomamenity[l]});
                        }
                        if(roomamenity[l] == "24x7 Reception"){
                            icon.amenitypng.push({img : 'reception.png' , tooltip : roomamenity[l]});
                        }
                        if(roomamenity[l] == "Gym"){
                            icon.amenitypng.push({img : 'gym.png' , tooltip : roomamenity[l]});
                        }
                        if(roomamenity[l] == "Free Breakfast"){
                            icon.amenitypng.push({img : 'breakfast.png' , tooltip : roomamenity[l]});
                        }
                        if(roomamenity[l] == "Swimming Pool"){
                            icon.amenitypng.push({img : 'swim.png' , tooltip : roomamenity[l]});
                        }
                        if(roomamenity[l] == "Free Meals"){
                            icon.amenitypng.push({img : 'food.png' , tooltip : roomamenity[l]});
                        }
                    }
                }
            )
        }

        var homelat = this.props.home.admin.lat;
        var homelong = this.props.home.admin.long;

        // const google = window.google;

        // const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");

        // const API_KEY = "AIzaSyBCqz_eVOYYZdf3KbB-Dp1iTSTRJZJg7cA";

        // const MyMapComponent = compose(
        //     withProps({
        //         googleMapURL: "https://maps.googleapis.com/maps/api/js?key=" + API_KEY + "&v=3.exp&libraries=geometry,drawing,places",
        //         loadingElement: <div style={{ height: `100%` }} />,
        //         containerElement: <div id="hospitalMap" style={{ height: `450px` }} />,
        //         mapElement: <div style={{ height: `100%` }} />,
        //     }),
        //     withStateHandlers(() => ({
        //             isOpen: false,
        //         }), {
        //         onMainToggleOpen: ({ isOpen }) => () => ({
        //           isOpen: !isOpen,
        //         }),
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
        //             }
        //         }
        //     }),
        //     withScriptjs,
        //     withGoogleMap,
        // )((props) => {
        //     return (
        //         <GoogleMap
        //             onTilesLoaded={props.fetchPlaces}
        //             ref={props.onMapMounted}
        //             onBoundsChanged={props.fetchPlaces}
        //             defaultZoom={13}
        //             defaultCenter={{ lat: homelat, lng: homelong }}
        //         >
        //         <Marker
        //             position={{ lat: homelat, lng: homelong }}
        //             options={{animation: google.maps.Animation.BOUNCE}}
        //             onClick={props.onMainToggleOpen}
        //         >
        //             {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
        //                 <p>{this.props.home.admin.data.address}</p>
        //             </InfoWindow>}
        //         </Marker>
        //     </GoogleMap>
        //     )
        // })

        return (
            <div>
                <div className="aboutoverlay">
                    <h1 style={{color: '#ffffff',fontSize: '4.5em',fontWeight:700,textAlign:'center'}}>{this.state.singleroomdata.roomType}</h1>
                    <p style={{textAlign:'center',color: '#ffffff',fontSize: '1.4em',fontWeight:'500'}}>Home / {this.state.singleroomdata.roomType}</p>
                </div>
                <div>
                    <img src={'http://res.cloudinary.com/' + this.props.home.admin.data.cloud_name + '/image/upload/w_1300,h_500,c_fill/reputize/room/' + this.state.singleroomdata.imageURL + '.jpg'} className="contactback" alt="roomsBackground"/>
                </div>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="room-bar">
                            <a href="#" style={{paddingLeft:'25px',paddingRight:'25px'}}><p>{this.state.singleroomdata.roomType}  INR <span style={{color:'#30a077',fontWeight:600}}>{this.state.singleroomdata.roomPriceINR}</span></p></a> 
                        </div>
                    </div>
                    <div className="row">
                        <div id="toptop" className="container">
                            <h1 className="pull-left" style={{fontSize:'3.2em',color:'rgb(0, 44, 92)',textTransform:'uppercase'}}>{this.state.singleroomdata.roomType}</h1>
                            <h3 className="pull-right">Start From INR <font style={{color:'#30a077',fontWeight:600,fontSize:'2em'}}>{this.state.singleroomdata.roomPriceINR}</font> / Night</h3>
                        </div>
                    </div>
                    <hr/>
                    <div className="row" style={{backgroundColor:'#fff'}}>     
                        <div className="col-sm-5" id="bookingform" style={{padding:'2% 2%'}}>
                            <div id="toptop" ></div> 
                            <form name="bookingform" style={{backgroundColor:'#fff',boxShadow:'rgba(13, 26, 44, 0.09) 0px 2px 3px, rgba(13, 26, 44, 0.23) 0px 1px 4px',borderRadius:'5px',border:'1px solid #8888882b'}}>
                                <div style={{padding:'5% 5%'}}>
                                    <h2 style={{textTransform:'uppercase'}}>{this.state.singleroomdata.roomType}</h2>
                                <br/>
                                {/*<label style={{fontSize: '1.2em'}}>Name</label>*/}
                                <input id="formname" type="text" className="form-control forminput" placeholder="Enter Your Name" onChange={this.formUserName} />
                                {/*<div style={{marginTop:'5px'}}><span style={{color:'#d41b1b'}}>{this.state.nameError}</span></div>*/}
                                <br/>
                                {/*<label style={{fontSize: '1.2em'}}>Email</label>*/}
                                <input id="formemail" type="text" className="form-control forminput" placeholder="Enter Your Email" onChange={this.formUserEmail} onBlur={this.ValidateEmail} />
                                {/*<div style={{marginTop:'5px'}}><span style={{color:'#d41b1b'}}>{this.state.emailError}</span></div>*/}
                                {/*<br/>
                                <label style={{fontSize: '1.2em'}}>Choose Your Room</label>
                                <select id="formroom" className="form-control forminput" onChange={this.formRoomSelect}>
                                  <option value="" disabled selected>Select Your Room</option>
                                  {
                                this.state.roomarr.map((roomdata,j)=>
                                  <option key={j} value={roomdata.roomID}>{roomdata.roomType}</option>
                                   )
                                 }
                                </select>
                                <div style={{marginTop:'5px'}}><span style={{color:'#d41b1b'}}>{this.state.roomvalueError}</span></div>*/}
                                <br/>
                               {/*<label style={{fontSize: '1.2em'}}>Phone Number</label>*/}
                                <IntlTelInput 
                                    id="formphone"
                                    name="formphone"
                                    onPhoneNumberBlur={ phoneHandler }
                                    defaultCountry={ 'auto' }
                                    geoIpLookup={ lookup }
                                    separateDialCode={true}
                                    placeholder="Enter Your Phone number"
                                    css={ ['intl-tel-input', 'form-control forminput formphone maxlength'] }
                                    utilsScript={ 'libphonenumber.js' } 
                                    style={{width: '100%'}}
                                  />
                                 {/*<div style={{marginTop:'5px'}}><span style={{color:'#d41b1b'}}>{this.state.phoneError}</span></div>*/}
                                <br/>
                                <div>
                                   <div className="col-xs-6 col-sm-6" style={{padding:'2px 0px'}}>
                                     <label className="formlabel">Check-In</label>
                                     <div className="input-group">
                                        <DatePicker
                                            selected={this.state.fromDate}  
                                            onChange={this.fromDateChange}
                                            className="form-control forminput static"
                                            minDate={moment()}
                                            maxDate={moment().add(5, "months")}
                                            calendarClassName="rasta-stripes"
                                            showDisabledMonthNavigation
                                        />
                                        <span className="input-group-addon" style={{width:'auto',border:'none',backgroundColor:'#fff'}}><i className="fa fa-calendar" aria-hidden="true"></i></span>
                                      </div>                   
                                   </div>
                                   <div className="col-xs-6 col-sm-6" style={{padding:'2px 0px'}}>
                                     <label className="formlabel">Check-Out</label>
                                      <div className="input-group">
                                      <DatePicker
                                        selected={this.state.toDate}
                                        onChange={this.toDateChange}
                                        className="form-control forminput static" 
                                        minDate={this.state.toStartDate}
                                        />
                                       <span className="input-group-addon" style={{width:'auto',border:'none',backgroundColor:'#fff'}}><i className="fa fa-calendar" aria-hidden="true"></i></span>
                                      </div>
                                   </div>
                                   <div style={{marginTop:'5px'}}><span style={{color:'#d41b1b'}}>{this.state.dateError}</span></div>
                                </div>
                                <div className="row">
                                  <div className="container-fluid">
                                    <br/>
                                    <p style={{fontSize: '1.2em',color: '#9c2929',textAlign:'right'}}>{(this.state.notavailable == true) ? 'Room Not Available' : ''}</p>
                                  </div>
                                  <div className="container-fluid">
                                    <br/>
                                    <p style={{fontSize: '1.3em',textAlign:'right'}}>{ReactHtmlParser((this.state.showprice == true) ? (this.state.averagerate.toFixed(2) + ' x ' + this.state.nights + ' NIGHTS  =  &nbsp;<i class="fa fa-rupee"></i> ' + this.state.roomrate) : '')}</p>
                                    <p style={{fontSize: '1.3em',textAlign:'right'}}>{ReactHtmlParser((this.state.showprice == true) ? ('+ &nbsp; GST 12%  =  &nbsp;<i class="fa fa-rupee"></i> ' + (this.state.roomrate/100)*12) : '')}</p>
                                     <p style={{fontSize: '1.3em',color:'#30a077',textAlign:'right'}}>{ReactHtmlParser((this.state.showprice == true) ? ('TOTAL INR PRICE  =  &nbsp;<i class="fa fa-rupee"></i> ' + ((this.state.roomrate/100)*12 + this.state.roomrate)) : '')}</p>
                                  </div>
                                </div>
                                <br/>
                                <div className="row">
                                  <div className="col-xs-12 col-sm-12">
                                    <Button loading={this.state.loading} style={{fontSize:'1.2em'}} bsStyle="info" className="btn btn-block" disabled={this.state.invalidbook == true} onClick={this.handleLogin}>Proceed</Button>
                                  </div>
                                </div>
                                {/*<ToastContainer />*/}
                              </div>
                          </form> 
                        </div>  
                        <div className="col-sm-7" style={{float:'right',position:'unset'}}>
                            <br/>
                            <div className="container-fluid">
                                <h3 className="" style={{color:'rgb(0, 44, 92)'}}>SUPERIOR ROOM – TWO DOUBLE BEDS</h3>
                                <Lightbox images={photos}
                                  onClose={this.closeLightbox}
                                  onClickPrev={this.gotoPrevious}
                                  onClickNext={this.gotoNext}
                                  currentImage={this.state.currentImage}
                                  isOpen={this.state.lightboxIsOpen} />
                                <hr style={{borderTop: '1px solid rgb(0, 44, 92)'}}/>
                                {/*<div className="row" style={{textAlign:'center'}}>
                                    {
                                        this.state.singleroomdata.amenitypng.map((amen,i)=>
                                            <div className="col-xs-2 col-sm-2">
                                                <img src={'/images/' + amen.img} style={{height:'40px',width:'40px'}} title={amen.tooltip}/>
                                            </div>
                                        )
                                    }
                                </div>*/}
                                <hr style={{borderTop: '1px solid rgb(0, 44, 92)'}}/>
                                <div className="row" style={{padding:'20px'}}>
                                    <h3>Room Details</h3>
                                    <br/>
                                    {/*<p className="mobileview" style={{fontSize:'1.1em',textAlign:'justify'}}>
                                    <Truncate
                                      trimWhitespace={true}
                                      lines={!expanded && lines}
                                      ellipsis={(
                                          <span>... <a href='#' onClick={this.toggleLines}>{more}</a></span>
                                      )}
                                      onTruncate={this.handleTruncate}
                                    >
                                    {ReactHtmlParser(ReactHtmlParser(this.state.roomdetail))}
                                    </Truncate>
                                    {!truncated && expanded && (
                                        <span> <a href='#' onClick={this.toggleLines}>{less}</a></span>
                                    )} </p>*/}
                                    <p className="webview" style={{fontSize:'1.1em',textAlign:'justify'}}>{ReactHtmlParser(ReactHtmlParser(this.state.singleroomdata.roomOverview))}</p>
                                </div>
                                <div className="">
                                    <br/>
                                    <h2 style={{textAlign:'center'}}>Amenities & FEATURES</h2>
                                    <hr style={{backgroundColor:'#888888',height:'2px'}}/>
                                    <div className={['row',(this.props.home.property.propertyfeatures == '' ? 'hide' :'')].join(' ')}>
                                        <div className={['col-sm-4','amenity'].join(' ')}>
                                            <p style={{color: '#888888', fontWeight: 600, fontSize: '1.3em',marginLeft:'18px'}}>Hotel Features</p>
                                        </div>
                                        <div className="col-sm-8">
                                            <p style={{fontSize: '1.1em',textAlign:'justify'}}>{ReactHtmlParser(ReactHtmlParser(this.props.home.property.propertyfeatures))}</p>
                                        </div>
                                    </div>
                                    <hr style={{height: '2px', background: '#ddd'}}/>
                                    <div className={['row',(this.props.home.property.servicesnamenities == '' ? 'hide' :'')].join(' ')}>
                                        <div className="col-sm-4">
                                            <p style={{color: '#888888', fontWeight: 600, fontSize: '1.3em',marginLeft:'18px'}}>Hotel Services</p>
                                        </div>    
                                        <div className="col-sm-8">
                                            <p style={{fontSize: '1.1em',textAlign:'justify'}}>{ReactHtmlParser(ReactHtmlParser(this.props.home.property.servicesnamenities))}</p>
                                        </div>
                                    </div>
                                    <hr style={{height: '2px', background: '#ddd'}}/>
                                    <div className={['row',(this.props.home.property.safetynsecurity == '' ? 'hide' :'')].join(' ')}>
                                        <div className="col-sm-4">
                                            <p style={{color: '#888888', fontWeight: 600, fontSize: '1.3em',marginLeft:'18px'}}>Hotel Safety & Security</p>
                                        </div>
                                        <div className="col-sm-8">
                                            <p style={{fontSize: '1.1em',textAlign:'justify'}}>{ReactHtmlParser(ReactHtmlParser(this.props.home.property.safetynsecurity))}</p>
                                        </div>
                                    </div>
                                    <hr className={[(this.props.home.property.safetynsecurity == '' ? 'hide' :'')].join(' ')} style={{height: '2px', background: '#ddd'}}/>
                                    <div className={['row',(this.props.home.property.entertainmentleisure == '' ? 'hide' :'')].join(' ')}>
                                        <div className="col-sm-4">
                                            <p style={{color: '#888888', fontWeight: 600, fontSize: '1.3em',marginLeft:'18px'}}>Entertainment & Leisure</p>
                                        </div>
                                        <div className="col-sm-8">
                                            <p style={{fontSize: '1.1em',textAlign:'justify'}}>{ReactHtmlParser(ReactHtmlParser(this.props.home.property.entertainmentleisure))}</p>
                                        </div>
                                    </div>
                                    <hr className={[(this.props.home.property.entertainmentleisure == '' ? 'hide' :'')].join(' ')} style={{height: '2px', background: '#ddd'}}/>
                                    <div className={['row',(this.props.home.property.inapartmentfacilities == '' ? 'hide' :'')].join(' ')}>
                                        <div className="col-sm-4">
                                            <p style={{color: '#888888', fontWeight: 600, fontSize: '1.3em',marginLeft:'18px'}}>Room Features</p>
                                        </div>
                                        <div className="col-sm-8">
                                            <p style={{fontSize: '1.1em',textAlign:'justify'}}>{ReactHtmlParser(ReactHtmlParser(this.props.home.property.inapartmentfacilities))}</p>
                                        </div> 
                                    </div>
                                    {/*<hr className={[(this.props.home.property.inapartmentfacilities == '' ? 'hide' :'')].join(' ')} style={{height: '2px', background: '#ddd'}}/>*/}
                                </div>
                                <p id="picdiv" style={{color: '#888888', fontWeight: 600, fontSize: '1.3em'}}>Photos</p>
                                <br/>
                                {/*<ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutLeft' animateOnce={true}>*/}
                                    <Gallery photos={photos} onClick={this.openLightbox} columns={2}/>
                                {/*</ScrollAnimation>*/}
                                <br/>
                                <br/>

                            </div>
                            <div id="whatthe">
                                {/*<MyMapComponent />*/}
                            </div>
                            <br/>
                            <br/>
                        </div>
                    </div>
                    <div className="row">
                        <h1 style={{fontSize:'3.2em',color:'rgb(0, 44, 92)'}}>SIMILAR ROOMS</h1>
                        <hr style={{borderTop:'1px solid rgb(0, 44, 92)'}}/>
                        <div className="container">
                            {
                                this.state.similarroom.map((roomtype,i)=>
                                  <div>
                                    <div id={'roomtarget' + i} ref={(section) => { roomtype.roomID = section; }} className="row" style={{boxShadow: '3px 2px 6px #999',backgroundColor:'#007aff12'}}>
                                      <div className="col-sm-6" style={{padding:'2px 3px'}}>
                                        <img style={{width: '100%',height: '280px',borderTopRightRadius: '50px',borderBottomLeftRadius: '50px'}} src={'http://res.cloudinary.com/' + this.props.home.admin.data.cloud_name + '/image/upload/w_600,h_355,c_fill/reputize/room/' + roomtype.imageURL}/>
                                      </div>
                                      <div className="col-sm-6" style={{marginTop:'5px',padding:'30px 50px'}}>
                                        <div className="bookmarkRibbon">
                                            <NavLink style={{cursor: 'pointer'}} to={{pathname : roomtype.room_url}}><h3 style={{color:'#fff'}}>BOOK NOW</h3></NavLink>
                                        </div>
                                        <h3 style={{color:'#000',marginTop:'0px',textAlign:'left',textTransform:'uppercase',fontSize:'2.3em'}}>{roomtype.roomType}</h3>
                                        <hr style={{borderTop:'1px solid #002c5cd1'}} className="webview"/>
                                        <div className="row" style={{textAlign:'center'}}>
                                            {
                                                roomtype.amenitypng.map((amen,i)=>
                                                    <div className="col-xs-2 col-sm-2">
                                                        <img src={'/images/' + amen.img} style={{height:'30px',width:'30px'}} title={amen.tooltip}/>
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <br/>
                                        <p style={{fontSize:'1.2em',color:'#000',fontWeight:'500'}}>INR <font style={{fontSize:'1.8em'}}>{roomtype.roomPriceINR}</font> / Night</p> 
                                      </div>
                                    </div>
                                    <br/>
                                    <br/>
                                 </div>
                                  )
                                }
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
export default connect(mapStateToProps, matchDispatchToProps)(Room);
