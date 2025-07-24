import '../styles/App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';

import NavBar from '../navbar';
import Footer from '../footer';

function Home() {
  return(
  <div className="Home">
    <a href="#content" class="skip-to-main-link">Skip to content</a>
    <NavBar></NavBar>
    <br/>
        <section id="content">
        <Container fluid="md">
          <Row>
            <Col></Col>
            <Col md={3} className='text-center'>
              <Alert variant='warning'>
                <Alert.Heading>Thanks for visiting!</Alert.Heading>
                <p>Some pages are still being made. Check back soon for more updates.</p>
            </Alert>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col md={5} className="text-center">
              <Image width="50%" alt="Photo of smiling Daniela wearing a buckethat" src={`${process.env.PUBLIC_URL}/daniela.jpg`} roundedCircle thumbnail/>
            </Col>
            <Col md={6}>
              <h1>Hi, I'm Daniela</h1>
              <p>I'm a <strong>Usability (UX) Researcher</strong> from Ontario, Canada.</p>
              <p>On multi-disciplinary teams, I can be your go-to for embedding users' needs in technological visions.</p>
              <p>With years of industry experience and a PhD in Computer Science, I'm well-versed in leveraging UX methods in agile environments.</p>
              <p>I've uncovered impactful insights for companies in the tech, healthcare, and aviation sectors. I have a passion for inclusive design, with specialties in accessibility, usable security, and privacy.</p>
              <p>When I'm not geeking out about data, you'll find me hiking in the woods, gardening, reading sci-fi novels, or playing MTG.</p>
              <br/>
            </Col>
            <Col></Col>
          </Row>
        <br/>
    </Container>
    <Footer/>
    </section>
  </div>
  );
}

export default Home;