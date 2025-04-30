import { Component } from 'react'
import '../Style/Boorder.css'
import { Container, Row, Col } from 'reactstrap';

export class Boorder extends Component {
    render() {
        return (
            <div className="boorder">
                <h1 className="text-center">Our Team</h1>
                <Container>
                    <Row>
                        <Col>
                            <div className="crea">
                                <img src="images/teaam-1.jpg" className="img-fluid" />
                                <div className="overlay">
                                    <div className="socialme">
                                        <div><i className="fa fa-google-plus"></i></div>
                                        <div><i className="fa fa-facebook"></i></div>
                                        <div><i className="fa fa-twitter"></i></div>
                                        <div><i className="fa fa-linkedin"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="namee">
                                <h5>Jackson Nash</h5>
                                <p className="text-muted">Tax Advice</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="crea">
                                <img src="images/teaam-2.jpg" className="img-fluid" />
                                <div className="overlay">
                                    <div className="socialme">
                                        <div><i className="fa fa-google-plus"></i></div>
                                        <div><i className="fa fa-facebook"></i></div>
                                        <div><i className="fa fa-twitter"></i></div>
                                        <div><i className="fa fa-linkedin"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="namee">
                                <h5>Jackson Nash</h5>
                                <p className="text-muted">Tax Advice</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="crea">
                                <img src="images/teaam-3.jpg" className="img-fluid" />
                                <div className="overlay">
                                    <div className="socialme">
                                        <div><i className="fa fa-google-plus"></i></div>
                                        <div><i className="fa fa-facebook"></i></div>
                                        <div><i className="fa fa-twitter"></i></div>
                                        <div><i className="fa fa-linkedin"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="namee">
                                <h5>Jackson Nash</h5>
                                <p className="text-muted">Tax Advice</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="crea">
                                <img src="images/teaam-4.jpg" className="img-fluid" />
                                <div className="overlay">
                                    <div className="socialme">
                                        <div><i className="fa fa-google-plus"></i></div>
                                        <div><i className="fa fa-facebook"></i></div>
                                        <div><i className="fa fa-twitter"></i></div>
                                        <div><i className="fa fa-linkedin"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="namee">
                                <h5>Jackson Nash</h5>
                                <p className="text-muted">Tax Advice</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Boorder
