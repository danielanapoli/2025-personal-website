import '../styles/index.css';
import '../styles/App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavBar from '../navbar';
import Footer from '../footer';

function Portfolio() {
  return (
    <div className="Portfolio">
      <a href="#content" class="skip-to-main-link">Skip to content</a>
      <NavBar></NavBar>
      <br/> 
      <section id="content">
          <Container fluid="md">
            <Row>
            <h1>Research Samples</h1>
            </Row>
            <br/>
            <Row>
              <Col className='text-center'>
                <p>
                  This page is in works. Check back soon for more updates!
                  <br/>
                </p>
              </Col>
            </Row>
          </Container>
      <Footer/>
      </section>
    </div>
  );
}

export default Portfolio;