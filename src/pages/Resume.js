import '../styles/index.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Alert from 'react-bootstrap/Alert';

import NavBar from '../navbar';
import Footer from '../footer';

function Resume() {
  return (
    <div className="Resume">
      <a href="#content" class="skip-to-main-link">Skip to content</a>
      <NavBar></NavBar>
      <br/>
      <section id="content">
        <Container fluid="md">        
          <br/>
          <Row>
            <Col><h2>Daniela Napoli</h2></Col>
          </Row>
          <Row>
            <Col md={4} className="text-start">📍 Hamilton, Ontario</Col>
            <Col md={3} fluid className="text-center">📧 <a href="mailto:hello@danielanapoli.com" rel="noopener noreferrer" title="Daniela's email address. Will open the mail app.">hello@danielanapoli.com</a></Col>
            <Col md={4} fluid className="text-end">🔗 <a href="https://www.linkedin.com/in/danielanap" target="_blank" rel="noopener noreferrer">linkedin.com/in/danielanap</a></Col>
          </Row>
          <br/>
          <Row>
            <Col><h3 class="underlined-heading">Highlight Summary</h3></Col>
          </Row>
          <Row>
            <Col md={10}>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col><h3 class="underlined-heading">UX Education</h3></Col>
          </Row>
          <Row>
            <Col md={8}>
              <strong>Doctor of Philosophy in Computer Science</strong><br/>
              Carleton University, Ottawa, Ontario<br/>
              <ul>
                <li>Thesis focus on designing remote healthcare technology for older adults; will be available to read soon.</li>
                <li>Senior member of Carleton's Human Oriented Research in Usable Security <a href="https://chorus.scs.carleton.ca/" target="_blank" rel="noopener noreferrer" title="Link to the Carleton Usable Security research lab. Opens in a new tab.">(CHORUS)</a> lab</li>
              </ul>
            </Col>
            <Col className="text-end" md={3}>September 2018 - August 2025</Col>
          </Row>
          <Row>
            <Col md={8}>
              <strong>Master of Arts in Human-Computer Interaction</strong><br/>
              Carleton University, Ottawa, Ontario<br/>
              <ul>
                <li>Thesis focus on usable security for people with visual disabiliites; available to read through <a href="https://carleton.scholaris.ca/items/b9e26ef6-df12-4cf4-bfea-07a99d045f59" target="_blank" rel="noopener noreferrer" title="Link to Carleton University's Thesis repository">Carleton University</a>.</li>
                <li>Junior member of Carleton's Human Oriented Research in Usable Security <a href="https://chorus.scs.carleton.ca/" target="_blank" rel="noopener noreferrer" title="Link to the Carleton Usable Security research lab. Opens in a new tab.">(CHORUS)</a> lab</li>
              </ul>
            </Col>
            <Col className="text-end" md={3}>September 2016 - May 2018</Col>
          </Row>
          <br/>
          <Row>
            <Col><h3 class="underlined-heading">UX Experience</h3></Col>
          </Row>
          <Row>
            <Col md={8}>
              <strong>Senior User Experience Researcher</strong><br/>
              Canadian Institute for Health Information, Toronto, Ontario<br/>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </Col>
            <Col className="text-end" md={3}>October 2021 - March 2023</Col>            
          </Row>
          <Row>
            <Col md={8}>
              <strong>User Experience Researcher, Intern</strong><br/>
              Canadian Institute for Health Information, Ottawa, Ontario<br/>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </Col>
            <Col className="text-end" md={3}>September 2020 - December 2020</Col>
          </Row>
          <Row>
            <Col md={8}>
              <strong>Design Researcher, Intern</strong><br/>
              IBM, Ottawa, Ontario<br/>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </Col>
            <Col className="text-end" md={3}>May 2019 - December 2019</Col>
          </Row>
          <Row>
            <Col md={8}>
              <strong>Human Factors Consultant, Intern</strong><br/>
              CAE, Ottawa, Ontario<br/>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </Col>
            <Col className="text-end" md={3}>January 2017 - July 2017</Col>
          </Row>
          <br/>

          <Row>
            <Col><h3 class="underlined-heading">Professional Development</h3></Col>
          </Row>
          <Row>
            <Col md={8}>
              <strong>Measuring UX and ROI</strong><br/>
              NNGroup, <a href="https://www.nngroup.com/courses/measuring-ux/" target="_blank" rel="noopener noreferrer" title="Link to the course website. Opens in a new tab.">Online course</a><br/>
            </Col>
            <Col className="text-end" md={3}>August 2022</Col>
          </Row>
          <br/>
          <Row>
            <Col md={8}>
              <strong>Discovery: Building the Right Thing</strong><br/>
              NNGroup, <a href="https://www.nngroup.com/courses/discovery/" target="_blank" rel="noopener noreferrer" title="Link to the course website. Opens in a new tab.">Online course</a><br/>
            </Col>
            <Col className="text-end" md={3}>August 2022</Col>
          </Row>
          <br/>
          <Row>
            <Col md={8}>
              <strong>Statistics for UX</strong><br/>
              NNGroup, <a href="https://www.nngroup.com/courses/ux-statistics" target="_blank" rel="noopener noreferrer" title="Link to the course website. Opens in a new tab.">Online course</a><br/>
            </Col>
            <Col className="text-end" md={3}>August 2022</Col>
          </Row>
          <br/>
          <Row>
            <Col md={8}>
              <strong>Workshop Organizer</strong> <Badge bg="secondary">Leadership</Badge><br/>
              <a href="https://www.usenix.org/conference/soups2021" target="_blank" rel="noopener noreferrer">17th Annual Symposium on Usable Privacy and Security (SOUPS)</a><br/>
            </Col>
            <Col className="text-end" md={3}>August 2021</Col>
          </Row>
          <br/>
          <Row>
            <Col md={8}>
              <strong>Mentoring Program Co-Chair</strong> <Badge bg="secondary">Leadership</Badge><br/>
              <a href="https://www.usenix.org/conference/soups2020" target="_blank" rel="noopener noreferrer">16th Annual Symposium on Usable Privacy and Security (SOUPS)</a><br/>
            </Col>
            <Col className="text-end" md={3}>August 2020</Col>
          </Row>
          <br/>
          <Row>
            <Col md={8}>
              <strong>Enterprise Design Thinking Co-Creater</strong> <Badge bg="secondary">Certificate</Badge><br/>
              IBM, Ottawa, Ontario<br/>
              <ul>
                <li>Learn more about the <a href="https://www.ibm.com/design/thinking/page/badges/core-skills#Co-Creator" target="_blank" rel="noopener noreferrer">Co-Creator</a> skillset and badge criteria.</li>
              </ul>
            </Col>
            <Col className="text-end" md={3}>December 2019</Col>
          </Row>
          <br/>
        </Container>
        <Footer/>
      </section>
    </div>
  );
}

export default Resume;