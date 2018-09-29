import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Amenities, Details, RoomMap, Photos, RoomForm, RoomName, SimilarRoom, RoomServices} from './subContainers';
import FirstDiv from '.././global/firstdiv';
import {homeData} from '../.././js/actions/index';

class Rooms extends Component {
    constructor() {
        super();
        this.state = {
            singleroomdata : {},
            roomimages : [],
            currentImage: 0,
            similarroom : []
        }
    }
    componentDidMount() {
        this.props.homeData();
    }
    
    renderdom() {
        if (!this.props.home) {
            return (<div></div>);
        }
        var roomurl = document.URL.split('/')[3];
        var roomdata = [];
        var similarroomdata = [];
        roomdata = this.props.home.roomcontent.filter(item => item.room_url == roomurl);    
        similarroomdata = this.props.home.roomcontent.filter(item => item.room_url != roomurl);
        const obj = {
            header : roomdata[0].roomType, 
            page : roomdata[0].room_url
        }
        return (
            <div>
                <FirstDiv firstdivobj={obj}/>
                <br />
                <RoomName roomname={roomdata[0]}/>
                <hr/>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5" id="bookingform" style={{padding:'2% 2%'}}>
                            <div id="toptop" ></div> 
                            <RoomForm />
                        </div>
                        <div className="col-sm-7" style={{float:'right',position:'unset'}}>
                            <div className="container-fluid">
                                <RoomServices roomservice={roomdata[0].roomAmenties}/>
                                <Details roomdetail={roomdata[0].roomOverview}/>
                                <br />
                                <Amenities amenity={this.props.home.property}/>
                                <br />
                                <Photos gallery={roomdata} cloudname={this.props.home.admin.data.cloud_name}/>
                                <br />
                                <RoomMap lat={this.props.home.admin.lat} long={this.props.home.admin.long} address={this.props.home.admin.data.address}/>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <SimilarRoom similardata={similarroomdata} cloudname={this.props.home.admin.data.cloud_name}/>
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
// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({homeData: homeData}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Rooms);
