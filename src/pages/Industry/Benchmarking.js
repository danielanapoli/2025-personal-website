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


function IndustryBenchmarking() {
  return (
    <div className="IndustryBenchmarking">
      <a href="#content" class="skip-to-main-link">Skip to content</a>
      <NavBar></NavBar>
      <br/> 
      <section id="content">
        <Container fluid="md">
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/#/industry">Industry Portfolio</Breadcrumb.Item>
            <Breadcrumb.Item active>Usability Benchmarking</Breadcrumb.Item>
          </Breadcrumb>
            <Row>
              <Col>
              <h1>Usability Benchmarking</h1>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col xs="auto" className='text-center'>
                <Image width="80%" src={`${process.env.PUBLIC_URL}/img/statistics.png`} alt=""></Image>
              </Col>
            </Row>
            <Accordion defaultActiveKeys={["0"]} allKeys={["0", "1", "2", "3"]}>
              <AccordionItem index={0} header={"Objectives"}>
                <p id="accordion-content">
                  The <strong>Canadian Institute for Health Information</strong> (CIHI) needed to...
                  <ul>
                    <li>Measure the ROI of recent UX and SEO initiatives</li>
                  </ul>
                </p>
              </AccordionItem>
              <AccordionItem index={1} header={"Tools"}>
                <ul id="accordion-content">
                  <li>Excel</li>
                  <li>R</li>
                </ul>
              </AccordionItem>
              <AccordionItem index={2} header={"Process"}>
                <h5>Define Performance Metrics</h5>
                  <p id="accordion-content">
                    <ul>
                      <li>Consulted with the UX and SEO teams to identify success indicators which align best with organizational goals</li>
                      <li>Recommended measurable and impactful metrics</li>
                      <li>Collaborated with other departments to access additional metadata to support usability test results</li>
                    </ul>
                  </p>
                <h5>Data Collection</h5>
                  <p id="accordion-content">
                    <ul>
                      <li>Designed task-based, between-subject usability tests focused on recent usability and SEO changes</li>
                      <li>Facilitated 10 sessions with internal stakeholders and end-users, comparing old and new designs</li>
                      <li>Conducted descriptive and inferential statistics to identify significant differences in results</li>
                      <li>Leveraged website metadata to supplement and contextualize usability test findings </li>
                      <li>Analyzed session transcripts for additional qualitative context</li>
                    </ul>
                  </p>
                <h5>Share Research Findings and Recommendations</h5>
                  <p id="accordion-content">
                    <ul>
                      <li>Extracted key takeaways from all analyses</li>
                      <li>Packaged overall findings and delivered 3 cross-departmental presentations</li>
                      <ul>
                        <li>Key findings and performance metrics of <i>old</i> designs</li>
                        <li>Key findings and performance metrics of <i>new</i> designs</li>
                        <li>Comparison of <i>old</i> and <i>new</i> designs + Recommendations for future work</li>
                      </ul>
                    </ul>
                  </p>
              </AccordionItem>
              <AccordionItem index={3} header={"Impact"}>
                <p id="accordion-content">
                  <ul>
                    <li>Empirical evidence to demonstrate the impact of past and current UX and SEO initiatives</li>
                    <li>Cross-departmental alignment on project outcomes</li>
                    <li>Data-driven recommendations for future UX and SEO directions</li>
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

export default IndustryBenchmarking;