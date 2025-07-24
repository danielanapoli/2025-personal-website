import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import './styles/index.css';
import './styles/App.css';

function footer(){
    return(
        <div class="footer">
        <Container fluid>
            <Row>
            <Col className='text-center'>
            <br/>
            <p>✨</p>
            <h4>Let's Connect</h4>
            <p>
                <a href="https://linkedin.com/in/danielanap/" target="_blank" rel="noopener noreferrer" title="Daniela's profile on LinkedIn. Opens in a new tab.">LinkedIn</a> |&nbsp; 
                <a href="https://github.com/danielanapoli" target="_blank" rel="noopener noreferrer" title="Daniela's profile on GitHub. Opens in a new tab.">GitHub</a> |&nbsp;
                <a href="https://scholar.google.com/citations?user=qdH8ZZcAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" title="Daniela's profile on Google Scholar. Opens in a new tab.">Google Scholar</a> 
            </p>  
            <br/>
            <p class="smaller-text">Handmade with love. Last updated on July 2025.</p>
            </Col>
            </Row>
        </Container>
        </div>
    );
}

export default footer;