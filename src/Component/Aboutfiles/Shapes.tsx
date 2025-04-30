import React, { Component } from 'react'
import '../Style/Shapes.css'
import { Container, Row, Col} from 'reactstrap';


export class Shapes extends Component {
render() {
    return (
        <div className="bacck">
            <Container fluid={true}>
                <Row>
                  <Col lg="4" md="4" sm="6" xs="6">
                      <img src="images/team-3.jpg" className="myimg img-fluid"/>
                  </Col>
                  <Col lg="8" md="12" sm="12" xs="12" >
                      <div className="aall">
                          <h6>─────WHAT CHOOSE US─────</h6>
                          <h1>Top Reason Wh We Need to Get Virtual</h1>
                          <div className="medi">
                            <div className="icoonn"><i class="fa fa-id-card-o fa-2x" aria-hidden="true"></i></div>
                            <div>
                                <h3> Get Decided Business Results</h3>
                                <p className="text-muted">A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
                            </div>
                        </div>
                        <div className="medi">
                            <div className="icoonn"><i class="fa fa-briefcase fa-2x" aria-hidden="true"></i></div>
                            <div>
                                <h3> Get Decided Business Results</h3>
                                <p className="text-muted">A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
                            </div>
                        </div>
                        <div className="medi">
                            <div className="icoonn"><i class="fa fa-calculator fa-2x" aria-hidden="true"></i></div>
                            <div>
                                <h3> Get Decided Business Results</h3>
                                <p className="text-muted">A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
                            </div>
                        </div>
                        <div className="medi">
                            <div className="icoonn"><i class="fa fa-camera-retro fa-2x" aria-hidden="true"></i></div>
                            <div>
                                <h3> Get Decided Business Results</h3>
                                <p className="text-muted">A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
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

export default Shapes

/*<i class="fa fa-id-card-o" aria-hidden="true"></i>
<i class="fa fa-camera-retro" aria-hidden="true"></i>
<i class="fa fa-calculator" aria-hidden="true"></i>
<i class="fa fa-briefcase" aria-hidden="true"></i>

*/