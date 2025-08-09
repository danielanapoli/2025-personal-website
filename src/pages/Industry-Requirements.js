import '../styles/index.css';
import '../styles/App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image';

import NavBar from '../navbar';
import Footer from '../footer';

function IndustryRequirements() {
  return (
    <div className="IndustryRequirements">
      <a href="#content" class="skip-to-main-link">Skip to content</a>
      <NavBar></NavBar>
      <br/> 
      <section id="content">
          <Container fluid="md">
            <Row>
              <Col>
                <a href="/industry">&lt; Back</a>
              </Col>
            </Row>
            <Row>
              <Col>
              <h1>Requirements Analysis</h1>
              </Col>
            </Row>
            <br/><br/>
            <Row>
              <Col className='text-center'>
                <Image src={`${process.env.PUBLIC_URL}/project.png`} alt=""></Image>
              </Col>
            </Row>
            <br/><br/>
            <Row>
              <Col>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header><h3>Objective</h3></Accordion.Header>
                    <Accordion.Body>
                      Sample text
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

export default IndustryRequirements;