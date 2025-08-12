import '../../styles/App.css';

import { useState } from 'react';
import { Link } from "react-router-dom";

import Image from 'react-bootstrap/Image';
import Container  from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavBar from '../../components/navbar';
import Footer from '../../footer';
import { SkipToContentLink } from '../../SkipLink';

function Toolkit() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="Toolkit">
    <SkipToContentLink/>
    <NavBar/>
      <br/> 
      <section id="content">
        <Container fluid='md'>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/#/academic">Academic Portfolio</Breadcrumb.Item>
                <Breadcrumb.Item active>Design Toolkit</Breadcrumb.Item>
            </Breadcrumb>   
            <h1>Remote Healthcare Technology Design Toolkit</h1>
            <Carousel data-bs-theme="dark" activeIndex={index} onSelect={handleSelect} interval={1800}>
                <Carousel.Item className='text-center'>
                    <Image src={`${process.env.PUBLIC_URL}/img/toolkit-instructions.png`} width={'80%'}/>
                </Carousel.Item>
                <Carousel.Item className='text-center'>
                    <Image src={`${process.env.PUBLIC_URL}/img/toolkit-persona.png`} width={'80%'} />
                </Carousel.Item>
                <Carousel.Item className='text-center'>
                    <Image src={`${process.env.PUBLIC_URL}/img/toolkit-empathymap.png`} width={'80%'} />
                </Carousel.Item>
            </Carousel>
            <br/>
            <h2>Improving Remote Healthcare Tech</h2>
            <p>
                Communicating what users need in the well-being and aging space to those developing technology can be tough. 
                This challenge is especially true when multidisciplinary teams are trying to find common ground among people with different expertise and priorities. 
                The <strong>Remote Healthcare Technology Design Toolkit</strong> was made with two main goals in mind. First, to highlight what older adults need and expect in terms of privacy when it comes to remote healthcare technology. Second, to help teams dive into their users’ needs during the research or design process.
            </p>
            <h2>Toolkit Features</h2>
            <p>
                The toolkit has 15 useful UX tools, including:
                <ul>
                    <li><strong>How-To</strong> instructions to help decipher how the toolkit can help any team in UX</li>
                    <li><strong>Personas</strong> that highlight how different older adults have unique needs, privacy expectations, and tech opportunities.</li>
                    <li><strong>Emapthy maps</strong> with real quotes from older adults, unpacking their emotions, thoughts, and behaviours with remote healthcare technology.</li>
                </ul>
            </p>
            <h2>Data Behind the Tools</h2>
            <p>
                The toolkit is built on rich survey and interview data (see <Link to="/#/academic/publications">Publications</Link>) and has been assessed through focus groups with professionals who know a lot about creating tech for health and older adults. 
                Feedback from experts shows that our toolkit can help UX research, designers, and developers:
                <ol>
                    <li><strong>Build better understanding and empathy</strong> for the specific needs older adults have for remote healthcare tech.</li>
                    <li><strong>Stay focused on those needs</strong> while brainstorming potential solutions tailored for this group.</li>
                </ol>
            </p>
            <h2>In The Works</h2>
            <p>
                Check back soon for the full details on the toolkit including more information on how the toolkit was developed with the input from SMEs, and our future efforts to better shape remote healthcare technology something that older adults really need.
            </p>
            <br/>
            <br/>
            <Row className="text-center">
                <h5>In collaboration with...</h5>
            </Row>
            <br/>
            <Row className="align-items-center">
                <Col>                    
                    <Image src={`${process.env.PUBLIC_URL}/img/carleton-logo.png`} width={'90%'} />
                </Col>
                <Col>  
                    <Image src={`${process.env.PUBLIC_URL}/img/hc2p-logo.png`} width={'80%'} />
                </Col>
                <Col>  
                    <Image src={`${process.env.PUBLIC_URL}/img/nrc-logo.png`} width={'50%'} />
                </Col>
            </Row>
        </Container>
      </section>    
      <Footer/>
    </div>
  );
}

export default Toolkit;