import '../../styles/index.css';
import '../../styles/App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import NavBar from '../../components/navbar';
import Footer from '../../footer';
import { Accordion, AccordionItem } from '../../Accordion';
import { SkipToContentLink } from '../../SkipLink';

function IndustryWorkflows() {
  return (
    <div className="IndustryWorkflows">
      <SkipToContentLink/>
      <NavBar/>
      <br/> 
      <section id="content">
          <Container fluid="md">
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/#/industry">Industry Portfolio</Breadcrumb.Item>
            <Breadcrumb.Item active>Improving Interdisciplinary Workflows</Breadcrumb.Item>
          </Breadcrumb>
            <Row>
              <Col>
              <h1>Improving Interdisciplinary Workflows</h1>
              </Col>
            </Row>
            <br/><br/>
            <Row className="justify-content-md-center">
              <Col xs="auto" className='text-center'>
                <Image width="80%" src={`${process.env.PUBLIC_URL}/img/team.png`} alt=""></Image>
              </Col>
            </Row>
            <br/>
            <Accordion defaultActiveKeys={["0", "1", "2", "3"]} allKeys={["0", "1", "2", "3"]}>
            <AccordionItem index={0} header={"Objectives"}>
                <p id="accordion-content">
                  The Ottawa <strong>IBM</strong> Design Studio needed to...
                </p>
                <ol id="accordion-content">
                  <li>Better understand the overlapping workflows between designers, developers, and product managers</li>
                  <li>Identify pain points and opportunities to improve organizational efficiency</li>
                </ol>
            </AccordionItem>
            <AccordionItem index={1} header={"Tools"}>
              <p id="accordion-content">
                Paper stickies, Mural
              </p>
            </AccordionItem>
            <AccordionItem index={2} header={"Process"}>
              <p id="accordion-content">
                <h4>Explore Cross-Departmental Workflows</h4>
                <ul>
                  <li>Facilitated 15 total 1-on-1 <i>As-Is Scenario Mapping</i> workshops with employees, including 5 from the design, development, and product management teams</li>
                  <ul>
                    <li>Discussed each step of an individual's involvement in the product development process</li>
                    <li>Explored their processes, collaborations, and experiences leveraging specialized tools to achieve their goals</li>
                    <li>Identified workflow-related and tool-related challenges</li>
                  </ul>
                  <li>Thematically analyzed maps and distilled a "Master As-Is Scenario Map" (master maps) for each of the 3 teams, highlighting nuances of the related specialties</li>
                  <li>Consolidated 3 master maps to articulate and assess overall cross-departmental workflows</li>
                  </ul>
                <h4>Identify Improvement Opportunities</h4>
                <ul>
                  <li>Reviewed and modified master maps with each participant to validate key findings</li>
                  <li>Facilitated dot-voting sessions with participants to collaboratively prioritize:</li>
                  <ul>
                    <li>Most critical collaboration processes to focus on</li>
                    <li>Major pain points</li>
                    <li>Key opportunities for improvement</li>
                  </ul>                      </ul>
                <h4>Rally Stakeholder Buy-in</h4>
                <ul>
                  <li>Led a 2-hour seminar involving 20 participants from the design, development, and product management teams</li>
                  <ul>
                    <li>Presented and discussed validated master maps and dot-voting results</li>
                    <li>Facilitated a design thinking workshop focused on collaboratively writing <i>Hills</i> or mission statements focused on prioritized workflow improvements</li>
                  </ul>
                  <li>Packaged research findings and recommendations for organizational leaders</li>                      
                </ul>    
              </p>              
            </AccordionItem>
            <AccordionItem index={3} header={"Impact"}>
              <p id="accordion-content">
              <ul>
                <li>Clear documentation of interdepartmental workflow processes and associated challenges</li>
                <li>Data-driven workflow improvement recommendations that have been co-created and validated by internal stakeholders</li>
                <li>Strengthened sense of understanding and empathy among internal stakeholders on the design, development, and product management teams</li>
              </ul>
              </p>
            </AccordionItem>
          </Accordion>
        </Container>
    </section>
    <Footer/>
  </div>
  );
}

export default IndustryWorkflows;