import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";

import Home from './pages/Home.js';
import Resume from './pages/Resume.js';
import Academic from './pages/Academic.js';
import Industry from './pages/Industry.js';
import Contact from './pages/Contact.js';
import Projects from './pages/Projects.js';

import './styles/App.css';

function App() {
  return (
    <Router>
    {/*Implementing Routes for respective Path */}
      <Routes>
          <Route path="/2025-personal-website" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
