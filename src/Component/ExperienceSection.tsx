import '../Style/ExperienceSection.css';
import { Container, Row, Col, Button } from 'reactstrap';

const ExperienceSection = () => {
  const circleRows = Array(20).fill(null);

  return (
    <div className="experience-section">
      <Container>
        <Row>
          <Col>
            <div className="experience-content">
              <h5>───── ABOUT US</h5>
              <h1>52 YEARS OF EXPERIENCE IN THIS AREA</h1>
              <p className="text-muted">
                Brook presents your services with flexible, convenient and cdpoe layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfreplication of the designers is intended.
              </p>
              <Button color="danger" className="about-us-button">─── ABOUT US</Button>{' '}
            </div>
          </Col>
          <Col>
            <div className="experience-image-container">
              <img src="images/popular33.png" className="img-fluid building-image" alt="Building" />

              <div className="circle-pattern">
                {circleRows.map((_, index) => (
                  <p key={index}>
                    {Array(6).fill(null).map((_, circleIndex) => (
                      <i key={circleIndex} className="fa fa-circle" aria-hidden="true"></i>
                    ))}
                  </p>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ExperienceSection;