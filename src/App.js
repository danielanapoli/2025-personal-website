import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";

import Home from './pages/Home.js';
import Resume from './pages/Resume.js';
import PubsTalks from './pages/PubsTalks.js';
import Portfolio from './pages/Portfolio.js';
import Contact from './pages/Contact.js';

import './styles/App.css';

function App() {
  return (
    <Router>
    {/*Implementing Routes for respective Path */}
      <Routes>
          <Route path="/2025-personal-website" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/publications-talks" element={<PubsTalks />} />
          <Route path="/research-portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
