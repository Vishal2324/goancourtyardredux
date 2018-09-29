import React, {Component} from 'react';
import './style.css';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/libphonenumber.js';
import 'react-intl-tel-input/dist/main.css';

class InputPhone extends Component {

    constructor() {
        super();
        this.state = {
            emailError : ''
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
            <div>
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


export default InputPhone;
