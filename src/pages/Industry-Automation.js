import '../styles/index.css';
import '../styles/App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import NavBar from '../navbar';
import Footer from '../footer';
import AccordionToggle from '../helpers/accordionToggle';


function IndustryAutomation() {
  return (
    <div className="IndustryAutomation">
      <a href="#content" class="skip-to-main-link">Skip to content</a>
      <NavBar></NavBar>
      <br/> 
      <section id="content">
          <Container fluid="md">
            <Row>
              <Col>
                <Button variant='link' href="/industry">&lt; Back</Button>
              </Col>
            </Row>
            <Row>
              <Col>
              <h1>Automatic Userbase Segmentation</h1>
              </Col>
            </Row>
            <br/><br/>
            <Row>
              <Col className='text-center'>
                <Image src={`${process.env.PUBLIC_URL}/pie-chart.png`} alt=""></Image>
              </Col>
            </Row>
            <br/><br/>
            <AccordionToggle/>
            <br/>
            <Row>
              <Col>
                <Accordion defaultActiveKey={['0','3']} alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header><h3>Objectives</h3></Accordion.Header>
                    <Accordion.Body>
                      <ol id="accordion-content">
                        <li>Map survey responses to organization's persona framework</li>
                        <li>Update personas to align with the mapped responses</li>
                      </ol>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header><h3>Tools</h3></Accordion.Header>
                    <Accordion.Body>
                      <ul id="accordion-content">
                        <li>Python</li>
                        <li>VS Code</li>
                        <li>Excel</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header><h3>Process</h3></Accordion.Header>
                    <Accordion.Body>
                      <h4>Data Scrubbing</h4>
                      <ul id="accordion-content">
                        <li>Example text</li>
                      </ul>
                      <h4>Natural Language Processing</h4>
                      <ul id="accordion-content">
                        <li>Example text</li>
                      </ul>
                      <h4>Mapping Data to Personas</h4>
                      <ul id="accordion-content">
                        <li>Example text</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header><h3>Impact</h3></Accordion.Header>
                    <Accordion.Body>
                      <ul id="accordion-content">
                        <li>Instigation of critical discussion on the organization's targeted users</li>
                        <li>Quick, easy, reusable way to map future survey responses to persona framework</li>
                        <li>Proof-of-concept for potential AI integration features in marketing software</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Container>
      </section>
      <Footer/>
    </div>
  );
}

export default IndustryAutomation;