import '../styles/App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

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
          <Row className="justify-content-md-center">
            <Col xs lg="10">
              <h1>Hi, I'm Daniela</h1>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs lg="10" md="auto">
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
                Thank you for spending some time here. Each case study highlights the full arc of research: the framing of key questions, the selection of appropriate methodologies, and the actionable insights that drove product decisions. If you have any questions, feel free to email me at <a href="mailto:hello@danielanapoli.com">hello@danielanapoli.com</a>.
              </p>
              <br/>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs lg="10">
              <CardGroup className='align-items-stretch'>
                <Card bg='light' style={{ width: '100%' }} className='border-0 m-4'>
                  <Card.Body className="text-center">
                    <Card.Title>Industry Projects</Card.Title>
                    <Card.Text>
                      Driving data-driven changes to products and teams. My industry projects transform user experiences into actionable insights.
                    </Card.Text>
                    <Card.Link href="/#/industry">Read more</Card.Link>
                  </Card.Body>
                  
                </Card>
                <Card  bg='light'  style={{ width: '100%' }} className='border-0 m-4'>
                  <Card.Body className="text-center">
                    <Card.Title>Academic Projects</Card.Title>
                    <Card.Text>
                      Uncovering novel insights through rigorous research methods. My published works contribute to the HCI knowledge base.
                    </Card.Text>
                    <Card.Link href="/#/academic">Read more</Card.Link>
                  </Card.Body>                
                </Card>
                <Card  bg='light'  style={{ width: '100%' }} className='border-0 m-4'>
                  <Card.Body className="text-center">
                    <Card.Title>Design Toolkit</Card.Title>
                    <Card.Text>
                      Culminating my graduate research, the design toolkit offers guidance in making remote healthcare technology for older adults.
                    </Card.Text>
                    <Card.Link href="/#/academic/toolkit">Read more</Card.Link>
                  </Card.Body>
                </Card>
              </CardGroup>
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