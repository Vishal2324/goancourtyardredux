import React, {Component} from 'react';

class Profile extends Component {

    renderdom() {
        return (  
            <div>  
                <img src="/images/default.png" style={{height:'50px',width:'50px',backgroundColor:'#ddd',borderRadius:'50%',border: '2px solid #888'}} data-toggle="dropdown"/>
                <ul className="dropdown-menu">
                    <li style={{backgroundColor:'#ddd'}}>
                        <p>bajajvishal8@gmail.com</p>
                    </li>
                    <li><a href="/dashboard.html">Dashboard</a></li>
                    <li><a href="#" onClick={this.logOut}>Log Out <i className="fa fa-sign-out" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        );
    }

    render() {
        return (
            <li>
                {this.renderdom()}
            </li>
        );
    }

}


export default Profile;
