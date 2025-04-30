import '../Style/Build.css';
import { Container, Row, Col, Button } from 'reactstrap';

const Build = () => {
  const circleRows = Array(20).fill(null);

  return (
    <div className="builld">
      <Container>
        <Row>
          <Col>
            <div className="build1">
              <h5>───── ABOUT US</h5>
              <h1>52 YEARS OF EXPERIENCE IN THIS AREA</h1>
              <p className="text-muted">
                Brook presents your services with flexible, convenient and cdpoe layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfreplication of the designers is intended.
              </p>
              <Button color="danger" className="butt">─── ABOUT US</Button>{' '}
            </div>
          </Col>
          <Col>
            <div className="build2">
              <img src="images/popular33.png" className="img-fluid" alt="Building" />

              <div className="circ">
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

export default Build;