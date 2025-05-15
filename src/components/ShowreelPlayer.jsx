import React, { useState, useEffect, useRef } from 'react';
import './ShowreelPlayer.css';

const ShowreelPlayer = ({ videoSrc, posterImage, title }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll to scale the video container
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Calculate how far the element is through the viewport
      // 0 when the element is below the viewport
      // 1 when the element is centered in the viewport
      let progress = 1 - (elementTop - viewportHeight / 2 + elementHeight / 2) / (viewportHeight);
      
      // Clamp progress between 0 and 1
      progress = Math.max(0, Math.min(1, progress));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Calculate initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle fullscreen toggle
  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    
    if (!isFullscreen) {
      setIsFullscreen(true);
      setIsPlaying(true);
      
      try {
        // Try to request fullscreen with different browser prefixes
        if (videoRef.current.requestFullscreen) {
          videoRef.current.requestFullscreen();
        } else if (videoRef.current.webkitRequestFullscreen) {
          videoRef.current.webkitRequestFullscreen();
        } else if (videoRef.current.msRequestFullscreen) {
          videoRef.current.msRequestFullscreen();
        }
        
        videoRef.current.play();
      } catch (error) {
        console.error("Error requesting fullscreen:", error);
        // Fallback if fullscreen fails - just play the video
        videoRef.current.play();
      }
    }
  };

  // Handle fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen = !!(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement
      );
      
      setIsFullscreen(isCurrentlyFullscreen);
      
      if (!isCurrentlyFullscreen && isPlaying) {
        setIsPlaying(false);
        if (videoRef.current) {
          videoRef.current.pause();
        }
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, [isPlaying]);

  // Calculate scale based on scroll progress (starts at 0.8 and grows to 1.0)
  const scale = 0.8 + (scrollProgress * 0.2);
  // Enhance opacity for play button based on both scroll and hover
  const baseOpacity = 0.5 + (scrollProgress * 0.5);
  const opacity = isHovering ? 1 : baseOpacity;

  return (
    <div 
      ref={containerRef} 
      className="showreel-container"
      style={{
        transform: `scale(${scale})`,
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className={`showreel-wrapper ${isHovering ? 'hover' : ''}`}>
        <video
          ref={videoRef}
          className="showreel-video"
          src={videoSrc}
          poster={posterImage}
          controls={isFullscreen}
          playsInline
          onClick={toggleFullscreen}
        />
        
        {!isPlaying && (
          <div 
            className="play-button-overlay"
            style={{ opacity }}
            onClick={toggleFullscreen}
          >
            <div className="play-button">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
              </svg>
            </div>
            <div className="play-text">Watch Showreel</div>
          </div>
        )}
        
        {title && (
          <div className="showreel-title-container">
            <h2 className="showreel-title">{title}</h2>
            <span className="showreel-info">Click to Play Fullscreen</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowreelPlayer; 