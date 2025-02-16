import React from 'react';
import { FaProductHunt } from "react-icons/fa6";
import { MdArrowForward } from 'react-icons/md';
import { motion } from 'framer-motion';
import './Projects.css'; 
import portfolioImg from '../assets/images/book.png';
import socialMediaImg from '../assets/images/store.png';
import lmsPlatformImg from '../assets/images/job.png';
import surveyAppImg from '../assets/images/fashion.png';
import surveAppImg from '../assets/images/course.png';
import survAppImg from '../assets/images/bookeasy.png';
import survApppImg from '../assets/images/Home.png';


const Projects = () => {
  const projectData = [
    {
      title: ' StaysPhere Event-booking Website',
      description:
        'StaysPhere is a sleek and responsive event-booking platform built with the MERN stack and ReactJS. It offers users an intuitive experience for browsing and booking events with seamless navigation, interactive animations, and real-time functionality.',
      imageUrl: portfolioImg,
      projectLink: 'https://pelztech.github.io/Booking-web/',
    },
    {
      title: 'E-commerce Website',
      description:
        'An advanced e-commerce platform designed with the MERN stack and ReactJS, offering a seamless shopping experience..',
      imageUrl: socialMediaImg,
      projectLink: 'https://pelztech.github.io/E-commerce2/',
    },
    {
      title: 'JobLinker Website',
      description:
        'JobLinker is a robust learning management system (LMS) built with ReactJS, offering an intuitive platform for both instructors and students.',
      imageUrl: lmsPlatformImg,
      projectLink: 'https://pelztech.github.io/job-website/',
    },
    {
      title: 'SavvyMart Fashion Website',
      description:
        'SavvyMart is a dynamic fashion e-commerce platform that blends modern shopping with personalized user experiences. Built with full-stack technologies, the website offers users an easy-to-navigate interface for browsing and purchasing fashion items.',
      imageUrl: surveyAppImg,
      projectLink: 'https://pelztech.github.io/fashion-shop2/',
    },

    {
      title: 'CourseCurve online learning website',
      description:
        'CourseCurve is a comprehensive online learning platform designed to empower users with the ability to access a variety of courses and educational materials. Built using full-stack technologies, the platform allows users to browse, enroll, and track their learning progress with ease.',
      imageUrl: surveAppImg,
      projectLink: 'https://pelztech.github.io/online-course/',
    },

    {
      title: 'BookEase-App',
      description:
        'BookEase-App is an intuitive platform designed to simplify the booking process for users.',
      imageUrl: survAppImg,
      projectLink: 'https://pelzcode.pythonanywhere.com/',
    },

    {
      title: 'Eminence-university',
      description: 'Eminence University offers a wide range of academic programs designed to provide students with a high-quality education and foster their personal growth. Our university is committed to academic excellence, innovation, and student success.',
      imageUrl: survApppImg,
      projectLink: 'https://pelztech.github.io/Edu-web/',
    }
    
  ];

  return (
    <motion.div 
      className="projects-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <h2 className="projects-title">
        <FaProductHunt className="projects-icon" /> Projects
      </h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <motion.div 
            key={index} 
            className="project-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-name">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project <MdArrowForward className="project-icon" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
