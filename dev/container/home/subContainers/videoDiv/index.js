import React, {Component} from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import './style.css'

class VideoDiv extends Component {
    constructor() {
        super();
    }

    renderdom() { 
        return (
            <div className="container-fluid">
                {/*<Lightbox images={photos}
                    onClose={this.closeLightbox}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    currentImage={this.state.currentImage}
                    isOpen={this.state.lightboxIsOpen} />*/}
                <h1 style={{textAlign:'center',textTransform:'uppercase',fontSize:'3em',fontWeight:'600',color:'#002c5c'}}>{this.props.home.homecontent.content1}</h1>
                <div style={{padding:'0px 15px'}}>
                    {/*<ScrollAnimation animateIn='bounceInLeft' animateOnce={true}>*/}
                        <div className="col-sm-6 insidepara" style={{backgroundColor:'rgb(237, 246, 255)',boxShadow:'rgb(153, 153, 153) 3px 2px 6px',border:'5px solid #002c5e21', minHeight:'400px',marginTop:'40px',padding: '20px 80px'}}>
                            <h1 style={{color:'#002c5c',fontSize: '2.8em',fontWeight: '600',textTransform: 'uppercase'}}>{this.props.home.homecontent.content1}</h1>
                            <br/>
                            <span style={{fontSize:'1.1em',textAlign:'justify',color:'#000'}}>{ReactHtmlParser(this.props.home.homecontent.awardcontent)}</span>
                        </div>
                    {/*</ScrollAnimation>*/}
                    {/*<ScrollAnimation animateIn='bounceInRight' animateOnce={true}>*/}
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
                    {/*</ScrollAnimation>*/}
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

export default VideoDiv;
