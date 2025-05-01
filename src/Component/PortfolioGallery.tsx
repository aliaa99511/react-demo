import '../Style/PortfolioGallery.css';
import { Container, Row, Col } from 'reactstrap';

interface PortfolioItem {
    id: number;
    imgSrc: string;
}

const PortfolioGallery = () => {
  const portfolioItems = [
    { id: 1, imgSrc: "images/work_3_md.jpg" },
    { id: 2, imgSrc: "images/work_4_full.jpg" },
    { id: 3, imgSrc: "images/work_3_a_full.jpg" },
    { id: 4, imgSrc: "images/work_6_md.jpg" },
    { id: 5, imgSrc: "images/work_2_md.jpg" },
    { id: 6, imgSrc: "images/work_5_md.jpg" }
  ];

  const renderPortfolioItem = (item: PortfolioItem) => (
    <Col key={item.id}>
      <div className="portfolio-item">
        <img src={item.imgSrc} className="img-fluid" alt={`Portfolio item ${item.id}`} />
        <div className="portfolio-item-overlay">
          <div className="portfolio-item-content">
            <h6 className="portfolio-item-category">CATEGORY</h6>
            <h3 className="portfolio-item-title">Lorem ipsum dolor</h3>
            <div className="portfolio-item-icons">
              <span className="portfolio-icon"><i className="fa fa-share-square-o" aria-hidden="true"></i></span>
              <span className="portfolio-icon"><i className="fa fa-search" aria-hidden="true"></i></span>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );

  return (
    <div className="portfolio-gallery py-5">
      <h1 className="portfolio-gallery-heading">Featured Works</h1>
      <Container>
        <Row>
          {portfolioItems.slice(0, 3).map(renderPortfolioItem)}
        </Row>
        <Row>
          {portfolioItems.slice(3, 6).map(renderPortfolioItem)}
        </Row>
      </Container>
    </div>
  );
};

export default PortfolioGallery;