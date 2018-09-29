import React, {Component} from 'react';
import FirstDiv from '../global/firstdiv';
// import RoomMap from '../singleroom/subContainers/maps'
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import {headerData} from '../.././js/actions/index';
// import { ContactDetail, InquiryForm } from './subContainer';

class MainGallery extends Component {
    
    constructor() {
        super();
        this.state = {
          currentImage: 0
        }
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
    }

    // componentDidMount(){
    //     this.setState({canonicalUrl: window.location.href});
    //     window.scrollTo(0, 0); 
    //     this.fetchgallery();
    //     }
    // //window.location.pathname = '/gallery.html';

    openLightbox(event, obj) {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    renderdom() {

        // if (!this.props.header) {
        //     return (<div></div>);
        // }
        const obj = {
            header : 'Gallery', 
            page : "gallery"
        }
        var photos = [];
        return (
            <div>
                <FirstDiv firstdivobj={obj}/>
                <br />
                {/* <Lightbox images={photos}
                    onClose={this.closeLightbox}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    currentImage={this.state.currentImage}
                    isOpen={this.state.lightboxIsOpen} />
                <Gallery photos={photos} onClick={this.openLightbox} columns={3} margin={3} /> */}
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

export default MainGallery;
