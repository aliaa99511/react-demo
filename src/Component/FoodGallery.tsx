import '../Style/FoodGallery.css';
import { Container, Row, Col, Button } from 'reactstrap';

const FoodGallery = () => {
  const foodItems = [
    {
      id: 1,
      image: 'images/gallery1.png',
      price: '$25',
      title: 'Delicious Food',
      description: 'Ut enim ad minim veniam quis nostr.',
      containerClass: 'food-item food-item-large',
      imgClass: 'food-img-large img-fluid'
    },
    {
      id: 2,
      image: 'images/gallery2.png',
      price: '$25',
      title: 'Delicious Food',
      description: 'Ut enim ad minim veniam quis nostr.',
      containerClass: 'food-item food-item-large',
      imgClass: 'food-img-large img-fluid'
    },
    {
      id: 3,
      image: 'images/gallery3.png',
      price: '$25',
      title: 'Delicious Food',
      description: 'Ut enim ad minim veniam quis nostr.',
      containerClass: 'food-item food-item-small',
      imgClass: 'food-img-small img-fluid'
    },
    {
      id: 4,
      image: 'images/gallery4.png',
      price: '$25',
      title: 'Delicious Food',
      description: 'Ut enim ad minim veniam quis nostr.',
      containerClass: 'food-item food-item-small',
      imgClass: 'food-img-small img-fluid'
    }
  ];

  return (
    <div className="food-gallery-container">
      <div className="food-gallery-header">
        <Container>
          <h6 className="food-gallery-subtitle">Our Offered Menu</h6>
          <h1 className="food-gallery-title">Some Trendy And Popular Courses Offered</h1>
        </Container>
      </div>
      <Container fluid={true}>
        <Row>
          {foodItems.slice(0, 2).map((item) => (
            <Col key={item.id}>
              <div className={item.containerClass}>
                <img src={item.image} className={item.imgClass} alt={item.title} />
                <div className="food-item-overlay">
                  <div className="food-item-content-container">
                    <div className="food-item-content">
                      <h5 className="food-item-price">{item.price}</h5>
                      <h1 className="food-item-name">{item.title}</h1>
                      <p className="food-item-description">{item.description}</p>
                      <div>
                        <Button color="danger" className="order-button">Order Now</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
          <Col>
            {foodItems.slice(2).map((item) => (
              <div key={item.id} className={item.containerClass}>
                <img src={item.image} className={item.imgClass} alt={item.title} />
                <div className="food-item-overlay">
                  <div className="food-item-content-container">
                    <div className="food-item-content">
                      <h5 className="food-item-price">{item.price}</h5>
                      <h1 className="food-item-name">{item.title}</h1>
                      <p className="food-item-description">{item.description}</p>
                      <div>
                        <Button color="danger" className="order-button">Order Now</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FoodGallery;