import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu, GiCancel, GiSun, GiMoon } from 'react-icons/gi';
import './Navbar.css'; 
import { FaCode } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(true); 

  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
    if (isLightTheme) {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  };

  return (
    <nav className="navbar">
     <Link to="/" className="navbar-logo"> 
        <span className="logo-p">P</span>elzCode 
        <FaCode style={{ marginLeft: '8px', color: '#61dafb' }} />
      </Link>
      
      {/* Mobile Menu Button */}
      <div className="navbar-menu-icon" onClick={toggleMenu}>
        {menuOpen ? (
          <GiCancel className="menu-icon" />
        ) : (
          <GiHamburgerMenu className="menu-icon" />
        )}
      </div>

      {/* Theme Toggle Button */}
      <div className="theme-toggle" onClick={toggleTheme}>
        {isLightTheme ? <GiSun className="menu-icon" /> : <GiMoon className="menu-icon" />}
      </div>

      {/* Menu Items */}
      <ul className={`navbar-links ${menuOpen ? 'navbar-links-open' : ''}`}>
        <li><Link to="/" className="navbar-link">Home</Link></li>
        <li><Link to="/about" className="navbar-link">About</Link></li>
        <li><Link to="/skills" className="navbar-link">Skills</Link></li>
        <li><Link to="/projects" className="navbar-link">Projects</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;