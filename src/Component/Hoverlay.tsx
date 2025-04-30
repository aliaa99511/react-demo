import '../Style/Hoverlay.css';
import { Container, Row, Col } from 'reactstrap';

interface worksType {
    id:number;
    imgSrc:string
}

const Hoverlay = () => {
  const works = [
    { id: 1, imgSrc: "images/work_3_md.jpg" },
    { id: 2, imgSrc: "images/work_4_full.jpg" },
    { id: 3, imgSrc: "images/work_3_a_full.jpg" },
    { id: 4, imgSrc: "images/work_6_md.jpg" },
    { id: 5, imgSrc: "images/work_2_md.jpg" },
    { id: 6, imgSrc: "images/work_5_md.jpg" }
  ];

  const renderWorkItem = (work:worksType) => (
    <Col key={work.id}>
      <div className="creati">
        <img src={work.imgSrc} className="img-fluid" alt={`Work ${work.id}`} />
        <div className="overlay">
          <div className="cent">
            <h6>CATEGORY</h6>
            <h3>Lorem ipsum dolor</h3>
            <div className="icoon">
              <p><i className="fa fa-share-square-o" aria-hidden="true"></i></p>
              <p><i className="fa fa-search" aria-hidden="true"></i></p>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );

  return (
    <div className="Hoverla">
      <h1 className="heeeed">Featured Works</h1>
      <Container>
        <Row>
          {works.slice(0, 3).map(renderWorkItem)}
        </Row>
        <Row>
          {works.slice(3, 6).map(renderWorkItem)}
        </Row>
      </Container>
    </div>
  );
};

export default Hoverlay;