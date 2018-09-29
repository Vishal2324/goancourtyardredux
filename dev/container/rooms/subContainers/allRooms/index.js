import React, {Component} from 'react';
import Slider from 'react-slick';
import {NavLink} from "react-router-dom";
import './style.css'

class AllRoom extends Component {
    constructor() {
        super();
        this.state = {
          roompagearr : []
        }
        this.renderdom = this.renderdom.bind(this);
    }
    renderdom() {
        var roomstemp = [];
        var roomobj = {};
        var servicesettings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay:true,
          centerMode:false,
          lazyLoad:false,
        }
        
        if (!this.props.home) {
          return (<div></div>);
        }
        
        if(this.props.home.roomcontent.length > 0){
            this.props.home.roomcontent.map((roomtype,i)=>
                {
                    if(roomstemp.indexOf(roomtype.roomID) == -1){
                        var roomimages = [];
                        this.props.home.roomcontent.map((roomimg,j)=>
                            {
                                if(roomtype.roomID == roomimg.roomID){
                                    roomimages.push({imgalt: roomimg.imageAlt , imagetype : roomimg.imageType , imageurl : roomimg.imageURL});
                                }
                            }
                        )
                        roomobj = roomtype
                        roomobj.images = [];
                        roomobj.images = roomimages
                        this.state.roompagearr.push(roomobj);
                        roomstemp.push(roomtype.roomID);
                    }
                }
            )
            this.state.roompagearr.map((icon,k)=>
                {
                    var roomamenity = [];
                    icon.amenitypng = [];
                    roomamenity = icon.roomAmenties.split('^');
                    for(var l=0;l<roomamenity.length;l++){
                        if(roomamenity[l] == "Wifi"){
                          icon.amenitypng.push({img : 'wifi.png' , tooltip : roomamenity[l]});
                        }
                        if(roomamenity[l] == "In Apartment Kitchen"){
                            icon.amenitypng.push({img : 'kitchen.png' , tooltip : roomamenity[l]});
                        }
                        if(roomamenity[l] == "Room Service"){
                            icon.amenitypng.push({img : 'roomservice.png' , tooltip : roomamenity[l]});
                        }
                        if(roomamenity[l] == "24x7 Security"){
                            icon.amenitypng.push({img : 'security.png' , tooltip : roomamenity[l]});
                        }
                        if(roomamenity[l] == "24x7 Reception"){
                            icon.amenitypng.push({img : 'reception.png' , tooltip : roomamenity[l]});
                        }
                        if(roomamenity[l] == "Gym"){
                            icon.amenitypng.push({img : 'gym.png' , tooltip : roomamenity[l]});
                        }
                        if(roomamenity[l] == "Free Breakfast"){
                            icon.amenitypng.push({img : 'breakfast.png' , tooltip : roomamenity[l]});
                        }
                        if(roomamenity[l] == "Swimming Pool"){
                            icon.amenitypng.push({img : 'swim.png' , tooltip : roomamenity[l]});
                        }
                        if(roomamenity[l] == "Free Meals"){
                            icon.amenitypng.push({img : 'food.png' , tooltip : roomamenity[l]});
                        }
                    }
                }
            )
        }
        return (
            <div className="container"> 
                <div>
                    {
                        this.state.roompagearr.map((roomtype,i)=>
                            <div>
                                <div id={'roomtarget' + i} className="row" style={{boxShadow: '3px 2px 6px #999',backgroundColor:'#007aff12'}}>
                                    <div className="col-sm-6" style={{padding:'2px 3px'}}>
                                        <Slider {...servicesettings} className="multiple-items nomarginbottom" style={{marginBottom:'-5px'}}>
                                            {
                                                roomtype.images.map((roomtypeimg,i)=>
                                                    <div>
                                                        <img className="" alt={roomtypeimg.imgalt} style={{width: '100%',height: '280px'}} src={'http://res.cloudinary.com/' + this.props.home.admin.data.cloud_name + '/image/upload/w_600,h_355,c_fill/reputize/room/' + roomtypeimg.imageurl + '.jpeg'}/>
                                                    </div>
                                                ) 
                                            }
                                        </Slider>
                                    </div>
                                    <div className="col-sm-6" style={{marginTop:'5px',padding:'30px 50px'}}>
                                        <div className="bookmarkRibbon">
                                            <NavLink style={{cursor: 'pointer'}} to={{pathname : roomtype.room_url}}><h3 style={{color:'#fff'}}>BOOK NOW</h3></NavLink>
                                        </div>
                                        <h3 style={{color:'#000',marginTop:'0px',textAlign:'left',textTransform:'uppercase',fontSize:'2.3em'}}>{roomtype.roomType}</h3>
                                        <hr style={{borderTop:'1px solid #002c5cd1'}} className="webview"/>
                                        <br/>
                                        <div className="row" style={{textAlign:'center'}}>
                                            {
                                                roomtype.amenitypng.map((amen,i)=>
                                                    <div className="col-xs-2 col-sm-2">
                                                        <img src={'/images/' + amen.img} style={{height:'30px',width:'30px'}} title={amen.tooltip}/>
                                                    </div>
                                                )
                                            }
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

export default AllRoom;
