import React, {Component} from 'react';
import './style.css'
import {NavLink} from 'react-router-dom';

class SimilarRoom extends Component {
    constructor() {
        super();
        this.state = {
            similarroom : []
        }
    }

    componentDidMount() {
        var similartemp = [];
        for(var i = 0; i < this.props.similardata.length; i++){
            if(similartemp.indexOf(this.props.similardata[i].roomID) == -1){
                this.state.similarroom.push(this.props.similardata[i]);
                similartemp.push(this.props.similardata[i].roomID);
            }
        }
        debugger;
    }

    renderdom() {
        return (
            <div>
                <h1 style={{fontSize:'3.2em',color:'rgb(0, 44, 92)'}}>SIMILAR ROOMS</h1>
                <hr style={{borderTop:'1px solid rgb(0, 44, 92)'}}/>
                <div className="container">
                    {
                        this.state.similarroom.map((roomtype,i)=>
                            <div>
                            <div id={'roomtarget' + i} ref={(section) => { roomtype.roomID = section; }} className="row" style={{boxShadow: '3px 2px 6px #999',backgroundColor:'#007aff12'}}>
                                <div className="col-sm-6" style={{padding:'2px 3px'}}>
                                <img style={{width: '100%',height: '280px',borderTopRightRadius: '50px',borderBottomLeftRadius: '50px'}} src={'http://res.cloudinary.com/' + this.props.cloudname + '/image/upload/w_600,h_355,c_fill/reputize/room/' + roomtype.imageURL}/>
                                </div>
                                <div className="col-sm-6" style={{marginTop:'5px',padding:'30px 50px'}}>
                                <div className="bookmarkRibbon">
                                    <NavLink style={{cursor: 'pointer'}} to={{pathname : roomtype.room_url}}><h3 style={{color:'#fff'}}>BOOK NOW</h3></NavLink>
                                </div>
                                <h3 style={{color:'#000',marginTop:'0px',textAlign:'left',textTransform:'uppercase',fontSize:'2.3em'}}>{roomtype.roomType}</h3>
                                <hr style={{borderTop:'1px solid #002c5cd1'}} className="webview"/>
                                <div className="row" style={{textAlign:'center'}}>
                                    {/* {
                                        roomtype.amenitypng.map((amen,i)=>
                                            <div className="col-xs-2 col-sm-2">
                                                <img src={'/images/' + amen.img} style={{height:'30px',width:'30px'}} title={amen.tooltip}/>
                                            </div>
                                        )
                                    } */}
                                </div>
                                <br/>
                                <p style={{fontSize:'1.2em',color:'#000',fontWeight:'500'}}>INR <font style={{fontSize:'1.8em'}}>{roomtype.roomPriceINR}</font> / Night</p> 
                                </div>
                            </div>
                            <br/>
                            <br/>
                            </div>
                            )
                        }
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

export default SimilarRoom;
