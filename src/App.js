import {
    HashRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Home from './pages/Home.js';
import Resume from './pages/Resume.js';
import Academic from './pages/Academic/Academic.js';
import AcademicPublications from "./pages/Academic/Publications.js";
import AcademicTalks from './pages/Academic/Talks.js';
import Industry from './pages/Industry/Industry.js';
import IndustryAutomation from './pages/Industry/Automation.js'
import IndustryBenchmarking from './pages/Industry/Benchmarking.js'
import IndustryRequirements from './pages/Industry/Requirements.js'
import IndustryWorkflows from './pages/Industry/Workflows.js'
import Contact from './pages/Contact.js';
import SideProjects from './pages/SideProjects.js';
import ScrollToTop from "./ScrollToTop.js";

import './styles/App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/*Implementing Routes for respective Path */}
      <Routes>
          <Route path="/2025-personal-website" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/academic/publications" element={<AcademicPublications />} />
          <Route path="/academic/talks" element={<AcademicTalks />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/industry/automation" element={<IndustryAutomation />} />
          <Route path="/industry/benchmarking" element={<IndustryBenchmarking />} />
          <Route path="/industry/requirements" element={<IndustryRequirements />} />
          <Route path="/industry/workflows" element={<IndustryWorkflows />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/side-projects" element={<SideProjects />} />
          
      </Routes>
    </Router>
  );  
}

export default App;