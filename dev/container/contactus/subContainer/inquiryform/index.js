import React, {Component} from 'react';
import './style.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/libphonenumber.js';
import 'react-intl-tel-input/dist/main.css';
import Button from 'react-bootstrap-button-loader';

class InquiryForm extends Component {

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
            <form name="bookingform" style={{backgroundColor:'#fff',border:'1px solid #ddd'}}>
                <div style={{padding:'5% 5%'}}>
                <input id="formname" type="text" className="form-control forminput" placeholder="Enter Your Name" onChange={this.formUserName} />
                {/* <div style={{marginTop:'5px'}}><span style={{color:'#d41b1b'}}>{this.state.nameError}</span></div> */}
                <br/>
                
                <input id="formemail" type="text" className="form-control forminput" placeholder="Enter Your Email" onChange={this.formUserEmail} onBlur={this.ValidateEmail}/>
                {/* <div style={{marginTop:'5px'}}><span style={{color:'#d41b1b'}}>{this.state.emailError}</span></div> */}
                <br/>
                
                
                <IntlTelInput 
                    onPhoneNumberBlur={ phoneHandler }
                    defaultCountry={ 'auto' }
                    geoIpLookup={ lookup }
                    separateDialCode={true}
                    placeholder="Enter Your Phone number"
                    css={ ['intl-tel-input', 'form-control forminput formphone' ] }
                    utilsScript={ 'libphonenumber.js' } 
                    style={{width: '100%'}}
                    className="form-control"
                    />
                {/* <div style={{marginTop:'5px'}}><span style={{color:'#d41b1b'}}>{this.state.phoneError}</span></div> */}
                <br/>
                <br/>
                <textarea id="formmessage" type="text" className="form-control forminput" placeholder="Enter Message" rows="5" onChange={this.formUserMessage}></textarea>
                {/* <div style={{marginTop:'5px'}}><span style={{color:'#d41b1b'}}>{this.state.messageError}</span></div> */}
                    <br/>
                <Button bsStyle="info" className="btn btn-block btn-primary" onClick={this.contactform}>Proceed</Button>
                {/* <ToastContainer /> */}
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

export default InquiryForm;
