import React from "react";
import Slider from "react-slick";

import full01 from '../assets/images/fulls/01.jpg'
import form from '../assets/images/fulls/decidor_form.png'
import choices from '../assets/images/fulls/choices.png'
import final from '../assets/images/fulls/final.png'


class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          {/* <h3>1</h3> */}
          <img src={full01}></img>
        </div>
        <div>
          {/* <h3>2</h3> */}
          <img src={form}></img>
        </div>
        <div>
          {/* <h3>3</h3> */}
          <img src={choices}></img>
        </div>
        <div>
          {/* <h3>4</h3> */}
          <img src={final}></img>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider