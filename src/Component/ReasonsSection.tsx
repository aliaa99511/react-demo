import '../Style/ReasonsSection.css';
import { Container, Row, Col } from 'reactstrap';

const reasons = [
  {
    icon: 'fa fa-id-card-o fa-2x',
    title: 'Get Decided Business Results',
    description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia'
  },
  {
    icon: 'fa fa-briefcase fa-2x',
    title: 'Get Decided Business Results',
    description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia'
  },
  {
    icon: 'fa fa-calculator fa-2x',
    title: 'Get Decided Business Results',
    description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia'
  },
  {
    icon: 'fa fa-camera-retro fa-2x',
    title: 'Get Decided Business Results',
    description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia'
  }
];

const ReasonsSection = () => {
  return (
    <div className="reasons-section">
      <Container fluid={true}>
        <Row>
          <Col lg="4" md="4" sm="6" xs="6">
            <img src="images/team-3.jpg" className="reasons-image img-fluid" alt="team" />
          </Col>
          <Col lg="8" md="12" sm="12" xs="12">
            <div className="reasons-content">
              <h6 className="reasons-subtitle">─────WHAT CHOOSE US─────</h6>
              <h1 className="reasons-title">Top Reason Why We Need to Get Virtual</h1>
              {reasons.map((reason, index) => (
                <div className="reason-item" key={index}>
                  <div className="reason-icon-container">
                    <i className={reason.icon} aria-hidden="true"></i>
                  </div>
                  <div className="reason-text">
                    <h3 className="reason-item-title">{reason.title}</h3>
                    <p className="reason-item-description">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ReasonsSection;