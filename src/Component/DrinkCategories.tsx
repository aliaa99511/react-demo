import '../Style/DrinkCategories.css';
import { Col, Container, Row } from 'reactstrap';

const DrinkCategories = () => {
  const drinkTypes = [
    { id: 1, name: 'Brandy', image: 'images/kind-1.jpg' },
    { id: 2, name: 'Gin', image: 'images/kind-2.jpg' },
    { id: 3, name: 'Rum', image: 'images/kind-3.jpg' },
    { id: 4, name: 'Tequila', image: 'images/kind-4.jpg' },
    { id: 5, name: 'Vodka', image: 'images/kind-5.jpg' },
    { id: 6, name: 'Brandy', image: 'images/kind-6.jpg' }
  ];

  return (
    <div className="drink-categories-section">
      <Container>
        <Row>
          {drinkTypes.map((drink) => (
            <Col key={drink.id}>
              <div className="drink-category">
                <img src={drink.image} alt={drink.name} className="drink-category-image" />
                <p className="drink-category-name">{drink.name}</p>
                <div className="drink-category-overlay"></div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default DrinkCategories;