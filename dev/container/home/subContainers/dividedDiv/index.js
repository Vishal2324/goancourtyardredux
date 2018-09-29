import React, {Component} from 'react';
import {SectionOne, SectionTwo} from './subContainers';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import {homeData} from '../../../.././js/actions/index';
import './style.css'

class DividedDiv extends Component {

    renderdom() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6" style={{minHeight:'500px',boxShadow:'rgb(153, 153, 153) 3px 2px 6px',backgroundColor: 'rgba(0, 122, 255, 0.07)'}}>
                        <SectionOne home={this.props.home}/>
                    </div>
                    <div className="col-sm-6" style={{minHeight:'500px',boxShadow:'rgb(153, 153, 153) 3px 2px 6px',backgroundColor: 'rgb(31, 61, 96)'}}>
                        <br/>
                        <br/>
                        <br/>
                        <SectionTwo home={this.props.home}/>
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


export default DividedDiv;
