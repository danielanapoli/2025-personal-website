import '../styles/index.css';
import '../styles/App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';

import NavBar from '../navbar';
import Footer from '../footer';
import { SkipToContentLink } from '../SkipLink';

function Contact() {
  return (
    <div className="Contact">
      <SkipToContentLink/>
      <NavBar/>
      <br/> 
      <section id="content">
          <Container fluid="md">
            <Row>
              <Col>
              <h1>Side Projects</h1>
                <p>
                    Here are some of my favourite passion projects for honing my skills and enjoying my hobbies. Most of these continue to be works in progress that I revisit whenever possible.
                    Feel free to connect if you'd like to talk more about anything listed here!
                </p>
              </Col>
            </Row>
            <br/>
            <br/>
            <Row>
            <Col>
                <h3>OCT-o-Magic</h3>
                <Badge bg="secondary">ReactJS</Badge> <Badge bg="secondary">UI Design</Badge> 
                <br/><br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat dolor purus, vulputate rutrum turpis porttitor vitae. Pellentesque a ex mollis, rutrum nunc sed, viverra lorem. Aenean porttitor ex ut nibh pulvinar, nec suscipit enim efficitur. Aliquam id posuere risus. Aliquam vel convallis nisi. In venenatis aliquam nunc. Ut id pulvinar leo, sed placerat turpis. Etiam vulputate magna ac felis aliquam, vitae fermentum turpis aliquet.</p>
                <p>Praesent porttitor nulla et erat aliquam, sed vestibulum erat suscipit. Donec erat neque, mollis non sollicitudin scelerisque, rutrum at nunc. Curabitur quis enim ex. Nulla consectetur mauris ac sem elementum, et cursus ante elementum. Vestibulum vulputate porta iaculis. Nulla pharetra dui odio, in dignissim urna bibendum eu. Vestibulum sed elit nulla.</p>
                <h5>Future Work</h5>
                <p>Nunc egestas euismod tortor, at sodales purus vulputate eget. Integer porttitor sollicitudin posuere. Mauris ullamcorper augue nec commodo dignissim. In et imperdiet felis, eu fermentum massa. Duis sodales lacinia risus quis faucibus. Nunc consequat urna vitae sollicitudin convallis. Quisque eu eleifend nunc. Ut eget viverra arcu. Nam placerat finibus tellus, et interdum sem laoreet non.</p>
            </Col>
            <Col className='text-center'>              
                <Image width="90%" src={`${process.env.PUBLIC_URL}/octomagic-wireframe.png`} alt="Some chicken scratch photos from brainstorming."></Image>
                <br/><br/>
                <p>Check out the <a href="https://github.com/PencilNoseCode/OCTGN-MtG-Deck-Converter" target="_blank" rel="noopener noreferrer" title="Daniela's profile on GitHub. Opens in a new tab.">repository on GitHub</a>.</p>
            </Col>
            </Row>
            <br/>
            <br/>
            <Row>
            <Col className='text-center'>              
                <Image src={`${process.env.PUBLIC_URL}/project.png`} alt=""></Image>
                <br/><br/>
                <p>Check out the <a href="https://github.com/danielanapoli/danielanapoli.github.io/tree/master" target="_blank" rel="noopener noreferrer" title="Daniela's profile on GitHub. Opens in a new tab.">repository on GitHub</a>.</p>
            </Col>
            <Col>
                <h3>danielanapoli.com</h3>
                <Badge bg="secondary">ReactJS</Badge> <Badge bg="secondary">UI Design</Badge> 
                <br/><br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat dolor purus, vulputate rutrum turpis porttitor vitae. Pellentesque a ex mollis, rutrum nunc sed, viverra lorem. Aenean porttitor ex ut nibh pulvinar, nec suscipit enim efficitur. Aliquam id posuere risus. Aliquam vel convallis nisi. In venenatis aliquam nunc. Ut id pulvinar leo, sed placerat turpis. Etiam vulputate magna ac felis aliquam, vitae fermentum turpis aliquet.</p>
                <p>Praesent porttitor nulla et erat aliquam, sed vestibulum erat suscipit. Donec erat neque, mollis non sollicitudin scelerisque, rutrum at nunc. Curabitur quis enim ex. Nulla consectetur mauris ac sem elementum, et cursus ante elementum. Vestibulum vulputate porta iaculis. Nulla pharetra dui odio, in dignissim urna bibendum eu. Vestibulum sed elit nulla.</p>
                <h5>Future Work</h5>
                <p>Nunc egestas euismod tortor, at sodales purus vulputate eget. Integer porttitor sollicitudin posuere. Mauris ullamcorper augue nec commodo dignissim. In et imperdiet felis, eu fermentum massa. Duis sodales lacinia risus quis faucibus. Nunc consequat urna vitae sollicitudin convallis. Quisque eu eleifend nunc. Ut eget viverra arcu. Nam placerat finibus tellus, et interdum sem laoreet non.</p>
            </Col>
            </Row>
            <br/>
            <br/>
            <Row>
            <Col>
                <h3>scholarlyScrape</h3>
                <Badge bg="secondary">Python</Badge> <Badge bg="secondary">Data Scraping</Badge> 
                <br/><br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat dolor purus, vulputate rutrum turpis porttitor vitae. Pellentesque a ex mollis, rutrum nunc sed, viverra lorem. Aenean porttitor ex ut nibh pulvinar, nec suscipit enim efficitur. Aliquam id posuere risus. Aliquam vel convallis nisi. In venenatis aliquam nunc. Ut id pulvinar leo, sed placerat turpis. Etiam vulputate magna ac felis aliquam, vitae fermentum turpis aliquet.</p>
                <p>Praesent porttitor nulla et erat aliquam, sed vestibulum erat suscipit. Donec erat neque, mollis non sollicitudin scelerisque, rutrum at nunc. Curabitur quis enim ex. Nulla consectetur mauris ac sem elementum, et cursus ante elementum. Vestibulum vulputate porta iaculis. Nulla pharetra dui odio, in dignissim urna bibendum eu. Vestibulum sed elit nulla.</p>
                <h5>Future Work</h5>
                <p>Nunc egestas euismod tortor, at sodales purus vulputate eget. Integer porttitor sollicitudin posuere. Mauris ullamcorper augue nec commodo dignissim. In et imperdiet felis, eu fermentum massa. Duis sodales lacinia risus quis faucibus. Nunc consequat urna vitae sollicitudin convallis. Quisque eu eleifend nunc. Ut eget viverra arcu. Nam placerat finibus tellus, et interdum sem laoreet non.</p>
            </Col>
            <Col className='text-center'>              
                <Image src={`${process.env.PUBLIC_URL}/project.png`} alt=""></Image>
                <br/><br/>
                <p>Check out the <a href="https://github.com/danielanapoli/scholarlyScrape" target="_blank" rel="noopener noreferrer" title="Daniela's profile on GitHub. Opens in a new tab.">repository on GitHub</a>.</p>
            </Col>
            </Row>
            <br/><br/>
            <Row>
            <Col className='text-center'>              
                <Image src={`${process.env.PUBLIC_URL}/project.png`} alt=""></Image>
                <br/><br/>
                <p>Check out the <a href="https://github.com/danielanapoli/NoVizThermal" target="_blank" rel="noopener noreferrer" title="Daniela's profile on GitHub. Opens in a new tab.">repository on GitHub</a>.</p>
            </Col>
            <Col>
                <h3>NoViz-Thermal</h3>
                <Badge bg="secondary">Arduino</Badge>
                <br/><br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat dolor purus, vulputate rutrum turpis porttitor vitae. Pellentesque a ex mollis, rutrum nunc sed, viverra lorem. Aenean porttitor ex ut nibh pulvinar, nec suscipit enim efficitur. Aliquam id posuere risus. Aliquam vel convallis nisi. In venenatis aliquam nunc. Ut id pulvinar leo, sed placerat turpis. Etiam vulputate magna ac felis aliquam, vitae fermentum turpis aliquet.</p>
                <p>Praesent porttitor nulla et erat aliquam, sed vestibulum erat suscipit. Donec erat neque, mollis non sollicitudin scelerisque, rutrum at nunc. Curabitur quis enim ex. Nulla consectetur mauris ac sem elementum, et cursus ante elementum. Vestibulum vulputate porta iaculis. Nulla pharetra dui odio, in dignissim urna bibendum eu. Vestibulum sed elit nulla.</p>
                <h5>Future Work</h5>
                <p>Nunc egestas euismod tortor, at sodales purus vulputate eget. Integer porttitor sollicitudin posuere. Mauris ullamcorper augue nec commodo dignissim. In et imperdiet felis, eu fermentum massa. Duis sodales lacinia risus quis faucibus. Nunc consequat urna vitae sollicitudin convallis. Quisque eu eleifend nunc. Ut eget viverra arcu. Nam placerat finibus tellus, et interdum sem laoreet non.</p>
            </Col>
            </Row>
          </Container>
      </section>
      <Footer/>
    </div>
  );
}

export default Contact;