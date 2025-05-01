import '../Style/Testimonials.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container, Media } from 'reactstrap';

const Testimonials = () => {
  const sliderSettings = {
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
    <div className="testimonials-section">
      <div className="testimonials-header">
        <div className="header-overlay">
          <div className="header-content">
            <h6>Clients</h6>
            <h1>Kind Words From Clients</h1>
          </div>
        </div>
      </div>

      <Container>
        <div className="testimonials-slider">
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial) => (
              <div className="testimonial-card" key={testimonial.id}>
                <div className="quote-icon">
                  <i className="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <div className="testimonial-text">
                  <p className="text-muted">{testimonial.quote}</p>
                </div>
                <div className="testimonial-author">
                  <Media>
                    <Media left href="#">
                      <Media object src={testimonial.image} className="author-image" alt={testimonial.name} />
                    </Media>
                    <Media body>
                      <Media heading className="author-name">{testimonial.name}</Media>
                      <div className="text-muted author-role">{testimonial.role}</div>
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

export default Testimonials;