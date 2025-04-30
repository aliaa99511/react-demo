import React, { useState } from 'react';
import '../Style/Cart.css';
import { Container, Row, Col, Button } from 'reactstrap';

const Cart = () => {
    const [count, setCount] = useState(0);
    const [cartItems] = useState([
        {
            id: 1,
            image: "images/work_4_full.jpg",
            description: "Minimalistic shop for multipurpose use",
            price: 360.00
        },
        {
            id: 2,
            image: "images/work-13.jpg",
            description: "Minimalistic shop for multipurpose use",
            price: 360.00
        },
        {
            id: 3,
            image: "images/work-14.jpg",
            description: "Minimalistic shop for multipurpose use",
            price: 360.00
        }
    ]);

    const increase = () => {
        setCount(count + 1);
    };

    const decrease = () => {
        setCount(count - 1);
    };

    return (
        <div className="shoop">
            <Container>
                <div className="title">
                    <div>
                        <h5>Product</h5>
                    </div>
                    <div className="item">
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                    </div>
                </div>
                <hr />
                
                {cartItems.map(item => (
                    <React.Fragment key={item.id}>
                        <Row>
                            <Col xs="2">
                                <img src={item.image} className="img" alt="product" />
                            </Col>
                            <Col xs="4">
                                <p className="text-muted cpar">{item.description}</p>
                            </Col>
                            <Col xs="2"><h5 className="one">${item.price.toFixed(2)}</h5></Col>
                            <Col xs="2">
                                <div className="cont">
                                    <Button outline color="info" onClick={increase}>+</Button>{' '}
                                    <div className="last">{count}</div>
                                    <Button outline color="info" onClick={decrease}>-</Button>{' '}
                                </div>
                            </Col>
                            <Col xs="2"><h5 className="two">${(item.price * 2).toFixed(2)}</h5></Col>
                        </Row>
                        <hr />
                    </React.Fragment>
                ))}
            </Container>
        </div>
    );
};

export default Cart;