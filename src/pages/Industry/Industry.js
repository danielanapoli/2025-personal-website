import '../../styles/index.css';
import '../../styles/App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

import NavBar from '../../components/navbar';
import Footer from '../../footer';
import { SkipToContentLink } from '../../SkipLink';

function Industry() {
  return (
    <div className="Industry">
      <SkipToContentLink />
      <NavBar></NavBar>
      <br/> 
      <section id="content">
          <Container fluid="md">
            <Row>
              <Col>
                <h1>Industry Portfolio</h1>
                <p>
                  Most recent high-impact usability research that I've done with UX teams. 
                  More details about my work experience are available on my <a href="/#" rel="noopener noreferrer" title="A link to Daniela's online resume.">resume</a>. 
                  You can also explore my <a href="/#/academic" rel="noopener noreferrer" title="The academic research portfolio page of Daniela's website.">academic projects</a>. 
                  Feel free to connect if you'd like to talk more about anything listed here!
                </p>
              </Col>
            </Row>
            <br/>            
            <Row fluid className="justify-content-md-center">
                <CardGroup>
                  <Card style={{ width: '100%' }} bg="light" className='border-0'>
                    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/img/project.png`} />
                    <Card.Body>
                      <Card.Title>Requirements Analysis</Card.Title>
                      <Card.Text>
                        Explored user needs and pain points. Formulated actionable recommendations to guide the direction of future design work.  
                      </Card.Text>
                      <Card.Subtitle>Qualitative methods</Card.Subtitle>
                      <Card.Text>
                        user interviews, stakeholder interviews, journey mapping, cross-department focus groups, design studio workshops
                      </Card.Text>
                    <Button variant="secondary" href="/#/industry/requirements">Read more</Button>
                    </Card.Body>
                  </Card>                <Card style={{ width: '100%' }} bg="light" className='border-0'>
                  <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/img/pie-chart.png`} />
                  <Card.Body>
                    <Card.Title>Automatic Userbase Segmentation</Card.Title>
                    <Card.Text>
                      Created an automated module for processing user data and website metadata to thematically group insights and inform persona implementation.
                    </Card.Text>
                    <Card.Subtitle>Technical skills</Card.Subtitle>
                    <Card.Text>
                      Python programming, data scraping, data standardization, natural language processing
                    </Card.Text>
                  <Button variant="secondary" href="/#/industry/automation">Read more</Button>
                  </Card.Body>
                </Card>
                <Card style={{ width: '100%' }} bg="light" className='border-0'>
                  <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/img/statistics.png`} />
                  <Card.Body>
                    <Card.Title>Usability Benchmarking</Card.Title>
                    <Card.Text>
                      Assessed how iterative design updates influenced usability and SEO metrics over time.
                    </Card.Text>
                    <Card.Subtitle>Mixed methods</Card.Subtitle>
                    <Card.Text>
                      task-based usability testing, metadata analysis, descriptive statistics, t-tests, ANOVA, chi-square tests, thematic analysis
                    </Card.Text>
                  <Button variant="secondary" href="/#/industry/benchmarking">Read more</Button>
                  </Card.Body>
                </Card>
                <Card style={{ width: '100%' }} bg="light"  className='border-0'>
                  <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/img/team.png`} />
                  <Card.Body>
                    <Card.Title>Exploring Design Workflows</Card.Title>
                    <Card.Text>
                      Investigated design, development, and product manager workflows to uncover challenges. Formulated recommendations for cross-functional improvement.
                    </Card.Text>
                    <Card.Subtitle>Qualitative methods</Card.Subtitle>
                    <Card.Text>
                      stakeholder interviews, journey mapping, affinity diagramming, service blueprinting
                    </Card.Text>
                  <Button variant="secondary" href="/#/industry/workflows" disabled>Read more</Button>
                  </Card.Body>
                </Card>
              </CardGroup>         
            </Row>
            <br/>
          </Container>
        <Footer/>
      </section>
    </div>
  );
}

export default Industry;