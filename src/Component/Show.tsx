import '../Style/Show.css';
import { Container, Row, Col } from 'reactstrap';

const services = [
  {
    id: 1,
    icon: 'fa fa-rocket fa-2x',
    title: 'Dog Walking',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right.',
    className: 'son son1',
    icon1: 'icon1',
    icon2: 'icon2'
  },
  {
    id: 2,
    icon: 'fa fa-cogs fa-2x',
    title: 'Pet Daycare',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right.',
    className: 'son son2',
    icon1: 'icon11',
    icon2: 'icon22'
  },
  {
    id: 3,
    icon: 'fa fa-diamond fa-2x',
    title: 'Pet Grooming',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right.',
    className: 'son son2',
    icon1: 'icon11',
    icon2: 'icon22'
  }
];

const Show = () => {
  return (
    <div className="per">
      <Container>
        <Row>
          {services.map((service) => (
            <Col key={service.id}>
              <div className={service.className}>
                <div className={service.icon1}>
                  <i className={service.icon} aria-hidden="true"></i>
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <div className={service.icon2}>
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Show;