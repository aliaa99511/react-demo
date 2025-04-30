import React, { Component } from 'react'
import '../Style/Show.css'
import { Container, Row, Col } from 'reactstrap';


export class Show extends Component {
render() {
  return (
     <div className="per">
        <Container>
           <Row>
              <Col>
                  <div className="son son1">
                      <div className="icon1">
                        <i class="fa fa-rocket fa-2x" aria-hidden="true"></i>
                      </div>
                      <h4>Dog Walking</h4>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right.</p>
                      <div className="icon2">
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                      </div>
                  </div>
              </Col>

              <Col>
                  <div className="son son2">
                    <div className="icon11"><i class="fa fa-cogs fa-2x" aria-hidden="true"></i></div>
                      <h4>Pet Daycare</h4>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right.</p>
                    <div className="icon22"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
                  </div>
              </Col>

              <Col>
                  <div className="son son2">
                    <div className="icon11"><i class="fa fa-diamond fa-2x" aria-hidden="true"></i></div>
                      <h4>Pet Grooming</h4>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right.</p>
                    <div className="icon22"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
                  </div>
              </Col>
        </Row>

        </Container>

     </div>
    )
 }
}

export default Show
