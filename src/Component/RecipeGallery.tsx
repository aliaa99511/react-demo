import React from 'react';
import '../Style/RecipeGallery.css';
import { Container, Row, Col } from 'reactstrap';

const RecipeGallery = () => {
  const recipes = [
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

  const firstRowRecipes = recipes.slice(0, 2);
  const secondRowRecipes = recipes.slice(2, 4);

  return (
    <div className="recipe-gallery">
      <Container>
        <Row>
          {firstRowRecipes.map(recipe => (
            <React.Fragment key={recipe.id}>
              <Col className="recipe-image-col">
                <img src={recipe.image} alt="Recipe" className="recipe-image img-fluid"/>
              </Col>
              <Col>
                <div className="recipe-content">
                  <div className="recipe-meta text-muted">
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                    <span> {recipe.date}</span>
                  </div>
                  <h5 className="recipe-title">{recipe.title}</h5>
                  <p className="recipe-description text-muted">{recipe.description}</p>
                  <div className="recipe-cta">
                    <span>Continue</span>
                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                  </div>
                </div>
              </Col>
            </React.Fragment>
          ))}
        </Row>
        <Row>
          {secondRowRecipes.map(recipe => (
            <React.Fragment key={recipe.id}>
              <Col className="recipe-image-col">
                <img src={recipe.image} alt="Recipe" className="recipe-image img-fluid"/>
              </Col>
              <Col>
                <div className="recipe-content">
                  <div className="recipe-meta text-muted">
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                    <span> {recipe.date}</span>
                  </div>
                  <h5 className="recipe-title">{recipe.title}</h5>
                  <p className="recipe-description text-muted">{recipe.description}</p>
                  <div className="recipe-cta">
                    <span>Continue</span>
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

export default RecipeGallery;