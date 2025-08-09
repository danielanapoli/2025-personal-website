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

function IndustryBenchmarking() {
  return (
    <div className="IndustryBenchmarking">
      <a href="#content" class="skip-to-main-link">Skip to content</a>
      <NavBar></NavBar>
      <br/> 
      <section id="content">
          <Container fluid="md">
            <Row>
              <Col>
                <Button variant='link' href="/industry">&lt; Back to all projects</Button>
              </Col>
            </Row>
            <Row>
              <Col>
              <h1>Usability Benchmarking</h1>
              </Col>
            </Row>
            <br/><br/>
            <Row>
              <Col className='text-center'>
                <Image src={`${process.env.PUBLIC_URL}/statistics.png`} alt=""></Image>
              </Col>
            </Row>
            <br/><br/>
              <AccordionToggle/>
            <br/>
            <Row>
              <Col>
                <Accordion defaultActiveKey={['0','3']} alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header><h3>Objective</h3></Accordion.Header>
                    <Accordion.Body>
                      <p id="accordion-content">
                        The <strong>Canadian Institute for Health Information</strong> (CIHI) needed to...
                      </p>
                      <ol id="accordion-content">
                        <li>Example</li>
                        <li>Example</li>
                      </ol>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header><h3>Tools</h3></Accordion.Header>
                    <Accordion.Body>
                      Sample text
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header><h3>Process</h3></Accordion.Header>
                    <Accordion.Body>
                      Sample text
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header><h3>Impact</h3></Accordion.Header>
                    <Accordion.Body>
                      Sample text
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

export default IndustryBenchmarking;