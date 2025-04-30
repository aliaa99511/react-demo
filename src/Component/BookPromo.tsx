import '../Style/BookPromo.css';
import { Container, Row, Col } from 'reactstrap';

const BookPromoSection = () => {
  return (
    <div className="book-section">
      <Container>
        <Row className="partners-row">
          <Col><img src="images/partner-1.png" className="partner-logo img-fluid" alt="partner 1"/></Col>
          <Col><img src="images/partner-2.png" className="partner-logo img-fluid" alt="partner 2"/></Col>
          <Col><img src="images/partner-3.png" className="partner-logo img-fluid" alt="partner 3"/></Col>
          <Col><img src="images/partner-4.png" className="partner-logo img-fluid" alt="partner 4"/></Col>
        </Row>
        <Row className="book-content-row">
          <Col>
            <img src="images/hhhhh.jpg" className="book-cover img-fluid" alt="book illustration"/>
          </Col>
          <Col>
            <div className="book-description">
              <h1>About The Book</h1>
              <p className="text-muted">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              <h5>Award achievements</h5>
              <p className="text-muted">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <h5>Read On Any Devices</h5>
              <p className="text-muted">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <h5>Very High Resolution</h5>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
          </Col>
        </Row>
      </Container> 
    </div>
  );
};

export default BookPromoSection;