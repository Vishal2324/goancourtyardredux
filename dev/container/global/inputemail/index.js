import React, {Component} from 'react';
import './style.css'

class InputEmail extends Component {

    constructor() {
        super();
        this.state = {
            emailError : ''
        }
        this.checkEmail = this.checkEmail.bind(this);
    }

    checkEmail(){
        var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(this.props.email.trim() == ''){
            this.setState({emailError : 'Please enter email.'});
            return false;
        }
        if(reg.test(this.props.email) === false){
            this.setState({emailError : 'Please enter valid email.'});
            return false;
        }else{
            this.setState({emailError : ''});
        }
    }

    renderdom() {
        return (
            <div>
                <label style={{fontSize: '1.2em'}}>Email</label>
                <input id={this.props.id} type="email" className="form-control forminput" placeholder="Enter Your Email" onChange={this.props.OnChange} onBlur={this.checkEmail} />
                <div style={{marginTop:'5px'}}><span style={{color:'#d41b1b'}}>{this.state.emailError}</span></div>
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


export default InputEmail;
