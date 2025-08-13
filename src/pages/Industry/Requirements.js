import '../../styles/index.css';
import '../../styles/App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';

import NavBar from '../../components/navbar';
import Footer from '../../footer';
import { Accordion, AccordionItem } from '../../Accordion';
import { SkipToContentLink } from '../../SkipLink';
import { AlertHeading } from 'react-bootstrap';


function IndustryRequirements() {
  return (
    <div className="IndustryRequirements">
      <SkipToContentLink/>
      <NavBar/>
      <br/> 
      <section id="content">
          <Container fluid="md">
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/#/industry">Industry Portfolio</Breadcrumb.Item>
            <Breadcrumb.Item active>Requirements Discovery</Breadcrumb.Item>
          </Breadcrumb>
            <Row>
              <Col>
              <h1>Requirements Discovery</h1>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col>
                <h2>Users need...</h2>
                <p id="hero-text">
                  data about their clinic so that they can gauge their performance and guide future programs.  
                </p>
                <Badge bg='secondary'>The Canadian Institute for Health Information (CIHI)</Badge>
                <br/><br/>
                <Alert variant='warning'>
                  <AlertHeading><h2>Research Impact</h2></AlertHeading>
                  <ul id="accordion-content">
                    <li>User-focused recommendations for driving faster access to critical website information</li>
                    <li>Enhanced stakeholder alignment on organizational goals</li>
                  </ul>
                </Alert>
                <div className='text-center'>
                  <Image width="25%" src={`${process.env.PUBLIC_URL}/img/project.png`} className='text-center'/>
                </div>
                  
              </Col>
              <Col>
              <Accordion defaultActiveKeys={["0","1","2"]} allKeys={["0", "1", "2"]}>
              <AccordionItem index={0} header={"Problem"}>
                <p id="accordion-content">
                  Users struggle to <strong>consolidate</strong> data about their clinic on the CIHI website.
                  <br/><br/>
                  Wrangling this data is not straightforward. Data is split among different departments at the organization. Each department has unique processes in managing and publishing their data.
                </p>                  
                </AccordionItem>
              <AccordionItem index={1} header={"Tools"}>
                <ul id="accordion-content">
                  <li>Mural</li>
                  <li>NVivo</li>
                </ul>
              </AccordionItem>
              <AccordionItem index={2} header={"Process"}>
                  <h5>Internal Stakeholder Interviews</h5>
                  <ul id="accordion-content">
                    <li>Conducted 20 hours of semi-structured interviews with various departmental leaders</li>
                    <ul>
                      <li>Explored the internal workflows of managing current offerings</li>
                      <li>Discussed pain points and how future solutions can improve those challenges</li>
                      <li>Considered high-level internal service changes required for accommodating various shifts in offerings</li>
                    </ul>
                    <li>Thematically analyzed interview findings to identify common themes and key insights</li>
                    <li>Validated and extended upon key takeaways with findings from previous related initiatives</li>  
                  </ul>
                  <h5>User Interviews</h5>
                  <ul id="accordion-content">
                    <li>Conducted 14 1-hour semi-structured interviews with users across Canada</li>
                    <ul>
                      <li>Explored users' organizational goals, team dynamics, and everyday workflows</li>
                      <li>Explored how current offerings are leveraged in everyday work</li>
                      <li>Discussed pain points and how future solutions can improve those challenges</li>
                    </ul>
                    <li>Thematically analyzed interview findings to identify common themes and key insights</li>
                    <li>Validated and extended upon key takeaways with findings from previous related initiatives</li>
                  </ul>
                  <h5>Design Ideation</h5>
                  <ul id="accordion-content">
                    <li>Collaborated with the project's lead designer to formulate initial design wireframes</li>
                    <li>Provided data-driven design recommendations during initial design reviews</li>
                    <li>Guided and participated in a cross-department design studio workshop to finalize future-vision design wireframes</li>
                  </ul>
                  <h5>Sharing Findings and Recommendations</h5>
                  <ul id="accordion-content">
                    <li>Crafted <i>current state</i> user journey maps to communicate key findings and recommendations</li>
                    <li>Crafted <i>future state</i> user journey maps to contextualize future-vision design wireframes</li>
                    <li>Supported leadership in evaluating how to accommodate users while meeting organizational goals</li>
                  </ul>
              </AccordionItem>
            </Accordion>
            </Col>
            </Row>
          </Container>
      </section>
      <Footer/>
    </div>
  );
}

export default IndustryRequirements;