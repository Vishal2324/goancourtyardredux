import React, {Component} from 'react';
import './style.css';

class FormHead extends Component {

    constructor() {
        super();
    }   

    renderdom() {

        return (
            <div className="modal-header" style={{backgroundColor:'#fff',border:'none',minHeight:'100px'}}>
                <button type="button" className="btn pull-right bookingclosebtn" data-dismiss="modal"><i className="fa fa-times pull-left" aria-hidden="true" style={{marginTop: '3px',marginLeft:'3px'}}></i> CLOSE</button>
                <div className={['nav', 'navbar-nav','navbar-center','bookinglogo'].join(' ')}>
                    <img style={{height:'50px'}} src={'https://res.cloudinary.com/' + this.props.datahead.cloud_name + '/image/upload/h_100,w_219,c_fill/reputize/logo/' + this.props.datahead.logo_img + '.png'}/>
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


export default FormHead;
