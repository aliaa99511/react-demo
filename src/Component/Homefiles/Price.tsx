import React, { Component } from 'react'
import '../Style/Price.css'
import { Container, Row, Col ,Button} from 'reactstrap';

export class Price extends Component {
render() {
 return (
     <div>
    <h1 className="heeed">Pricing Table</h1>
    <div  className="testimo">
        <div className="card">
            <div className="layer"></div>
            <div className="content">
                <h5>BASIC PLAN</h5>
                <div className="price">
                    <h1 className="lolo">$9</h1>
                    <h6>/ MONTH</h6>
                    </div>
                <div className="text">
                    <p>1GB Disk Space</p>
                    <p>100 Email Account</p>
                    <p>24/24 Support</p>
                </div>
                <Button color="info">purchase Now</Button>{' '}
            </div>
        </div>
        <div className="card">
           <div className="layer"></div>
                <div className="content">
                    <h5>BASIC PLAN</h5>
                    <div className="price">
                        <h1 className="lolo">$9</h1>
                        <h6>/ MONTH</h6>
                     </div>
                     <div className="text">
                        <p>1GB Disk Space</p>
                        <p>100 Email Account</p>
                        <p>24/24 Support</p>
                      </div>
                      <Button color="info">purchase Now</Button>{' '}
            </div>
        </div>
        <div className="card">
           <div className="layer"></div>
                <div className="content">
                    <h5>BASIC PLAN</h5>
                    <div className="price">
                        <h1 className="lolo">$9</h1>
                        <h6>/ MONTH</h6>
                     </div>
                     <div className="text">
                        <p>1GB Disk Space</p>
                        <p>100 Email Account</p>
                        <p>24/24 Support</p>
                      </div>
                      <Button color="info">purchase Now</Button>{' '}
            </div>
        </div>
        </div>
    </div>
    )
  }
}

export default Price
/*    <div className="poo">
        <h1 className="lili ">Pricing Table</h1>
        <Container>
          <Row>
            <Col className="mapo">
                <div className="ittem">
                       <div className="layer"></div>
                        <h5 className="text-muted">BASIC PLAN</h5>
                        <div className="price">
                            <h1 className="lolo">$9</h1>
                            <h6>/ MONTH</h6>
                        </div>
                        <div className="text text-muted">
                            <p>1GB Disk Space</p>
                            <p>100 Email Account</p>
                            <p>24/24 Support</p>
                        </div>
                        <Button outline color="info">purchase Now</Button>{' '}
                </div>
            </Col>
            <Col className="mapo">
                <div className="ittem">
                   <div className="layer"></div>
                    <h5 className="text-muted">SILVER PLAN</h5>
                    <div className="price">
                        <h1 className="lolo">$19</h1>
                        <h6>/ MONTH</h6>
                    </div>
                    <div className="text text-muted">
                        <p>1GB Disk Space</p>
                        <p>100 Email Account</p>
                        <p>24/24 Support</p>
                    </div>
                    <Button outline color="info">purchase Now</Button>{' '}
                </div>
            </Col>
            <Col className="mapo">
                <div className="ittem">
                    <div className="layer"></div>
                    <h5 className="text-muted">GOLD PLAN</h5>
                    <div className="price">
                        <h1 className="lolo">$39</h1>
                        <h6>/ MONTH</h6>
                    </div>
                    <div className="text text-muted">
                        <p>1GB Disk Space</p>
                        <p>100 Email Account</p>
                        <p>24/24 Support</p>
                    </div>
                    <Button outline color="info">purchase Now</Button>{' '}
                </div>
            </Col>
          </Row>
        </Container>
        
    </div>*/