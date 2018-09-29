import React, {Component} from 'react';
import './style.css';
import ReactCardFlip from 'react-card-flip';
import { StarRatingFlip, AttractionFlip, RestFlip, AtmosFlip } from './subContainer';

class SectionTwo extends Component {
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
            <div style={{padding:'0px 50px'}}>
                <div className="row">
                    <StarRatingFlip star={this.props.home.homecontent.subhead1}/>
                    <AttractionFlip attract={this.props.home.homecontent.subhead2}/>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="row">
                    <RestFlip rest={this.props.home.homecontent.subhead3}/>
                    <AtmosFlip atmos={this.props.home.homecontent.subhead4}/>
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

export default SectionTwo;
