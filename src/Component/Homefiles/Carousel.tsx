import React, { Component } from "react";
import Slider from "react-slick";
import '../Style/Carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "reactstrap";


class Carousel extends Component {
render() {
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
};
return (
<div className="slide-area">
<Container>
    <Slider {...settings} className="mysli">
            <div className="single">
                <img src="images/lolo.jpg"/>
                <p>you can't succeed if you just do what others do and follow the-well-worn path. you need to create a new and original path for yourself</p>
                <div className="myicon">
                    <span><i class="fa fa-star" aria-hidden="true"></i></span>
                    <span><i class="fa fa-star" aria-hidden="true"></i></span>
                    <span><i class="fa fa-star" aria-hidden="true"></i></span>
                    <span><i class="fa fa-star" aria-hidden="true"></i></span>
                    <span><i class="fa fa-star" aria-hidden="true"></i></span>
                </div>
                <h5>CLIFFORD FRAZIER</h5>
            </div>
            <div className="single">
                <img src="images/head3.jpg"/>
                <p>you can't succeed if you just do what others do and follow the-well-worn path. you need to create a new and original path for yourself</p>
                <div className="myicon">
                    <span><i class="fa fa-star" aria-hidden="true"></i></span>
                    <span><i class="fa fa-star" aria-hidden="true"></i></span>
                    <span><i class="fa fa-star" aria-hidden="true"></i></span>
                    <span><i class="fa fa-star" aria-hidden="true"></i></span>
                    <span><i class="fa fa-star" aria-hidden="true"></i></span>
                </div>
                <h5>CLIFFORD FRAZIER</h5>
            </div>
            <div className="single">
                <img src="images/head33.jpg"/>
                <p>you can't succeed if you just do what others do and follow the-well-worn path. you need to create a new and original path for yourself</p>
                <div className="myicon">
                    <span><i class="fa fa-star" aria-hidden="true"></i></span>
                    <span><i class="fa fa-star" aria-hidden="true"></i></span>
                    <span><i class="fa fa-star" aria-hidden="true"></i></span>
                    <span><i class="fa fa-star" aria-hidden="true"></i></span>
                    <span><i class="fa fa-star" aria-hidden="true"></i></span>
                </div>
                <h5>CLIFFORD FRAZIER</h5>
            </div>

        </Slider>
    </Container>
    </div>
);
  }
}

export default Carousel

