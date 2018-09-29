import React, {Component} from 'react';
import './style.css'

class InputName extends Component {

    constructor() {
        super();
        this.state = {
            emailError : ''
        }
        this.checkName = this.checkName.bind(this);
    }

    checkName(){
        debugger;
        // var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(this.props.name.trim() == ''){
            this.setState({emailError : 'Please enter name.'});
            return false;
        }if(this.props.name.length == 1){
            this.setState({emailError : 'Please enter valid name.'});
            return false;
        }else{
            this.setState({emailError : ''});
        }

    }

    renderdom() {
        return (
            <div>
                <label style={{fontSize: '1.2em'}}>Name</label>
                <input id="formname" type="text" className="form-control forminput" placeholder="Enter Your Name" onChange={this.props.OnChange} onBlur={this.checkName} />
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


export default InputName;
