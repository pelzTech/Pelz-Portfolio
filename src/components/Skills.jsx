import React from 'react';
import './Skills.css';
import { FaReact, FaNode, FaDatabase, FaMobileAlt, FaHtml5, FaCss3Alt, FaJs, FaGithub } from 'react-icons/fa';
import HTMLLogo from '../assets/images/fashion2.jpg';
import CSSLogo from '../assets/images/fashion2.jpg';
import JSLogo from '../assets/images/fashion2.jpg';
import TSLogo from '../assets/images/fashion2.jpg';

const Skills = () => (
  <div className="skills-container">
    <header className="skills-header">
      <h2 className="skills-title">My Skills & Technologies</h2>
      <h3 className="skills-subtitle">Driven by Innovation and Problem Solving</h3>
    </header>

    <article className="skills-description">
      <p>
        As a Full-Stack Web Developer, I leverage the power of the MERN stack 
        (MongoDB, Express, React, Node.js) to create high-performance, scalable 
        web applications. I am constantly evolving my skills and adapting to new 
        technologies to deliver robust solutions. My expertise covers both front-end 
        and back-end development, ensuring seamless user experiences and efficient 
        server-side architectures.
      </p>
    </article>

    <div className="skills-list">
      {/* React.js */}
      <div className="skill-item">
        <h3 className="skill-name">React.js</h3>
        <div className="skill-details">
          <FaReact size={40} color="#61DAFB" />
          <p className="skill-percentage">90%</p>
        </div>
        <div className="skill-progress-bar">
          <div className="skill-progress" style={{ width: '90%' }}></div>
        </div>
        <hr className="hr-head" />
      </div>

      {/* Node.js */}
      <div className="skill-item">
        <h3 className="skill-name">Node.js</h3>
        <div className="skill-details">
          <FaNode size={40} color="#68A063" />
          <p className="skill-percentage">85%</p>
        </div>
        <div className="skill-progress-bar">
          <div className="skill-progress" style={{ width: '85%' }}></div>
        </div>
        <hr className="hr-head" />
      </div>

      {/* MongoDB */}
      <div className="skill-item">
        <h3 className="skill-name">MongoDB</h3>
        <div className="skill-details">
          <FaDatabase size={40} color="#47A248" />
          <p className="skill-percentage">85%</p>
        </div>
        <div className="skill-progress-bar">
          <div className="skill-progress" style={{ width: '80%' }}></div>
        </div>
        <hr className="hr-head" />
      </div>

      {/* Express.js */}
      <div className="skill-item">
        <h3 className="skill-name">Express.js</h3>
        <div className="skill-details">
          <FaNode size={20} color="#333" />
          <p className="skill-percentage">85%</p>
        </div>
        <div className="skill-progress-bar">
          <div className="skill-progress" style={{ width: '85%' }}></div>
        </div>
        <hr className="hr-head" />
      </div>

      {/* Mobile App Development with React Native */}
      <div className="skill-item">
        <h3 className="skill-name"> React Native</h3>
        <div className="skill-details">
          <FaMobileAlt size={40} color="#61DAFB" />
          <p className="skill-percentage">80%</p>
        </div>
        <div className="skill-progress-bar">
          <div className="skill-progress" style={{ width: '75%' }}></div>
        </div>
        <hr className="hr-head" />
      </div>

      {/* REST API Development */}
      <div className="skill-item">
        <h3 className="skill-name">Git</h3>
        <div className="skill-details">
          <FaGithub size={40} color="#181717" />
          <p className="skill-percentage">90%</p>
        </div>
        <div className="skill-progress-bar">
          <div className="skill-progress" style={{ width: '90%' }}></div>
        </div>
        <hr className="hr-head" />
      </div>

      {/* PostgreSQL */}
      <div className="skill-item">
        <h3 className="skill-name">PostgreSQL</h3>
        <div className="skill-details">
          <FaDatabase size={40} color="#336791" />
          <p className="skill-percentage">80%</p>
        </div>
        <div className="skill-progress-bar">
          <div className="skill-progress" style={{ width: '80%' }}></div>
        </div>
        <hr className="hr-head" />
      </div>

      {/* Additional Skills Section */}
      <div className="additional-skills">
        <h3 className="additional-skills-title">Additional Skills</h3>
        <div className="additional-skills-list">
          <div className="additional-skill-item">
            <FaHtml5 size={40} color="#E34F26" />
            <p className="additional-skill-name">HTML</p>
          </div>
          <div className="additional-skill-item">
            <FaCss3Alt size={40} color="#1572B6" />
            <p className="additional-skill-name">CSS</p>
          </div>
          <div className="additional-skill-item">
            <FaJs size={40} color="#F7DF1E" />
            <p className="additional-skill-name">JavaScript</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
