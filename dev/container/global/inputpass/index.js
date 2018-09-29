import React, {Component} from 'react';
import './style.css'

class InputPass extends Component {

    constructor() {
        super();
        this.state = {
            passError : ''
        }
        this.checkPass = this.checkPass.bind(this);
    }

    checkPass(){
        if(this.props.pass == ''){
            this.setState({passError : 'Please enter Password.'});
            return false;
        }else{
            this.setState({passError : ''});
        }
    }

    renderdom() {
        return (
            <div>
                <label style={{fontSize: '1.1em'}}>Password</label>
                <div className="input-group">
                    <div className="input-group-addon" style={{backgroundColor:'#fff',borderRadius:'0px',border:'none',borderBottom:'1px solid #888',fontSize:'1.3em'}}>
                        <i className="fa fa-key" aria-hidden="true" style={{color:'#000'}}></i>
                    </div>
                    <input id={this.props.id} type="password" className="form-control forminput" onChange={this.props.OnChange} onBlur={this.checkPass} placeholder="Enter Password"/>
                </div> 
                <p style={{textAlign:'right',color:'#888',fontFamily:'oswald',fontSize:'1.1em',marginTop:'5px'}}><a href="#" style={{color:'#888',fontFamily:'oswald',fontSize:'1em'}}> Forget Password?</a></p>
                <div style={{marginTop:'5px'}}>
                    <span style={{color:'#d41b1b'}}>{this.state.passError}</span>
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


export default InputPass;
