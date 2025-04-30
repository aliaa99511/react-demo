import React, { Component } from 'react'
import '../Style/Courses.css'
import {Card, Button, CardImg, CardTitle, CardText, CardDeck,CardSubtitle, CardBody,Container} from 'reactstrap';
  

export class Courses extends Component {
render() {
    return (
        <div className="course">
            <h6>Most Popular Course Of This Week</h6>
            <h1>Our Popular Course</h1>
            <Container>
            <CardDeck>
                <Card>
                    <CardImg top width="100%" src="images/portfolio-img8.jpg" />
                    <CardBody>
                        <CardTitle>Graphic Design</CardTitle>
                        <CardSubtitle>
                            <div className="stan">
                                <div className="icon">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                </div>
                                <p className="text-muted">52 Review</p>
                            </div>

                        </CardSubtitle>
                        <CardText className="text-muted">
                            <div className="textt">
                                <div>
                                    <i class="fa fa-user-o" aria-hidden="true"></i>
                                    <span>562</span>
                                </div>
                                <div>
                                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                                    <span>562</span>
                                </div>
                                <div className="fre">
                                  <span className="free">Free</span>
                                </div>
                            </div>

                        </CardText>
                    </CardBody>
                </Card>


                <Card>
                <CardImg top width="100%" src="images/portfolio-img7.jpg" />
                <CardBody>
                        <CardTitle>Web Development</CardTitle>
                        <CardSubtitle>
                            <div className="stan">
                                <div className="icon">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                </div>
                                <p className="text-muted">52 Review</p>
                            </div>

                        </CardSubtitle>
                        <CardText className="text-muted">
                            <div className="textt">
                                <div>
                                    <i class="fa fa-user-o" aria-hidden="true"></i>
                                    <span>562</span>
                                </div>
                                <div>
                                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                                    <span>562</span>
                                </div>
                                <div className="fre">
                                  <span className="free">Free</span>
                                </div>
                            </div>

                        </CardText>
                    </CardBody>
                </Card>


                <Card>
                <CardImg top width="100%" src="images/portfolio-img1.jpg" />
                <CardBody>
                        <CardTitle>Digital Marketing</CardTitle>
                        <CardSubtitle>
                            <div className="stan">
                                <div className="icon">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                </div>
                                <p className="text-muted">52 Review</p>
                            </div>

                        </CardSubtitle>
                        <CardText className="text-muted">
                            <div className="textt">
                                <div>
                                    <i class="fa fa-user-o" aria-hidden="true"></i>
                                    <span>562</span>
                                </div>
                                <div>
                                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                                    <span>562</span>
                                </div>
                                <div className="fre">
                                  <span className="free">Free</span>
                                </div>
                            </div>

                        </CardText>
                    </CardBody>
                </Card>
            </CardDeck>
            <div className="flexbtn">
                <Button className="butt" color="secondary" size="lg">Find More Courses</Button>
            </div>
            </Container>
        </div>
    )
    }
}


export default Courses
