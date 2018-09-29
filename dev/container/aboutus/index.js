import React, {Component} from 'react';
import FirstDiv from '../global/firstdiv';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import {headerData} from '../.././js/actions/index';
import { AboutDetail, AboutDivide } from './subContainers';

class AboutUs extends Component {
    
    // componentDidMount() {
    //     this.props.headerData();
    // }

    renderdom() {

        // if (!this.props.header) {
        //     return (<div></div>);
        // }
        const obj = {
            header : 'About Us', 
            page : "about-us"
        }
        return (
            <div>
                <FirstDiv firstdivobj={obj}/>
                <br />
                <AboutDetail />
                <br />
                <AboutDivide />
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

// // Get apps state and pass it as props to UserList
// //      > whenever state changes, the UserList will automatically re-render
// function mapStateToProps(state) {
//     return {
//         header: state.header
//     };
// }
// // Get actions and pass them as props to to UserList
// //      > now UserList has this.props.selectUser
// function matchDispatchToProps(dispatch){
//     return bindActionCreators({headerData: headerData}, dispatch);
// }

export default AboutUs;
