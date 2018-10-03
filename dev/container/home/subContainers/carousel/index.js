import React,{Component} from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './slider-animations.css';
import './style.css';

class Carousel extends Component {

    renderdom() {
        return (
            <div>
                <Slider className="slider-wrapper">
                    {this.props.home.homeslider.map((item, index) => (
                        <div
                            key={index}
                            className="slider-content"
                            style={{ background: `url('${'http://res.cloudinary.com/' + this.props.home.admin.data.cloud_name + '/image/upload/h_750,w_1500,c_fill/reputize/homepage-slider/' + item.hsimg + '.jpg'}') no-repeat center center` }}
                        >
                            <div className="inner">
                                <h1>{item.hshead1}</h1>
                                <p>{item.hshead2}</p>
                                <button>Read More</button>
                            </div>
                        </div>
                    ))}
                </Slider>
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
