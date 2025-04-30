import React, { Component } from 'react'
import '../Style/Cardes.css'
import { Container, Row, Col } from 'reactstrap';

export class Cardes extends Component {
  render() {
    return (
      <div className="peeera">
        <Container>
          <Row>
            <div className="first">
              <Col>
                <img src="images/download1.jpg" className="img-fluid" />
              </Col>
              <Col>
                <div className="item">
                  <div className="toop">hotel</div>
                  <p>Ut enim ad minim veniam, quis nostrud</p>
                  <small>19th march, 2019</small>
                  <h5>Read More</h5>
                </div>
              </Col>
              <Col>
                <img src="images/6.jpg" className="img-fluid" />
              </Col>
              <Col>
                <div className="item">
                  <div className="toop">restaurant</div>
                  <p>Ut enim ad minim veniam, quis nostrud</p>
                  <small>19th march, 2019</small>
                  <h5>Read More</h5>
                </div>
              </Col>
            </div>
          </Row>
          <Row>
            <div className="second">
              <Col>
                <div className="item">
                  <div className="toop">Travel</div>
                  <p>Ut enim ad minim veniam, quis nostrud</p>
                  <small>19th march, 2019</small>
                  <h5>Read More</h5>
                </div>
              </Col>
              <Col>
                <img src="images/london.jpg" className="img-fluid" />
              </Col>
              <Col>
                <div className="item">
                  <div className="toop">Booking</div>
                  <p>Ut enim ad minim veniam, quis nostrud</p>
                  <small>19th march, 2019</small>
                  <h5>Read More</h5>
                </div>
              </Col>
              <Col>
                <img src="images/7.jpg" className="img-fluid" />
              </Col>
            </div>
          </Row>

        </Container>
      </div>
    )
  }
}

export default Cardes
