import React, {Component} from 'react';
import ReactHtmlParser from 'react-html-parser';


class SchoolMap extends Component {
    constructor(){
        super();
        this.state={
            showmap : true
        }
    }
    renderdom() {
        return (
            <div id="school" className={['col-xs-4','col-sm-3','mapunselect'].join(' ')} style={{cursor:'pointer'}} onClick={this.props.Onclick}>
                <a style={{color:'#fff',cursor:'pointer',fontSize:'1.3em'}}><i className="fa fa-university" aria-hidden="true"></i>{ReactHtmlParser('&nbsp;')}  Schools</a>
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


export default SchoolMap;
