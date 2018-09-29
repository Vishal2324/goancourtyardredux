import React, {Component} from 'react';
import './style.css'
import {Arrow, Caption} from './subContainer';

class Carousel extends Component {

    renderdom() {

        return (
            <div id="myCarousel" className={['carousel', 'slide'].join(' ')} data-ride="carousel">
                <div className="carousel-inner carheight">
                    {
                        this.props.home.homeslider.map((imagepath,i)=>
                            <div className={['item', (i === 0 ? 'active' : '')].join(' ')} key={i}>
                                <img src={'http://res.cloudinary.com/' + this.props.home.admin.data.cloud_name + '/image/upload/h_750,w_1500,c_fill/reputize/homepage-slider/' + imagepath.hsimg + '.jpg'} className="carimage" alt="Los Angeles" style={{width:'100%'}} />
                                <Caption head={imagepath.hshead1} para={imagepath.hshead2}/>
                            </div> 
                        )
                    }
                </div>
                <Arrow/>
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

export default Carousel;
