import '../Style/Boorder.css';
import { Container, Row, Col } from 'reactstrap';

const teamMembers = [
  {
    id: 1,
    image: "images/teaam-1.jpg",
    name: "Jackson Nash",
    position: "Tax Advice"
  },
  {
    id: 2,
    image: "images/teaam-2.jpg",
    name: "Jackson Nash",
    position: "Tax Advice"
  },
  {
    id: 3,
    image: "images/teaam-3.jpg",
    name: "Jackson Nash",
    position: "Tax Advice"
  },
  {
    id: 4,
    image: "images/teaam-4.jpg",
    name: "Jackson Nash",
    position: "Tax Advice"
  }
];

const Boorder = () => {
  return (
    <div className="boorder">
      <h1 className="text-center">Our Team</h1>
      <Container>
        <Row>
          {teamMembers.map((member) => (
            <Col key={member.id}>
              <div className="crea">
                <img src={member.image} className="img-fluid" alt={member.name} />
                <div className="overlay">
                  <div className="socialme">
                    <div><i className="fa fa-google-plus"></i></div>
                    <div><i className="fa fa-facebook"></i></div>
                    <div><i className="fa fa-twitter"></i></div>
                    <div><i className="fa fa-linkedin"></i></div>
                  </div>
                </div>
              </div>
              <div className="namee">
                <h5>{member.name}</h5>
                <p className="text-muted">{member.position}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Boorder;