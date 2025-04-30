import '../Style/Courses.css';
import { Card, Button, CardImg, CardTitle, CardText, Row, Col, CardSubtitle, CardBody, Container } from 'reactstrap';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Graphic Design',
      image: 'images/portfolio-img8.jpg',
      reviews: 52,
      students: 562,
      likes: 562,
      price: 'Free'
    },
    {
      id: 2,
      title: 'Web Development',
      image: 'images/portfolio-img7.jpg',
      reviews: 52,
      students: 562,
      likes: 562,
      price: 'Free'
    },
    {
      id: 3,
      title: 'Digital Marketing',
      image: 'images/portfolio-img1.jpg',
      reviews: 52,
      students: 562,
      likes: 562,
      price: 'Free'
    }
  ];

  return (
    <div className="course">
      <h6>Most Popular Course Of This Week</h6>
      <h1>Our Popular Course</h1>
      <Container>
        <Row>
          {courses.map(course => (
            <Col sm="12" md="6" lg="4" key={course.id} className="mb-4">
              <Card key={course.id}>
                <CardImg top width="100%" src={course.image} alt={course.title} />
                <CardBody>
                  <CardTitle>{course.title}</CardTitle>
                  <CardSubtitle>
                    <div className="stan">
                      <div className="icon">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </div>
                      <p className="text-muted">{course.reviews} Review</p>
                    </div>
                  </CardSubtitle>
                  <CardText className="text-muted">
                    <div className="textt">
                      <div>
                        <i className="fa fa-user-o" aria-hidden="true"></i>
                        <span>{course.students}</span>
                      </div>
                      <div>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <span>{course.likes}</span>
                      </div>
                      <div className="fre">
                        <span className="free">{course.price}</span>
                      </div>
                    </div>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="flexbtn">
          <Button className="butt" color="secondary" size="lg">Find More Courses</Button>
        </div>
      </Container>
    </div>
  );
};

export default Courses;