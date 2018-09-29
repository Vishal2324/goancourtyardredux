import React, {Component} from 'react';
import './style.css'

class RoomServices extends Component {
    constructor() {
        super();
        this.state = {
            amenity : []
        }
    }

    componentDidMount() {
        var services = []
        services = this.props.roomservice.split('^');
        for(var l=0;l<services.length;l++){
            if(services[l] == "Wifi"){
                this.state.amenity.push({img : 'wifi.png' , tooltip : services[l]});
            }
            if(services[l] == "In Apartment Kitchen"){
                this.state.amenity.push({img : 'kitchen.png' , tooltip : services[l]});
            }
            if(services[l] == "Room Service"){
                this.state.amenity.push({img : 'roomservice.png' , tooltip : services[l]});
            }
            if(services[l] == "24x7 Security"){
                this.state.amenity.push({img : 'security.png' , tooltip : services[l]});
            }
            if(services[l] == "24x7 Reception"){
                this.state.amenity.push({img : 'reception.png' , tooltip : services[l]});
            }
            if(services[l] == "Gym"){
                this.state.amenity.push({img : 'gym.png' , tooltip : services[l]});
            }
            if(services[l] == "Free Breakfast"){
                this.state.amenity.push({img : 'breakfast.png' , tooltip : services[l]});
            }
            if(services[l] == "Swimming Pool"){
                this.state.amenity.push({img : 'swim.png' , tooltip : services[l]});
            }
            if(services[l] == "Free Meals"){
                this.state.amenity.push({img : 'food.png' , tooltip : services[l]});
            }
        }
    }

    renderdom() {
        return (
            <div>
                <h3 className="" style={{color:'rgb(0, 44, 92)'}}>SUPERIOR ROOM – TWO DOUBLE BEDS</h3>
                <hr style={{borderTop: '1px solid rgb(0, 44, 92)'}}/>
                <div className="row" style={{textAlign:'center'}}>
                    {
                        this.state.amenity.map((amen,i)=>
                            <div className="col-xs-2 col-sm-2">
                                <img src={'/images/' + amen.img} style={{height:'40px',width:'40px'}} title={amen.tooltip}/>
                            </div>
                        )
                    }
                </div>
                <hr style={{borderTop: '1px solid rgb(0, 44, 92)'}}/>
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

export default RoomServices;
