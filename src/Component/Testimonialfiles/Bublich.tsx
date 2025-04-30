import React, { Component } from 'react'
import '../Style/Bublich.css'
import { Container, Row, Col } from 'reactstrap';


export class Bublich extends Component {
render() {
return (
    <div className="Bublich">
       <Container>
        <Row className="myrow1">
           <Col><img src="images/partner-1.png" className="one img-fluid"/></Col>
           <Col><img src="images/partner-2.png" className="one img-fluid"/></Col>
           <Col><img src="images/partner-3.png" className="one img-fluid"/></Col>
           <Col><img src="images/partner-4.png" className="one img-fluid"/></Col>
        </Row>
        <Row className="myrow2">
            <Col>
                <img src="images/hhhhh.jpg " className="two img-fluid" />
            </Col>
            <Col>
                <div className="iten">
                    <h1>About The Book</h1>
                    <p className="text-muted">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <h5>Award achievements</h5>
                    <p className="text-muted">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <h5>Read On Any Devices</h5>
                    <p className="text-muted">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <h5>Very High Resolution</h5>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
            </Col>
        </Row>
       </Container> 
    </div>
)
}
}

export default Bublich
