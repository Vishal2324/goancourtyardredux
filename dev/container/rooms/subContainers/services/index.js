import React, {Component} from 'react';
import './style.css'

class Services extends Component {

    renderdom() {

        return (
            <div className="container">
                <div className="row needpadding">
                    <div className="col-sm-3" style={{boxShadow: 'rgba(153, 153, 153, 0.48) 3px 2px 6px',padding: '10px 20px'}}>
                        <div className="row">
                            <div className="col-sm-3">
                                <i className="fa fa-phone pull-left" style={{fontSize: '4em', color: 'rgb(18, 181, 149)'}}></i>
                            </div>
                            <div className="col-sm-9">
                                <h3 style={{color:'rgb(0, 44, 92)',fontSize: '1.5em',fontWeight:'600'}}>BUISNESS CENTRE</h3>
                            </div>
                        </div>
                        <hr style={{borderTop:'1px solid #002c5cd1'}}/>
                        <p style={{textAlign:'justify',fontSize:'1.2em'}}>Our business centre will let you organise and conduct your meetings and seminars to its best and flawless.</p>
                    </div>
                    <div className="col-sm-3" style={{boxShadow: 'rgba(153, 153, 153, 0.48) 3px 2px 6px',padding: '10px 20px'}}>
                        <div className="row">
                            <div className="col-sm-3">
                                <i className="material-icons pull-left" style={{fontSize: '4em', color: 'rgb(18, 181, 149)'}}></i>
                            </div>
                            <div className="col-sm-9">
                                <h3 style={{color:'rgb(0, 44, 92)',fontWeight:'600',fontSize: '1.5em'}}>CENTRAL LOCATIONS</h3>
                            </div>
                        </div>
                        <h3 style={{color:'rgb(0, 44, 92)',fontWeight:'600'}}> </h3>
                        <hr style={{borderTop:'1px solid #002c5cd1'}}/>
                        <p style={{textAlign:'justify',fontSize:'1.2em'}}>Our business centre will let you organise and conduct your meetings and seminars to its best and flawless.</p>
                    </div>
                    <div className="col-sm-3" style={{boxShadow: 'rgba(153, 153, 153, 0.48) 3px 2px 6px',padding: '10px 20px'}}>       
                        <div className="row">
                            <div className="col-sm-3">
                                <i className="fa fa-cutlery pull-left" style={{fontSize: '4em', color: 'rgb(18, 181, 149)'}}></i>
                            </div>
                            <div className="col-sm-9">
                                <h3 style={{color:'rgb(0, 44, 92)',fontWeight:'600',fontSize: '1.5em'}}>GREAT AMENITIES</h3>
                            </div>
                        </div> 
                        <hr style={{borderTop:'1px solid #002c5cd1'}}/>
                        <p style={{textAlign:'justify',fontSize:'1.2em'}}>Our business centre will let you organise and conduct your meetings and seminars to its best and flawless.</p>
                    </div>
                    <div className="col-sm-3" style={{boxShadow: 'rgba(153, 153, 153, 0.48) 3px 2px 6px',padding: '10px 20px'}}>
                        <div className="row">
                            <div className="col-sm-3">
                                <i className="fa fa-building-o pull-left" style={{fontSize: '4em', color: 'rgb(18, 181, 149)'}}></i>
                            </div>
                            <div className="col-sm-9">
                                <h3 style={{color:'rgb(0, 44, 92)',fontWeight:'600',fontSize: '1.5em'}}>Affordable Prices</h3>
                            </div>
                        </div>
                        <hr style={{borderTop:'1px solid #002c5cd1'}}/>
                        <p style={{textAlign:'justify',fontSize:'1.2em'}}>Our business centre will let you organise and conduct your meetings and seminars to its best and flawless.</p>
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

export default Services;
