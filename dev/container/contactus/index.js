import React, {Component} from 'react';
import FirstDiv from '../global/firstdiv';
import RoomMap from '../singleroom/subContainers/maps'
// import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import {headerData} from '../.././js/actions/index';
import { ContactDetail, InquiryForm } from './subContainer';

class ContactUs extends Component {
    
    // componentDidMount() {
    //     this.props.headerData();
    // }

    renderdom() {

        // if (!this.props.header) {
        //     return (<div></div>);
        // }
        const obj = {
            header : 'Contact Us', 
            page : "contact-us"
        }
        return (
            <div>
                <FirstDiv firstdivobj={obj}/>
                <br />
                <div className="container">
                    <ContactDetail/>
                    <br />
                    <br />
                    <div className="row">
                        <div className="col-sm-7">
                            <h1 style={{textAlign:'center',color:'rgb(0, 44, 92)',fontWeight:'600',fontSize:'3em',textTransform:'uppercase'}}>location</h1>
                            <br/>
                            <RoomMap lat={this.props.home.admin.lat} long={this.props.home.admin.long} address={this.props.home.admin.data.address}/>
                        </div>
                        <div className="col-sm-5">
                            <h1 style={{textAlign:'center',fontSize: '3em',fontWeight:700,textTransform:'uppercase'}}>GUEST INQUIRY</h1>
                            <br/>
                            <InquiryForm />
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

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        home: state.home
    };
}
// // Get actions and pass them as props to to UserList
// //      > now UserList has this.props.selectUser
// function matchDispatchToProps(dispatch){
//     return bindActionCreators({headerData: headerData}, dispatch);
// }

export default connect(mapStateToProps)(ContactUs);
