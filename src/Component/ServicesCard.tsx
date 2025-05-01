import '../Style/ServicesCard.css';
import { Container, Row, Col } from 'reactstrap';

const services = [
  {
    id: 1,
    icon: 'fa fa-rocket fa-2x',
    title: 'Dog Walking',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right.',
    cardClass: 'service-card highlighted-card',
    iconContainerClass: 'icon-container highlighted-icon-container',
    actionIconClass: 'action-icon highlighted-action-icon'
  },
  {
    id: 2,
    icon: 'fa fa-cogs fa-2x',
    title: 'Pet Daycare',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right.',
    cardClass: 'service-card standard-card',
    iconContainerClass: 'icon-container standard-icon-container',
    actionIconClass: 'action-icon standard-action-icon'
  },
  {
    id: 3,
    icon: 'fa fa-diamond fa-2x',
    title: 'Pet Grooming',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right.',
    cardClass: 'service-card standard-card',
    iconContainerClass: 'icon-container standard-icon-container',
    actionIconClass: 'action-icon standard-action-icon'
  }
];

const ServicesCard = () => {
  return (
    <div className="services-section">
      <Container>
        <Row>
          {services.map((service) => (
            <Col key={service.id}>
              <div className={service.cardClass}>
                <div className={service.iconContainerClass}>
                  <i className={service.icon} aria-hidden="true"></i>
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <div className={service.actionIconClass}>
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

export default ServicesCard;