import '../Style/ContactForm.css';
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

const ContactForm = () => {
  return (
    <div className="contact-section">
      <div className="container">
        <div className="row contact-info-row">
          {contactInfo.map((item, index) => (
            <div className="col" key={index}>
              <div className={`contact-info-item text-center ${index === 1 ? 'highlighted-item' : ''}`}>
                <i className={item.icon} aria-hidden="true"></i>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <hr className="contact-divider" />

        <Form className="contact-form">
          <FormGroup row>
            <Label for="nameInput" sm={12}>Name</Label>
            <Col sm={12}>
              <Input type="text" id="nameInput" placeholder="Your name" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="emailInput" sm={12}>Email</Label>
            <Col sm={12}>
              <Input type="email" name="email" id="emailInput" placeholder="Your email" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="messageInput" sm={12}>Message</Label>
            <Col sm={12}>
              <Input type="textarea" name="text" id="messageInput" placeholder="Your message" />
            </Col>
          </FormGroup>

          <div className="submit-button-container">
            <div className="input-group mb-3">
              <button type="button" className="btn btn-dark text-uppercase submit-button">
                <p className="text-capitalize">Send message</p>
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

export default ContactForm;