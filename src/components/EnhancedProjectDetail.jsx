import React, { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { getProjectById, getRelatedProjects } from '../data/projects';
import './EnhancedProjectDetail.css';

const EnhancedProjectDetail = () => {
  const { projectId } = useParams();
  const parallaxRef = useRef(null);
  // Add section refs for reveal animations
  const sectionsRef = useRef([]);
  
  // Get project data
  const projectData = getProjectById(projectId) || {
    id: 'default',
    title: 'Project Not Found',
    heroImage: '/placeholder.jpg',
    heroVideo: null,
    heroBg: '#f5f5f5',
    brandLogo: null,
    qrCode: null,
    concept: 'Project information not available.',
    narrative: 'Project information not available.',
    quote: 'No quote available.',
    tech: 'Technical information not available.',
    techIcons: [],
    // Enhanced features
    isEnhanced: false,
    additionalMedia: [],
    parallaxSections: [],
    description: '', // Project subtitle
  };

  // Get related projects
  const relatedProjects = getRelatedProjects(projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Reset refs array
    sectionsRef.current = [];
    
    // Reset all videos if any are playing
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.pause();
      video.currentTime = 0;
    });
    
    // Setup parallax effect
    if (parallaxRef.current) {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const parallaxElements = document.querySelectorAll('.parallax-element');
        
        parallaxElements.forEach(element => {
          const speed = element.getAttribute('data-speed') || 0.5;
          element.style.transform = `translateY(${scrollPosition * speed}px)`;
        });
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        
        // Cleanup - pause all videos when unmounting
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
          video.pause();
        });
      };
    }
    
    return () => {
      // Cleanup - pause all videos when unmounting
      const videos = document.querySelectorAll('video');
      videos.forEach(video => {
        video.pause();
      });
    };
  }, [projectId]);
  
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

  // Parallax effect for standard elements
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        const parallaxElements = parallaxRef.current.querySelectorAll('.parallax-element');
        
        parallaxElements.forEach(element => {
          const speed = element.dataset.speed || 0.5;
          const numericSpeed = parseFloat(speed);
          if (!isNaN(numericSpeed)) {
            const yPos = -(scrollPosition * numericSpeed);
            element.style.transform = `translateY(${yPos}px)`;
          }
        });
        
        // Handle full-width parallax section
        const fullWidthParallax = parallaxRef.current.querySelector('.full-width-parallax');
        if (fullWidthParallax) {
          const rect = fullWidthParallax.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          
          if (isVisible) {
            fullWidthParallax.classList.add('is-scrolling');
            const scrollOffset = (window.innerHeight - rect.top) * 0.1;
            const parallaxBg = fullWidthParallax.querySelector('.parallax-bg-full');
            if (parallaxBg) {
              fullWidthParallax.style.setProperty('--scroll-offset', `${scrollOffset}px`);
            }
          } else {
            fullWidthParallax.classList.remove('is-scrolling');
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for side-entrance effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            
            // If this is a content element, also make its sibling visual element visible
            if (entry.target.classList.contains('parallax-content-inner')) {
              const parentElement = entry.target.closest('.parallax-content-outer');
              if (parentElement) {
                const visualElement = parentElement.querySelector('.parallax-visual-element');
                if (visualElement) {
                  visualElement.classList.add('is-visible');
                }
              }
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    const targets = document.querySelectorAll('.parallax-content-inner');
    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, [projectData.id]);

  return (
    <>
      <Navbar />
      <div className="enhanced-project-detail" ref={parallaxRef}>
        {/* Hero Section with Parallax */}
        <div className="hero-section" style={{ backgroundColor: projectData.heroBg }}>
          <div className="hero-content">
            {projectData.heroVideo ? (
              <video 
                key={projectData.heroVideo}
                autoPlay 
                loop 
                muted 
                playsInline
                className="hero-video"
              >
                <source src={projectData.heroVideo} type="video/mp4" />
                <img src={projectData.heroImage} alt={projectData.title} />
              </video>
            ) : (
              <img src={projectData.heroImage} alt={projectData.title} />
            )}
            
            {/* Add logo overlay on hero if specified */}
            {projectData.heroLogo && (
              <div className={`logo-overlay ${projectData.heroLogoPosition || 'bottom-right'}`}>
                <img src={projectData.heroLogo} alt={`${projectData.title} logo`} />
              </div>
            )}
            
            {/* Scroll indicator */}
            <div className="scroll-indicator">
              <div className="scroll-indicator-text">Scroll</div>
              <div className="scroll-indicator-arrow"></div>
            </div>
          </div>
        </div>
        
        {/* Project Introduction */}
        <section className="project-intro reveal">
          <h1 className="project-title">{projectData.title}</h1>
          {projectData.description && (
            <p className="project-subtitle">{projectData.description}</p>
          )}
        </section>

        {/* First Media Group - Top of page */}
        {projectData.isEnhanced && projectData.additionalMedia && projectData.additionalMedia.length > 0 && (
          <section className="media-gallery media-group media-group-top reveal" ref={addToRefs}>
            <h2 className="gallery-title">Gallery</h2>
            <div className="gallery-grid">
              {projectData.additionalMedia.slice(0, 3).map((media, index) => (
                <div key={index} className="gallery-item">
                  {media.type === 'image' ? (
                    <img src={media.url} alt={media.caption || `Gallery image ${index + 1}`} />
                  ) : (
                    <video autoPlay loop muted playsInline>
                      <source src={media.url} type="video/mp4" />
                    </video>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* First parallax section before concept */}
        {projectData.isEnhanced && projectData.parallaxSections && projectData.parallaxSections[0] && (
          <section className="parallax-section reveal" ref={addToRefs}>
            <div 
              className="parallax-bg" 
              style={{ backgroundImage: `url(${projectData.parallaxSections[0].image})` }}
            ></div>
            <div className="parallax-content-outer">
              <div className="parallax-content-inner">
                <h2>{projectData.parallaxSections[0].title}</h2>
                <p>{projectData.parallaxSections[0].content}</p>
              </div>
            </div>
          </section>
        )}

        {/* Concept section */}
        {projectData.concept && (
          <section className="project-section layout-split reveal" ref={addToRefs}>
            <div className="section-title-wrapper">
              <h2 className="section-title">Concept:</h2>
            </div>
            <div className="section-text-wrapper">
              <p className="section-text">{projectData.concept}</p>
            </div>
          </section>
        )}

        {/* Second Media Group - After concept */}
        {projectData.isEnhanced && projectData.additionalMedia && projectData.additionalMedia.length > 3 && (
          <section className="media-gallery media-group media-group-middle reveal" ref={addToRefs}>
            <div className="gallery-grid">
              {projectData.additionalMedia.slice(3, 6).map((media, index) => (
                <div key={index + 3} className="gallery-item">
                  {media.type === 'image' ? (
                    <img src={media.url} alt={media.caption || `Gallery image ${index + 4}`} />
                  ) : (
                    <video autoPlay loop muted playsInline>
                      <source src={media.url} type="video/mp4" />
                    </video>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Second parallax section after concept */}
        {projectData.isEnhanced && projectData.parallaxSections && projectData.parallaxSections[1] && (
          <section className="parallax-section reveal" ref={addToRefs}>
            <div 
              className="parallax-bg" 
              style={{ backgroundImage: `url(${projectData.parallaxSections[1].image})` }}
            ></div>
            <div className="parallax-content-outer">
              <div className="parallax-content-inner">
                <h2>{projectData.parallaxSections[1].title}</h2>
                <p>{projectData.parallaxSections[1].content}</p>
              </div>
            </div>
          </section>
        )}

        {/* Brand logo section */}
        {projectData.brandLogo && (
          <section className="brand-section reveal" ref={addToRefs}>
            <div className={`logo-container ${projectData.logoPosition || 'center'}`}>
              <img 
                src={projectData.brandLogo} 
                alt="Brand Logo" 
                className={`logo ${projectData.logoSize ? `size-${projectData.logoSize}` : 'size-medium'} ${projectData.logoAspectRatio || ''}`}
              />
            </div>
            {projectData.qrCode && (
              <img src={projectData.qrCode} alt="QR Code" className="qr-code" />
            )}
          </section>
        )}

        {/* Narrative section */}
        {projectData.narrative && (
          <section className="project-section layout-split reveal" ref={addToRefs}>
            <div className="section-title-wrapper">
              <h2 className="section-title">Narrative:</h2>
            </div>
            <div className="section-text-wrapper">
              <p className="section-text">{projectData.narrative}</p>
            </div>
          </section>
        )}

        {/* Third Media Group - After narrative */}
        {projectData.isEnhanced && projectData.additionalMedia && projectData.additionalMedia.length > 6 && (
          <section className="media-gallery media-group media-group-bottom reveal" ref={addToRefs}>
            <div className="gallery-grid">
              {projectData.additionalMedia.slice(6, 9).map((media, index) => (
                <div key={index + 6} className="gallery-item">
                  {media.type === 'image' ? (
                    <img src={media.url} alt={media.caption || `Gallery image ${index + 7}`} />
                  ) : (
                    <video autoPlay loop muted playsInline>
                      <source src={media.url} type="video/mp4" />
                    </video>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Third parallax section */}
        {projectData.isEnhanced && projectData.parallaxSections && projectData.parallaxSections[2] && (
          <section className="parallax-section reveal" ref={addToRefs}>
            <div 
              className="parallax-bg" 
              style={{ backgroundImage: `url(${projectData.parallaxSections[2].image})` }}
            ></div>
            <div className="parallax-content-outer">
              <div className="parallax-content-inner">
                <h2>{projectData.parallaxSections[2].title}</h2>
                <p>{projectData.parallaxSections[2].content}</p>
              </div>
            </div>
          </section>
        )}

        {/* Quote section */}
        {projectData.quote && (
          <section className="project-quote reveal" ref={addToRefs}>
            <blockquote>{projectData.quote}</blockquote>
          </section>
        )}

        {/* Fourth parallax section */}
        {projectData.isEnhanced && projectData.parallaxSections && projectData.parallaxSections[3] && (
          <section className="parallax-section reveal" ref={addToRefs}>
            <div 
              className="parallax-bg" 
              style={{ backgroundImage: `url(${projectData.parallaxSections[3].image})` }}
            ></div>
            <div className="parallax-content-outer">
              <div className="parallax-content-inner">
                <h2>{projectData.parallaxSections[3].title}</h2>
                <p>{projectData.parallaxSections[3].content}</p>
              </div>
            </div>
          </section>
        )}

        {/* Tech section */}
        {projectData.tech && (
          <section className="project-section layout-split reveal" ref={addToRefs}>
            <div className="section-title-wrapper">
              <h2 className="section-title">Tech:</h2>
            </div>
            <div className="section-text-wrapper">
              <p className="section-text">{projectData.tech}</p>
            </div>
          </section>
        )}

        {/* Tech icons section */}
        {projectData.techIcons && projectData.techIcons.length > 0 && (
          <section className="tech-icons reveal" ref={addToRefs}>
            {projectData.techIcons.map((icon, index) => (
              <img key={index} src={icon} alt={`Technology ${index + 1}`} />
            ))}
          </section>
        )}

        {/* Related projects section */}
        {relatedProjects && relatedProjects.length > 0 && (
          <section className="more-projects reveal" ref={addToRefs}>
            <h3>More projects</h3>
            <div className="project-links">
              {relatedProjects.map((related) => (
                <Link 
                  key={related.id} 
                  to={`/project/${related.id}`} 
                  className="related-project-link-wrapper"
                >
                  <div className="related-project-content">
                    <span className="related-project-title">{related.title}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default EnhancedProjectDetail; 