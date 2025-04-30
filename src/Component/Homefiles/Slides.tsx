import React, { Component } from 'react'
import '../Style/Slides.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Container, Media} from 'reactstrap';

export class Slides extends Component {

render() {
var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:3000,
    pauseOnHover: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

return (
<div>
  <div className="back1">
        <div className="ceen">
            <div className="kkk">
                <h6>Clients</h6>
                <h1>Kinds Words From Clients</h1>
            </div>
        </div>
   </div>

  <Container>
      <div className="slide">
        <Slider {...settings}  >
            <div className="sli">
                <div className="butt">
                    <i class="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <div className="local">
                    <p className="text-muted">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some </p>
                </div>
                <div className="medi">
                    <Media>
                        <Media left href="#">
                            <Media object src="images/person_1.jpg" className="img"/>
                        </Media>
                        <Media body>
                            <Media heading className="hido">Roger Scott</Media>
                            <div className="text-muted para">Markiting Manager</div> 
                        </Media>
                    </Media>
                </div>
            </div>

            <div className="sli">
                <div className="butt">
                    <i class="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <div className="local">
                    <p className="text-muted">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some </p>
                </div>
                <div className="medi">
                    <Media>
                        <Media left href="#">
                            <Media object src="images/person_2.jpg" className="img"/>
                        </Media>
                        <Media body>
                            <Media heading className="hido">Roger Scott</Media>
                            <div className="text-muted para">Markiting Manager</div> 
                        </Media>
                    </Media>
                </div>
            </div>
            <div className="sli">
                <div className="butt">
                    <i class="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <div className="local">
                    <p className="text-muted">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some </p>
                </div>
                <div className="medi">
                    <Media>
                        <Media left href="#">
                            <Media object src="images/person_3.jpg" className="img"/>
                        </Media>
                        <Media body>
                            <Media heading className="hido">Roger Scott</Media>
                            <div className="text-muted para">Markiting Manager</div> 
                        </Media>
                    </Media>
                </div>
            </div>
            <div className="sli">
                <div className="butt">
                    <i class="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <div className="local">
                    <p className="text-muted">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some </p>
                </div>
                <div className="medi">
                    <Media>
                        <Media left href="#">
                            <Media object src="images/person_4.jpg" className="img"/>
                        </Media>
                        <Media body>
                            <Media heading className="hido">Roger Scott</Media>
                            <div className="text-muted para">Markiting Manager</div> 
                        </Media>
                    </Media>
                </div>
            </div>
            <div className="sli">
                <div className="butt">
                    <i class="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <div className="local">
                    <p className="text-muted">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some </p>
                </div>
                <div className="medi">
                    <Media>
                        <Media left href="#">
                            <Media object src="images/person_1.jpg" className="img"/>
                        </Media>
                        <Media body>
                            <Media heading className="hido">Roger Scott</Media>
                            <div className="text-muted para">Markiting Manager</div> 
                        </Media>
                    </Media>
                </div>
            </div>
            <div className="sli">
                <div className="butt">
                    <i class="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <div className="local">
                    <p className="text-muted">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some </p>
                </div>
                <div className="medi">
                    <Media>
                        <Media left href="#">
                            <Media object src="images/person_2.jpg" className="img"/>
                        </Media>
                        <Media body>
                            <Media heading className="hido">Roger Scott</Media>
                            <div className="text-muted para">Markiting Manager</div> 
                        </Media>
                    </Media>
                </div>
            </div>
        </Slider>
    </div>
</Container>
</div>
);
    }
}

export default Slides


