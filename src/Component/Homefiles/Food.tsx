import React, { Component } from 'react'
import '../Style/Food.css'
import { Container, Row, Col } from 'reactstrap';


export class Food extends Component {
render() {
  return (
    <div className="myfood">
        <h6 className="smmal text-center">Our New Blog News</h6>
        <h1 className="biig text-center">Our Recnet News</h1>
        <Container>
            <Row>
                <Col>
                    <div className="iitem">
                        <img src="images/blog1.png" className="imgo img-fluid"/>
                        <div className="under">
                            <small>23 DEC, 2020</small>
                            <h5>Addiction When Food Plate Becomes</h5>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="iitem">
                        <img src="images/blog2.png" className="imgo img-fluid"/>
                        <div className="under">
                            <small>23 DEC, 2020</small>
                            <h5>Addiction When Food Plate Becomes</h5>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="iitem">
                        <img src="images/blog3.png" className="imgo img-fluid"/>
                        <div className="under">
                            <small>23 DEC, 2020</small>
                            <h5>Addiction When Food Plate Becomes</h5>
                        </div>
                    </div>
                </Col>
           </Row>
            
        </Container>      
    </div>
)
}
}

export default Food
/*Our New Blog News

/*Our Recnet News
*/