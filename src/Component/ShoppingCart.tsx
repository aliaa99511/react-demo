import React, { useState } from 'react';
import '../Style/ShoppingCart.css';
import { Container, Row, Col, Button } from 'reactstrap';

const ShoppingCart = () => {
    const [itemCount, setItemCount] = useState(0);
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

    const increaseCount = () => {
        setItemCount(itemCount + 1);
    };

    const decreaseCount = () => {
        setItemCount(itemCount - 1);
    };

    return (
        <div className="shopping-cart">
            <Container>
                <div className="cart-header">
                    <div>
                        <h5>Product</h5>
                    </div>
                    <div className="cart-header-items">
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                    </div>
                </div>
                <hr />
                
                {cartItems.map(item => (
                    <React.Fragment key={item.id}>
                        <Row className="cart-item">
                            <Col xs="2">
                                <img src={item.image} className="cart-item-image" alt="product" />
                            </Col>
                            <Col xs="4">
                                <p className="text-muted cart-item-description">{item.description}</p>
                            </Col>
                            <Col xs="2"><h5 className="cart-item-price">${item.price.toFixed(2)}</h5></Col>
                            <Col xs="2">
                                <div className="quantity-control">
                                    <Button outline color="info" onClick={increaseCount}>+</Button>{' '}
                                    <div className="quantity-count">{itemCount}</div>
                                    <Button outline color="info" onClick={decreaseCount}>-</Button>{' '}
                                </div>
                            </Col>
                            <Col xs="2"><h5 className="cart-item-total">${(item.price * 2).toFixed(2)}</h5></Col>
                        </Row>
                        <hr />
                    </React.Fragment>
                ))}
            </Container>
        </div>
    );
};

export default ShoppingCart;