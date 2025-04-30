import '../Style/Offer.css';
import { Container, Media, Badge, CardImgOverlay, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Row, Col } from 'reactstrap';

const Offer = () => {
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
    <div className="boox py-5">
      <h6 className="toto">─────WHAT WE OFFER─────</h6>
      <h1 className="text-center tete">Featured Properties</h1>
      <Container>
        <Row>
            {properties.map(property => (
              <Col sm="12" md="6" lg="4" key={property.id} className="mb-4">
                <Card>
                  <CardImg top width="100%" src={property.image} height="242px" />

                  <CardImgOverlay>
                    <CardTitle><h5><Badge color={property.color}>{property.type}</Badge></h5></CardTitle>
                    <CardText className="mo">
                      <h5><Badge color="light"><span className="heh">{property.price}</span>/mo</Badge></h5>
                    </CardText>
                  </CardImgOverlay>

                  <CardBody>
                    <div className="link">
                      <i className="fa fa-link" aria-hidden="true"></i>
                    </div>
                    <div className="mute">
                      <CardTitle className="text-muted">{property.details}</CardTitle>
                      <CardSubtitle>{property.title}</CardSubtitle>
                      <CardText className="text-muted">{property.location}</CardText>
                    </div>
                    <hr />
                    <Media>
                      <Media left href="#">
                        <Media object src={property.agentImage} className="img" />
                      </Media>
                      <Media body>
                        <Media className="text-muted">
                          <span className="myspann">{property.agentName}</span>
                          <span className="week">{property.posted}</span>
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

export default Offer;