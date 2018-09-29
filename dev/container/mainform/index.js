import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FormHead, FormDetail, FormFill} from './subContainer';
import './style.css';

class MainForm extends Component {

    constructor() {
        super();
    }   

    renderdom() {
        if (!this.props.header) {
          return (<div></div>);
        }
        return (
            <div className="modal fade" id="myModal" role="dialog">
              <div className={['modal-dialog','modal-lg','mainmodal'].join(' ')}>
                <div className="modal-content" style={{backgroundColor:'transparent',border:'none'}}> 
                    <FormHead datahead={this.props.header.admin}/>
                    <div className="modal-body" style={{padding:'0px',backgroundColor:'#fff'}}>
                      <div className="container">
                        <div className="col-sm-5" style={{padding:'5% 2%'}}>
                            <FormDetail datadetail={this.props.header.admin}/>
                        </div>
                        <div className="col-sm-7" style={{padding:'3.2% 2%'}}>
                            <FormFill data={this.props.header.allroomcontent}/>
                        </div>  
                      </div>
                    </div>
                </div>  
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

function mapStateToProps(state) {
    return {
        header: state.header
    };
}

export default connect(mapStateToProps)(MainForm);
