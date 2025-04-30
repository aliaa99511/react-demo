import Slider from "react-slick";
import '../Style/Carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "reactstrap";

interface SlideData {
    imgSrc: string;
    text: string;
    name: string;
}

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    const slidesData: SlideData[] = [
        {
            imgSrc: "images/lolo.jpg",
            text: "you can't succeed if you just do what others do and follow the-well-worn path. you need to create a new and original path for yourself",
            name: "CLIFFORD FRAZIER"
        },
        {
            imgSrc: "images/head3.jpg",
            text: "you can't succeed if you just do what others do and follow the-well-worn path. you need to create a new and original path for yourself",
            name: "CLIFFORD FRAZIER"
        },
        {
            imgSrc: "images/head33.jpg",
            text: "you can't succeed if you just do what others do and follow the-well-worn path. you need to create a new and original path for yourself",
            name: "CLIFFORD FRAZIER"
        }
    ];

    return (
        <div className="slide-area">
            <Container>
                <Slider {...settings} className="mysli">
                    {slidesData.map((slide, index) => (
                        <div className="single" key={index}>
                            <img src={slide.imgSrc} alt={slide.name} />
                            <p>{slide.text}</p>
                            <div className="myicon">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i}>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </span>
                                ))}
                            </div>
                            <h5>{slide.name}</h5>
                        </div>
                    ))}
                </Slider>
            </Container>
        </div>
    );
};

export default Carousel;