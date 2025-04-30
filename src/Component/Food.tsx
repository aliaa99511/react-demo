import '../Style/Food.css';
import { Container, Row, Col } from 'reactstrap';

const Food = () => {
  const blogItems = [
    {
      id: 1,
      image: "images/blog1.png",
      date: "23 DEC, 2020",
      title: "Addiction When Food Plate Becomes"
    },
    {
      id: 2,
      image: "images/blog2.png",
      date: "23 DEC, 2020",
      title: "Addiction When Food Plate Becomes"
    },
    {
      id: 3,
      image: "images/blog3.png",
      date: "23 DEC, 2020",
      title: "Addiction When Food Plate Becomes"
    }
  ];

  return (
    <div className="myfood">
      <h6 className="smmal text-center">Our New Blog News</h6>
      <h1 className="biig text-center">Our Recent News</h1>
      <Container>
        <Row>
          {blogItems.map((item) => (
            <Col key={item.id}>
              <div className="iitem">
                <img src={item.image} className="imgo img-fluid" alt="blog" />
                <div className="under">
                  <small>{item.date}</small>
                  <h5>{item.title}</h5>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>      
    </div>
  );
};

export default Food;