import React from 'react';
import '../Style/FeatureCards.css';
import { Container, Row, Col } from 'reactstrap';

const FeatureCards = () => {
  const cardData = [
    {
      id: 1,
      image: 'images/download1.jpg',
      category: 'hotel',
      text: 'Ut enim ad minim veniam, quis nostrud',
      date: '19th march, 2019',
      order: 'image-first'
    },
    {
      id: 2,
      image: 'images/6.jpg',
      category: 'restaurant',
      text: 'Ut enim ad minim veniam, quis nostrud',
      date: '19th march, 2019',
      order: 'image-first'
    },
    {
      id: 3,
      image: 'images/london.jpg',
      category: 'Travel',
      text: 'Ut enim ad minim veniam, quis nostrud',
      date: '19th march, 2019',
      order: 'content-first'
    },
    {
      id: 4,
      image: 'images/7.jpg',
      category: 'Booking',
      text: 'Ut enim ad minim veniam, quis nostrud',
      date: '19th march, 2019',
      order: 'content-first'
    }
  ];

  return (
    <div className="feature-cards-section">
      <Container>
        <Row>
          {cardData.map((card) => (
            <React.Fragment key={card.id}>
              {card.order === 'image-first' ? (
                <>
                  <Col>
                    <img src={card.image} className="feature-card-img" alt={card.category} />
                  </Col>
                  <Col>
                    <div className="feature-card-content">
                      <div className="feature-card-category">{card.category}</div>
                      <p className="feature-card-text">{card.text}</p>
                      <small className="feature-card-date">{card.date}</small>
                      <h5 className="feature-card-link">Read More</h5>
                    </div>
                  </Col>
                </>
              ) : (
                <>
                  <Col>
                    <div className="feature-card-content">
                      <div className="feature-card-category">{card.category}</div>
                      <p className="feature-card-text">{card.text}</p>
                      <small className="feature-card-date">{card.date}</small>
                      <h5 className="feature-card-link">Read More</h5>
                    </div>
                  </Col>
                  <Col>
                    <img src={card.image} className="feature-card-img" alt={card.category} />
                  </Col>
                </>
              )}
            </React.Fragment>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FeatureCards;