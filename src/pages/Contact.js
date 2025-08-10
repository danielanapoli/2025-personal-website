import '../styles/index.css';
import '../styles/App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavBar from '../components/navbar';
import Footer from '../footer';
import { SkipToContentLink } from '../SkipLink';

function Contact() {
  return (
    <div className="Contact">
      <SkipToContentLink/>
      <NavBar/>
      <br/> 
      <section id="content">
          <Container fluid="md">
            <Row>
              <Col>
              <h1>Contact</h1>
              </Col>
            </Row>
            <Row>
              <Col className='text-center'>
                <p>
                  Want to talk more? For my fastest response, email me at <strong>hello@danielanapoli.com</strong>
                  <br/> More ways to connect are down below.
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