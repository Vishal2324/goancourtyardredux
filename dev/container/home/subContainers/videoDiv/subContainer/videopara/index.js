import React, {Component} from 'react';
import ReactHtmlParser from 'react-html-parser';
import './style.css'

class VideoPara extends Component {
    constructor() {
        super();
    }

    renderdom() { 
        return (
            <div className="col-sm-6 insidepara" style={{backgroundColor:'rgb(237, 246, 255)',boxShadow:'rgb(153, 153, 153) 3px 2px 6px',border:'5px solid #002c5e21', minHeight:'400px',marginTop:'40px',padding: '20px 80px'}}>
                <h1 style={{color:'#002c5c',fontSize: '2.8em',fontWeight: '600',textTransform: 'uppercase'}}>{this.props.home.homecontent.content1}</h1>
                <br/>
                <span style={{fontSize:'1.1em',textAlign:'justify',color:'#000'}}>{ReactHtmlParser(this.props.home.homecontent.awardcontent)}</span>
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

export default VideoPara;
