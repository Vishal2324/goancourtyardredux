import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Button from 'react-bootstrap-button-loader';
import {loginAction} from '../actions/index';
/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loginload : false,
            loginname : "",
            loginpass : "",
            invalidlogin : true,
            emailError : ""
        }

        this.loginUsername = this.loginUsername.bind(this);
        this.loginPassword = this.loginPassword.bind(this);
        this.checkEmail = this.checkEmail.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    loginUsername(e) {
        //alert(e.target.value);
        this.setState({loginname: e.target.value});
         // if(this.state.newname != ""){
         //    this.setState({nameError : ""});
         // }
    }

    loginPassword(e) {
        //alert(e.target.value);
        this.setState({loginpass: e.target.value});
         //  if(this.state.email != ""){
         //    this.setState({emailError : ""});
         // }
    }

    checkEmail(){
        var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(reg.test(this.state.loginname) === false){
            this.setState({emailError : 'Please enter valid email.'});
            return false;
        }else{
            this.setState({emailError : ''});
        }
    }

    loginUser(){
        if(this.state.emailError != ""){
            return false;
        }else{
            var loginobj = {email : this.state.loginname, password : this.state.loginpass};
            this.props.loginAction(loginobj);
        }
    }

    renderdom() {
        return(
            <div>
                <br/>
                <br className="webview"/>
                <br className="webview"/>
                <br className="webview"/>
                <br className="webview"/>
                <br className="webview"/>
                <br className="webview"/>
                <br className="webview"/>
                <br className="webview"/>
                <br className="webview"/>
                <br className="webview"/>
                <div className="container loginpadding">
                {/*<ToastContainer />*/}
                    <h2>Login</h2>
                    <div style={{border:'1px solid #88888845',boxShadow:'rgba(13, 26, 44, 0.09) 0px 2px 3px, rgba(13, 26, 44, 0.23) 0px 1px 4px',padding:'3% 4%',borderRadius:'5px'}}>
                        <form>
                            <label style={{fontSize: '1.1em'}}>User Email</label>
                            <div className="input-group">
                                <div className="input-group-addon" style={{backgroundColor:'#fff',borderRadius:'0px',border:'none',borderBottom:'1px solid #888',fontSize:'1.3em'}}>
                                    <i className="fa fa-user" aria-hidden="true" style={{color:'#000'}}></i>
                                </div>
                                <input id="loginname" type="text" className="form-control forminput" onChange={this.loginUsername} onBlur={this.checkEmail} placeholder="Enter User Email" />
                            </div>
                            <div style={{marginTop:'5px'}}><span style={{color:'#d41b1b'}}>{this.state.emailError}</span></div>
                            <br/>
                            <label style={{fontSize: '1.1em'}}>Password</label>
                            <div className="input-group">
                                <div className="input-group-addon" style={{backgroundColor:'#fff',borderRadius:'0px',border:'none',borderBottom:'1px solid #888',fontSize:'1.3em'}}>
                                    <i className="fa fa-key" aria-hidden="true" style={{color:'#000'}}></i>
                                </div>
                                <input id="loginpass" type="password" className="form-control forminput" onChange={this.loginPassword} placeholder="Enter Password"/>
                            </div> 
                            <p style={{textAlign:'right',color:'#888',fontFamily:'oswald',fontSize:'1.1em',marginTop:'5px'}}><a href="#" style={{color:'#888',fontFamily:'oswald',fontSize:'1em'}}> Forget Password?</a></p>
                            <br/>
                            <Button loading={this.state.loginload} disabled={(this.state.loginname == "" || this.state.loginpass == "")} bsStyle="success" className="btn-block signupbtn" onClick={this.loginUser}>log in <i className="fa fa-sign-in" aria-hidden="true"></i></Button>
                        </form>
                    </div>
                </div>  
                <br/>
                <br/>
                <br className="webview"/>
                <br className="webview"/>
                <br className="webview"/>
                <br className="webview"/>
                <br className="webview"/>
                <br className="webview"/>
                <br className="webview"/>
                <br className="webview"/>
                <br className="webview"/>
                <br className="webview"/>
            </div>
        )
    }

    render() {
        // if (!this.props.home) {
        //     return (<div>Select a user...</div>);
        // }
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
    return bindActionCreators({loginAction: loginAction}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(Login);
