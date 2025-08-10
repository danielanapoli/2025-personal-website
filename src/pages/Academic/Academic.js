import '../../styles/App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import NavBar from '../../components/navbar';
import Footer from '../../footer';
import { SkipToContentLink } from '../../SkipLink';

function Academic() {
  return (
  <div className="Academic">
      <SkipToContentLink />
      <NavBar></NavBar>
      <br/>
      <section id="content">
      <Container fluid='md'>
        <Row>
          <Col>
            <h1>Academic Portfolio</h1>
            <p>
              Some of my favourite academic works focused on <strong>accessibility</strong> and <strong>usable security</strong>.
              You can learn more about my other academic publications by visiting <a href="https://scholar.google.com/citations?user=qdH8ZZcAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" title="Daniela's profile on Google Scholar. Opens in a new tab.">Google Scholar</a>.
              You can also explore my <a href="/#/industry" rel="noopener noreferrer" title="The industry research portfolio page of Daniela's website.">industry portfolio</a> or my <a href="/#/resume" rel="noopener noreferrer" title="A link to Daniela's online resume.">resume</a>.
              Feel free to connect if you'd like to talk more about anything listed here!
            </p>
          </Col>
        </Row>
        <br/>
        <Row fluid className="justify-content-md-center">
          <CardGroup>
            <Card style={{ width: '100%' }} bg="" className='border-0'></Card>
            <Card style={{ width: '100%' }} bg="light" className='border-0'>
              <Card.Img variant='top' src={`${process.env.PUBLIC_URL}/img/news.png`}/>
              <Card.Body>
                <Card.Title>Paper Publications</Card.Title>
                <Card.Text>
                  Samples of some peer-reviewed contributions to academic literature on human-centered design and usable security.
                </Card.Text>
                <Button variant="secondary" href="/#/academic/publications">Read more</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '100%' }} bg="light" className='border-0'>
              <Card.Img variant='top' src={`${process.env.PUBLIC_URL}/img/microphone.png`}/>
              <Card.Body>
                <Card.Title>Talks and Workshops</Card.Title>
                <Card.Text>
                  Highlights from some of my invited talks and presentations at HCI conferences and workshops.
                </Card.Text>
                <Button variant="secondary" href="/#/academic/talks">Read more</Button>
              </Card.Body>
            </Card>            
            <Card style={{ width: '100%' }} bg="" className='border-0'></Card>
          </CardGroup>
        </Row>
      </Container>      
    </section>
    <Footer/>
    </div>
  );
}

export default Academic;
