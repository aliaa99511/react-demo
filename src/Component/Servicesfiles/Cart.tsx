import React, { Component } from 'react'
import '../Style/Cart.css'
import { Container, Row, Col,Button } from 'reactstrap';

export class Cart extends Component {
    state={
        count:0

    }
    increase=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    decrease=()=>{
        this.setState({
            count:this.state.count-1
        })
    }

render() {
    
return (

    <div className="shoop">
        <Container>

            <div className="title">
                <div>
                    <h5>Product	</h5>
                </div>
                <div className="item">
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                </div>
            </div>
            <hr />
            <Row>
                <Col xs="2">
                    <img src="images/work_4_full.jpg" className="img"/>
                </Col>
                <Col xs="4">
                    <p className="text-muted cpar">Minimalistic shop for multipurpose use</p>
                </Col>
                <Col xs="2"><h5 className="one">$360.00</h5></Col>
                <Col xs="2">
                    <div className="cont">
                    <Button outline color="info" onClick={this.increase}>+</Button>{' '}
                        <div className="last">{this.state.count}</div>
                        <Button outline color="info" onClick={this.decrease}>-</Button>{' '}
                    </div>
                </Col> 
                <Col xs="2"><h5 className="two">$720.00</h5></Col>
            </Row>
            <hr/>
            <Row>
                <Col xs="2">
                    <img src="images/work-13.jpg" className="img"/>
                </Col>
                <Col xs="4">
                    <p className="text-muted cpar">Minimalistic shop for multipurpose use</p>
                </Col>
                <Col xs="2"><h5 className="one">$360.00</h5></Col>
                <Col xs="2">
                    <div className="cont">
                    <Button outline color="info" onClick={this.increase}>+</Button>{' '}
                        <div className="last">{this.state.count}</div>
                        <Button outline color="info" onClick={this.decrease}>-</Button>{' '}
                    </div>
                </Col> 
                <Col xs="2"><h5 className="two">$720.00</h5></Col>
            </Row>
            <hr/>
            <Row>
                <Col xs="2">
                    <img src="images/work-14.jpg" className="img"/>
                </Col>
                <Col xs="4">
                    <p className="text-muted cpar">Minimalistic shop for multipurpose use</p>
                </Col>
                <Col xs="2"><h5 className="one">$360.00</h5></Col>
                <Col xs="2">
                    <div className="cont">
                    <Button outline color="info" onClick={this.increase}>+</Button>{' '}
                        <div className="last">{this.state.count}</div>
                        <Button outline color="info" onClick={this.decrease}>-</Button>{' '}
                    </div>
                </Col> 
                <Col xs="2"><h5 className="two">$720.00</h5></Col>
            </Row>
            <hr/>
        </Container>
    </div>
)
}
}

export default Cart
