import React from 'react';
import '../Style/Storiees.css';
import { Col, Container, Row } from 'reactstrap';

const Storiees = () => {
  const drinkTypes = [
    { id: 1, name: 'Brandy', image: 'images/kind-1.jpg' },
    { id: 2, name: 'Gin', image: 'images/kind-2.jpg' },
    { id: 3, name: 'Rum', image: 'images/kind-3.jpg' },
    { id: 4, name: 'Tequila', image: 'images/kind-4.jpg' },
    { id: 5, name: 'Vodka', image: 'images/kind-5.jpg' },
    { id: 6, name: 'Brandy', image: 'images/kind-6.jpg' }
  ];

  return (
    <div>
      <div className="store">
        <Container>
          <Row>
            {drinkTypes.map((drink) => (
              <Col key={drink.id}>
                <div className="kind">
                  <img src={drink.image} alt={drink.name} className="img img-fluid" />
                  <p>{drink.name}</p>
                  <div className="overlay"></div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Storiees;