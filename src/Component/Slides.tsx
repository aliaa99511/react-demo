import React from 'react';
import '../Style/Slides.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container, Media } from 'reactstrap';

const Slides = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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

  const testimonials = [
    {
      id: 1,
      quote: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some",
      name: "Roger Scott",
      role: "Marketing Manager",
      image: "images/person_1.jpg"
    },
    {
      id: 2,
      quote: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some",
      name: "Roger Scott",
      role: "Marketing Manager",
      image: "images/person_2.jpg"
    },
    {
      id: 3,
      quote: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some",
      name: "Roger Scott",
      role: "Marketing Manager",
      image: "images/person_3.jpg"
    },
    {
      id: 4,
      quote: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some",
      name: "Roger Scott",
      role: "Marketing Manager",
      image: "images/person_4.jpg"
    },
    {
      id: 5,
      quote: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some",
      name: "Roger Scott",
      role: "Marketing Manager",
      image: "images/person_1.jpg"
    },
    {
      id: 6,
      quote: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some",
      name: "Roger Scott",
      role: "Marketing Manager",
      image: "images/person_2.jpg"
    }
  ];

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
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div className="sli" key={testimonial.id}>
                <div className="butt">
                  <i className="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <div className="local">
                  <p className="text-muted">{testimonial.quote}</p>
                </div>
                <div className="medi">
                  <Media>
                    <Media left href="#">
                      <Media object src={testimonial.image} className="img" alt={testimonial.name} />
                    </Media>
                    <Media body>
                      <Media heading className="hido">{testimonial.name}</Media>
                      <div className="text-muted para">{testimonial.role}</div>
                    </Media>
                  </Media>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Slides;