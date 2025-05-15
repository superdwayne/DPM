import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import ShowreelPlayer from './ShowreelPlayer';
import './Showreel.css';

const Showreel = () => {
  // Create refs for each section
  const sectionsRef = useRef([]);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Reset refs array
    sectionsRef.current = [];
  }, []);

  // Add reveal on scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe all sections with the reveal class
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
    
    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  // Add a section ref
  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  // Replace these with your actual showreel video and poster image
  const showreelVideo = '/videos/showreel.mp4';
  const posterImage = 'https://www.dwaynep-marshall.co.uk/images/AppIcon.png';
  
  return (
    <>
      <Navbar />
      <div className="showreel-page">
        <div className="showreel-intro reveal" ref={addToRefs}>
          <h1>Showreel</h1>
          <p>A collection of my creative technology work across various projects and mediums.</p>
        </div>
        
        <div className="showreel-section reveal" ref={addToRefs}>
          <ShowreelPlayer 
            videoSrc={showreelVideo}
            posterImage={posterImage}
            title="Creative Technology Showreel 2023"
          />
        </div>
        
        <div className="showreel-description reveal" ref={addToRefs}>
          <h2>About this reel</h2>
          <p>
            This showreel highlights selected projects from my portfolio, showcasing
            my approach to creative technology across AR, AI, digital experiences, and interactive
            installations. Each project represents a unique challenge and solution at the intersection
            of design, technology, and storytelling.
          </p>
          <p>
            To see more details about any specific project, visit the Projects section of this site.
          </p>
        </div>
        
        {/* Optional: Featured Projects Section */}
        <div className="featured-projects reveal" ref={addToRefs}>
          <h2>Featured Projects</h2>
          <div className="featured-grid">
            {/* You can add links to your featured projects here */}
            <div className="featured-item">
              <img src="https://media.licdn.com/dms/image/v2/D4D0BAQHmGj9RjLW3OA/company-logo_200_200/company-logo_200_200/0/1732024801658/solaya_platform_logo?e=1750291200&v=beta&t=zTKEOmGmXlvVCx4etRINpfmiJAbDTwhQxGOZ1FvjvIk" alt="SOLAYA Snap lens" />
              <h3>SOLAYA Snap lens</h3>
            </div>
            <div className="featured-item">
              <img src="https://download.logo.wine/logo/WhatsApp/WhatsApp-Logo.wine.png" alt="Whatsapp AI agent" />
              <h3>Whatsapp AI agent</h3>
            </div>
            <div className="featured-item">
              <img src="https://www.dwaynep-marshall.co.uk/images/AppIcon.png" alt="Cheers back - App" />
              <h3>Cheers back - App</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Showreel; 