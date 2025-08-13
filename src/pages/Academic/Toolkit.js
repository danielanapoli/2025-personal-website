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
            <br/>
            <Row fluid>
                <Col md={7}>
                    <h2>Improving Remote Healthcare Tech</h2>
                    <p>
                        Focusing on what users need while creating technology can be tough. This can be especially challenging while multidisciplinary teams, filled with people who have different expertise and priorities, are trying to find common ground.
                    </p>
                    <p>
                        By highlighting what older adults need and expect in terms of privacy when it comes to the technology they need to manage their health and well-being,
                        the toolkit can help teams dive into these needs when making solutions targeted to this demographic.
                    </p>
                    <h2>Features</h2>
                    <p>
                        The toolkit has 15 validated UX tools, including:
                        <ul>
                            <li><strong>How-Tos</strong> to help decipher how the toolkit can help anyone in UX</li>
                            <li><strong>Personas</strong> to zero-in on how different older adults have unique needs, privacy expectations, and opportunities</li>
                            <li><strong>Emapthy maps</strong> to unpack older adults' emotions, thoughts, and behaviours with remote healthcare tech</li>
                        </ul>
                    </p>
                    <h2>Data-Driven Content</h2>
                    <p>
                        The toolkit is built on rich survey and interview data (see <a href="/#/academic/publications">Publications</a>) and it has been assessed by professionals experienced in healthcare technology and older adults. 
                        Feedback from experts shows that our toolkit can help UX research, designers, and developers to...
                    <ol>
                        <li><strong>Build better understanding and empathy</strong> for the specific needs older adults have for remote healthcare tech.</li>
                        <li><strong>Stay focused on those needs</strong> while brainstorming potential solutions tailored for this group.</li>
                    </ol>
                    </p>
                    <h2>Coming Soon</h2>
                    <p>
                        Check back soon for the full details on the toolkit including more information on how the toolkit was developed with the input from SMEs, and our future efforts to better shape remote healthcare technology something that older adults really need.
                    </p>
                 </Col>
                <Col md={5}>
                    <Image src={`${process.env.PUBLIC_URL}/img/toolkit-instructions.png`} width={'100%'} className='pb-3'/>
                    <Image src={`${process.env.PUBLIC_URL}/img/toolkit-persona.png`} width={'100%'} className='pb-3'/>
                    <Image src={`${process.env.PUBLIC_URL}/img/toolkit-empathymap.png`} width={'100%'} className='pb-3'/>
                </Col>
            </Row> 
            <br/><br/>        
            <Row className="text-center">
                <h5><i>In collaboration with...</i></h5>
            </Row>
            <br/>
            <Row className="align-items-center">
                <Col className="text-center">                    
                    <Image src={`${process.env.PUBLIC_URL}/img/carleton-logo.png`} width={'80%'} />
                </Col>
                <Col className="text-center">  
                    <Image src={`${process.env.PUBLIC_URL}/img/nrc-logo.png`} width={'60%'} />
                </Col>
                <Col className="text-center">  
                    <Image src={`${process.env.PUBLIC_URL}/img/hc2p-logo.png`} width={'80%'} />
                </Col>
            </Row>
        </Container>
      </section>    
      <Footer/>
    </div>
  );
}

export default Toolkit;