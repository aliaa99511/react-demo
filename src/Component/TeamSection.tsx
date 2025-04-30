import '../Style/TeamSection.css';
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

const TeamSection = () => {
  return (
    <div className="team-section py-5">
      <h1 className="team-section__title">Our Team</h1>
      <Container>
        <Row className="justify-content-center">
          {teamMembers.map((member) => (
            <Col key={member.id} lg="3" md="6" className="team-section__col">
              <div className="team-section__member-card">
                <img src={member.image} className="team-section__member-img" alt={member.name} />
                <div className="team-section__member-overlay">
                  <div className="team-section__social-links">
                    <div className="team-section__social-icon"><i className="fa fa-google-plus"></i></div>
                    <div className="team-section__social-icon"><i className="fa fa-facebook"></i></div>
                    <div className="team-section__social-icon"><i className="fa fa-twitter"></i></div>
                    <div className="team-section__social-icon"><i className="fa fa-linkedin"></i></div>
                  </div>
                </div>
              </div>
              <div className="team-section__member-info">
                <h5 className="team-section__member-name">{member.name}</h5>
                <p className="team-section__member-position">{member.position}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TeamSection;