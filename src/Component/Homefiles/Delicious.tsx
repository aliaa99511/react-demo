import React, { Component } from 'react'
import '../Style/Delicious.css'
import { Container, Row, Col,Button } from 'reactstrap';


export class Delicious extends Component {
render() {
  return (
    <div className="fluidd">
        <div className="ffirs">
            <Container>
                <h6>Our Offerd Menu</h6>
                <h1>Some Trendy And Popular Courses Offerd</h1>
            </Container>
        </div>
       <Container  fluid={true}>
        <Row>
            <Col>
            <div className="seco1 seco">
                <img src="images/gallery1.png" className="high1 high img-fluid"/>
                <div className="overlay">
                    <div className="myflexx">
                        <div className="conten">
                            <h5>$25</h5>
                            <h1>Delicious Food</h1>
                            <p>Ut enim ad minim veniam quis nostr.</p>
                            <div><Button color="danger" className="bott">Order Now</Button>{' '}</div>
                        </div>
                    </div>
                </div>
            </div>
            </Col>
            <Col>
            <div className="seco2 seco">
                <img src="images/gallery2.png" className="high2 high img-fluid"/>
                <div className="overlay">
                    <div className="myflexx">
                        <div className="conten">
                            <h5>$25</h5>
                            <h1>Delicious Food</h1>
                            <p>Ut enim ad minim veniam quis nostr.</p>
                            <div><Button color="danger" className="bott">Order Now</Button>{' '}</div>
                        </div>
                    </div>
                </div>
            </div>
            </Col>
            <Col>
            <div className="seco3 seco">
                <img src="images/gallery3.png" className="low img-fluid"/>
                <div className="overlay">
                    <div className="myflexx">
                        <div className="conten">
                            <h5>$25</h5>
                            <h1>Delicious Food</h1>
                            <p>Ut enim ad minim veniam quis nostr.</p>
                            <div><Button color="danger" className="bott">Order Now</Button>{' '}</div>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="seco4 seco">
                 <img src="images/gallery4.png" className="low img-fluid"/>
                  <div className="overlay">
                    <div className="myflexx">
                        <div className="conten">
                            <h5>$25</h5>
                            <h1>Delicious Food</h1>
                            <p>Ut enim ad minim veniam quis nostr.</p>
                            <div><Button color="danger" className="bott">Order Now</Button>{' '}</div>
                        </div>
                    </div>
                </div>
            </div> 
            </Col>
        </Row>
        </Container> 
    </div>
)
}
}


export default Delicious

