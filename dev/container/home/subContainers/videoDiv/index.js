import React, {Component} from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import './style.css'
import { VideoPara, VideoImage } from './subContainer';

class VideoDiv extends Component {
    constructor() {
        super();
    }

    renderdom() { 
        return (
            <div className="container-fluid">
                <h1 style={{textAlign:'center',textTransform:'uppercase',fontSize:'3em',fontWeight:'600',color:'#002c5c'}}>{this.props.home.homecontent.content1}</h1>
                <div style={{padding:'0px 15px'}}>
                    {/*<ScrollAnimation animateIn='bounceInLeft' animateOnce={true}>*/}
                        <VideoPara home={this.props.home}/>
                    {/*</ScrollAnimation>*/}
                    {/*<ScrollAnimation animateIn='bounceInRight' animateOnce={true}>*/}
                        <VideoImage home={this.props.home}/>
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
