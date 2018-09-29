import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './style.css'

class Rooms extends Component {
    constructor() {
        super();
        this.state = {
          roomarr : [],
          showmap : true,
          showschoolmap : false,
          showmallmap : false,
          showaddmap : false
        }
        this.renderdom = this.renderdom.bind(this);
    }

    renderdom() {
        var roomstemp = [];

        if(this.props.home.roomcontent.length > 0){
            this.props.home.roomcontent.map((roomtype,i)=>{
                if(roomstemp.indexOf(roomtype.roomID) == -1){
                    roomstemp.push(roomtype.roomID);
                    this.state.roomarr.push(roomtype);
                }
            })
        }

        return (
            <div>
                <div className="container webview">
                    <h1 style={{textAlign:'center',textTransform:'uppercase',fontSize:'3em',fontWeight:'600',color:'#002c5c'}}>{this.props.home.homecontent.aptgalleryhead}</h1>
                    <div class="row">
                        {
                            this.state.roomarr.map((roomtype,i)=>
                                <NavLink style={{cursor: 'pointer'}} to={{pathname : roomtype.room_url}} key={i}>
                                    <div class="col-sm-6" style={{padding:'20px 20px'}}>
                                        <br/>
                                        <br/>
                                        <img className="roomimgopa" style={{width:'100%',height:'450px'}} src={'http://res.cloudinary.com/' + this.props.home.admin.data.cloud_name + '/image/upload/w_545,h_450,c_fill/reputize/room/' + roomtype.imageURL}/>
                                        <div style={{minHeight:'110px',width:'70%',backgroundColor:'#fff',boxShadow:'rgb(153, 153, 153) 3px 2px 6px',right:'0',marginTop:'-125px',position:'absolute'}}>
                                            <div style={{padding:'10px 30px'}}>
                                                <h3 style={{color:'rgb(10, 50, 93)',fontSize: '2.2em',textTransform:'uppercase',textAlign:'left'}}>{roomtype.roomType}</h3>
                                                <p style={{color:'#000',fontSize: '1.2em',textTransform:'uppercase',textAlign:'left'}}>INR <font style={{fontSize:'1.7em'}}>{roomtype.roomPriceINR}</font> / Night</p>
                                            </div>
                                            <button class="btn newbookroombtn pull-right">BOOK NOW</button> 
                                        </div>
                                        <br/>
                                    </div>
                                </NavLink>
                            )
                        }
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

export default Rooms;
