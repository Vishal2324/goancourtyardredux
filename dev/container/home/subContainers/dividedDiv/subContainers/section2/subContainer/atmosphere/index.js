import React, {Component} from 'react';
import './style.css';
import ReactCardFlip from 'react-card-flip';

class AtmosFlip extends Component {
    constructor() {
        super();
        this.state = {
          isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
        e.preventDefault();
        this.setState({ isFlipped: !this.state.isFlipped });
    }

    renderdom() {

        return (
            <div className="col-sm-6 icondivpad">
                <div style={{minHeight:'100px',padding: '5%'}}>
                    {/* <ScrollAnimation animateIn='slideInUp' animateOnce={true}> */}
                        <i style={{fontSize: '4em',color:'rgb(18, 181, 149)'}} className={['fa', 'fa-building-o'].join(' ')}></i>
                    {/* </ScrollAnimation> */}
                    <br/>
                    <br/>
                    {/* <ScrollAnimation animateIn='slideInUp' animateOnce={true}> */}
                        <p style={{fontSize:'1.2em',color:'#fff',textTransform:'uppercase'}}>{this.props.atmos}</p>
                    {/* </ScrollAnimation> */}
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

export default AtmosFlip;
