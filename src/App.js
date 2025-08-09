import {
    HashRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Home from './pages/Home.js';
import Resume from './pages/Resume.js';
import Academic from './pages/Academic.js';
import Industry from './pages/Industry.js';
import IndustryAutomation from './pages/Industry-Automation.js'
import IndustryBenchmarking from './pages/Industry-Benchmarking.js'
import IndustryRequirements from './pages/Industry-Requirements.js'
import IndustryWorkflows from './pages/Industry-Workflows.js'
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
          <Route path="/industry/automation" element={<IndustryAutomation />} />
          <Route path="/industry/benchmarking" element={<IndustryBenchmarking />} />
          <Route path="/industry/requirements" element={<IndustryRequirements />} />
          <Route path="/industry/workflows" element={<IndustryWorkflows />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          
      </Routes>
    </Router>
  );  
}

export default App;