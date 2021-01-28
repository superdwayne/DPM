import React, { Component } from "react";
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';

class Slider extends Component {
    render() {
        return (
            <div className="width100">
                <AwesomeSlider cssModule={AwesomeSliderStyles} bullets={false}>
                    <div data-src="./images/login.png" />
                    <div data-src="./images/dashboard.png" />
                    <div data-src="./images/campaign_creation.png" />
                    <div data-src="./images/v1.mov" />
                </AwesomeSlider>
            </div>
        )
    }
}

export default Slider;