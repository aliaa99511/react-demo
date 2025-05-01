import '../Style/ServicesBanner.css';
import { Container, Row, Col, Button } from 'reactstrap';

const ServicesBanner = () => {
    return (
        <div className="services-banner">
            <Container fluid={true}>
                <Row>
                    <Col>
                        <div className="services-image-container">
                            <img src="images/black.png" className="img-fluid services-image" alt="Services" />
                        </div>
                    </Col>
                    <Col>
                        <div className="services-content">
                            <h6 className="services-subtitle">───── OUR TOP SERVICES</h6>
                            <h1 className="services-title">Our Best Services</h1>
                            <p className="services-description services-description-main">
                                Mollit anim laborum duis adseu dolor iuyn voluptcate velit ess cillum dolore egru lofrre dsu quality mollit anim laborumuis au dolor in voluptate velit cillu.
                            </p>
                            <p className="services-description">
                                Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr indd re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt moll.
                            </p>
                            <Button color="danger" className="services-button">MORE ABOUT US</Button>{' '}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ServicesBanner;