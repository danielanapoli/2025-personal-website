import '../../styles/App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import YoutubeEmbed from "../../YouTubeEmbed";
import SlidesEmbed from '../../SlidesEmbed';

import NavBar from '../../components/navbar';
import Footer from '../../footer';

function AcademicPublications() {
  return (
    <div className="AcademicPublications">
      <a href="#content" class="skip-to-main-link">Skip to content</a>
      <NavBar></NavBar>
      <br/> 
      <section id="content">
    <Container>
        <Row>
            <Col>
                <Button variant='link' href="/#/academic">&lt; Back to all projects</Button>
            </Col>
        </Row>
        <h1>Publications</h1>
        <br/>
        <Row>
            <Col>
              <a href="https://dl.acm.org/doi/abs/10.1145/3170427.3180292" target="_blank" rel="noopener noreferrer" title="A link to the ACM Digital Library. Opens in a new tab."><h3>Developing Accessible and Usable Security (ACCUS) Heuristics</h3></a>
              <Badge bg="secondary">Extended Abstract</Badge> <Badge bg="secondary">Presentation</Badge>
              <br/>
              <br/>
              <p>
                  When used together, usable security and accessibility principles can help shape web experiences that are safer for screen reader users with visual disabilities.
                  This short paper summarizes the development of ACCUS heuristics and high-level findings from a heuristic evaluation of 10 websites.          
                <br/>
                <br/>
                <strong>Downloads:</strong> 362<br/>
                <strong>Citations:</strong> 24<br/>
              </p>
            </Col>
            <Col md={4}>
              <div className='smaller-div'>
                <SlidesEmbed embedId={"https://www.slideshare.net/slideshow/embed_code/key/8e3R7RXhawyezP?hostedIn=slideshare&page=upload"}/>
              </div>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col>
              <a href="https://link.springer.com/chapter/10.1007/978-3-031-92840-6_5" target="_blank" rel="noopener noreferrer" title="A link to the Springer research database. Opens in a new tab."><h3>Exploring User Perspectives on Data Collection, Data Sharing Preferences, and Privacy Concerns with Remote Healthcare Technology</h3></a>
              <Badge bg="secondary">Full-paper</Badge> <Badge bg="secondary">Presentation</Badge>
              <br/>
              <br/>
             <p>
                  Remote healthcare technology includes devices that can help people take care of their health and well-being outside of traditional clinical settings. 
                  This paper dives into a Canada-wide survey on how users' perspectives on remote healthcare technology can vary depending on age and health context.              
                  <br/>
                  <br/>
                <strong>Downloads:</strong> 177<br/>
                <strong>Citations:</strong> 1<br/>
              </p>
            </Col>
            <Col md={4}>
              <div className='smaller-div'>
                <SlidesEmbed embedId={"https://www.slideshare.net/slideshow/embed_code/key/hv7R1brxl5lmD?startSlide=1"}/>
              </div>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col>
              <a href="https://link.springer.com/chapter/10.1007/978-3-031-94159-7_24" target="_blank" rel="noopener noreferrer" title="A link to the Springer research database. Opens in a new tab."><h3>Helpful but Terrifying: Older Adults’ Perspectives of AI in Remote Healthcare Technology</h3></a>
              <Badge bg="secondary">Poster</Badge> <Badge bg="secondary">Presentation</Badge>
              <br/><br/>
              <p>
                  While some older adults are interested in adopting remote healthcare technology with AI features, they also feel deeply concerned about their safety and privacy.
                  This poster focuses on AI-related findings within a larger interview study that will be published soon.              
                  <br/> <br/>
                <strong>Downloads:</strong> 218<br/>
                <strong>Citations:</strong> 0<br/>
              </p>
            </Col>
            <Col md={4}>
              <div className='smaller-div'>
                <SlidesEmbed embedId={"https://www.slideshare.net/slideshow/embed_code/key/epGU6OoTUnkQ9O?startSlide=1"}/>
              </div>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col>
            <a href="https://www.usenix.org/conference/soups2021/presentation/napoli" target="_blank" rel="noopener noreferrer" title="A link to the USENIX website. Opens in a new tab."><h3>"I'm Literally Just Hoping This Will Work:'' Obstacles Blocking the Online Security and Privacy of Users with Visual Disabilities</h3></a>
              <Badge bg="secondary">Full-paper</Badge> <Badge bg="secondary">Presentation</Badge>
              <br/><br/>
              <p>
                Even when using screen-reading technology, people with visual disabilities are not always given critical privacy information while browsing online. 
                This paper details ethnographic findings and design recommendations on improving security and privacy warnings for users with visual disabilities. 
                <br/><br/>
                <strong>Downloads:</strong> N/A<br/>
                <strong>Citations:</strong> 29<br/>
              </p>
            </Col>
            <Col md={4}>
              <YoutubeEmbed embedId="wPes4YF4bxY" />
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col>
              <a href="https://www.usenix.org/conference/soups2020/presentation/napoli" target="_blank" rel="noopener noreferrer" title="A link to the USENIX website. Opens in a new tab."><h3>Something Doesn’t Feel Right: Using Thermal Warnings to Improve User Security Awareness</h3></a>
              <Badge bg="secondary">Extended Abstract</Badge> <Badge bg="secondary">Presentation</Badge>
              <p>
                A lot of security warnings are pop-ups or colour-coded icons. But, what if you could <em>feel</em> the security of a website? 
                This poster presents NoViz-Thermal, an Arduino-based prototype for communicating TLS certificates through heat warnings. 
                <br/><br />
                <strong>Downloads:</strong> N/A<br/>
                <strong>Citations:</strong> 4<br/>
              </p>
            </Col>
            <Col md={4}>
              <YoutubeEmbed embedId={"c_swgoqTOw8"}/>
            </Col>
        </Row>
        <Row>
            <p className='smaller-text'>*Note: Metrics are estimates. Citations are tracked by Google Scholar, and downloads are tracked by the corresponding publisher's digital library if available.</p>
        </Row>
        </Container>
      </section>
      <Footer/>
    </div>
  );
}

export default AcademicPublications
