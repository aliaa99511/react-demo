import React, { Component } from 'react'
import '../Style/Hoverlay.css'
import { Container, Row, Col } from 'reactstrap';

export class Hoverlay extends Component {
render() {
return (
<div className="Hoverla">
    <h1 className="heeeed">Featured Works</h1>
    <Container>
        <Row>
            <Col>
                <div className="creati">
                    <img src="images/work_3_md.jpg" className="img-fluid"/>
                    <div className="overlay">
                        <div className="cent">
                            <h6>CATEGORY</h6>
                            <h3>Lorem ipsum dolor</h3>
                            <div className="icoon">
                                <p>
                                    <i class="fa fa-share-square-o" aria-hidden="true"></i>
                                </p>
                                <p>
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
            <Col>
            <div className="creati">
                <img src="images/work_4_full.jpg" className="img-fluid"/>
                <div className="overlay">
                        <div className="cent">
                            <h6>CATEGORY</h6>
                            <h3>Lorem ipsum dolor</h3>
                            <div className="icoon">
                                <p><i class="fa fa-share-square-o" aria-hidden="true"></i></p>
                                <p><i class="fa fa-search" aria-hidden="true"></i></p>
                            </div>
                        </div>
                    </div>

            </div>
            </Col>
            <Col>
            <div className="creati">
                <img src="images/work_3_a_full.jpg" className="img-fluid"/>
                <div className="overlay">
                        <div className="cent">
                            <h6>CATEGORY</h6>
                            <h3>Lorem ipsum dolor</h3>
                            <div className="icoon">
                                <p><i class="fa fa-share-square-o" aria-hidden="true"></i></p>
                                <p><i class="fa fa-search" aria-hidden="true"></i></p>
                            </div>
                        </div>
                    </div>

            </div>
            </Col>
        
        </Row>
        <Row>
        <Col>
            <div className="creati">
                <img src="images/work_6_md.jpg" className="img-fluid"/>
                <div className="overlay">
                        <div className="cent">
                            <h6>CATEGORY</h6>
                            <h3>Lorem ipsum dolor</h3>
                            <div className="icoon">
                                <p><i class="fa fa-share-square-o" aria-hidden="true"></i></p>
                                <p><i class="fa fa-search" aria-hidden="true"></i></p>
                            </div>
                        </div>
                    </div>

            </div>
        </Col>
        <Col>
            <div className="creati">
                <img src="images/work_2_md.jpg" className="img-fluid"/>
                <div className="overlay">
                        <div className="cent">
                            <h6>CATEGORY</h6>
                            <h3>Lorem ipsum dolor</h3>
                            <div className="icoon">
                                <p><i class="fa fa-share-square-o" aria-hidden="true"></i></p>
                                <p><i class="fa fa-search" aria-hidden="true"></i></p>
                            </div>
                        </div>
                    </div>
                    
            </div>
            </Col>  
            <Col>
            <div className="creati">
                <img src="images/work_5_md.jpg" className="img-fluid"/>
                <div className="overlay">
                        <div className="cent">
                            <h6>CATEGORY</h6>
                            <h3>Lorem ipsum dolor</h3>
                            <div className="icoon">
                                <p><i class="fa fa-share-square-o" aria-hidden="true"></i></p>
                                <p><i class="fa fa-search" aria-hidden="true"></i></p>
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

export default Hoverlay
