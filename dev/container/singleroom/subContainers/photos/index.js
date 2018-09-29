import React, {Component} from 'react';
import './style.css'
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

class Photos extends Component {
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
        var photos = [];
        if(this.props.gallery.length > 0){
            this.props.gallery.map((roomtype,i)=>
                {
                    var tempobj = {};
                    tempobj.src = 'http://res.cloudinary.com/' + this.props.cloudname + '/image/upload/w_956,h_475,c_fill/reputize/room/' + roomtype.imageURL + '.jpg';
                    tempobj.width = 15;
                    tempobj.height = 10;
                    photos.push(tempobj);
                }
            )   
        }else{
            return (<div></div>);
        }
        return (
            <div className=""> 
                <Lightbox images={photos}
                    onClose={this.closeLightbox}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    currentImage={this.state.currentImage}
                    isOpen={this.state.lightboxIsOpen} />
                <p id="picdiv" style={{color: '#888888', fontWeight: 600, fontSize: '1.3em'}}>Photos</p>
                <br/>
                {/*<ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutLeft' animateOnce={true}>*/}
                    <Gallery photos={photos} onClick={this.openLightbox} columns={2}/>
                {/*</ScrollAnimation>*/}
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

export default Photos;
