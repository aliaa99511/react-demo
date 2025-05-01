import React, { useState } from 'react';
import '../Style/LegalSolutionsSection.css';
import { Collapse, Button, CardBody, Card, Container, Row, Col } from 'reactstrap';

interface AccordionState {
  [key: number]: boolean;
}

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

const LegalSolutionsSection: React.FC = () => {
  const [accordionState, setAccordionState] = useState<AccordionState>({
    1: true,
    2: false,
    3: false
  });

  const toggleAccordion = (id: number) => {
    setAccordionState(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const accordionItems: AccordionItem[] = [
    {
      id: 1,
      title: "How to download and register",
      content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et."
    },
    {
      id: 2,
      title: "How to create your paypal account",
      content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et."
    },
    {
      id: 3,
      title: "How to link your paypal and bank account",
      content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et."
    }
  ];

  const featureItems: string[] = [
    "Aperiam iste nam molestias",
    "Modi perferendis ipsa",
    "Perspic iste culpa"
  ];

  return (
    <div className="legal-solutions-section py-5">
      <Container>
        <div className="legal-solutions-content">
          <Row>
            <Col>
              <img src="images/team-9.jpg" alt="Team" className="img img-fluid" />
            </Col>
            <Col>
              <div className="legal-solutions-description">
                <h2>We Have Legal Solutions</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam reprehenderit perspiciatis iste culpa consequuntur consequatur eum, voluptatum, quod deserunt maiores?</p>
                <p>Modi perferendis ipsa ducimus consequuntur excepturi autem, numquam facere aperiam iste nam molestias provident consectetur molestiae voluptatibus ipsum. Fugiat, quas.</p>
                <div className="feature-list">
                  {featureItems.map((item, index) => (
                    <div key={index} className={`feature-item feature-item-${index + 1}`}>
                      <i className="fa fa-check" aria-hidden="true"></i>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
            <Col>
              <div className="legal-solutions-accordion">
                {accordionItems.map(item => (
                  <div key={item.id}>
                    <Button 
                      color="secondary" 
                      size="lg" 
                      block 
                      onClick={() => toggleAccordion(item.id)} 
                      style={{ marginBottom: '1rem' }}
                    >
                      {item.title}
                    </Button>
                    <Collapse isOpen={accordionState[item.id]}>
                      <Card>
                        <CardBody>
                          {item.content}
                        </CardBody>
                      </Card>
                    </Collapse>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default LegalSolutionsSection;