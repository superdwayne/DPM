import React, { useEffect, useRef, useState } from 'react';
import './ProjectDetail.css';
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { getProjectById, getRelatedProjects } from '../data/projects';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp, FaTimes } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import MediaSlideshow from './MediaSlideshow';
import HorizontalScroll from './HorizontalScroll';

// Custom hook to detect mobile devices
const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  return isMobile;
};

// ClickableVideo component with play/pause and mute functionality
const ClickableVideo = ({ videoSrc, showControls = true, autoPlay = false, isHero = false, className = '', poster = null, preventModal = false }) => {
  const [playing, setPlaying] = useState(autoPlay);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [naturalAspectRatio, setNaturalAspectRatio] = useState(null);
  const [showPlayButton, setShowPlayButton] = useState(!autoPlay);
  const [isMobile, setIsMobile] = useState(false);
  
  // Generate poster path if not explicitly provided
  const posterPath = poster || (
    videoSrc ? (
      // Try different strategies to generate a poster:
      // 1. Replace video extension with -poster.jpg
      // 2. If that doesn't work, use the same path with .jpg instead of video extension
      // 3. Fallback to null if videoSrc is invalid
      videoSrc.replace(/\.(mp4|mov|webm)$/i, '-poster.jpg') ||
      videoSrc.replace(/\.(mp4|mov|webm)$/i, '.jpg') ||
      null
    ) : null
  );
  
  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Simplified toggle play function - focus on reliability
  const togglePlay = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    console.log("togglePlay called for", videoSrc);
    
    if (!videoRef.current) {
      console.error("No video reference available");
      return;
    }
    
    try {
      if (videoRef.current.paused) {
        console.log("Video is paused, attempting to play");
        
        // Ensure the video is muted for better autoplay success
        videoRef.current.muted = true;
        setMuted(true);
        
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            console.log("Video play succeeded");
            setPlaying(true);
            setShowPlayButton(false);
          }).catch(err => {
            console.error("Play failed:", err);
            setPlaying(false);
            setShowPlayButton(true);
          });
        } else {
          console.log("Play promise undefined, assuming success");
          setPlaying(true);
          setShowPlayButton(false);
        }
      } else {
        console.log("Video is playing, pausing");
        videoRef.current.pause();
        setPlaying(false);
        setShowPlayButton(true);
      }
    } catch (error) {
      console.error("Error toggling video playback:", error);
    }
  };
  
  // Handle direct video click
  const handleDirectVideoClick = (e) => {
    console.log("Direct video click with preventModal:", preventModal);
    
    if (preventModal) {
      console.log("Handling direct play/pause");
      togglePlay(e);
      return;
    }
    
    handleVideoContainerClick(e);
  };
  
  // Handle video container click
  const handleVideoContainerClick = (e) => {
    console.log("Video container clicked. preventModal:", preventModal);
    
    // If preventModal is true, just toggle play/pause
    if (preventModal) {
      console.log("Toggling play/pause because preventModal is true");
      togglePlay(e);
      return;
    }
    
    // For non-preventModal videos, handle normal modal behavior
    e.stopPropagation();
    
    // On mobile, always open in the modal for better experience unless preventModal is true
    if (isMobile && !isHero && !preventModal) {
      console.log("Opening modal on mobile");
      window.dispatchEvent(new CustomEvent('open-video-modal', { 
        detail: { videoSrc }
      }));
      return;
    }
    
    if (!isHero && !preventModal) {
      // Only trigger modal for non-hero videos
      console.log("Opening modal for non-hero video");
      window.dispatchEvent(new CustomEvent('open-video-modal', { 
        detail: { videoSrc }
      }));
    } else {
      // For hero videos, just toggle play/pause inline
      console.log("Toggling play/pause for hero video");
      togglePlay(e);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    // Set initial state
    videoElement.muted = muted;
    
    if (autoPlay) {
      videoElement.play().catch(error => {
        console.error("Autoplay failed:", error);
        // Mobile browsers often block autoplay, so we mute and try again
        if (error.name === "NotAllowedError") {
          videoElement.muted = true;
          setMuted(true);
          videoElement.play().catch(e => console.error("Autoplay after mute failed:", e));
        }
      });
    }

    // Add event listeners
    const handlePause = () => {
      console.log("Video paused event");
      setPlaying(false);
      setShowPlayButton(true);
    };
    
    const handlePlay = () => {
      console.log("Video play event");
      setPlaying(true);
      setShowPlayButton(false);
    };
    
    const handleEnded = () => {
      console.log("Video ended event");
      setPlaying(false);
      setShowPlayButton(true);
      
      // On mobile, automatically restart the video
      if (isMobile && isHero) {
        setTimeout(() => {
          videoElement.currentTime = 0;
          videoElement.play().catch(e => console.error("Replay failed:", e));
        }, 1500);
      }
    };

    videoElement.addEventListener('pause', handlePause);
    videoElement.addEventListener('play', handlePlay);
    videoElement.addEventListener('ended', handleEnded);
    
    // Add click handler directly to the video element
    const handleVideoElementClick = (e) => {
      console.log("Video element clicked directly");
      if (preventModal) {
        togglePlay(e);
      }
    };
    
    videoElement.addEventListener('click', handleVideoElementClick);
    
    // Add handler for metadata loaded to get natural dimensions
    const handleLoadedMetadata = () => {
      setVideoLoaded(true);
      const aspectRatio = videoElement.videoWidth / videoElement.videoHeight;
      setNaturalAspectRatio(aspectRatio);
      
      // Apply custom styling based on aspect ratio
      if (videoElement.parentElement) {
        if (aspectRatio > 1.7) { // Wide videos
          videoElement.parentElement.classList.add('wide-video');
        } else if (aspectRatio < 1) { // Vertical videos
          videoElement.parentElement.classList.add('vertical-video');
        } else { // Standard videos
          videoElement.parentElement.classList.add('standard-video');
        }
      }
    };
    
    videoElement.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      videoElement.removeEventListener('pause', handlePause);
      videoElement.removeEventListener('play', handlePlay);
      videoElement.removeEventListener('ended', handleEnded);
      videoElement.removeEventListener('click', handleVideoElementClick);
      videoElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [autoPlay, muted, videoSrc, isMobile, isHero, preventModal]);

  return (
    <div 
      className={`clickable-video-container ${className} ${preventModal ? 'prevent-modal' : ''}`} 
      onClick={handleVideoContainerClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchStart={() => setIsHovering(true)}
      onTouchEnd={() => setTimeout(() => setIsHovering(false), 1500)}
      style={{ cursor: preventModal ? 'pointer' : 'default' }}
      data-prevent-modal={preventModal ? 'true' : 'false'}
    >
      <video
        ref={videoRef}
        className={`clickable-video ${className}`}
        loop={isHero} // Only loop hero videos
        playsInline
        muted={muted}
        controls={false}
        key={videoSrc}
        poster={posterPath} // Use the poster path
        onError={(e) => console.error("Video error:", e)}
        style={{ 
          display: 'block', 
          opacity: 1, 
          visibility: 'visible',
          cursor: preventModal ? 'pointer' : 'default' 
        }}
        preload="metadata"
        onClick={handleDirectVideoClick}
        data-prevent-modal={preventModal ? 'true' : 'false'}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Remove background styling with poster image */}
      <div 
        className="video-background" 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          backgroundColor: 'transparent',
          zIndex: 0
        }}
      ></div>
      
      {showPlayButton && (
        <div 
          className="hero-play-button-overlay" 
          style={{ 
            opacity: isHovering ? 1 : (isMobile ? 0.9 : 0.7),
            zIndex: 2,
            pointerEvents: 'auto',
            cursor: 'pointer'
          }}
          onClick={(e) => {
            console.log("Play button clicked");
            e.stopPropagation();
            togglePlay(e);
          }}
        >
          <div className="hero-play-button">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
            </svg>
          </div>
          <div className="hero-play-text">{isHero ? "Watch Video" : "Play"}</div>
        </div>
      )}
      
      {playing && showControls && (
        <div 
          className="video-pause-indicator" 
          style={{ cursor: 'pointer' }}
          onClick={(e) => {
            console.log("Pause indicator clicked");
            e.stopPropagation();
            togglePlay(e);
          }}
        >
          <FaPause size={isMobile ? 18 : 30} />
        </div>
      )}
      
      {showControls && (
        <button 
          className={`video-mute-toggle ${muted ? 'muted' : ''}`} 
          onClick={toggleMute}
          aria-label={muted ? "Unmute video" : "Mute video"}
        >
          {muted ? <FaVolumeMute size={isMobile ? 18 : 16} /> : <FaVolumeUp size={isMobile ? 18 : 16} />}
        </button>
      )}
    </div>
  );
};

// Expandable image component for the image grid
const GridImage = ({ src, alt, onClick, isClickable = true }) => {
  return (
    <div 
      className="grid-image-container" 
      onClick={isClickable ? onClick : undefined} 
      style={{ cursor: isClickable ? 'pointer' : 'default' }}
    >
      <img src={src} alt={alt} className="grid-image" />
    </div>
  );
};

// Render a single image section based on its layout
const renderImageSection = (section, projectData, sectionIndex, addToRefs, handleImageClick) => {
  // 1x1 Full bleed layout
  if (section.layout === 'fullBleed' && section.images && section.images.length > 0) {
    return (
      <section key={`section-${sectionIndex}`} className="image-grid-section reveal full-bleed" ref={addToRefs}>
        {section.title && <h2 className="section-title image-section-title">{section.title}</h2>}
        <div className="image-grid-full-bleed">
          <GridImage 
            src={section.images[0].url || section.images[0]} 
            alt={`${section.title || projectData.title} - Full Image`}
            isClickable={false}
          />
        </div>
      </section>
    );
  }
  
  // 3x3 grid layout
  if (section.layout === '3x3' && section.images && section.images.length > 0) {
    // Determine the appropriate grid class based on number of images
    const imageCount = section.images.length;
    let gridClass = 'image-grid-3x3';
    
    // Add a data attribute for the number of images to help with CSS styling
    const gridStyle = {
      gridAutoRows: 'auto' // Ensure rows adjust automatically
    };
    
    return (
      <section key={`section-${sectionIndex}`} className="image-grid-section reveal grid-3x3" ref={addToRefs}>
        {section.title && <h2 className="section-title image-section-title">{section.title}</h2>}
        <div className={gridClass} style={gridStyle} data-image-count={imageCount}>
          {section.images.map((image, index) => (
            <GridImage 
              key={index}
              src={image.url || image}
              alt={image.caption || `${section.title || projectData.title} - Image ${index + 1}`}
              isClickable={false}
            />
          ))}
        </div>
      </section>
    );
  }
  
  // Default 2x2 grid
  if (section.layout === '2x2' && section.images && section.images.length > 0) {
    // Get the image count for the 2x2 grid as well
    const imageCount = section.images.length;
    
    return (
      <section key={`section-${sectionIndex}`} className="image-grid-section reveal" ref={addToRefs}>
        {section.title && <h2 className="section-title image-section-title">{section.title}</h2>}
        <div className="image-grid" data-image-count={imageCount}>
          {section.images.map((image, index) => (
            <GridImage 
              key={index}
              src={image.url || image}
              alt={image.caption || `${section.title || projectData.title} - Image ${index + 1}`}
              isClickable={false}
            />
          ))}
        </div>
      </section>
    );
  }
  
  // Default case if layout is not recognized or no images
  return null;
};

// Render image sections based on position
const renderPositionedImageSections = (position, projectData, addToRefs, handleImageClick) => {
  if (!projectData.imageSections) return null;
  
  // Filter sections by position
  const sections = projectData.imageSections.filter(
    section => section.position === position
  );
  
  if (sections.length === 0) return null;
  
  return sections.map((section, index) => 
    renderImageSection(section, projectData, `${position}-${index}`, addToRefs, handleImageClick)
  );
};

// Render multiple image sections for AR Product Recommendations
const renderImageSections = (projectData, addToRefs, handleImageClick) => {
  if (!projectData.projectImages || projectData.projectImages.length === 0) return null;
  
  // Default 2x2 grid for all projects (clickable)
  return (
    <section className="image-grid-section reveal" ref={addToRefs}>
      <div className="image-grid">
        {projectData.projectImages.slice(0, 4).map((image, index) => (
          <GridImage 
            key={index}
            src={image.url || image}
            alt={image.caption || `${projectData.title} - Image ${index + 1}`}
            onClick={() => handleImageClick(image.url || image)}
            isClickable={true}
          />
        ))}
      </div>
    </section>
  );
};

// Add this new function after the renderImageSection function
const renderContentSections = (sections, addToRefs) => {
  if (!sections || sections.length === 0) return null;

  return sections.map((section, index) => {
    switch (section.type) {
      case 'text':
        return (
          <section key={`content-${index}`} className="content-section reveal" ref={addToRefs}>
            {section.title && (
              <h2 className="content-section-title">{section.title}</h2>
            )}
            <p className="content-section-text">{section.content}</p>
          </section>
        );
      case 'image':
        return (
          <section key={`content-${index}`} className="image-section reveal" ref={addToRefs}>
            <div className={`image-container ${section.layout || 'fullBleed'}`}> 
              <img 
                src={section.src} 
                alt={section.alt || ''} 
                className="content-image"
                loading="lazy"
              />
            </div>
          </section>
        );
      case 'video':
        return (
          <section key={`content-${index}`} className="video-section reveal" ref={addToRefs}>
            {section.title && (
              <h2 className="content-section-title">{section.title}</h2>
            )}
            <div className={`video-container video-${section.layout || 'fullBleed'}`}>
              <ClickableVideo 
                videoSrc={section.src}
                showControls={section.showControls !== false}
                autoPlay={section.autoPlay || false}
                className={`content-video content-video-${section.layout || 'fullBleed'}`}
                poster={section.poster || null}
                preventModal={section.preventModal || false}
              />
            </div>
          </section>
        );
      case 'imageGrid':
        return (
          <section key={`content-${index}`} className="image-grid-section reveal" ref={addToRefs}>
            <div className={`image-grid ${section.layout || '2x2'}`}> 
              {section.images.map((image, imgIndex) => (
                <div key={`grid-${imgIndex}`} className="grid-image-container">
                  <img 
                    src={image.src} 
                    alt={image.alt || ''} 
                    className="grid-image"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </section>
        );
      case 'mediaGrid':
        return (
          <section key={`content-${index}`} className="media-grid-section reveal" ref={addToRefs}>
            <div className={`media-grid ${section.layout || 'sideBySide'}`}> 
              {section.items.map((item, itemIdx) => (
                <div key={`media-${itemIdx}`} className="media-grid-item">
                  {item.mediaType === 'image' ? (
                    <img 
                      src={item.src} 
                      alt={item.alt || ''} 
                      className="grid-image"
                      loading="lazy"
                    />
                  ) : item.mediaType === 'video' ? (
                    <ClickableVideo 
                      videoSrc={item.src}
                      showControls={true}
                      autoPlay={false}
                      className="media-grid-video"
                      poster={item.poster || null}
                      preventModal={item.preventModal || false}
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </section>
        );
      case 'quote':
        return (
          <section key={`content-${index}`} className="content-quote reveal" ref={addToRefs}>
            <blockquote>
              {section.content}
              {section.author && (
                <footer>— {section.author}</footer>
              )}
            </blockquote>
          </section>
        );
      default:
        return null;
    }
  });
};

const ProjectDetail = () => {
  // Get the project ID from URL parameters
  const { projectId } = useParams();
  
  // Create refs for each section
  const sectionsRef = useRef([]);
  
  // State for image modal
  const [modalImage, setModalImage] = useState(null);
  
  // Add state for video modal
  const [videoModalSrc, setVideoModalSrc] = useState(null);
  const videoModalRef = useRef(null);
  
  // Scroll to top when component mounts or projectId changes
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
    
    // Set data-project attribute on body for CSS targeting
    document.body.setAttribute('data-project', projectId);
    
    // Add listener for opening video modal
    const handleOpenVideoModal = (e) => {
      setVideoModalSrc(e.detail.videoSrc);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    };
    
    window.addEventListener('open-video-modal', handleOpenVideoModal);
    
    return () => {
      // Cleanup - pause all videos when unmounting
      const videos = document.querySelectorAll('video');
      videos.forEach(video => {
        video.pause();
      });
      
      // Remove data-project attribute on unmount
      document.body.removeAttribute('data-project');
      
      // Remove listener
      window.removeEventListener('open-video-modal', handleOpenVideoModal);
      
      // Re-enable scrolling
      document.body.style.overflow = 'auto';
    };
  }, [projectId]);
  
  // Function to close video modal
  const closeVideoModal = () => {
    if (videoModalRef.current) {
      videoModalRef.current.pause();
    }
    setVideoModalSrc(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };
  
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape' && videoModalSrc) {
        closeVideoModal();
      }
    };
    
    window.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [videoModalSrc]);
  
  // Handle clicks outside the video modal to close
  const handleModalBackdropClick = (e) => {
    if (e.target.classList.contains('video-modal')) {
      closeVideoModal();
    }
  };
  
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
  
  // Get the project data and related projects based on the ID
  const projectData = getProjectById(projectId) || {
    id: 'default',
    title: 'Project Not Found',
    heroImage: '/placeholder.jpg',
    heroVideo: null,
    heroBg: '#f5f5f5', // Default light gray background
    brandLogo: null,
    qrCode: null,
    concept: 'Project information not available.',
    narrative: 'Project information not available.',
    quote: 'No quote available.',
    tech: 'Technical information not available.',
    techIcons: [],
    logoSize: 'medium', // Default logo size
    logoPosition: 'center', // Default logo position
    description: '', // Project subtitle
  };

  // Get related projects
  const relatedProjects = getRelatedProjects(projectId);

  // Determine logo size class
  const getLogoSizeClass = () => {
    return projectData.logoSize ? `size-${projectData.logoSize}` : 'size-medium';
  };

  // Determine logo position class
  const getLogoPositionClass = () => {
    return projectData.logoPosition || 'center';
  };

  // Process embedded videos in content
  const processContentVideos = (content) => {
    if (!content) return '';
    
    // For simplicity, let's assume any URLs ending with .mp4 in the content are videos to be replaced
    // In a real implementation, you might want a more sophisticated approach
    const videoRegex = /(https?:\/\/[^\s]+\.mp4)/g;
    const matches = content.match(videoRegex);
    
    if (!matches) return content;
    
    // This is a simplified approach. In a real app, you'd want to use a more robust solution
    // like using a markdown parser or a dedicated content processor
    let processedContent = content;
    matches.forEach(videoUrl => {
      // Replace video URL with a clickable video component
      // In a real implementation, you'd need to handle this differently based on your content structure
      processedContent = processedContent.replace(
        videoUrl, 
        `<div class="embedded-video">${videoUrl}</div>`
      );
    });
    
    return processedContent;
  };

  // Render embedded videos from content
  const renderEmbeddedVideos = () => {
    // Extract unique video URLs from different content sections
    const contentSections = [
      projectData.concept,
      projectData.narrative,
      projectData.tech
    ];
    
    const videoUrls = [];
    const videoRegex = /(https?:\/\/[^\s]+\.mp4)/g;
    
    contentSections.forEach(section => {
      if (!section) return;
      
      const matches = section.match(videoRegex);
      if (matches) {
        matches.forEach(url => {
          if (!videoUrls.includes(url)) {
            videoUrls.push(url);
          }
        });
      }
    });
    
    if (videoUrls.length === 0) return null;
    
    return (
      <section className="project-videos reveal" ref={addToRefs}>
        <h2 className="section-title">Videos</h2>
        <div className="videos-grid">
          {videoUrls.map((videoUrl, index) => (
            <ClickableVideo 
              key={index}
              videoSrc={videoUrl}
              showControls={false}
              autoPlay={false}
              isHero={false}
            />
          ))}
        </div>
      </section>
    );
  };
  
  // Handle image click for modal
  const handleImageClick = (imageSrc) => {
    setModalImage(imageSrc);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };
  
  // Close image modal
  const closeModal = () => {
    setModalImage(null);
    // Re-enable body scrolling
    document.body.style.overflow = 'auto';
  };

  // Render the project content with positioned image sections
  const renderProjectContent = () => {
    console.log("Project ID:", projectId);
    console.log("Project Data:", projectData);
    console.log("Has contentSections:", Boolean(projectData.contentSections));
    console.log("contentSections length:", projectData.contentSections?.length);

    // Special layout for TouchDesigner MCP project
    if (projectId === 'touchdesignermcp') {
      const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
        // Check if on mobile and default to collapsed if true
        return window.innerWidth <= 768;
      });
      
      // Add effect to track window resize and update state
      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 768) {
            setSidebarCollapsed(true);
          }
        };
        
        // Set initial value on mount
        handleResize();
        
        // Add event listener
        window.addEventListener('resize', handleResize);
        
        // Clean up
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      
      const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed);
      };
      
      // Add mobile detection for QR code
      const isMobileView = useMobileDetection();
      
      // Create category tags for the sidebar
      const categoryTags = ['TouchDesigner', 'MCP', 'Creative Tech', 'AI'];
      
      return (
        <div className="touchdesigner-layout">
          {/* Left sidebar with project overview */}
          <div className={`sticky-sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
            <section className="project-intro">
            <h1 className="project-title">{projectData.title}</h1>
              <button className="mobile-toggle" onClick={toggleSidebar}>
                {sidebarCollapsed ? '+' : '−'}
              </button>
          </section>
          
            {/* Category Tags */}
            <div className="category-tags">
              {categoryTags.map((tag, index) => (
                <span key={index} className="category-tag">{tag}</span>
              ))}
            </div>
            
           
            {/* Brief description at bottom of sidebar */}
            <section className="project-overview">
              <p className="overview-text">
                {projectData.description || "TouchDesigner MCP enables powerful real-time visual experiences through an innovative interface for controlling generative media. This project explores the creative potential of model control protocols for interactive installations and performances."}
              </p>
            </section>

            {/* Add QR code if available */}
            {projectData.qrCodeImage && (
              <section className="project-qrcode">
                <h3 className="qrcode-title">{projectData.qrCodeLabel || ""}</h3>
                <div className="qrcode-container">
                  <img 
                    src={projectData.qrCodeImage} 
                    alt={projectData.qrCodeLabel || "QR Code"} 
                    className="qrcode-image"
                    style={{ 
                      width: isMobileView ? '70px' : '90px', 
                      height: isMobileView ? '70px' : '90px', 
                      maxWidth: isMobileView ? '70px' : '90px', 
                      maxHeight: isMobileView ? '70px' : '90px',
                      objectFit: 'contain',
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                      borderRadius: '6px',
                      padding: isMobileView ? '3px' : '4px',
                      backgroundColor: 'white'
                    }}
                  />
              </div>
              </section>
            )}
              </div>
          
          {/* Right content area with detailed sections and media - REMOVING VIDEOS */}
          <div className="scrollable-content">
            {/* Concept Section */}
            {projectData.concept && (
              <section className="content-section">
                <h2 className="content-section-title">Concept</h2>
                <p className="content-section-text">{projectData.concept}</p>
            </section>
          )}
          
            {/* Replace Images Section with HorizontalScroll */}
            {projectData.projectImages && projectData.projectImages.length > 0 && (
              <HorizontalScroll 
                images={projectData.projectImages}
                verticalLimit={2}
              />
            )}
            
            {/* Narrative Section */}
            {projectData.narrative && (
              <section className="content-section">
                <h2 className="content-section-title">Narrative</h2>
                <p className="content-section-text">{projectData.narrative}</p>
            </section>
          )}
          
            {/* Quote Section */}
            {projectData.quote && (
              <section className="content-quote">
                <blockquote>{projectData.quote}</blockquote>
              </section>
            )}
            
            {/* Tech Section */}
            {projectData.tech && (
              <section className="content-section">
                <h2 className="content-section-title">Tech</h2>
                <p className="content-section-text">{projectData.tech}</p>
              </section>
            )}
            
            {/* Replace Additional Images with HorizontalScroll */}
            {projectData.imageSections && projectData.imageSections.map((section, sectionIndex) => (
              section.images && section.images.length > 0 ? (
                <HorizontalScroll 
                  key={`horizontal-section-${sectionIndex}`}
                  images={section.images}
                  title={section.title || "Gallery"}
                />
              ) : null
            ))}
              </div>
              </div>
      );
    }
    
    // Special layout for LEGO project
    else if (projectId === 'lego') {
      const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
        // Check if on mobile and default to collapsed if true
        return window.innerWidth <= 768;
      });
      
      // Add effect to track window resize and update state
      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 768) {
            setSidebarCollapsed(true);
          }
        };
        
        // Set initial value on mount
        handleResize();
        
        // Add event listener
        window.addEventListener('resize', handleResize);
        
        // Clean up
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      
      const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed);
      };
      
      // Add mobile detection for QR code
      const isMobileView = useMobileDetection();
      
      // Create category tags for the sidebar
      const categoryTags = ['Concept', 'Unity', 'Interactive', 'Playverse'];
      
      return (
        <div className="touchdesigner-layout">
          {/* Left sidebar with project overview */}
          <div className={`sticky-sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
            <section className="project-intro">
              <h1 className="project-title">{projectData.title}</h1>
              <button className="mobile-toggle" onClick={toggleSidebar}>
                {sidebarCollapsed ? '+' : '−'}
              </button>
            </section>
            
            {/* Category Tags */}
            <div className="category-tags">
              {categoryTags.map((tag, index) => (
                <span key={index} className="category-tag">{tag}</span>
              ))}
            </div>
            
            
            
            {/* Brief description at bottom of sidebar */}
            <section className="project-overview">
              <p className="overview-text">
                {projectData.description || "The LEGO Playverse seamlessly blends physical LEGO building with expansive virtual worlds, allowing creators to design in the real world and instantly see their creations come to life in interactive digital environments."}
              </p>
            </section>

            {/* Add QR code if available */}
            {projectData.qrCodeImage && (
              <section className="project-qrcode">
                <h3 className="qrcode-title">{projectData.qrCodeLabel || ""}</h3>
                <div className="qrcode-container">
                  <img 
                    src={projectData.qrCodeImage} 
                    alt={projectData.qrCodeLabel || "QR Code"} 
                    className="qrcode-image"
                    style={{ 
                      width: isMobileView ? '70px' : '90px', 
                      height: isMobileView ? '70px' : '90px', 
                      maxWidth: isMobileView ? '70px' : '90px', 
                      maxHeight: isMobileView ? '70px' : '90px',
                      objectFit: 'contain',
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                      borderRadius: '6px',
                      padding: isMobileView ? '3px' : '4px',
                      backgroundColor: 'white'
                    }}
                />
              </div>
              </section>
            )}
          </div>
          
          {/* Right content area with detailed sections and media */}
          <div className="scrollable-content">
            {/* Use contentSections if available, otherwise fall back to the old structure */}
            {projectData.contentSections ? (
              renderContentSections(projectData.contentSections, addToRefs)
            ) : (
              <>
                {/* Concept Section */}
                {projectData.concept && (
                  <section className="content-section">
                    <h2 className="content-section-title">Concept</h2>
                    <p className="content-section-text">{projectData.concept}</p>
            </section>
          )}
          
                {/* Project Images */}
                {projectData.projectImages && projectData.projectImages.length > 0 && (
                  <HorizontalScroll 
                    images={projectData.projectImages}
                    verticalLimit={2}
                  />
                )}
                
                {/* Narrative Section */}
                {projectData.narrative && (
                  <section className="content-section">
                    <h2 className="content-section-title">Narrative</h2>
                    <p className="content-section-text">{projectData.narrative}</p>
                  </section>
                )}
                
                {/* Quote Section */}
                {projectData.quote && (
                  <section className="content-quote">
                    <blockquote>{projectData.quote}</blockquote>
                  </section>
                )}
                
                {/* Tech Section */}
                {projectData.tech && (
                  <section className="content-section">
                    <h2 className="content-section-title">Tech</h2>
                    <p className="content-section-text">{projectData.tech}</p>
                  </section>
                )}
              </>
            )}
              </div>
              </div>
      );
    }
    
    // Special layout for Farfetch Kidswear Report
    else if (projectId === 'kidswear-report') {
      const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
        // Check if on mobile and default to collapsed if true
        return window.innerWidth <= 768;
      });
      
      // Add effect to track window resize and update state
      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 768) {
            setSidebarCollapsed(true);
          }
        };
        
        // Set initial value on mount
        handleResize();
        
        // Add event listener
        window.addEventListener('resize', handleResize);
        
        // Clean up
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      
      const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed);
      };
      
      // Add mobile detection for QR code
      const isMobileView = useMobileDetection();
      
      // Create category tags for the sidebar
      const categoryTags = ['Branding', 'React', 'Luxury Fashion'];
      
      return (
        <div className="touchdesigner-layout">
          {/* Left sidebar with project overview */}
          <div className={`sticky-sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
            <section className="project-intro">
              <h1 className="project-title">{projectData.title}</h1>
              <button className="mobile-toggle" onClick={toggleSidebar}>
                {sidebarCollapsed ? '+' : '−'}
              </button>
            </section>
            
            {/* Category Tags */}
            <div className="category-tags">
              {categoryTags.map((tag, index) => (
                <span key={index} className="category-tag">{tag}</span>
              ))}
            </div>
            
            {/* Secondary Tags */}
            <div className="secondary-tags">
              <span className="secondary-tag">Luxury Kidswear</span>
              <span className="secondary-tag">Market Report</span>
              <span className="secondary-tag">Digital Experience</span>
            </div>
            
            {/* Brief description at bottom of sidebar */}
            <section className="project-overview">
              <p className="overview-text">
                {projectData.description || "An interactive digital platform that transforms traditional market reports into an immersive experience showcasing the evolution of luxury kidswear."}
              </p>
            </section>

            {/* Add QR code if available */}
            {projectData.qrCodeImage && (
              <section className="project-qrcode">
                <h3 className="qrcode-title">{projectData.qrCodeLabel || ""}</h3>
                <div className="qrcode-container">
                  <img 
                    src={projectData.qrCodeImage} 
                    alt={projectData.qrCodeLabel || "QR Code"} 
                    className="qrcode-image"
                    style={{ 
                      width: isMobileView ? '70px' : '90px', 
                      height: isMobileView ? '70px' : '90px', 
                      maxWidth: isMobileView ? '70px' : '90px', 
                      maxHeight: isMobileView ? '70px' : '90px',
                      objectFit: 'contain',
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                      borderRadius: '6px',
                      padding: isMobileView ? '3px' : '4px',
                      backgroundColor: 'white'
                    }}
                  />
              </div>
            </section>
          )}
          </div>
          
          {/* Right content area with detailed sections and media */}
          <div className="scrollable-content">
            {/* Use contentSections if available, otherwise fall back to the old structure */}
            {projectData.contentSections ? (
              renderContentSections(projectData.contentSections, addToRefs)
            ) : (
              <>
                {/* Concept Section */}
                {projectData.concept && (
                  <section className="content-section">
                    <h2 className="content-section-title">Concept</h2>
                    <p className="content-section-text">{projectData.concept}</p>
                  </section>
                )}
                
                {/* Project Images */}
                {projectData.projectImages && projectData.projectImages.length > 0 && (
                  <HorizontalScroll 
                    images={projectData.projectImages}
                    verticalLimit={2}
                  />
                )}
                
                {/* Narrative Section */}
                {projectData.narrative && (
                  <section className="content-section">
                    <h2 className="content-section-title">Narrative</h2>
                    <p className="content-section-text">{projectData.narrative}</p>
                  </section>
                )}
                
                {/* Quote Section */}
                {projectData.quote && (
                  <section className="content-quote">
                    <blockquote>{projectData.quote}</blockquote>
                  </section>
                )}
                
                {/* Tech Section */}
                {projectData.tech && (
                  <section className="content-section">
                    <h2 className="content-section-title">Tech</h2>
                    <p className="content-section-text">{projectData.tech}</p>
                  </section>
                )}
              </>
            )}
            </div>
            </div>
      );
    }
    
    // Special layout for AR Product Recommendations project
    else if (projectId === 'arproduct-recommendations') {
      const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
        // Check if on mobile and default to collapsed if true
        return window.innerWidth <= 768;
      });
      
      // Add effect to track window resize and update state
      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 768) {
            setSidebarCollapsed(true);
          }
        };
        
        // Set initial value on mount
        handleResize();
        
        // Add event listener
        window.addEventListener('resize', handleResize);
        
        // Clean up
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      
      const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed);
      };
      
      // Add mobile detection for QR code
      const isMobileView = useMobileDetection();
      
      // Create category tags for the sidebar
      const categoryTags = ['AR', 'AI', 'iOS', 'E-commerce'];
      
      return (
        <div className="touchdesigner-layout">
          {/* Left sidebar with project overview */}
          <div className={`sticky-sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
            <section className="project-intro">
              <h1 className="project-title">{projectData.title}</h1>
              <button className="mobile-toggle" onClick={toggleSidebar}>
                {sidebarCollapsed ? '+' : '−'}
              </button>
            </section>
            
            {/* Category Tags */}
            <div className="category-tags">
              {categoryTags.map((tag, index) => (
                <span key={index} className="category-tag">{tag}</span>
                ))}
              </div>
            
          
            {/* Brief description at bottom of sidebar */}
            <section className="project-overview">
              <p className="overview-text">
                An innovative mobile application that leverages customer data to deliver personalized product recommendations through push notifications, enhanced with an immersive AR experience for visualizing products in real space.
              </p>
            </section>

            {/* Add QR code if available */}
            {projectData.qrCodeImage && (
              <section className="project-qrcode">
                <h3 className="qrcode-title">{projectData.qrCodeLabel || ""}</h3>
                <div className="qrcode-container">
                  <img 
                    src={projectData.qrCodeImage} 
                    alt={projectData.qrCodeLabel || "QR Code"} 
                    className="qrcode-image"
                    style={{ 
                      width: isMobileView ? '50%' : '50%', 
                    
                    
                     
                      objectFit: 'contain',
                   
                     
                      padding: isMobileView ? '3px' : '4px',
                      backgroundColor: 'white'
                    }}
                  />
              </div>
            </section>
          )}
          </div>
          
          {/* Right content area with detailed sections and media */}
          <div className="scrollable-content">
            {/* Use contentSections if available, otherwise fall back to the old structure */}
            {projectData.contentSections ? (
              renderContentSections(projectData.contentSections, addToRefs)
            ) : (
              <>
                {/* Concept Section */}
                {projectData.concept && (
                  <section className="content-section">
                    <h2 className="content-section-title">Concept</h2>
                    <p className="content-section-text">{projectData.concept}</p>
            </section>
          )}
          
                {/* Replace Images Section with HorizontalScroll */}
                {projectData.imageSections && projectData.imageSections.filter(s => s.position === 'intro').map((section, sectionIndex) => (
                  section.images && section.images.length > 0 ? (
                    <HorizontalScroll 
                      key={`horizontal-section-intro-${sectionIndex}`}
                      images={section.images}
                      title={section.title || "Gallery"}
                    />
                  ) : null
                ))}
                
                {/* Narrative Section */}
                {projectData.narrative && (
                  <section className="content-section">
                    <h2 className="content-section-title">Narrative</h2>
                    <p className="content-section-text">{projectData.narrative}</p>
            </section>
          )}
          
                {/* Replace Images after narrative with HorizontalScroll */}
                {projectData.imageSections && projectData.imageSections.filter(s => s.position === 'narrative').map((section, sectionIndex) => (
                  section.images && section.images.length > 0 ? (
                    <HorizontalScroll 
                      key={`horizontal-section-narrative-${sectionIndex}`}
                      images={section.images}
                      title={section.title || "Gallery"}
                    />
                  ) : null
                ))}
                
                {/* Quote Section */}
                {projectData.quote && (
                  <section className="content-quote">
                    <blockquote>{projectData.quote}</blockquote>
            </section>
          )}
          
                {/* Tech Section */}
                {projectData.tech && (
                  <section className="content-section">
                    <h2 className="content-section-title">Tech</h2>
                    <p className="content-section-text">{projectData.tech}</p>
                  </section>
                )}
                
                {/* Replace Images after tech with HorizontalScroll */}
                {projectData.imageSections && projectData.imageSections.filter(s => s.position === 'tech').map((section, sectionIndex) => (
                  section.images && section.images.length > 0 ? (
                    <HorizontalScroll 
                      key={`horizontal-section-tech-${sectionIndex}`}
                      images={section.images}
                      title={section.title || "Gallery"}
                    />
                  ) : null
                ))}
              </>
            )}
                    </div>
        </div>
      );
    }
    
    // Special layout for SOLAYA project
    else if (projectId === 'solaya') {
      const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
        // Check if on mobile and default to collapsed if true
        return window.innerWidth <= 768;
      });
      
      // Add effect to track window resize and update state
      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 768) {
            setSidebarCollapsed(true);
          }
        };
        
        // Set initial value on mount
        handleResize();
        
        // Add event listener
        window.addEventListener('resize', handleResize);
        
        // Clean up
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      
      const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed);
      };
      
      // Add mobile detection for QR code
      const isMobileView = useMobileDetection();
      
      // Create category tags for the sidebar
      const categoryTags = ['Branding', 'AR', 'Snap Lens'];
      
    return (
        <div className="touchdesigner-layout">
          {/* Left sidebar with project overview */}
          <div className={`sticky-sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
            <section className="project-intro">
          <h1 className="project-title">{projectData.title}</h1>
              <button className="mobile-toggle" onClick={toggleSidebar}>
                {sidebarCollapsed ? '+' : '−'}
              </button>
        </section>
        
            {/* Category Tags */}
            <div className="category-tags">
              {categoryTags.map((tag, index) => (
                <span key={index} className="category-tag">{tag}</span>
                ))}
              </div>
            
          
            {/* Brief description at bottom of sidebar */}
            <section className="project-overview">
              <p className="overview-text">
                {projectData.description || "A revolutionary virtual try-on solution that leverages cutting-edge Gaussian splatting technology to create photorealistic 3D product experiences on Snapchat, beginning with Adidas footwear."}
              </p>
            </section>

            {/* Add QR code if available */}
            {projectData.qrCodeImage && (
              <section className="project-qrcode">
                <h3 className="qrcode-title">{projectData.qrCodeLabel || ""}</h3>
                <div className="qrcode-container">
                  <img 
                    src={projectData.qrCodeImage} 
                    alt={projectData.qrCodeLabel || "QR Code"} 
                    className="qrcode-image"
                    style={{ 
                      width: isMobileView ? '70px' : '50%', 
                     
                    
                      padding: isMobileView ? '3px' : '4px',
                      backgroundColor: 'white'
                    }}
                  />
            </div>
              </section>
            )}
            </div>
          
          {/* Right content area with detailed sections and media */}
          <div className="scrollable-content">
            {/* Use contentSections if available, otherwise fall back to the old structure */}
            {projectData.contentSections ? (
              renderContentSections(projectData.contentSections, addToRefs)
            ) : (
              <>
                {/* Concept Section */}
                {projectData.concept && (
                  <section className="content-section">
                    <h2 className="content-section-title">Concept</h2>
                    <p className="content-section-text">{projectData.concept}</p>
          </section>
        )}
        
                {/* Project Images */}
                {projectData.projectImages && projectData.projectImages.length > 0 && (
                  <HorizontalScroll 
                    images={projectData.projectImages}
                    verticalLimit={2}
                  />
                )}
                
                {/* Narrative Section */}
                {projectData.narrative && (
                  <section className="content-section">
                    <h2 className="content-section-title">Narrative</h2>
                    <p className="content-section-text">{projectData.narrative}</p>
          </section>
        )}
        
                {/* Quote Section */}
                {projectData.quote && (
                  <section className="content-quote">
                    <blockquote>{projectData.quote}</blockquote>
                  </section>
                )}
                
                {/* Tech Section */}
                {projectData.tech && (
                  <section className="content-section">
                    <h2 className="content-section-title">Tech</h2>
                    <p className="content-section-text">{projectData.tech}</p>
                  </section>
                )}
              </>
            )}
            </div>
            </div>
      );
    }
    
    // Special layout for NSDM project
    else if (projectId === 'nsdm') {
      const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
        // Check if on mobile and default to collapsed if true
        return window.innerWidth <= 768;
      });
      
      // Add effect to track window resize and update state
      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 768) {
            setSidebarCollapsed(true);
          }
        };
        
        // Set initial value on mount
        handleResize();
        
        // Add event listener
        window.addEventListener('resize', handleResize);
        
        // Clean up
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      
      const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed);
      };
      
      // Add mobile detection for QR code
      const isMobileView = useMobileDetection();
      
      // Create category tags for the sidebar
      const categoryTags = projectData.categoryId || ['AR', 'Street Art', 'Gaussian Splatting'];
      
    return (
        <div className="touchdesigner-layout">
          {/* Left sidebar with project overview */}
          <div className={`sticky-sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
            <section className="project-intro">
          <h1 className="project-title">{projectData.title}</h1>
              <button className="mobile-toggle" onClick={toggleSidebar}>
                {sidebarCollapsed ? '+' : '−'}
              </button>
        </section>
        
            {/* Category Tags */}
            <div className="category-tags">
              {categoryTags.map((tag, index) => (
                <span key={index} className="category-tag">{tag}</span>
              ))}
            </div>
            
           
            
            {/* Brief description at bottom of sidebar */}
            <section className="project-overview">
              <p className="overview-text">
                {projectData.description || "A digital time capsule preserving the rich history and ephemeral nature of NDSM's iconic street art through immersive AR technology."}
              </p>
          </section>

            {/* Add QR code if available */}
            {projectData.qrCodeImage && (
              <section className="project-qrcode">
                <h3 className="qrcode-title">{projectData.qrCodeLabel || ""}</h3>
                <div className="qrcode-container">
                  <img 
                    src={projectData.qrCodeImage} 
                    alt={projectData.qrCodeLabel || "QR Code"} 
                    className="qrcode-image"
                    style={{ 
                      width: isMobileView ? '70px' : '50%', 
                      
                     
                      padding: isMobileView ? '3px' : '4px',
                      backgroundColor: 'white'
                    }}
              />
            </div>
              </section>
            )}
          </div>
          
          {/* Right content area with detailed sections and media */}
          <div className="scrollable-content">
            {/* Use contentSections if available, otherwise fall back to the old structure */}
            {projectData.contentSections ? (
              renderContentSections(projectData.contentSections, addToRefs)
            ) : (
              <>
                {/* Concept Section */}
                {projectData.concept && (
                  <section className="content-section">
                    <h2 className="content-section-title">Concept</h2>
                    <p className="content-section-text">{projectData.concept}</p>
          </section>
        )}
        
                {/* Project Images */}
                {projectData.projectImages && projectData.projectImages.length > 0 && (
                  <HorizontalScroll 
                    images={projectData.projectImages}
                    verticalLimit={2}
                  />
                )}
                
                {/* Narrative Section */}
                {projectData.narrative && (
                  <section className="content-section">
                    <h2 className="content-section-title">Narrative</h2>
                    <p className="content-section-text">{projectData.narrative}</p>
          </section>
        )}
        
                {/* Quote Section */}
                {projectData.quote && (
                  <section className="content-quote">
                    <blockquote>{projectData.quote}</blockquote>
                  </section>
                )}
                
                {/* Tech Section */}
                {projectData.tech && (
                  <section className="content-section">
                    <h2 className="content-section-title">Tech</h2>
                    <p className="content-section-text">{projectData.tech}</p>
                  </section>
                )}
              </>
            )}
            </div>
            </div>
      );
    }
    
    // Special layout for Guido project
    else if (projectId === 'guido') {
      const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
        // Check if on mobile and default to collapsed if true
        return window.innerWidth <= 768;
      });
      
      // Add effect to track window resize and update state
      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 768) {
            setSidebarCollapsed(true);
          }
        };
        
        // Set initial value on mount
        handleResize();
        
        // Add event listener
        window.addEventListener('resize', handleResize);
        
        // Clean up
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      
      const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed);
      };
      
      // Add mobile detection for QR code
      const isMobileView = useMobileDetection();
      
      // Create category tags for the sidebar
      const categoryTags = projectData.categoryId || ['AR', 'Street Art', 'Gaussian Splatting'];
      
      return (
        <div className="touchdesigner-layout">
          {/* Left sidebar with project overview */}
          <div className={`sticky-sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
            <section className="project-intro">
              <h1 className="project-title">{projectData.title}</h1>
              <button className="mobile-toggle" onClick={toggleSidebar}>
                {sidebarCollapsed ? '+' : '−'}
              </button>
            </section>
            
            {/* Category Tags */}
            <div className="category-tags">
              {categoryTags.map((tag, index) => (
                <span key={index} className="category-tag">{tag}</span>
              ))}
            </div>
            
            {/* Brief description at bottom of sidebar */}
            <section className="project-overview">
              <p className="overview-text">
                {projectData.description || "A collaborative exploration of interactive digital art through spatial computing, combining physical and digital environments."}
              </p>
            </section>

            {/* Add QR code if available */}
            {projectData.qrCodeImage && (
              <section className="project-qrcode">
                <h3 className="qrcode-title">{projectData.qrCodeLabel || ""}</h3>
                <div className="qrcode-container">
                  <img 
                    src={projectData.qrCodeImage} 
                    alt={projectData.qrCodeLabel || "QR Code"} 
                    className="qrcode-image"
                    style={{ 
                      width: isMobileView ? '70px' : '50%',
                      padding: isMobileView ? '3px' : '4px',
                      backgroundColor: 'white'
                    }}
                  />
                </div>
              </section>
            )}
          </div>
          
          {/* Right content area with detailed sections and media */}
          <div className="scrollable-content">
            {/* Use contentSections if available, otherwise fall back to the old structure */}
            {projectData.contentSections ? (
              renderContentSections(projectData.contentSections, addToRefs)
            ) : (
              <>
                {/* Concept Section */}
                {projectData.concept && (
                  <section className="content-section">
                    <h2 className="content-section-title">Concept</h2>
                    <p className="content-section-text">{projectData.concept}</p>
                  </section>
                )}
                
                {/* Project Images */}
                {projectData.projectImages && projectData.projectImages.length > 0 && (
                  <HorizontalScroll 
                    images={projectData.projectImages}
                    verticalLimit={2}
                  />
                )}
                
                {/* Narrative Section */}
                {projectData.narrative && (
                  <section className="content-section">
                    <h2 className="content-section-title">Narrative</h2>
                    <p className="content-section-text">{projectData.narrative}</p>
                  </section>
                )}
                
                {/* Quote Section */}
                {projectData.quote && (
                  <section className="content-quote">
                    <blockquote>{projectData.quote}</blockquote>
                  </section>
                )}
                
                {/* Tech Section */}
                {projectData.tech && (
                  <section className="content-section">
                    <h2 className="content-section-title">Tech</h2>
                    <p className="content-section-text">{projectData.tech}</p>
                  </section>
                )}
              </>
            )}
          </div>
        </div>
      );
    }
    
    // Special layout for Farfetch Metaverse project
    else if (projectId === 'farfetch-metaverse') {
      const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
        // Check if on mobile and default to collapsed if true
        return window.innerWidth <= 768;
      });
      
      // Add effect to track window resize and update state
      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 768) {
            setSidebarCollapsed(true);
          }
        };
        
        // Set initial value on mount
        handleResize();
        
        // Add event listener
        window.addEventListener('resize', handleResize);
        
        // Clean up
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      
      const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed);
      };
      
      // Add mobile detection for QR code
      const isMobileView = useMobileDetection();
      
      // Create category tags for the sidebar
      const categoryTags = ['Branding', 'Blender', 'Luxury Fashion'];
      
      return (
        <div className="touchdesigner-layout">
          {/* Left sidebar with project overview */}
          <div className={`sticky-sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
            <section className="project-intro">
              <h1 className="project-title">{projectData.title}</h1>
              <button className="mobile-toggle" onClick={toggleSidebar}>
                {sidebarCollapsed ? '+' : '−'}
              </button>
            </section>
            
            {/* Category Tags */}
            <div className="category-tags">
              {categoryTags.map((tag, index) => (
                <span key={index} className="category-tag">{tag}</span>
              ))}
            </div>
            
           
            
            {/* Brief description at bottom of sidebar */}
            <section className="project-overview">
              <p className="overview-text">
                {projectData.description || "An innovative exploration of luxury fashion in virtual worlds, creating immersive digital experiences that showcase how high-end brands can meaningfully engage with customers in the metaverse."}
              </p>
            </section>

            {/* Add QR code if available */}
            {projectData.qrCodeImage && (
              <section className="project-qrcode">
                <h3 className="qrcode-title">{projectData.qrCodeLabel || ""}</h3>
                <div className="qrcode-container">
                  <img 
                    src={projectData.qrCodeImage} 
                    alt={projectData.qrCodeLabel || "QR Code"} 
                    className="qrcode-image"
                    style={{ 
                      width: isMobileView ? '70px' : '90px', 
                      height: isMobileView ? '70px' : '90px', 
                      maxWidth: isMobileView ? '70px' : '90px', 
                      maxHeight: isMobileView ? '70px' : '90px',
                      objectFit: 'contain',
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                      borderRadius: '6px',
                      padding: isMobileView ? '3px' : '4px',
                      backgroundColor: 'white'
                    }}
                  />
            </div>
          </section>
        )}
          </div>
          
          {/* Right content area with detailed sections and media */}
          <div className="scrollable-content">
            {/* Use contentSections if available, otherwise fall back to the old structure */}
            {projectData.contentSections ? (
              renderContentSections(projectData.contentSections, addToRefs)
            ) : (
              <>
                {/* Concept Section */}
                {projectData.concept && (
                  <section className="content-section">
                    <h2 className="content-section-title">Concept</h2>
                    <p className="content-section-text">{projectData.concept}</p>
                  </section>
                )}
                
                {/* Project Images */}
                {projectData.projectImages && projectData.projectImages.length > 0 && (
                  <HorizontalScroll 
                    images={projectData.projectImages}
                    verticalLimit={2}
                  />
                )}
                
                {/* Narrative Section */}
                {projectData.narrative && (
                  <section className="content-section">
                    <h2 className="content-section-title">Narrative</h2>
                    <p className="content-section-text">{projectData.narrative}</p>
                  </section>
                )}
                
                {/* Quote Section */}
                {projectData.quote && (
                  <section className="content-quote">
                    <blockquote>{projectData.quote}</blockquote>
                  </section>
                )}
                
                {/* Tech Section */}
                {projectData.tech && (
                  <section className="content-section">
                    <h2 className="content-section-title">Tech</h2>
                    <p className="content-section-text">{projectData.tech}</p>
                  </section>
                )}
              </>
            )}
          </div>
        </div>
      );
    }
    
    // Default layout for all other projects - use sidebar layout
    else {
      const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
        // Check if on mobile and default to collapsed if true
        return window.innerWidth <= 768;
      });
      
      // Add effect to track window resize and update state
      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 768) {
            setSidebarCollapsed(true);
          }
        };
        
        // Set initial value on mount
        handleResize();
        
        // Add event listener
        window.addEventListener('resize', handleResize);
        
        // Clean up
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      
      const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed);
      };
      
      // Add mobile detection for QR code
      const isMobileView = useMobileDetection();
      
      // Get category tags from project data
      const categoryTags = projectData.categoryId || ['Project'];
      
      return (
        <div className="touchdesigner-layout">
          {/* Left sidebar with project overview */}
          <div className={`sticky-sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
            <section className="project-intro">
              <h1 className="project-title">{projectData.title}</h1>
              <button className="mobile-toggle" onClick={toggleSidebar}>
                {sidebarCollapsed ? '+' : '−'}
              </button>
            </section>
            
            {/* Category Tags */}
            <div className="category-tags">
              {categoryTags.map((tag, index) => (
                <span key={index} className="category-tag">{tag}</span>
              ))}
            </div>
            
            {/* Brief description at bottom of sidebar */}
            <section className="project-overview">
              <p className="overview-text">
                {projectData.description || "An innovative project exploring new creative and technical possibilities."}
              </p>
            </section>

            {/* Add QR code if available */}
            {projectData.qrCodeImage && (
              <section className="project-qrcode">
                <h3 className="qrcode-title">{projectData.qrCodeLabel || ""}</h3>
                <div className="qrcode-container">
                  <img 
                    src={projectData.qrCodeImage} 
                    alt={projectData.qrCodeLabel || "QR Code"} 
                    className="qrcode-image"
                    style={{ 
                      width: isMobileView ? '70px' : '90px', 
                      height: isMobileView ? '70px' : '90px', 
                      maxWidth: isMobileView ? '70px' : '90px', 
                      maxHeight: isMobileView ? '70px' : '90px',
                      objectFit: 'contain',
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                      borderRadius: '6px',
                      padding: isMobileView ? '3px' : '4px',
                      backgroundColor: 'white'
                    }}
                  />
            </div>
          </section>
        )}
          </div>
          
          {/* Right content area with detailed sections and media */}
          <div className="scrollable-content">
            {/* Concept Section */}
            {projectData.concept && (
              <section className="content-section">
                <h2 className="content-section-title">Concept</h2>
                <p className="content-section-text">{projectData.concept}</p>
            </section>
          )}
            
            {/* Replace standard image grid with HorizontalScroll for project images */}
            {projectData.projectImages && projectData.projectImages.length > 0 && (
              <HorizontalScroll 
                images={projectData.projectImages}
                verticalLimit={2}
              />
            )}
            
            {/* Narrative Section */}
            {projectData.narrative && (
              <section className="content-section">
                <h2 className="content-section-title">Narrative</h2>
                <p className="content-section-text">{projectData.narrative}</p>
              </section>
            )}
            
            {/* Quote Section */}
            {projectData.quote && (
              <section className="content-quote">
                <blockquote>{projectData.quote}</blockquote>
              </section>
            )}
            
            {/* Tech Section */}
            {projectData.tech && (
              <section className="content-section">
                <h2 className="content-section-title">Tech</h2>
                <p className="content-section-text">{projectData.tech}</p>
              </section>
            )}
            
            {/* Add another horizontal scroll for image sections if available */}
            {projectData.imageSections && projectData.imageSections.map((section, sectionIndex) => (
              section.images && section.images.length > 0 ? (
                <HorizontalScroll 
                  key={`horizontal-section-${sectionIndex}`}
                  images={section.images}
                  title={section.title || "Gallery"}
                />
              ) : null
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="project-detail-container">
        <div className={`project-hero${projectId === 'lego' ? ' lego-hero' : ''}${projectId === 'touchdesignermcp' ? ' touchdesigner-hero' : ''}${projectId === 'arproduct-recommendations' ? ' ar-product-hero' : ''}${projectId === 'nsdm' ? ' nsdm-hero' : ''}${projectId === 'guido' ? ' guido-hero' : ''}${projectId === 'solaya' ? ' solaya-hero' : ''}${projectId === 'farfetch-metaverse' ? ' farfetch-metaverse-hero' : ''}`} style={{ backgroundColor: projectData.heroBg }}>
          <div className={`hero-content${projectId === 'lego' ? ' lego-hero-content' : ''}${projectId === 'touchdesignermcp' ? ' touchdesigner-hero-content' : ''}${projectId === 'arproduct-recommendations' ? ' ar-product-hero-content' : ''}${projectId === 'nsdm' ? ' nsdm-hero-content' : ''}${projectId === 'guido' ? ' guido-hero-content' : ''}${projectId === 'solaya' ? ' solaya-hero-content' : ''}${projectId === 'farfetch-metaverse' ? ' farfetch-metaverse-hero-content' : ''}`}>
            {projectId === 'lego' ? (
              <MediaSlideshow 
                mediaItems={[
                  { type: 'image', src: projectData.heroImage, alt: projectData.title },
                  ...projectData.projectImages.map(image => ({
                    type: 'image',
                    src: image.url || image,
                    alt: `${projectData.title} - Image`
                  }))
                ]}
              />
            ) : projectData.heroVideo ? (
              <ClickableVideo 
                videoSrc={projectData.heroVideo}
                showControls={false}
                autoPlay={false}
                isHero={true}
                poster={projectData.heroPoster || projectData.heroImage} // Use heroImage as fallback for poster
              />
            ) : (
              <img src={projectData.heroImage} alt={projectData.title} />
            )}
            
            {/* Add logo overlay on hero if specified */}
            {projectData.heroLogo && (
              <div className={`logo-overlay ${projectData.heroLogoPosition || 'bottom-right'}`}>
                <img src={projectData.heroLogo} alt={`${projectData.title} logo`} />
              </div>
            )}
          </div>
        </div>
        
        <div className="project-content">
          {renderProjectContent()}
        </div>
        
        {/* Restore original more-projects section here */}
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
      
      {/* Image Modal */}
      {modalImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={modalImage} alt="Expanded view" />
            <button className="close-modal" onClick={closeModal}>×</button>
          </div>
        </div>
      )}
      
      {/* Video Modal - add this new section */}
      {videoModalSrc && (
        <div className="video-modal" onClick={handleModalBackdropClick}>
          <div className="video-modal-content">
            <video 
              ref={videoModalRef}
              src={videoModalSrc}
              autoPlay
              controls
              className="video-modal-player"
            />
            <button className="video-modal-close" onClick={closeVideoModal}>
              <FaTimes size={24} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetail; 