import React, {Component} from 'react';
import './style.css';

class SelectRoom extends Component {

    constructor() {
        super();
    }   

    renderdom() {
        
        return (
            <div>
                <label style={{fontSize: '1.2em'}}>Choose Your Room</label>
                <select id="formroom" className="form-control forminput" onChange={this.formRoomSelect}>
                    <option value="" disabled selected>Select Your Room</option>
                    {
                        this.props.rooms.map((roomdata,j)=>
                        <option key={j} value={roomdata.roomID}>{roomdata.roomType}</option>
                        )
                    }
                </select>
                {/*<div style={{marginTop:'5px'}}><span style={{color:'#d41b1b'}}>{this.state.roomvalueError}</span></div>*/}
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


export default SelectRoom;
