import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight, FaDownload, FaBriefcase } from 'react-icons/fa';
import profileImg from '../assets/images/landing.png';
import webDevImg from '../assets/images/dev3.jpg';
import appDevImg from '../assets/images/dev4.jpg';
import uiUxImg from '../assets/images/dev5.jpg';
import resumePdf from '../assets/pelzcodeee.pdf'; 
import './Home.css';

const Home = () => {
  const [welcomeText, setWelcomeText] = useState('');
  const fullText = "Hi, I'm Olugbeja Ridwan Pelumi, a MERN Full Stack Web and Mobile App Developer with a passion for creating dynamic, user-friendly applications.";

  useEffect(() => {
    let index = 0;

    const typeText = () => {
      if (index < fullText.length) {
        setWelcomeText(prev => prev + fullText.charAt(index));
        index++;
        setTimeout(typeText, 50); 
      }
    };

    typeText();

    
    return () => {
      index = fullText.length; 
    };
  }, [fullText]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="home-container"
    >
     
      <section className="welcome-section">
        <h2 className="welcome-title">Welcome to My Portfolio</h2>
        <motion.img
          src={profileImg}
          alt="Profile"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="profile-img"
        />
        <p className="welcome-text">{welcomeText}</p>
        <div className="welcome-buttons">
          <Link to="/contact" className="no-decor">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="btn btn-hire"
            >
              <FaBriefcase className="icon" /> Hire Me
            </motion.button>
          </Link>
          {/* Download Resume Button */}
          <a href={resumePdf} download="My_Resume.pdf" target="_blank" rel="noopener noreferrer" className="no-decor">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="btn btn-download"
            >
              <FaDownload className="icon" /> Download Resume
            </motion.button>
          </a>
        </div>
      </section>

     
      <section className="services-section">
        <h3 className="section-title">My Services</h3>
        <div className="services-grid">
         
          <motion.div whileHover={{ scale: 1.05 }} className="service-card">
            <img src={webDevImg} alt="Web Development" className="service-img" />
            <div className="service-content">
              <h4 className="service-title">Web Development</h4>
              <p className="service-text">
                I build responsive and user-friendly websites using modern technologies like React, Node.js, and more.
              </p>
            </div>
          </motion.div>

         
          <motion.div whileHover={{ scale: 1.05 }} className="service-card">
            <img src={appDevImg} alt="App Development" className="service-img" />
            <div className="service-content">
              <h4 className="service-title">Mobile App Development</h4>
              <p className="service-text">
                Creating scalable and efficient mobile applications with React Native and other modern frameworks.
              </p>
            </div>
          </motion.div>

          
          <motion.div whileHover={{ scale: 1.05 }} className="service-card">
            <img src={uiUxImg} alt="UI/UX Design" className="service-img" />
            <div className="service-content">
              <h4 className="service-title">UI/UX Design</h4>
              <p className="service-text">
                Delivering seamless user experiences through intuitive design and user-centric interfaces.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

    
      <section className="experience-section">
        <h3 className="section-title">My Experience <FaLongArrowAltRight className="icon" /></h3>
        <div className="experience-list">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="experience-entry"
          >
            <FaLongArrowAltRight className="experience-icon" />
            <div className="experience-details">
              <h4 className="experience-title">Freelancer</h4>
              <p className="experience-subtitle">Fiverr & Upwork | 2022 - 2023</p>
              <p className="experience-description">
                 Delivered a wide range of services, including web development, mobile app development, UI/UX design, and API management. Successfully completed over 25 projects, earning positive feedback and securing repeat clients.              
               </p>
            </div>
          </motion.div>
         
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="experience-entry"
          >
            <FaLongArrowAltRight className="experience-icon" />
            <div className="experience-details">
              <h4 className="experience-title">Customer Service Officer & IT Support Engineer</h4>
              <p className="experience-subtitle">NPF Pensions Limited | 2024 - Present</p>
              <p className="experience-description">
                Working in the ICT department to enhance and streamline digital services. Updating customer details, handling pension-related queries, and improving the digital user experience for active and retired officers.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;