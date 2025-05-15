import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
      <div className="navbar-brand-center">
      {/* <Link to="/" className="navbar-logo"><img src="/images/DPM-icon.png" alt="DPM Logo" className="navbar-logo" /></Link> */}
        <Link to="/" className="navbar-logo">DPM</Link>
      </div>
      <div className="nav-right">
  
        <a 
          href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7126301531800268800" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Subscribe
        </a>
      </div>
    </nav>
  );
};

export default Navbar; 