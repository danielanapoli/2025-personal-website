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
            <h1>Want to chat?</h1>
            </Row>
            <br/>
            <Row>
              <Col className='text-center'>
                <p>If you have any questions, or want to talk more, email me at<br/>
                <strong><a href="mailto:hello@danielanapoli.com" rel="noopener noreferrer" title="Daniela's email address. Will open the mail app.">hello@danielanapoli.com</a></strong></p>
              </Col>
            </Row>
          </Container>
      </section>
      <Footer/>
    </div>
  );
}

export default Contact;