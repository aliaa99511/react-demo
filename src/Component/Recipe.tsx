import React from 'react';
import '../Style/Recipe.css';
import { Container, Row, Col } from 'reactstrap';

const Recipe = () => {
  const recipeItems = [
    {
      id: 1,
      image: "images/imaage_2.jpg",
      date: "23 April 2020",
      title: "The Recipe from a Winemaker's Restaurant",
      description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
    },
    {
      id: 2,
      image: "images/imaage_1.jpg",
      date: "23 April 2020",
      title: "The Recipe from a Winemaker's Restaurant",
      description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
    },
    {
      id: 3,
      image: "images/imaage_3.jpg",
      date: "23 April 2020",
      title: "The Recipe from a Winemaker's Restaurant",
      description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
    },
    {
      id: 4,
      image: "images/imaage_4.jpg",
      date: "23 April 2020",
      title: "The Recipe from a Winemaker's Restaurant",
      description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
    }
  ];

  // Split the items into two rows of two items each
  const firstRow = recipeItems.slice(0, 2);
  const secondRow = recipeItems.slice(2, 4);

  return (
    <div className="recip">
      <Container>
        <Row>
          {firstRow.map(item => (
            <React.Fragment key={item.id}>
              <Col className="colimg">
                <img src={item.image} alt="Recipe" className="mg img-fluid"/>
              </Col>
              <Col>
                <div className="coonte">
                  <div className="icnn1 text-muted">
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                    <span> {item.date}</span>
                  </div>
                  <h5>{item.title}</h5>
                  <p className="text-muted">{item.description}</p>
                  <div className="icnn2">
                    <span>continue</span>
                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                  </div>
                </div>
              </Col>
            </React.Fragment>
          ))}
        </Row>
        <Row>
          {secondRow.map(item => (
            <React.Fragment key={item.id}>
              <Col className="colimg">
                <img src={item.image} alt="Recipe" className="mg img-fluid"/>
              </Col>
              <Col>
                <div className="coonte">
                  <div className="icnn1 text-muted">
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                    <span> {item.date}</span>
                  </div>
                  <h5>{item.title}</h5>
                  <p className="text-muted">{item.description}</p>
                  <div className="icnn2">
                    <span>continue</span>
                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                  </div>
                </div>
              </Col>
            </React.Fragment>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Recipe;