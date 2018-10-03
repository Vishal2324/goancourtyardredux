import React, {Component} from 'react';
import './style.css'

class VideoImage extends Component {
    constructor() {
        super();
    }

    renderdom() { 
        return (
            <div className="col-sm-6" style={{backgroundColor:'#fff',minHeight:'400px',padding:'0px'}}>
                <div className="videooverlay">
                    <div className="pull-right" style={{height:'70px',width:'70px',backgroundColor: '#002c5cd1',padding:'13px 17px',cursor:'pointer'}}> 
                        <i className="fa fa-play" style={{textAlign:'center',fontSize:'3em',color:'#fff'}} data-toggle="modal" data-target="#videoModal"></i>
                    </div>
                    <div className="pull-right" style={{height:'70px',width:'70px',backgroundColor: '#002c5cd1',padding:'13px 17px',marginRight:'2px',cursor:'pointer'}}>
                        <i className="fa fa-file-image-o" style={{textAlign:'center',fontSize:'3em',color:'#fff'}} aria-hidden="true"></i>
                    </div>
                </div>
                <img className="videomargin" style={{width:'100%',height:'400px'}} alt="img" src="http://res.cloudinary.com/the-perch/image/upload/h_750,w_1500,c_fill/reputize/homepage-slider/2017-07-11_17-12-00.jpg"></img>
                {/*<iframe className="iframesize" src={this.state.homearr.videourl}>
                </iframe>*/}
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

export default VideoImage;
