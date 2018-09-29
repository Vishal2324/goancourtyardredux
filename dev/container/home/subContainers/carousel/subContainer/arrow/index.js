import React, {Component} from 'react';
import './style.css'

class Arrow extends Component {

    renderdom() {
        return (
            <div>
               <a className={['left', 'carousel-control'].join(' ')} href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className={['right', 'carousel-control'].join(' ')} href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
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


export default Arrow;
