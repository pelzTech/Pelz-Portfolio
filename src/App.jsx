import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import HireMe from './components/HireMe';
import Projects from './components/Projects';
import DownloadResume from './components/DownloadResume';
import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/hire-me" element={<HireMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/download-resume" element={<DownloadResume />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
