import React, {Component} from 'react';
import './style.css'

class Service extends Component {
    constructor() {
        super();
    }

    renderdom() { 

        return (
            <div className="container-fluid">
                <h1 style={{textAlign:'center',textTransform:'uppercase',fontSize:'3em',fontWeight:'600',color:'#002c5c'}}>{this.props.home.homecontent.splheadmain}</h1>
                <br/>
                <div className="row" style={{height:'5px',backgroundColor:'rgba(0, 44, 92, 0.82)'}}>
                </div>
                <div className="row">
                    <div className="col-sm-4 servediv">
                        <div className="serviceimgopacity">
                            <div className="servicemove">
                                <p className="serviceh" style={{fontSize:'2.5em', textAlign:'left',fontFamily: 'DINlight'}}>{this.props.home.homecontent.splheadcorporate}</p>
                                <p className="servicep" style={{fontSize:'1.2em', textAlign:'left'}}>{this.props.home.homecontent.splheadcorporatecontent}</p>
                                <a href="#"><button className="btn btn-default servicebtnmove">READ MORE</button></a>
                            </div>
                        </div>
                        <img className="servedivimg" src={'http://res.cloudinary.com/' + this.props.home.admin.data.cloud_name + '/image/upload/w_600,h_350,c_fill/reputize/team_members/' + this.props.home.homecontent.image2} alt="Los Angeles"/>
                    </div> 
                    <div className="col-sm-4 servediv">
                        <div className="serviceimgopacity">
                            <div className="servicemove">
                                <p className="serviceh" style={{fontSize:'2.5em', fontFamily: 'DINlight'}}>{this.props.home.homecontent.splheadgoa}</p>
                                <p className="servicep" style={{fontSize:'1.2em', textAlign:'left'}}>{this.props.home.homecontent.splheadgoacontent}</p>
                                <a href="#"><button className="btn btn-default servicebtnmove">READ MORE</button></a>
                            </div>
                        </div>
                        <img className="servedivimg" src={'http://res.cloudinary.com/' + this.props.home.admin.data.cloud_name + '/image/upload/w_600,h_350,c_fill/reputize/team_members/' + this.props.home.homecontent.image3} alt="Los Angeles"/>
                    </div>
                    <div className="col-sm-4 servediv">
                        <div className="serviceimgopacity">
                            <div className="servicemove">
                                <p className="serviceh" style={{fontSize:'2.5em', fontFamily: 'DINlight'}}>{this.props.home.homecontent.splheadjp}</p>
                                <p className="servicep" style={{fontSize:'1.2em', textAlign:'left'}}>{this.props.home.homecontent.splheadjpcontent}</p>
                                <a href=""><button className="btn btn-default servicebtnmove">READ MORE</button></a>
                            </div>
                        </div>
                        <img className="servedivimg" src={'http://res.cloudinary.com/' + this.props.home.admin.data.cloud_name + '/image/upload/w_600,h_350,c_fill/reputize/team_members/' + this.props.home.homecontent.image4} alt="Los Angeles"/>
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

export default Service;
