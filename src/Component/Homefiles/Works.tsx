import React, { useState } from 'react';
import '../Style/Works.css'
import { Collapse, Button, CardBody, Card, Container, Row,Col } from 'reactstrap';



const Works = (props) => {

    const [isOpen1, setIsOpen1] = useState(true);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);


    const toggle1 = () => setIsOpen1(!isOpen1);
    const toggle2 = () => setIsOpen2(!isOpen2);
    const toggle3 = () => setIsOpen3(!isOpen3);


 return (
<div className="mrto">
    <Container>
        <div className="pparent">
            <Row>
                <Col>
                    <img src="images/team-9.jpg" className="img img-fluid" />
                </Col>
                <Col>
                    <div className="onee">
                        <h2>We Have Legal Solutions</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam reprehenderit perspiciatis iste culpa consequuntur consequatur eum, voluptatum, quod deserunt maiores?</p>
                        <p>Modi perferendis ipsa ducimus consequuntur excepturi autem, numquam facere aperiam iste nam molestias provident consectetur molestiae voluptatibus ipsum. Fugiat, quas.</p>
                        <div className="soon">
                            <div className="son1 so">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <span>Aperiam iste nam molestias</span>
                            </div>
                            <div className="son2 so">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <span>Modi perferendis ipsa</span>
                            </div>
                            <div className="son3 so">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <span>Perspic iste culpa</span>
                            </div>
                            </div>
                    </div>

                </Col>
                <Col>
                    <div className="twoo">
                        <div>
                        <Button color="secondary" size="lg" block onClick={toggle1}  style={{ marginBottom: '1rem' }}>How to download and register</Button>
                        <Collapse isOpen={isOpen1}>
                            <Card>
                            <CardBody>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                            </CardBody>
                            </Card>
                        </Collapse>
                        </div>
                        <div>
                        <Button color="secondary" size="lg" block onClick={toggle2} style={{ marginBottom: '1rem' }}>How to create your paypal account</Button>
                        <Collapse isOpen={isOpen2}>
                            <Card>
                            <CardBody>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                            </CardBody>
                            </Card>
                        </Collapse>
                        </div>
                        <div>
                        <Button color="secondary" size="lg" block onClick={toggle3} style={{ marginBottom: '1rem' }}>How to link your patpal and bank account</Button>
                        <Collapse isOpen={isOpen3}>
                            <Card>
                            <CardBody>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                            </CardBody>
                            </Card>
                        </Collapse>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </Container>
</div>
);

}

export default Works
