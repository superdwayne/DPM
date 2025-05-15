import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import Navbar from './Navbar';
import MediaSlideshow from './MediaSlideshow';

const About = () => {
  // Sample media items - this can be expanded with more images/videos
  const mediaItems = [
    { type: 'image', src: '/images/TBWA.png', alt: 'Dwayne Paisley-Marshall' },
    { type: 'image', src: '/images/dwayne1.png', alt: 'Dwayne Paisley-Marshall' },
    { type: 'video', src: '/videos/Drone.mp4', poster: '/images/Drone-poster.jpg' },
    { type: 'image', src: '/images/beyondstudio.png', alt: 'Dwayne Paisley-Marshall' },
    { type: 'image', src: '/images/aidpm.png', alt: 'Dwayne Paisley-Marshall' },
    { type: 'video', src: '/videos/studiodpm.mp4', poster: '/images/image.jpg' },
    
    // Add more images or videos like this:
    // { type: 'video', src: '/videos/sample.mp4', poster: '/images/poster.jpg' },
  ];
  
  // Create refs for each section
  const sectionsRef = useRef([]);
  
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

  return (
    <div className="about-page">
      <Navbar />
      
      <div className="media-slideshow-container">
        <MediaSlideshow mediaItems={mediaItems} />
      </div>
      
      <div className="about-content">
        <section className="about-heading reveal" ref={addToRefs}>
          <h1 className="about-subtitle">THOUGHT LEADER</h1>
          <h2 className="about-subtitle">FOUNDER OF THE CREATIVE TECHNOLOGY COLLECTIVE</h2>
          <h1 className="about-subtitle">SENIOR CREATIVE TECHNOLOGIST</h1>
        </section>
        
        <section className="about-sections reveal" ref={addToRefs}>
          <div className="section-layout-split">
            <div className="section-title-wrapper">
              
              <div className="profile-image-container">
                <video 
                  className="profile-video"
                  src="/videos/DPM$.mp4"
                  poster="/images/DPM-icon.png"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>
            
            <div className="section-text-wrapper">
              <p className="section-text">
                I'm Dwayne Paisley-Marshall. I'm a 
                Creative Technologist who thrives on blending the
                imaginative with the practical. With over a decade of
                hands-on experience, I've navigated the full spectrum of
                creative tech, from pie-in-the-sky ideas to down-to-earth
                projects. But I don't just create; I educate. I'm committed
                to elevating the industry's understanding of the
                transformative power of creative technology. Through
                publications and thought leadership, I aim to craft a
                narrative that not only showcases what technology can do
                but also why it matters on a deeper, emotional level. My
                ultimate goal is straightforward: to craft digital
                experiences that are as emotionally resonant as they are
                technically impressive.
              </p>
              
              <p className="section-text client-text">
                Dwayne brings extensive industry experience, having collaborated with renowned global brands such as Lego, Gucci, Burberry, and Coca-Cola. His innovative approach has delivered impactful solutions for luxury fashion houses including Alexander McQueen, Farfetch, and Birkenstock. Through these partnerships, he has consistently pushed the boundaries of creative technology, driving engagement and delivering exceptional digital experiences across diverse market sectors.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 