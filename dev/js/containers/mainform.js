import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Button from 'react-bootstrap-button-loader';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/libphonenumber.js';
import 'react-intl-tel-input/dist/main.css';

class MainForm extends Component {

    constructor() {
        super();
        this.state = {
          fromDate : moment(),
          toDate : moment().add(1, 'days'),
          toStartDate : moment().add(1, 'days')
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

        if (!this.props.home) {
          return (<div className="webview"></div>);
        }

        return (
            <div className="modal fade" id="myModal" role="dialog">
              <div className={['modal-dialog','modal-lg','mainmodal'].join(' ')}>
                <div className="modal-content" style={{backgroundColor:'transparent',border:'none'}}> 
                  <div className="modal-header webview" style={{backgroundColor:'#fff',border:'none',minHeight:'100px'}}>
                     <button type="button" className="btn pull-right bookingclosebtn" data-dismiss="modal"><i className="fa fa-times pull-left" aria-hidden="true" style={{marginTop: '3px',marginLeft:'3px'}}></i> CLOSE</button>
                      <div className={['nav', 'navbar-nav','navbar-center','bookinglogo'].join(' ')}>
                        <img style={{height:'50px'}} src={'https://res.cloudinary.com/' + this.props.home.admin.data.cloud_name + '/image/upload/h_100,w_219,c_fill/reputize/logo/' + this.props.home.admin.data.logo_img + '.png'}/>
                      </div>
                    </div>
                    <div className="modal-body" style={{padding:'0px',backgroundColor:'#fff'}}>
                      <button type="button" className="close mobileview" data-dismiss="modal"><i className="fa fa-times pull-left" aria-hidden="true" style={{marginTop: '3px',marginLeft:'3px'}}></i></button>
                      <div className="container">
                        <div className="col-sm-5 webview" style={{padding:'5% 2%'}}>
                          <h1 style={{color:'rgb(0, 44, 92)',fontFamily:'Merriweather, serif',fontSize: '2.5em',fontWeight:'600',textTransform: 'uppercase'}}>Book Now & Get Our best rate</h1>
                          <br/>
                          <p style={{fontSize:'1.1em',color:'#4e4646'}}>Plan your Perfect Vacation WITH OUR HOLIDAY ADVISOR Book Now For Our Best Rate Book now to get the best choice of rooms and rates</p>
                          <hr style={{borderTop:'1px solid #888'}}/> 
                          <p style={{fontSize:'1.2em',textTransform:'uppercase'}}>Telephone :  +91-{this.props.header.admin.reservationNo}</p>
                          <p style={{fontSize:'1.2em',textTransform:'lowercase'}}>Email :  {this.props.header.admin.center_email}</p>
                        </div>
                        <div className="col-sm-7" style={{padding:'3.2% 2%'}}>
                          <h1 className="mobileview" style={{color:'rgb(0, 44, 92)',fontFamily:'Merriweather, serif',fontSize: '2.5em',fontWeight:'600',textTransform: 'uppercase'}}>Book Now & Get Our best rate</h1>
                          <br/>
                          <form name="bookingform" style={{backgroundColor:'#fff'}}>
                            <div style={{padding:'5% 5%'}}>
                              <label style={{fontSize: '1.2em'}}>Name</label>
                              <input id="formname" type="text" className="form-control forminput" placeholder="Enter Your Name" onChange={this.formUserName} />
                              {/*<div style={{marginTop:'5px'}}><span style={{color:'#d41b1b'}}>{this.state.nameError}</span></div>*/}
                              <br/>
                              <label style={{fontSize: '1.2em'}}>Email</label>
                              <input id="formemail" type="text" className="form-control forminput" placeholder="Enter Your Email" onChange={this.formUserEmail} onBlur={this.ValidateEmail} />
                              {/*<div style={{marginTop:'5px'}}><span style={{color:'#d41b1b'}}>{this.state.emailError}</span></div>*/}
                              <br/>
                              <label style={{fontSize: '1.2em'}}>Choose Your Room</label>
                              <select id="formroom" className="form-control forminput" onChange={this.formRoomSelect}>
                                <option value="" disabled selected>Select Your Room</option>
                                {/*{
                                  this.state.roomarr.map((roomdata,j)=>
                                    <option key={j} value={roomdata.roomID}>{roomdata.roomType}</option>
                                  )
                                }*/}
                              </select>
                              {/*<div style={{marginTop:'5px'}}><span style={{color:'#d41b1b'}}>{this.state.roomvalueError}</span></div>*/}
                              <br/>
                              <label style={{fontSize: '1.2em'}}>Phone Number</label>
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
                                {/*<div style={{marginTop:'5px'}}><span style={{color:'#d41b1b'}}>{this.state.dateError}</span></div>*/}
                              </div>
                              <div className="row">
                                <div className="container-fluid">
                                  <br/>
                                  <p style={{fontSize: '1.2em',color: '#9c2929',textAlign:'right'}}>{(this.state.notavailable == true) ? 'Room Not Available' : ''}</p>
                                </div>
                                <div className="container-fluid">
                                  <br/>
                                  {/*<p style={{fontSize: '1.3em',textAlign:'right'}}>{ReactHtmlParser((this.state.showprice == true) ? (this.state.averagerate.toFixed(2) + ' x ' + this.state.nights + ' NIGHTS  =  &nbsp;<i class="fa fa-rupee"></i> ' + this.state.roomrate) : '')}</p>
                                  <p style={{fontSize: '1.3em',textAlign:'right'}}>{ReactHtmlParser((this.state.showprice == true) ? ('+ &nbsp; GST 12%  =  &nbsp;<i class="fa fa-rupee"></i> ' + (this.state.roomrate/100)*12) : '')}</p>
                                  <p style={{fontSize: '1.3em',color:'#30a077',textAlign:'right'}}>{ReactHtmlParser((this.state.showprice == true) ? ('TOTAL INR PRICE  =  &nbsp;<i class="fa fa-rupee"></i> ' + ((this.state.roomrate/100)*12 + this.state.roomrate)) : '')}</p>*/}
                                </div>
                              </div>
                              <br/>
                              <div className="row">
                                <div className="col-xs-12 col-sm-12">
                                  <Button loading={this.state.loading} style={{fontSize:'1.2em'}} bsStyle="info" className="btn btn-block" disabled={this.state.invalidbook == true} onClick={this.reservation}>Proceed</Button>
                                </div>
                              </div>
                              {/*<ToastContainer />*/}
                            </div>
                          </form>
                        </div>  
                      </div>
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
        home: state.home,
        header: state.header
    };
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps)(MainForm);
