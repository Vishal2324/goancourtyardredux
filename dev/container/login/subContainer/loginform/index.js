import React, {Component} from 'react';
import './style.css';
import Button from 'react-bootstrap-button-loader';
import InputEmail from '../../../global/inputemail';
import InputPass from '../../../global/inputpass';

class LoginForm extends Component {
    
    constructor() {
        super();
        this.state = {
            loginemail : '',
            loginpass : ''
        }
        this.emailChange = this.emailChange.bind(this);
        this.passChange = this.passChange.bind(this);
        this.loginUser = this.loginUser.bind(this);
    } 

    emailChange(e) {
        this.setState({loginemail: e.target.value});
    }

    passChange(e) {
        this.setState({loginpass: e.target.value});
    }

    loginUser(){
        debugger;
        var loginobj = {email : this.state.loginemail, password : this.state.loginpass};
        this.props.login(loginobj);
    }

    renderdom() {
        const obj = {
            header : 'Login', 
            page : "login"
        }
        return (
            <div className="container loginpadding">
                {/*<ToastContainer />*/}
                <h2>Login</h2>
                <div style={{border:'1px solid #88888845',boxShadow:'rgba(13, 26, 44, 0.09) 0px 2px 3px, rgba(13, 26, 44, 0.23) 0px 1px 4px',padding:'3% 4%',borderRadius:'5px'}}>
                    <form>
                        <InputEmail email={this.state.loginemail} OnChange={this.emailChange}/>
                        <br/>
                        <InputPass pass={this.state.loginpass} OnChange={this.passChange}/>
                        <br/>
                        <Button bsStyle="success" className="btn-block signupbtn" onClick={this.loginUser}>log in <i className="fa fa-sign-in" aria-hidden="true"></i></Button>
                    </form>
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

export default LoginForm;
