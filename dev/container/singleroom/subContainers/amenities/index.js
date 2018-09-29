import React, {Component} from 'react';
import './style.css';
import ReactHtmlParser from 'react-html-parser';

class Amenities extends Component {
    constructor() {
        super();
    }

    renderdom() {
        return (
            <div className="">
                <br/>
                <h2 style={{textAlign:'center'}}>Amenities & FEATURES</h2>
                <hr style={{backgroundColor:'#888888',height:'2px'}}/>
                <div className={['row',(this.props.amenity.propertyfeatures == '' ? 'hide' :'')].join(' ')}>
                    <div className={['col-sm-4','amenity'].join(' ')}>
                        <p style={{color: '#888888', fontWeight: 600, fontSize: '1.3em',marginLeft:'18px'}}>Hotel Features</p>
                    </div>
                    <div className="col-sm-8">
                        <p style={{fontSize: '1.1em',textAlign:'justify'}}>{ReactHtmlParser(ReactHtmlParser(this.props.amenity.propertyfeatures))}</p>
                    </div>
                </div>
                <hr style={{height: '2px', background: '#ddd'}}/>
                <div className={['row',(this.props.amenity.servicesnamenities == '' ? 'hide' :'')].join(' ')}>
                    <div className="col-sm-4">
                        <p style={{color: '#888888', fontWeight: 600, fontSize: '1.3em',marginLeft:'18px'}}>Hotel Services</p>
                    </div>    
                    <div className="col-sm-8">
                        <p style={{fontSize: '1.1em',textAlign:'justify'}}>{ReactHtmlParser(ReactHtmlParser(this.props.amenity.servicesnamenities))}</p>
                    </div>
                </div>
                <hr style={{height: '2px', background: '#ddd'}}/>
                <div className={['row',(this.props.amenity.safetynsecurity == '' ? 'hide' :'')].join(' ')}>
                    <div className="col-sm-4">
                        <p style={{color: '#888888', fontWeight: 600, fontSize: '1.3em',marginLeft:'18px'}}>Hotel Safety & Security</p>
                    </div>
                    <div className="col-sm-8">
                        <p style={{fontSize: '1.1em',textAlign:'justify'}}>{ReactHtmlParser(ReactHtmlParser(this.props.amenity.safetynsecurity))}</p>
                    </div>
                </div>
                <hr className={[(this.props.amenity.safetynsecurity == '' ? 'hide' :'')].join(' ')} style={{height: '2px', background: '#ddd'}}/>
                <div className={['row',(this.props.amenity.entertainmentleisure == '' ? 'hide' :'')].join(' ')}>
                    <div className="col-sm-4">
                        <p style={{color: '#888888', fontWeight: 600, fontSize: '1.3em',marginLeft:'18px'}}>Entertainment & Leisure</p>
                    </div>
                    <div className="col-sm-8">
                        <p style={{fontSize: '1.1em',textAlign:'justify'}}>{ReactHtmlParser(ReactHtmlParser(this.props.amenity.entertainmentleisure))}</p>
                    </div>
                </div>
                <hr className={[(this.props.amenity.entertainmentleisure == '' ? 'hide' :'')].join(' ')} style={{height: '2px', background: '#ddd'}}/>
                <div className={['row',(this.props.amenity.inapartmentfacilities == '' ? 'hide' :'')].join(' ')}>
                    <div className="col-sm-4">
                        <p style={{color: '#888888', fontWeight: 600, fontSize: '1.3em',marginLeft:'18px'}}>Room Features</p>
                    </div>
                    <div className="col-sm-8">
                        <p style={{fontSize: '1.1em',textAlign:'justify'}}>{ReactHtmlParser(ReactHtmlParser(this.props.amenity.inapartmentfacilities))}</p>
                    </div> 
                </div>
                {/*<hr className={[(this.props.home.property.inapartmentfacilities == '' ? 'hide' :'')].join(' ')} style={{height: '2px', background: '#ddd'}}/>*/}
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

export default Amenities;
