import React, {Component} from 'react';
// import {SectionOne, SectionTwo} from './subContainers';
import './style.css'

class PopOver extends Component {

    renderdom() {
        return (
            <div className="container-fluid iconnav">
                <div className="row">
                    <div className="col-sm-5">
                        <div className="col-sm-6 nearbyoverlay">
                            <p style={{color:'#fff'}}>STAR RATINGS <i class="fa fa-angle-up pull-right"></i></p>
                        </div>
                        {/* <div className="col-sm-6 nearbyoverlay">
                            <p style={{color:'#fff'}}>NEAR BY ATTRACTIONS <i class="fa fa-angle-up pull-right"></i></p>
                        </div> */}
                    </div>
                    {/* <div className="col-sm-2" style={{textAlign:'center'}}>
                        <button type="button" className="btn" style={{backgroundColor:'transparent',color:'#fff',fontSize:'3em'}}><i class="fa fa-angle-down"></i></button>
                    </div>
                    <div className="col-sm-5">
                        <div className="col-sm-6 nearbyoverlay">
                            <p style={{color:'#fff'}}>NEARBY RESTAURANTS <i class="fa fa-angle-up pull-right"></i></p>
                        </div>
                        <div className="col-sm-6 nearbyoverlay">
                            <p style={{color:'#fff'}}>BEAUTIFUL ATMOSPHERE <i class="fa fa-angle-up pull-right"></i></p>
                        </div>
                    </div> */}
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


export default PopOver;
