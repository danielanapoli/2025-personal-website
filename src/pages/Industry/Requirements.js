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


function IndustryRequirements() {
  return (
    <div className="IndustryRequirements">
      <SkipToContentLink/>
      <NavBar></NavBar>
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
            <br/><br/>
            <Row className="justify-content-md-center">
              <Col xs="auto" className='text-center'>
                <Image width="80%" src={`${process.env.PUBLIC_URL}/img/project.png`} alt=""></Image>
              </Col>
            </Row>
            <br/>
            <Accordion defaultActiveKeys={["0", "1", "2", "3"]} allKeys={["0", "1", "2", "3"]}>
              <AccordionItem index={0} header={"Objectives"}>
                <p id="accordion-content">
                  The <strong>Canadian Institute for Health Information</strong> (CIHI) needed to...
                </p>
                  <ol id="accordion-content">
                    <li>Determine how major changes to current offerings should accommodate both organizational mandates and user needs</li>
                    <li>Develop wireframes of the future tool directions to inform initiative planning</li>
                  </ol>
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
              <AccordionItem index={3} header={"Impact"}>
                  <ul id="accordion-content">
                    <li>A deeper understanding of the intersection between business needs and user needs</li>
                    <li>Validated and comprehensive visionary documents for aligning internal stakeholders and communicating future initiatives to external stakeholders</li>
                    <li>Empirically-based evaluations of current offerings</li>
                    <li>Data-driven recommendations for future offerings</li>
                  </ul>
              </AccordionItem>
            </Accordion>
          </Container>
      </section>
      <Footer/>
    </div>
  );
}

export default IndustryRequirements;