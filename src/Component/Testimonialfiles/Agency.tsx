import React, { Component } from 'react'
import '../Style/Agency.css'
import { Container, Row, Col } from 'reactstrap';


export class Agency extends Component {
render() {
return (
    <div className="agen">
        <h6 className="text-center">─────AGENTS─────</h6>
        <h1 className="text-center">Our Agents</h1>

        <Container>
            <Row>
                <Col>
                    <div className="agent">
                        <div className="iner">
                          <img src="images/team-1.jpg" className="img-fluid" />
                        </div>
                        <div className="overlay">
                            <h5 >Carlos Henderson</h5>
                            <div className="propr text-muted">
                                <p>listing</p>
                                <p>10 properties</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="agent">
                    <div className="iner">
                          <img src="images/team-2.jpg" className="img-fluid" />
                        </div>
                        <div className="overlay">
                            <h5 >Carlos Henderson</h5>
                            <div className="propr text-muted">
                                <p>listing</p>
                                <p>10 properties</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="agent">
                    <div className="iner">
                          <img src="images/team-3.jpg" className="img-fluid"/>
                        </div>
                        <div className="overlay">
                            <h5 >Carlos Henderson</h5>
                            <div className="propr text-muted">
                                <p>listing</p>
                                <p>10 properties</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="agent">
                    <div className="iner">
                          <img src="images/team-4.jpg" className="img-fluid"/>
                        </div>
                        <div className="overlay">
                            <h5 >Carlos Henderson</h5>
                            <div className="propr text-muted">
                                <p>listing</p>
                                <p>10 properties</p>
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

export default Agency
