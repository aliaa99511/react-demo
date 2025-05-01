import '../Style/FeaturedProperties.css';
import { Container, Media, Badge, CardImgOverlay, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Row, Col } from 'reactstrap';

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      image: "images/work-1.jpg",
      type: "Rent",
      color: "info",
      price: "$300",
      details: "3  2  1,878 sqft",
      title: "The Blue Sky Home",
      location: "Oakland",
      agentImage: "images/person_1.jpg",
      agentName: "John Dorf",
      posted: "2 weeks ago"
    },
    {
      id: 2,
      image: "images/work-2.jpg",
      type: "Sale",
      color: "danger",
      price: "$300",
      details: "3  2  1,878 sqft",
      title: "The Blue Sky Home",
      location: "Oakland",
      agentImage: "images/person_2.jpg",
      agentName: "John Dorf",
      posted: "2 weeks ago"
    },
    {
      id: 3,
      image: "images/work-3.jpg",
      type: "Rent",
      color: "info",
      price: "$300",
      details: "3  2  1,878 sqft",
      title: "The Blue Sky Home",
      location: "Oakland",
      agentImage: "images/person_3.jpg",
      agentName: "John Dorf",
      posted: "2 weeks ago"
    }
  ];

  return (
    <div className="featured-properties">
      <h6 className="featured-properties__subtitle">─────WHAT WE OFFER─────</h6>
      <h1 className="featured-properties__title">Featured Properties</h1>
      <Container>
        <Row>
            {properties.map(property => (
              <Col sm="12" md="6" lg="4" key={property.id} className="mb-4">
                <Card className="property-card">
                  <CardImg top width="100%" src={property.image} height="242px" />

                  <CardImgOverlay className="property-card__overlay">
                    <CardTitle><h5><Badge color={property.color}>{property.type}</Badge></h5></CardTitle>
                    <CardText className="property-card__price">
                      <h5><Badge color="light"><span className="property-card__price-amount">{property.price}</span>/mo</Badge></h5>
                    </CardText>
                  </CardImgOverlay>

                  <CardBody className="property-card__body">
                    <div className="property-card__action">
                      <i className="fa fa-link" aria-hidden="true"></i>
                    </div>
                    <div className="property-card__details">
                      <CardTitle className="property-card__meta">{property.details}</CardTitle>
                      <CardSubtitle className="property-card__name">{property.title}</CardSubtitle>
                      <CardText className="property-card__location">{property.location}</CardText>
                    </div>
                    <hr />
                    <Media className="property-card__agent">
                      <Media left href="#">
                        <Media object src={property.agentImage} className="property-card__agent-avatar" />
                      </Media>
                      <Media body>
                        <Media className="property-card__agent-info">
                          <span className="property-card__agent-name">{property.agentName}</span>
                          <span className="property-card__posted-date">{property.posted}</span>
                        </Media>
                      </Media>
                    </Media>
                  </CardBody>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedProperties;