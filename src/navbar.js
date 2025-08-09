import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";

import './styles/App.css';

function navBar(){
    return(
        <Container fluid>
            <Navbar bg="light" data-bs-theme="light">
          <Container>
          <Navbar.Brand as={Link} to="/">Daniela Napoli</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="justify-content-center" activeKey="/home">
              <Nav.Item>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/industry">Industry</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/academic">Academic</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/projects">Skill-building</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
        </Container>
        <br/>
        </Navbar>
        </Container>
    );
}

export default navBar;

