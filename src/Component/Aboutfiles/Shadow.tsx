import React, { Component } from 'react'
import '../Style/Shadow.css'
import { Container, Row, Col,Button } from 'reactstrap';

export class Shadow extends Component {
render() {
    return (
        <div className="shadow">
            <Container fluid={true}>
            <Row>
                <Col>
                    <div className="lef">
                        <img src="images/black.png" className="img-fluid"/>
                    </div>
                </Col>
                <Col>
                    <div className="righ">
                        <h6>───── OUR TOP SERVICES</h6>
                        <h1>Our Best Services</h1>
                        <p className="para1">Mollit anim laborum duis adseu dolor iuyn voluptcate velit ess cillum dolore egru lofrre dsu quality mollit anim laborumuis au dolor in voluptate velit cillu.</p>
                        <p className="para2">Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr indd re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt moll.</p>
                        <Button color="danger" className="mybtt">MORE ABOUT US</Button>{' '}
                    </div>
                </Col>
            </Row>
                        
            </Container>

        </div>
    )
 }
}

export default Shadow
