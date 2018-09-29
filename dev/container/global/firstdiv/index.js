import React, {Component} from 'react';
import './style.css'

class FirstDiv extends Component {

    renderdom() {

        if (!this.props.firstdivobj) {
            return (<div></div>);
        }

        return (
            <div>
                <div className="aboutoverlay">
                    <h1 style={{color: '#ffffff',fontSize: '4.5em',fontWeight:700,textAlign:'center'}}>{this.props.firstdivobj.header}</h1>
                    <p style={{textAlign:'center',color: '#ffffff',fontSize: '1.4em',fontWeight:'500'}}>Home / {this.props.firstdivobj.page}</p>
                    <br/>
                </div>
                <div>
                    <img src="images/contactbg.jpeg" className="contactback" alt="roomsBackground"/>
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


export default FirstDiv;
