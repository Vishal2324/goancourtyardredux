import React, {Component} from 'react';
import './style.css';
import {SelectRoom} from './subContainer';
import InputName from '../../../global/inputname';
import InputEmail from '../../../global/inputemail';
import CheckInOut from '../../../global/checkinout';
import InputPhone from '../../../global/inputphone';
import Button from 'react-bootstrap-button-loader';

class FormFill extends Component {

    constructor() {
        super();
        this.state = {
            mainemail : '',
            mainname : '',
            loading : false
        }
        this.emailChange = this.emailChange.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }   
    
    emailChange(e) {
        debugger;
        this.setState({mainemail: e.target.value});
    }

    nameChange(e) {
        this.setState({mainname: e.target.value});
    }

    formSubmit(e){
        e.preventDefault();
    }

    renderdom() {
        
        return (
            <form name="bookingform" style={{backgroundColor:'#fff'}}>
                <div style={{padding:'5% 5%'}}>
                    <InputName name={this.state.mainname} OnChange={this.nameChange}/>
                    <br/>
                    <InputEmail email={this.state.mainemail} OnChange={this.emailChange}/>
                    <br/>
                    <SelectRoom rooms={this.props.data}/>
                    <br/>
                    <InputPhone />
                    <br/>
                    <CheckInOut />
                    <br/>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12">
                            <Button loading={this.state.loading} style={{fontSize:'1.2em'}} bsStyle="info" className="btn btn-block" onClick={this.formSubmit}>Proceed</Button>
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


export default FormFill;
