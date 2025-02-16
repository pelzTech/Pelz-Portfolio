import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      
      <div className="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/resume">Resume</Link></li>
        </ul>
      </div>

   
      <div className="footer-contact">
        <h4>Contact Information</h4>
        <p>Email: <a href="mailto:pelumiolugbeja3@gmail.com">pelzcode66@gmail.com</a></p>
        <p>Phone: <a href="tel:+2348077883836">+234-807-530-6443</a></p>
      </div>

    
      <div className="footer-social">
        <h4>Connect with Me</h4>
        <ul>
          <li><a href="https://www.linkedin.com/in/olugbeja-ridwan-pelumi" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/pelzTech" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://x.com/pelumi09778314?s=21" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        </ul>
      </div>

    
      <div className="footer-form-container">
        <h4>Get in Touch</h4>
        <form className="footer-form">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="form-input"
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="form-input"
          />
          <textarea 
            placeholder="Your Message" 
            className="form-textarea"
          ></textarea>
          <button 
            type="submit" 
            className="form-button2"
          >
            Submit
          </button>
        </form>
      </div>
      <p>© 2024 Pelzcode. All Rights Reserved.</p>
      
    </div>
  </footer>
);

export default Footer;
