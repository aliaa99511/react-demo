import '../Style/Shapes.css';
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

const Shapes = () => {
  return (
    <div className="bacck">
      <Container fluid={true}>
        <Row>
          <Col lg="4" md="4" sm="6" xs="6">
            <img src="images/team-3.jpg" className="myimg img-fluid" alt="team" />
          </Col>
          <Col lg="8" md="12" sm="12" xs="12">
            <div className="aall">
              <h6>─────WHAT CHOOSE US─────</h6>
              <h1>Top Reason Why We Need to Get Virtual</h1>
              {reasons.map((reason, index) => (
                <div className="medi" key={index}>
                  <div className="icoonn">
                    <i className={reason.icon} aria-hidden="true"></i>
                  </div>
                  <div>
                    <h3>{reason.title}</h3>
                    <p className="text-muted">{reason.description}</p>
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

export default Shapes;