import '../styles/index.css';
import '../styles/App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import NavBar from '../navbar';
import Footer from '../footer';
import { Badge } from 'react-bootstrap';

function Industry() {
  return (
    <div className="Industry">
      <a href="#content" class="skip-to-main-link">Skip to content</a>
      <NavBar></NavBar>
      <br/> 
      
      <section id="content">

          <Container fluid="md">
            <Row>
              <Col>
                <h1>Industry Portfolio</h1>
                <p>
                  Some key projects that I've completed while working on UX teams. You can also explore my <a href="/academic" rel="noopener noreferrer" title="The academic research portfolio page of Daniela's website.">academic projects</a>. 
                  Feel free to connect if you'd like to talk more about anything listed here!
                </p>
              </Col>
            </Row>
            <br/>
            
            <Row>
              <Col>
                <Card style={{ width: 'auto' }} className='border-0'>
                  <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/pie-chart.png`} />
                  <Card.Body>
                    <Card.Title>Automatic Userbase Segmentation</Card.Title>
                    <Card.Text>
                      Created an automated module for processing user data and website metadata to thematically group insights and inform persona implementation.
                    </Card.Text>
                    <Card.Subtitle>Technical skills</Card.Subtitle>
                    <Card.Text>
                      Python programming, data scraping, data standardization, natural language processing
                    </Card.Text>
                  <Button variant="secondary" href="/industry-automation">Read more</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card style={{ width: 'auto' }} className='border-0'>
                  <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/statistics.png`} />
                  <Card.Body>
                    <Card.Title>Usability Benchmarking</Card.Title>
                    <Card.Text>
                      Assessed how iterative design updates influenced usability and SEO metrics over time.
                    </Card.Text>
                    <Card.Subtitle>Quantitative methods</Card.Subtitle>
                    <Card.Text>
                      collecting performance metrics, metadata analysis, descriptive statistics, t-tests, ANOVA, chi-square tests
                    </Card.Text>
                  <Button variant="secondary" href="/industry-benchmarking">Read more</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card style={{ width: 'auto' }} className='border-0'>
                  <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/project.png`} />
                  <Card.Body>
                    <Card.Title>Requirements Analysis</Card.Title>
                    <Card.Text>
                      Explored user needs and pain points and formulated actionable recommendations to guide the direction of future design work.  
                    </Card.Text>
                    <Card.Subtitle>Qualitative methods</Card.Subtitle>
                    <Card.Text>
                      user interviews, stakeholder interviews, journey mapping, cross-department focus groups, design studio workshops
                    </Card.Text>
                  <Button variant="secondary" href="/industry-requirements">Read more</Button>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col>
                <Card style={{ width: 'auto' }} className='border-0'>
                  <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/team.png`} />
                  <Card.Body>
                    <Card.Title>Exploring Design Workflows</Card.Title>
                    <Card.Text>
                      Investigated design, development, and product manager workflows to uncover challenges and identify opportunities for cross-functional improvement.
                    </Card.Text>
                    <Card.Subtitle>Qualitative methods</Card.Subtitle>
                    <Card.Text>
                      stakeholder interviews, journey mapping, affinity diagramming, service blueprinting
                    </Card.Text>
                  <Button variant="secondary" href="/industry-workflows">Read more</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <br/>
          </Container>
        <Footer/>
        <Row><Col className='text-center'><p class='smaller-text'>Icon credits to <a href="https://www.flaticon.com/authors/freepik" target='_blank' rel='noopener noreferrer' title="A website dedicated to royalty-free icons. Opens in new tab.">Freepik</a>.</p></Col></Row>
      </section>
    </div>
  );
}

export default Industry;