import React, { Component } from 'react'
import '../Style/Recipe.css'
import { Container, Row, Col } from 'reactstrap';


export class Recipe extends Component {
render() {
  return (
    <div className="recip">
        <Container>
            <Row>
                <Col className="colimg">
                    <img src="images/imaage_2.jpg" className="mg img-fluid"/>
                </Col> 
                <Col>
                    <div className="coonte">
                        <div className="icnn1 text-muted">
                          <i class="fa fa-calendar" aria-hidden="true"></i>
                          <span> 23 April 2020</span>
                        </div>
                        <h5>The Recipe from a Winemaker’s Restaurent</h5>
                        <p className="text-muted">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        <div className="icnn2">
                            <span>continue</span>
                            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </div>
                    </div>
                </Col>
                <Col className="colimg">
                    <img src="images/imaage_1.jpg" className="mg img-fluid"/>
                </Col>                
                <Col>
                    <div className="coonte">
                        <div className="icnn1 text-muted">
                          <i class="fa fa-calendar" aria-hidden="true"></i>
                          <span> 23 April 2020</span>
                        </div>
                        <h5>The Recipe from a Winemaker’s Restaurent</h5>
                        <p className="text-muted">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        <div className="icnn2">
                            <span>continue</span>
                            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </div>
                    </div>
                
                </Col>
            </Row>
            <Row>
                <Col className="colimg">
                    <img src="images/imaage_3.jpg" className="mg img-fluid"/>
                </Col>                
                <Col>
                    <div className="coonte">
                        <div className="icnn1 text-muted">
                          <i class="fa fa-calendar" aria-hidden="true"></i>
                          <span> 23 April 2020</span>
                        </div>
                        <h5>The Recipe from a Winemaker’s Restaurent</h5>
                        <p className="text-muted">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        <div className="icnn2">
                            <span>continue</span>
                            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </div>
                    </div>
                
                </Col>
                <Col className="colimg">
                    <img src="images/imaage_4.jpg" className="mg img-fluid"/>
                </Col>                
                <Col>
                    <div className="coonte">
                        <div className="icnn1 text-muted">
                          <i class="fa fa-calendar" aria-hidden="true"></i>
                          <span> 23 April 2020</span>
                        </div>
                        <h5>The Recipe from a Winemaker’s Restaurent</h5>
                        <p className="text-muted">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        <div className="icnn2">
                            <span>continue</span>
                            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </div>
                    </div>
                
                </Col>
            </Row>
        </Container>
    </div>
)
}
}

export default Recipe
