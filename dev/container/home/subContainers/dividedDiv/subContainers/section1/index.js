import React, {Component} from 'react';
import ReactHtmlParser from 'react-html-parser';
import './style.css'

class SectionOne extends Component {

    renderdom() {

        return (
            <div>
                <div className="mainpara">
                    <br/>
                    <br/>
                    {/* <ScrollAnimation animateIn='slideInUp' animateOnce={true}> */}
                        <h1 style={{color:'#002c5c',fontSize: '3em',fontWeight:'600',textTransform:'uppercase'}}>{ReactHtmlParser(this.props.home.homecontent.h1tag)}</h1>
                    {/* </ScrollAnimation> */}
                    <br/>
                    <br/>
                    <div>
                        {/* <ScrollAnimation animateIn='slideInUp' animateOnce={true}> */}
                            <span className="webview" style={{fontSize:'1.2em',textAlign:'justify'}}>{ReactHtmlParser(this.props.home.homecontent.H1Content)}</span>
                        {/* </ScrollAnimation> */}
                        <span className="mobileview" style={{fontSize:'1.2em',textAlign:'justify'}}>
                        </span> 
                    </div>
                    <br/>
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

export default SectionOne;
