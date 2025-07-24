import '../styles/App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Badge from 'react-bootstrap/Badge';
import Alert from 'react-bootstrap/Alert';

import YoutubeEmbed from "../YouTubeEmbed";
import SlidesEmbed from '../SlidesEmbed';

import NavBar from '../navbar';
import Footer from '../footer';

function PubsTalks() {
  return (
  <div className="PubsTalks">
      <a href="#content" class="skip-to-main-link">Skip to content</a>
      <NavBar></NavBar>
      <br/>
      <section id="content">

        <Container fluid="md">
          <Row>
            <h1>Sharing User Insights</h1>
          </Row>
          <br/>
          <Row>
            <Col className='text-center'>
              <p>
                Explore my other academic publications by visiting <a href="https://scholar.google.com/citations?user=qdH8ZZcAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" title="Daniela's profile on Google Scholar. Opens in a new tab.">Google Scholar</a>.<br/>
                (Coming soon) View my industry-related projects on the <a href="#" rel="noopener noreferrer" title="The research portfolio page of Daniela's website. Opens in a new tab.">research portfolio</a> page.
              </p>
            </Col>
            <Col md={3} className='text-center'>
              <Alert variant='light'>
                <Alert.Heading>Get a copy!</Alert.Heading>
                <p>
                  If you can't access the linked papers, <a href="mailto:hello@danielanapoli.com" title="Daniela's email address. Opens in mail app.">ask me</a> for an alternative version.
                </p> 
              </Alert>
            </Col>
          </Row>
          <br/>

        <Tabs
          defaultActiveKey="publications"
          id="pubs-talks-tab"
          className="mb-3"
        >

        <Tab eventKey="publications" title="Conference Publications">
          <Row>
            <Col md={5}>
              <a href="https://dl.acm.org/doi/abs/10.1145/3170427.3180292" target="_blank" rel="noopener noreferrer" title="A link to the ACM Digital Library. Opens in a new tab."><h3>Developing Accessible and Usable Security (ACCUS) Heuristics</h3></a>
              <Badge bg="secondary">Extended Abstract</Badge> <Badge bg="secondary">Presentation</Badge>
            </Col>
            <Col>
              <p>
                  When fused, usable security and accessibility principles can help shape web experiences that are safer for screen reader users with visual disabilities.
                  This short paper summarizes our process in developing the ACCUS heuristics and high-level findings from our heuristic evaluation of 10 websites.          
              </p>
              <div>
                <SlidesEmbed embedId={"https://www.slideshare.net/slideshow/embed_code/key/8e3R7RXhawyezP?hostedIn=slideshare&page=upload"}/>
              </div>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col md={5}>
              <a href="https://link.springer.com/chapter/10.1007/978-3-031-92840-6_5" target="_blank" rel="noopener noreferrer" title="A link to the Springer research database. Opens in a new tab."><h3>Exploring User Perspectives on Data Collection, Data Sharing Preferences, and Privacy Concerns with Remote Healthcare Technology</h3></a>
              <Badge bg="secondary">Full-paper</Badge> <Badge bg="secondary">Presentation</Badge>
            </Col>
            <Col>
              <p>
                  Remote healthcare technology includes devices that can help people take care of their health and well-being outside of traditional clinical settings. 
                  This paper dives into our Canada-wide survey on how users' perspectives on remote healthcare technology can vary depending on age and health context.              
              </p>
              <div>
                <SlidesEmbed embedId={"https://www.slideshare.net/slideshow/embed_code/key/hv7R1brxl5lmD?startSlide=1"}/>
              </div>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col md={5}>
              <a href="https://link.springer.com/chapter/10.1007/978-3-031-94159-7_24" target="_blank" rel="noopener noreferrer" title="A link to the Springer research database. Opens in a new tab."><h3>Helpful but Terrifying: Older Adults’ Perspectives of AI in Remote Healthcare Technology</h3></a>
              <Badge bg="secondary">Poster</Badge> <Badge bg="secondary">Presentation</Badge>
            </Col>
            <Col>
              <p>
                  While some older adults are interested in adopting remote healthcare technology with AI features, they also feel deeply concerned about their safety and privacy.
                  This poster focuses on our AI-related findings within a larger interview study that will be published soon.              
              </p>
              <div>
                <SlidesEmbed embedId={"https://www.slideshare.net/slideshow/embed_code/key/epGU6OoTUnkQ9O?startSlide=1"}/>
              </div>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col md={5}>
              <a href="https://www.usenix.org/conference/soups2021/presentation/napoli" target="_blank" rel="noopener noreferrer" title="A link to the USENIX website. Opens in a new tab."><h3>"I'm Literally Just Hoping This Will Work:'' Obstacles Blocking the Online Security and Privacy of Users with Visual Disabilities</h3></a>
              <Badge bg="secondary">Full-paper</Badge> <Badge bg="secondary">Presentation</Badge>
            </Col>
            <Col>
              <p>
                Even when using screen-reading technology, people with visual disabilities are not always given critical privacy information while browsing online. 
                This paper details our ethnographic findings and design recommendations on improving security and privacy warnings for users with visual disabilities. 
              </p>
              <div>
                <YoutubeEmbed embedId="wPes4YF4bxY" />
              </div>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col md={5}>
              <a href="https://www.usenix.org/conference/soups2020/presentation/napoli" target="_blank" rel="noopener noreferrer" title="A link to the USENIX website. Opens in a new tab."><h3>Something Doesn’t Feel Right: Using Thermal Warnings to Improve User Security Awareness</h3></a>
              <Badge bg="secondary">Extended Abstract</Badge> <Badge bg="secondary">Presentation</Badge>
            </Col>
            <Col>
              <p>
                A lot of security warnings are pop-ups or colour-coded icons. But, what if you could <em>feel</em> the security of a website? 
                This poster presents NoViz-Thermal, an Arduino-based prototype for communicating TLS certificates through heat warnings. 
              </p>
              <div>
                <YoutubeEmbed embedId={"c_swgoqTOw8"}/>
              </div>
            </Col>
          </Row>
          <br/>
          <br/>
        </Tab>

        <Tab eventKey="talks" title="Other Talks">
          <Row>
            <Col md={5}><h3>Remote Healthcare Technology Use Cases and the Contextual Integrity of Older Adult User Privacy</h3>
            </Col>
            <Col>
              <p>
                Older adults' privacy perspectives can be context-dependent, and their willingness to make privacy tradeoffs can vary depending on healthcare contexts. 
                This talk took place at the <a href="https://privaci.info/symposium/2023/cfp.html" target="_blank" rel="noopener noreferrer" title="A link to the CI Symposium's website. Opens in a new tab.">5th Annual Symposium on Applications of Contextual Integrity</a>. 
              </p>
              <SlidesEmbed embedId={"https://www.slideshare.net/slideshow/embed_code/key/zsZeg71024rJW?hostedIn=slideshare&page=upload"} />
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col md={5}><h3>The U in UX can be For Everyone: Accessible and Usable Privacy</h3>
            </Col>
            <Col>
              <p>
                Privacy-conscious designs can integrate accessibility-related principles for truly inclusive and safe solutions. 
                This talk was part of a larger online workshop I ran for the <a href="https://uwaterloo.ca/stratford-school-of-interaction-design-and-business/uxperience-think-privacy" target="_blank" rel="noopener noreferrer" title="A link to the University of Waterloo website. Opens in a new tab.">uXperience | Think Privacy Design Jam</a>.
              </p>
              <YoutubeEmbed embedId={"hxwTL7ljHHU"}/>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col md={5}><h3>Design Tips to Help Non-Visual Visitors Stay Secure Online</h3>
            </Col>
            <Col>
              <p>
                With some extra steps, website security features can be made even more inclusive.
                This invited talk took place at the <a href="https://guides.uoguelph.ca/event/accessibility-conference-designing-diverse-abilities" target="_blank" rel="noopener noreferrer" title="A link to the University of Guelph website. Opens in a new tab.">10th Annual Accessibility Conference: Designing for Diverse Abilities</a> for accessibility practitioners. 
              </p>
              <SlidesEmbed embedId={"https://www.slideshare.net/slideshow/embed_code/key/GoBnk9VwftLcdo?hostedIn=slideshare&page=upload"} />
            </Col>
          </Row>
          <br/>
          <br/>
        </Tab>
        </Tabs>       
      </Container>
      <Footer/>
      </section>
    </div>
  );
}

export default PubsTalks;
