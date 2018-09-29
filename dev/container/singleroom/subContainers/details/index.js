import React, {Component} from 'react';
import './style.css';
import ReactHtmlParser from 'react-html-parser';

class Details extends Component {
    constructor() {
        super();
    }

    renderdom() {
        return (
            <div className="row" style={{padding:'20px'}}>
                <h3>Room Details</h3>
                <br/>
                {/*<p className="mobileview" style={{fontSize:'1.1em',textAlign:'justify'}}>
                <Truncate
                    trimWhitespace={true}
                    lines={!expanded && lines}
                    ellipsis={(
                        <span>... <a href='#' onClick={this.toggleLines}>{more}</a></span>
                    )}
                    onTruncate={this.handleTruncate}
                >
                {ReactHtmlParser(ReactHtmlParser(this.state.roomdetail))}
                </Truncate>
                {!truncated && expanded && (
                    <span> <a href='#' onClick={this.toggleLines}>{less}</a></span>
                )} </p>*/}
                <p className="webview" style={{fontSize:'1.1em',textAlign:'justify'}}>{ReactHtmlParser(ReactHtmlParser(this.props.roomdetail))}</p>
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

export default Details;
