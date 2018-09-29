import React, {Component} from 'react';
import './style.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class CheckInOut extends Component {

    constructor() {
        super();
        this.state = {
            fromDate : moment(),
            toDate : moment().add(1, 'days'),
            toStartDate : moment().add(1, 'days')
        }
    }

    renderdom() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-6 col-sm-6">
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
                    <div className="col-xs-6 col-sm-6">
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
                    {/*<div style={{marginTop:'5px'}}><span style={{color:'#d41b1b'}}>{this.state.dateError}</span></div>*/}
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


export default CheckInOut;
