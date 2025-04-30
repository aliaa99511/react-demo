import '../Style/Agency.css';
import { Container, Row, Col } from 'reactstrap';

const Agency = () => {
  const agents = [
    {
      id: 1,
      name: 'Carlos Henderson',
      image: 'images/team-1.jpg',
      role: 'listing',
      properties: '10 properties'
    },
    {
      id: 2,
      name: 'Sophia Rodriguez',
      image: 'images/team-2.jpg',
      role: 'sales',
      properties: '15 properties'
    },
    {
      id: 3,
      name: 'James Wilson',
      image: 'images/team-3.jpg',
      role: 'rentals',
      properties: '8 properties'
    },
    {
      id: 4,
      name: 'Emma Thompson',
      image: 'images/team-4.jpg',
      role: 'commercial',
      properties: '12 properties'
    }
  ];

  return (
    <div className="agen py-5">
      <div className="text-center mb-4">
        <h6 className="section-subtitle">───── AGENTS ─────</h6>
        <h2 className="section-title">Our Agents</h2>
      </div>

      <Container>
        <Row className="justify-content-center">
          {agents.map((agent) => (
            <Col 
              key={agent.id} 
              xs={12} 
              sm={6} 
              md={4} 
              lg={3} 
              className="mb-4 d-flex justify-content-center"
            >
              <div className="agent-card">
                <div className="agent-image-container">
                  <img 
                    src={agent.image} 
                    className="img-fluid agent-image" 
                    alt={agent.name} 
                    loading="lazy"
                  />
                </div>
                <div className="agent-info">
                  <h5 className="agent-name">{agent.name}</h5>
                  <div className="agent-details text-muted">
                    <p className="mb-1">{agent.role}</p>
                    <p>{agent.properties}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Agency;