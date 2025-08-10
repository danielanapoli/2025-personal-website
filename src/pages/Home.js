import '../styles/App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import NavBar from '../components/navbar';
import Footer from '../footer';
import { SkipToContentLink } from '../SkipLink';

function Home() {
  return(
  <div className="Home">
    <SkipToContentLink/>
    <NavBar/>
    <br/>
  <section id="content">
        <Container fluid="md">
          <Row>
            <Col>
              <h1>Hi, I'm Daniela</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                I'm a <strong>Usability (UX) Researcher</strong> from Ontario, Canada.
                On multi-disciplinary teams, I can be your go-to for embedding users' needs in technological visions.
                With years of industry experience and a PhD in Computer Science, I'm well-versed in leveraging UX methods in agile environments.
              </p>
              <p>
                I've uncovered impactful insights for companies in the tech, healthcare, and aviation sectors. 
                I have a passion for <strong>inclusive design</strong> with specialties in accessibility, usable security, and privacy.
              </p>
              <p>
                When I'm not geeking out about data, you'll find me working on fun coding projects, hiking in the woods, gardening, reading sci-fi novels, or playing MTG.
              </p>
              <br/>
            </Col>
            <Col className='text-center'>
              <Image width="50%" alt="Photo of smiling Daniela wearing a buckethat" src={`${process.env.PUBLIC_URL}/img/daniela.jpg`} roundedCircle thumbnail/>
            </Col>
          </Row>
        <br/>
    </Container>
    <Footer/>
    </section>
  </div>
  );
}

export default Home;