import '../Style/Contact.css';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';

const contactInfo = [
  {
    icon: 'fa fa-envelope fa-2x',
    text: 'email@email.com'
  },
  {
    icon: 'fa fa-map-marker fa-2x',
    text: 'Chicago, US'
  },
  {
    icon: 'fa fa-phone fa-2x',
    text: '512312311'
  }
];

const Forms = () => {
  return (
    <div className="pare parent7">
      <div className="container">
        <div className="row hello">
          {contactInfo.map((item, index) => (
            <div className="col" key={index}>
              <div className={`son text-center ${index === 1 ? 'two' : ''}`}>
                <i className={item.icon} aria-hidden="true"></i>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <hr />

        <Form>
          <FormGroup row>
            <Label for="examplePassword" sm={12}>Name</Label>
            <Col sm={12}>
              <Input type="text" id="examplePassword" placeholder="your name" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleEmail" sm={12}>Email</Label>
            <Col sm={12}>
              <Input type="email" name="email" id="exampleEmail" placeholder=" your Email " />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleText" sm={12}>Message</Label>
            <Col sm={12}>
              <Input type="textarea" name="text" id="exampleText" placeholder="Message" />
            </Col>
          </FormGroup>

          <div className="son4">
            <div className="input-group mb-3">
              <button type="button" className="btn btn-dark text-uppercase bro">
                <p className="text-capitalize">send message</p>
                <div className="input-group-prepend">
                  <i className="fa fa-paper-plane" aria-hidden="true"></i>
                </div>
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Forms;