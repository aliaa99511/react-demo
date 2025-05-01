import Slider from "react-slick";
import '../Style/QuoteCarousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "reactstrap";

interface QuoteData {
    imgSrc: string;
    text: string;
    name: string;
}

const QuoteCarousel = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    const quotes: QuoteData[] = [
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
        <div className="quote-carousel-section">
            <Container>
                <Slider {...sliderSettings} className="quote-slider">
                    {quotes.map((quote, index) => (
                        <div className="quote-slide" key={index}>
                            <img src={quote.imgSrc} alt={quote.name} className="quote-author-image" />
                            <p className="quote-text">{quote.text}</p>
                            <div className="rating-stars">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i}>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </span>
                                ))}
                            </div>
                            <h5 className="quote-author-name">{quote.name}</h5>
                        </div>
                    ))}
                </Slider>
            </Container>
        </div>
    );
};

export default QuoteCarousel;