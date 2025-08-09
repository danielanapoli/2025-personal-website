import '../styles/index.css';
import '../styles/App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavBar from '../navbar';
import Footer from '../footer';

function Contact() {
  return (
    <div className="Contact">
      <a href="#content" class="skip-to-main-link">Skip to content</a>
      <NavBar></NavBar>
      <br/> 
      <section id="content">
          <Container fluid="md">
            <Row>
              <Col>
              <h1>Usability Benchmarking</h1>
              </Col>
            </Row>
            <Row>
              <Col className='text-center'>
                <p>
                    In progress...
                </p>
              </Col>
            </Row>
          </Container>
      </section>
      <Footer/>
    </div>
  );
}

export default Contact;