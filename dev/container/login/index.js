import React, {Component} from 'react';
import {LoginForm} from './subContainer';
import FirstDiv from '.././global/firstdiv';
import {loginAction} from '../../js/actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Login extends Component {
    
    renderdom() {
        const obj = {
            header : 'Login', 
            page : "login"
        }
        return (
            <div>
                <FirstDiv firstdivobj={obj}/>
                <br />
                <LoginForm header={this.props.header} login={this.props.loginAction}/>
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
        header: state.header
    };
}

function matchDispatchToProps(){
    return bindActionCreators({loginAction: loginAction});
}

export default connect(mapStateToProps, matchDispatchToProps)(Login);
