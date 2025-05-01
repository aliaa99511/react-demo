import '../Style/BlogSection.css';
import { Container, Row, Col } from 'reactstrap';

const BlogSection = () => {
  const blogPosts = [
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
    <div className="blog-section">
      <h6 className="blog-subtitle text-center">Our New Blog News</h6>
      <h1 className="blog-title text-center">Our Recent News</h1>
      <Container>
        <Row>
          {blogPosts.map((post) => (
            <Col key={post.id}>
              <div className="blog-card">
                <img src={post.image} className="blog-image img-fluid" alt="blog" />
                <div className="blog-content">
                  <small>{post.date}</small>
                  <h5>{post.title}</h5>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>      
    </div>
  );
};

export default BlogSection;