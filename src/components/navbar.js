import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import '../styles/App.css';

function navBar(){
    return(
        <Container fluid>
            <Navbar bg="light" data-bs-theme="light">
          <Container>
          <Navbar.Brand href="/">Daniela Napoli</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="justify-content-center" activeKey="/home">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Industry" id="industry-dropdown">
              <NavDropdown.Item href="/#/industry">Overview</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="/#/industry/automation">Persona automation</NavDropdown.Item>
              <NavDropdown.Item href="/#/industry/benchmarking">UX Benchmarking</NavDropdown.Item>
              <NavDropdown.Item href="/#/industry/requirements">Requirements discovery</NavDropdown.Item>
              <NavDropdown.Item href="/#/industry/workflows">Workflow analysis</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Academic" id="academic-dropdown">
              <NavDropdown.Item href="/#/academic">Overview</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="/#/academic/publications">Publications</NavDropdown.Item>
              <NavDropdown.Item href="/#/academic/talks">Talks</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/#/projects" disabled>Side Projects</Nav.Link>
            <Nav.Link href="/#/resume" disabled>Resume</Nav.Link>
            <Nav.Link href="/#/contact">Contact</Nav.Link>
          </Nav>
        </Container>
        <br/>
        </Navbar>
        </Container>
    );
}

export default navBar;