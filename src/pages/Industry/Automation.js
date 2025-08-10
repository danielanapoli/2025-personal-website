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


function IndustryAutomation() {
  return (
    <div className="IndustryAutomation">
      <a href="#content" class="skip-to-main-link">Skip to content</a>
      <NavBar></NavBar>
      <br/> 
      <section id="content">
          <Container fluid="md">
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/#/industry">Industry Portfolio</Breadcrumb.Item>
            <Breadcrumb.Item active>Automatic Userbase Segmentation</Breadcrumb.Item>
          </Breadcrumb>
            <Row>
              <Col>
              <h1>Automatic Userbase Segmentation</h1>
              </Col>
            </Row>
            <br/><br/>
            <Row className="justify-content-md-center">
              <Col xs="auto" className='text-center'>
                <Image width="80%" src={`${process.env.PUBLIC_URL}/img/pie-chart.png`} alt=""></Image>
              </Col>
            </Row>
            <Accordion defaultActiveKeys={["0"]} allKeys={["0", "1", "2", "3"]}>
              <AccordionItem index={0} header={"Objectives"}>
                <p id="accordion-content">
                  The <strong>Canadian Institute for Health Information</strong> (CIHI) needed to...
                </p>
                <ol id="accordion-content">
                  <li>Map <i>exit-intent</i> survey responses to the organization's persona framework</li>
                  <li>Update personas to align with mapped responses</li>
                </ol>
                *Note: This analysis was initially planned to be completed manually with Excel.  
                With my programming background, I identified an opportunity to improve the project's efficiency and accuracy with Python. 
                As a result, the project was completed <strong>weeks sooner</strong> than anticipated. The process methods and resulting deliverables also <strong>extended far beyond</strong> the UX Team.                               
              </AccordionItem>
              <AccordionItem index={1} header={"Tools"}>
                <ul id="accordion-content">
                  <li>Excel</li>
                  <li>Python</li>
                  <li>VS Code</li>
                </ul>
              </AccordionItem>
              <AccordionItem index={2} header={"Process"}>
                <h4>Data Scrubbing with Python</h4>
                  <ul id="accordion-content">
                    <li>Extracted user responses to open-text, demographic questions from survey database</li>
                    <li>Prepared extracted data for processing
                      <ul>
                        <li>Assessed response validity, excluded invalid responses</li>
                        <li>Adjusted for spelling variations</li>
                        <li>Translated French-language responses</li>
                      </ul>
                    </li>
                  </ul>
                <h4>Natural Language Processing with Python</h4>
                  <ul id="accordion-content">
                    <li>Compiled keyword list from open-text responses relating to persona characteristics</li>
                    <li>Iteratively categorized respondents per persona</li>
                    <ul>
                      <li>Automatically mapped keywords to survey response</li>
                      <li>Manually assessed unmapped response for potential keyword list improvements</li>
                      <li>Improved mapping algorithm</li>
                        <ul>
                          <li>E.g., Updated word stems, considered medical terminology, and considered vernacular variations</li>
                        </ul>
                    </ul>
                    <li>Ended processing when 87% of the survey responses could be accurately categorized</li>
                  </ul>
                <h4>Updating the Persona Framework</h4>
                  <ul id="accordion-content">
                    <li>Once respondents were categorized, full responses were further analyzed</li>
                    <li>Validated the existing persona framework</li>
                    <ul>
                      <li>E.g., Persona A most often uses the XYZ tool on the website</li>
                    </ul> 
                    <li>Extracted new insights</li>
                    <ul>
                      <li>E.g., Persona B is most likely to report XYZ pain points</li>
                    </ul>
                  </ul>
              </AccordionItem>
              <AccordionItem index={3} header={"Impact"}>
                <ul id="accordion-content">
                  <li>Empirical evidence to validate and extend the persona framework</li> 
                  <li>Quick, easy, reusable way to map research data to the persona framework</li>     
                  <li>Proof-of-concept for future AI features in the organization's marketing software</li>
                  <li>Recommendations for organizational alignment on the targeted user base</li>
                </ul>
              </AccordionItem>
            </Accordion>
          </Container>
      </section>
      <Footer/>
     </div>
  );
}

export default IndustryAutomation;