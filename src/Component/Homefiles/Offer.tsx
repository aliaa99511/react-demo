import React, { Component } from 'react'
import '../Style/Offer.css'
import { Container,Media,CardDeck, Row, Col,CardGroup ,Badge, CardImgOverlay, Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button} from 'reactstrap';


export class Offer extends Component {
render() {
return (
<div className="boox">
    <h6 className="toto">─────WHAT WE OFFER─────</h6>
    <h1 className="text-center tete">Featured Properties</h1>
    <Container>
      <CardDeck>

        <Card>
          <CardImg top width="100%" src="images/work-1.jpg"/>

          <CardImgOverlay>
            <CardTitle><h5><Badge color="info">Rent</Badge></h5></CardTitle>
            <CardText className="mo">
                <h5><Badge color="light"><span className="heh">$300</span>/mo</Badge></h5>
            </CardText>
          </CardImgOverlay>

          <CardBody>
            <div className="link">
              <i class="fa fa-link" aria-hidden="true"></i>
            </div>
            <div className="mute">
              <CardTitle className="text-muted">3  2  1,878 sqft</CardTitle>
              <CardSubtitle>The Blue Sky Home</CardSubtitle>
              <CardText className="text-muted">Oakland</CardText>
            </div>
            <hr />
            <Media>
              <Media left href="#">
                  <Media object src="images/person_1.jpg" className="img"/>
              </Media>
              <Media body>
                  <Media className="text-muted">
                    <span className="myspann">john Dorf</span>
                    <span className="week">2 weeks ago</span>
                  </Media>
              </Media>
              </Media>
          </CardBody>
        </Card>


        <Card>
          <CardImg top width="100%" src="images/work-2.jpg" height="242px"/>

          <CardImgOverlay>
            <CardTitle><h5><Badge color="danger">Sale</Badge></h5></CardTitle>
            <CardText className="mo">
                <h5><Badge color="light"><span className="heh">$300</span>/mo</Badge></h5>
            </CardText>
          </CardImgOverlay>

          <CardBody>
            <div className="link"><i class="fa fa-link" aria-hidden="true"></i></div>
            <div className="mute">
              <CardTitle className="text-muted">3  2  1,878 sqft</CardTitle>
              <CardSubtitle>The Blue Sky Home</CardSubtitle>
              <CardText className="text-muted">Oakland</CardText>
            </div>
            <hr />
            <Media>
              <Media left href="#">
                  <Media object src="images/person_2.jpg" className="img"/>
              </Media>
              <Media body>
                  <Media className="text-muted">
                    <span className="myspann">john Dorf</span>
                    <span className="week">2 weeks ago</span>
                  </Media>
              </Media>
              </Media>
          </CardBody>
        </Card>



        <Card>
          <CardImg top width="100%" src="images/work-3.jpg" height="242px"/>

          <CardImgOverlay>
            <CardTitle><h5><Badge color="info">Rent</Badge></h5></CardTitle>
            <CardText className="mo">
                <h5><Badge color="light"><span className="heh">$300</span>/mo</Badge></h5>
            </CardText>
          </CardImgOverlay>

          <CardBody>
            <div className="link"><i class="fa fa-link" aria-hidden="true"></i></div>
            <div className="mute">
              <CardTitle className="text-muted">3  2  1,878 sqft</CardTitle>
              <CardSubtitle>The Blue Sky Home</CardSubtitle>
              <CardText className="text-muted">Oakland</CardText>
            </div>
            <hr />
            <Media>
              <Media left href="#">
                  <Media object src="images/person_3.jpg" className="img"/>
              </Media>
              <Media body>
                  <Media className="text-muted">
                    <span className="myspann">john Dorf</span>
                    <span className="week">2 weeks ago</span>
                  </Media>
              </Media>
              </Media>
          </CardBody>
        </Card>

        </CardDeck>
    </Container>
</div>
    )
  }
}

export default Offer
