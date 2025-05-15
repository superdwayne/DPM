import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Toggle mute status
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  // Handle scroll to scale the video container
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Calculate progress based on scroll position
      // Start showing effect after 100px of scrolling
      const startEffect = 100;
      const maxEffect = 400; // Maximum scroll to reach full effect
      
      let progress = Math.max(0, Math.min(1, (scrollPosition - startEffect) / (maxEffect - startEffect)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Calculate initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle expanding the video
  const expandVideo = () => {
    if (!videoRef.current) return;
    
    if (!isExpanded) {
      setIsExpanded(true);
      setIsPlaying(true);
      
      // Unmute the video when expanding
      if (isMuted) {
        videoRef.current.muted = false;
        setIsMuted(false);
      }
      
      // Apply expanded classes
      document.body.classList.add('video-expanded');
      containerRef.current.classList.add('video-container-expanded');
      videoRef.current.classList.add('video-expanded');
      
      videoRef.current.play();
    }
  };

  // Toggle play/pause when video is expanded
  const togglePlayPause = () => {
    if (!videoRef.current || !isExpanded) return;
    
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  // Close expanded video
  const closeVideo = (e) => {
    e.stopPropagation(); // Prevent triggering expandVideo
    
    setIsExpanded(false);
    setIsPlaying(false);
    
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
      setIsMuted(true);
      
      // Remove expanded classes
      document.body.classList.remove('video-expanded');
      containerRef.current.classList.remove('video-container-expanded');
      videoRef.current.classList.remove('video-expanded');
    }
  };

  // Handle escape key to close expanded video
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape' && isExpanded) {
        closeVideo(e);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isExpanded]);

  // Calculate scale based on scroll progress (starts at 1.0 and shrinks to 0.7)
  const scale = 1 - (scrollProgress * 0.3);
  const opacity = isHovering ? 1 : 0.5 + (scrollProgress * 0.5);
  const videoScale = 0.7 + (scrollProgress * 0.3);

  return (
    <div className="hero">
      <div 
        ref={containerRef}
        className={`hero-video-container ${isExpanded ? 'video-container-expanded' : ''}`}
        style={{
          transform: isExpanded ? 'none' : `scale(${videoScale})`,
        }}
        onMouseEnter={() => !isExpanded && setIsHovering(true)}
        onMouseLeave={() => !isExpanded && setIsHovering(false)}
      >
        {/* Video Background */}
        <video 
          ref={videoRef}
          loop 
          muted={isMuted}
          playsInline
          className={`hero-bg-video ${isExpanded ? 'video-expanded' : ''}`}
          onClick={!isExpanded ? expandVideo : togglePlayPause}
          poster="/images/TBWA.png"
        >
          <source src="/videos/Showreel.mp4" type="video/mp4" />
        </video>

        {/* Play Button Overlay */}
        {!isPlaying && !isExpanded && (
          <div 
            className="hero-play-button-overlay"
            style={{ opacity }}
            onClick={expandVideo}
          >
            <div className="hero-play-button">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
              </svg>
            </div>
            <div className="hero-play-text">Watch Showreel</div>
          </div>
        )}
        
        {/* Play/Pause Indicator - Only visible in expanded mode when paused */}
        {isExpanded && !isPlaying && (
          <div className="video-play-indicator" onClick={togglePlayPause}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5V19L19 12L8 5Z" fill="white" />
            </svg>
          </div>
        )}
        
        {/* Close Button - Only visible in expanded mode */}
        {isExpanded && (
          <button 
            className="video-close-button"
            onClick={closeVideo}
            aria-label="Close video"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="5" y1="5" x2="19" y2="19" stroke="white" strokeWidth="3" />
              <line x1="5" y1="19" x2="19" y2="5" stroke="white" strokeWidth="3" />
            </svg>
          </button>
        )}
      </div>
      
      {/* Mute/Unmute Button */}
      <button 
        className="mute-toggle"
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <span className="mute-icon">🔇</span>
        ) : (
          <span className="mute-icon">🔊</span>
        )}
      </button>
    </div>
  );
};

export default Hero;