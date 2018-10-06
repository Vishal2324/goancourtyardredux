import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {headerData} from '../.././js/actions/index';
import { HeaderOne, HeaderTwo } from './subContainer';

class Header extends Component {
    
    componentDidMount() {
        this.props.headerData();
    }

    renderdom() {

        if (!this.props.header) {
            return (<div></div>);
        }

        return (
            <div>
                <HeaderOne header={this.props.header}/>
                <HeaderTwo header={this.props.header}/>
            </div>
        );
    }

    render() {
        return (
            <div>
                {/* {this.renderdom()} */}
                header
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
// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({headerData: headerData}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Header);
