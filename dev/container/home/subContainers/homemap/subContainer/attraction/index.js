import React, {Component} from 'react';
import ReactHtmlParser from 'react-html-parser';


class MapAttraction extends Component {
    constructor(){
        super();
        this.state={
            showmap : true
        }
    }
    renderdom() {
        return (
            <div id="attraction" className={['col-xs-4','col-sm-3','mapunselect'].join(' ')} style={{cursor:'pointer'}}>
                <a style={{color:'#fff',cursor:'pointer',fontSize:'1.3em'}}><i className="fa fa-fire" aria-hidden="true"></i>{ReactHtmlParser('&nbsp;')} ATTRACTIONS</a>
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


export default MapAttraction;
