import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Carousel, DividedDiv, Rooms, Service, VideoDiv, PopOver, HomeMap} from './subContainers';
import {homeData} from '../.././js/actions/index';

class Home extends Component {
    
    componentDidMount() {
        this.props.homeData();
    }

    renderdom() {

        if (!this.props.home) {
            return (<div></div>);
        }

        return (
            <div>
                <Carousel home={this.props.home}/>
                {/* <PopOver/> */}
                <DividedDiv home={this.props.home}/>
                <br/>
                <br/>
                <Rooms home={this.props.home}/>
                <br/>
                <br/>
                <Service home={this.props.home}/>
                <br/>
                <br/>
                <VideoDiv home={this.props.home}/> 
                <br/>
                <br/>
                <HomeMap home={this.props.home}/>
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

export default connect(mapStateToProps, matchDispatchToProps)(Home);
