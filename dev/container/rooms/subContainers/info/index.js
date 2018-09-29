import React, {Component} from 'react';
import ReactHtmlParser from 'react-html-parser';
import './style.css';

class Info extends Component {

    renderdom() {
        
        return (
            <div>
                <div className="container divalignment">
                    <div className="row needpadding webview">
                        <h2 style={{textAlign:'left',fontSize:'2.5em',color:'rgb(0, 44, 92)'}}>{ReactHtmlParser(ReactHtmlParser(this.props.home.roomcontentpara.h1sa))}</h2>
                        <hr/>
                        <div style={{padding:'10px 5px'}}>
                            <p style={{fontSize:'1.2em',textAlign:'justify'}}>{ReactHtmlParser(ReactHtmlParser(this.props.home.roomcontentpara.h2sacontent))}</p>
                        </div>
                        <br/>
                        <br/>
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

export default Info;
