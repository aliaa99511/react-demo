import React, { Component } from 'react'
import '../Style/Storiees.css'
import{Col, Container, Row} from 'reactstrap'


export class Storiees extends Component {
render() {
   return (
    <div>
        <div className="store">
        <Container>
        <Row>
            <Col>
                <div className="kind">
                    <img src="images/kind-1.jpg" className="img img-fluid"/>
                    <p>Brandy</p>
                    <div className="overlay"></div>
                </div>
            </Col>

            <Col>
                <div className="kind">
                    <img src="images/kind-2.jpg" className="img img-fluid"/>
                    <p>Gin</p>
                    <div className="overlay"></div>
                </div>
            </Col>
            <Col>
                <div className="kind">
                    <img src="images/kind-3.jpg" className="img img-fluid"/>
                    <p>Rum</p>
                    <div className="overlay"></div>
                </div>
            </Col>
            <Col>
                <div className="kind">
                    <img src="images/kind-4.jpg" className="img img-fluid"/>
                    <p>Tequila</p>
                    <div className="overlay"></div>
                </div>
            </Col>
            <Col>
                <div className="kind">
                    <img src="images/kind-5.jpg" className="img img-fluid"/>
                    <p>Vodka</p>
                    <div className="overlay"></div>
                </div>
            </Col>
            <Col>
                <div className="kind">
                    <img src="images/kind-6.jpg" className="img img-fluid"/>
                    <p>Brandy</p>
                    <div className="overlay"></div>
                </div>
            </Col>
        </Row>
        </Container>

        </div>
    </div>
    )
}
}

export default Storiees
