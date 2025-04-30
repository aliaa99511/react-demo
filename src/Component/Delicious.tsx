import '../Style/Delicious.css';
import { Container, Row, Col, Button } from 'reactstrap';

const Delicious = () => {
  const foodItems = [
    {
      id: 1,
      image: 'images/gallery1.png',
      price: '$25',
      title: 'Delicious Food',
      description: 'Ut enim ad minim veniam quis nostr.',
      className: 'seco1 seco',
      imgClass: 'high1 high img-fluid'
    },
    {
      id: 2,
      image: 'images/gallery2.png',
      price: '$25',
      title: 'Delicious Food',
      description: 'Ut enim ad minim veniam quis nostr.',
      className: 'seco2 seco',
      imgClass: 'high2 high img-fluid'
    },
    {
      id: 3,
      image: 'images/gallery3.png',
      price: '$25',
      title: 'Delicious Food',
      description: 'Ut enim ad minim veniam quis nostr.',
      className: 'seco3 seco',
      imgClass: 'low img-fluid'
    },
    {
      id: 4,
      image: 'images/gallery4.png',
      price: '$25',
      title: 'Delicious Food',
      description: 'Ut enim ad minim veniam quis nostr.',
      className: 'seco4 seco',
      imgClass: 'low img-fluid'
    }
  ];

  return (
    <div className="fluidd">
      <div className="ffirs">
        <Container>
          <h6>Our Offerd Menu</h6>
          <h1>Some Trendy And Popular Courses Offerd</h1>
        </Container>
      </div>
      <Container fluid={true}>
        <Row>
          {foodItems.map((item, index) => (
            <Col key={item.id}>
              <div className={item.className}>
                <img src={item.image} className={item.imgClass} alt={item.title} />
                <div className="overlay">
                  <div className="myflexx">
                    <div className="conten">
                      <h5>{item.price}</h5>
                      <h1>{item.title}</h1>
                      <p>{item.description}</p>
                      <div>
                        <Button color="danger" className="bott">Order Now</Button>
                      </div>
                    </div>
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

export default Delicious;