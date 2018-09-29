import React, {Component} from 'react';
import './style.css'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/libphonenumber.js';
import 'react-intl-tel-input/dist/main.css';
import Button from 'react-bootstrap-button-loader';

class RoomForm extends Component {
    constructor() {
        super();
        this.state = {
            fromDate : moment(),
            toDate : moment()
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

        return (
            <form name="bookingform" style={{backgroundColor:'#fff',boxShadow:'rgba(13, 26, 44, 0.09) 0px 2px 3px, rgba(13, 26, 44, 0.23) 0px 1px 4px',borderRadius:'5px',border:'1px solid #8888882b'}}>
                <div style={{padding:'5% 5%'}}>
                    {/* <h2 style={{textTransform:'uppercase'}}>{this.state.singleroomdata.roomType}</h2> */}
                    <h2 style={{textTransform:'uppercase'}}>Studio Apartment</h2>
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
                    {/* <div style={{marginTop:'5px'}}><span style={{color:'#d41b1b'}}>{this.state.dateError}</span></div> */}
                </div>
                <div className="row">
                    <div className="container-fluid">
                    <br/>
                    {/* <p style={{fontSize: '1.2em',color: '#9c2929',textAlign:'right'}}>{(this.state.notavailable == true) ? 'Room Not Available' : ''}</p> */}
                    </div>
                    <div className="container-fluid">
                        {/* <br/>
                        <p style={{fontSize: '1.3em',textAlign:'right'}}>{ReactHtmlParser((this.state.showprice == true) ? (this.state.averagerate.toFixed(2) + ' x ' + this.state.nights + ' NIGHTS  =  &nbsp;<i class="fa fa-rupee"></i> ' + this.state.roomrate) : '')}</p>
                        <p style={{fontSize: '1.3em',textAlign:'right'}}>{ReactHtmlParser((this.state.showprice == true) ? ('+ &nbsp; GST 12%  =  &nbsp;<i class="fa fa-rupee"></i> ' + (this.state.roomrate/100)*12) : '')}</p>
                        <p style={{fontSize: '1.3em',color:'#30a077',textAlign:'right'}}>{ReactHtmlParser((this.state.showprice == true) ? ('TOTAL INR PRICE  =  &nbsp;<i class="fa fa-rupee"></i> ' + ((this.state.roomrate/100)*12 + this.state.roomrate)) : '')}</p> */}
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

export default RoomForm;
