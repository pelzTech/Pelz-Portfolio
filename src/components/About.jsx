import React from 'react';
import profileImage from '../assets/images/port4.jpg';
import './About.css';
import { 
  BiPhone, 
  BiBriefcase, 
  BiCode, 
  BiBookOpen, 
  BiMessageSquareDetail 
} from 'react-icons/bi';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'; 

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <div className="profile-section">
          <img
            alt="Profile"
            src={profileImage}
            className="profile-image"
            style={{ maxWidth: '300px', height: '200px' }}
          />
          <p className="profile-name">Olugbeja Pelumi (Pelzcode)</p>
          <p className="profile-title">Full-Stack Web & Mobile Developer</p>
          <ul className="contact-info">
            <li>
              <BiPhone /> +234-807-530-6443
            </li>
          </ul>
        </div>
        <div className="bio-section">
          <p className="bio-text">Hello! I'm a skilled Full-Stack Web and Mobile Developer with expertise in the MERN stack. My primary goal is to create robust, scalable, and efficient applications for clients.</p>
          <p className="bio-text">I'm experienced with technologies such as React, React Native, Node.js, Express, MongoDB, Django, and JavaScript. My proficiency in coding and problem-solving enables me to tackle even the most complex projects. I am excited to collaborate with you and bring my expertise to your next project.</p>
          <p className="bio-text">My mission is to deliver high-quality, clean, and efficient solutions that meet or exceed client expectations.</p>
        </div>
      </div>
      <div className="info-section">
        <div className="info-item">
          <BiCode size={24} className="icon" />
          <span>Technologies</span>
          <ul className="list">
            <li>MERN Stack</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>React Native</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5</li>
            <li>Tailwind</li>
            <li>Git</li>
          </ul>
        </div>
        <div className="info-item">
          <BiBriefcase size={24} className="icon" />
          <span>Experience</span>
          <ul className="list">
            <li>
              Full-Stack Web and Mobile Developer
              <ul className="sublist">
                <li>2023 - Present</li>
                <li> Lagos, Nigeria</li>
                <li>Freelance</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="info-item"> 
          <span>Tools</span>
          <ul className="list">
            <li>Figma</li>
            <li>MongoDB</li>
            <li>Visual Studio Code</li>
            <li>Sublime Text</li>
            <li>Git</li>
            <li>Notion</li>
          </ul>
        </div>
        <div className="info-item">
          <span>Follow Me</span>
          <ul className="list">
            <li>
              <a href="https://github.com/pelzTech" className="link">
                <FaGithub /> GitHub
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/Ridwan olugbeja" className="link">
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://x.com/pelumi09778314?s=21" className="link">
                <FaTwitter /> Twitter
              </a>
            </li>
          </ul>
        </div>
        <div className="info-item">
          <BiMessageSquareDetail size={24} className="icon" />
          <span>Contact Me</span>
          <ul className="list">
            <li>Phone: +234-807-530-6443</li>
            <li>Email: pelzcode66@gmail.com</li>
            <li>Address: Nigeria</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;  