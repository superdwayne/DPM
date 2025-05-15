import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HorizontalScroll.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = ({ images, verticalLimit = 2 }) => {
  const verticalImages = images ? images.slice(0, verticalLimit) : [];
  const horizontalImagesToScroll = images ? images.slice(verticalLimit) : [];
  const hasHorizontalContent = horizontalImagesToScroll.length > 0;

  const horizontalSectionRef = useRef(null);
  const horizontalTrackRef = useRef(null);

  useEffect(() => {
    console.log("-----------------------------------------");
    console.log("HorizontalScroll EFFECT RUNNING");
    console.log("Images prop length:", images ? images.length : 0);
    console.log("verticalLimit:", verticalLimit);
    console.log("verticalImages count:", verticalImages.length);
    console.log("horizontalImagesToScroll count:", horizontalImagesToScroll.length);
    console.log("hasHorizontalContent:", hasHorizontalContent);

    if (!hasHorizontalContent || !horizontalSectionRef.current || !horizontalTrackRef.current) {
      console.log("HorizontalScroll: Bailing out early - no horizontal content or refs missing.");
      return;
    }

    // Kill existing ScrollTriggers on this element to prevent conflicts
    ScrollTrigger.getAll().forEach(st => {
      if (st.trigger === horizontalSectionRef.current) {
        console.log("HorizontalScroll: Killing existing ST for this section.");
        st.kill();
      }
    });
    // Ensure GSAP animations on the track are also killed
    gsap.killTweensOf(horizontalTrackRef.current);

    const track = horizontalTrackRef.current;
    const section = horizontalSectionRef.current;

    // Calculate the total width the track needs to scroll
    // Each item is 100vw, so total width is number of items * 100vw
    // We need to scroll (total width - 1 viewport width)
    const scrollDistance = (horizontalImagesToScroll.length - 1) * window.innerWidth;
    console.log("HorizontalScroll: Calculated scrollDistance:", scrollDistance);

    if (scrollDistance <= 0) {
      console.log("HorizontalScroll: Bailing out - scrollDistance is not positive (not enough images to scroll).");
      // Ensure track width is still appropriate for display even if not scrolling
      track.style.width = `${horizontalImagesToScroll.length * 100}vw`;
      gsap.set(track, { x: 0 }); // Ensure track is at initial position
      return;
    }
    
    // Set the track width explicitly
    track.style.width = `${horizontalImagesToScroll.length * 100}vw`;
    console.log("HorizontalScroll: Track width set to:", track.style.width);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top', // When the top of the section hits the top of the viewport
        end: () => `+=${scrollDistance}`,
        pin: true, // Pin the section during the scroll
        scrub: 1, // Smooth scrubbing
        invalidateOnRefresh: true, // Recalculate on resize
        markers: true, // ENABLED FOR DEBUGGING
      },
    });

    tl.to(track, {
      x: -scrollDistance,
      ease: 'none', // Linear movement
    });
    
    console.log("HorizontalScroll: GSAP timeline and ScrollTrigger created.");
    // Refresh ScrollTrigger in case of dynamic content or layout shifts
    ScrollTrigger.refresh();

    return () => {
      console.log("HorizontalScroll: CLEANUP function running for section:", section);
      tl.kill();
      // Also kill the specific ScrollTrigger instance if it exists
      if (tl.scrollTrigger) {
        console.log("HorizontalScroll: Killing specific ScrollTrigger instance.");
        tl.scrollTrigger.kill();
      }
      // Just in case, clean up any other STs that might have been missed if refs were the same
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === section) {
            st.kill();
        }
      });
      gsap.killTweensOf(track); // Clean up tweens on the track
      console.log("-----------------------------------------");
    };
  }, [images, verticalLimit, hasHorizontalContent, horizontalImagesToScroll]); // Ensure all derived states are covered or their sources

  return (
    <div className="gallery-container">
      {/* Vertically stacked images */} 
      {verticalImages.map((image, index) => (
        <div className="vertical-image-item" key={`vertical-${index}`}>
          <img 
            src={image.url || image} 
            alt={image.alt || `Vertical Image ${index + 1}`} 
            className="vertical-image-content" 
            loading="lazy"
          />
        </div>
      ))}

      {/* Horizontally scrolling images */} 
      {hasHorizontalContent && (
        <section className="horizontal-scroll-section" ref={horizontalSectionRef}>
          <div className="horizontal-scroll-track" ref={horizontalTrackRef}>
            {horizontalImagesToScroll.map((image, index) => (
              <div className="horizontal-image-item" key={`horizontal-${index}`}>
                <img 
                  src={image.url || image} 
                  alt={image.alt || `Horizontal Image ${index + 1}`} 
                  className="horizontal-image-content" 
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default HorizontalScroll; 