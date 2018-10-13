import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {AllRoom, Info, Services} from './subContainers';
import FirstDiv from '.././global/firstdiv';
import {homeData} from '../.././js/actions/index';

class Rooms extends Component {
    componentDidMount() {
        this.props.homeData();
    }
    
    renderdom() {
        if (!this.props.home) {
            return (<div></div>);
        }
        const obj = {
            header : 'Accomodation', 
            page : "Our-Apartments"
        }
        return (
            <div>
                <FirstDiv firstdivobj={obj}/>
                <br />
                <Info home={this.props.home}/>
                <br />
                <Services home={this.props.home}/>
                <br />
                <AllRoom home={this.props.home}/>
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
// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({homeData: homeData}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Rooms);
