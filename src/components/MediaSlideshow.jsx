import React, { useEffect, useRef, useState } from 'react';
import './MediaSlideshow.css';

const MediaSlideshow = ({ mediaItems }) => {
  const slideshowRef = useRef(null);
  const [isResetting, setIsResetting] = useState(false);

  // Setup auto-scrolling
  useEffect(() => {
    let scrollInterval;
    
    if (!isResetting && slideshowRef.current) {
      scrollInterval = setInterval(() => {
        if (slideshowRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = slideshowRef.current;
          
          // If we're at the end, smoothly go back to start
          if (scrollLeft + clientWidth >= scrollWidth - 20) {
            setIsResetting(true);
            // Use a small timeout to prevent visual jumps
            setTimeout(() => {
              if (slideshowRef.current) {
                // Temporarily remove smooth scrolling for instant reset
                slideshowRef.current.style.scrollBehavior = 'auto';
                slideshowRef.current.scrollLeft = 0;
                
                // Restore smooth scrolling after a small delay
                setTimeout(() => {
                  if (slideshowRef.current) {
                    slideshowRef.current.style.scrollBehavior = 'smooth';
                    setIsResetting(false);
                  }
                }, 100);
              }
            }, 100);
          } else {
            slideshowRef.current.scrollLeft += 2; // Adjust scroll speed here
          }
        }
      }, 30);
    }
    
    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
    };
  }, [isResetting]);

  const renderMediaItem = (item, index) => {
    if (item.type === 'image') {
      return (
        <div className="slideshow-item" key={`${item.src}-${index}`}>
          <img src={item.src} alt={item.alt || 'Slideshow image'} />
        </div>
      );
    } else if (item.type === 'video') {
      return (
        <div className="slideshow-item" key={`${item.src}-${index}`}>
          <video 
            src={item.src} 
            poster={item.poster} 
            controls={false} 
            autoPlay 
            loop 
            muted 
            playsInline
          />
        </div>
      );
    }
    return null;
  };

  return (
    <div 
      className="media-slideshow" 
      ref={slideshowRef}
    >
      {mediaItems.map((item, index) => renderMediaItem(item, index))}
    </div>
  );
};

export default MediaSlideshow; 