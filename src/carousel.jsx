import Carousel from "react-spring-3d-carousel";
import { withRouter } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import { config } from "react-spring";

function Carroussel(props) {
  const { onChangeIndex, className } = props;
  const carouselRef = useRef(null);
  const [startX, setStartX] = useState(0);
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards] = useState(props.cards.map((element, index) => ({
    ...element,
    onClick: () => {
      setGoToSlide(index);
      if (window.innerWidth > 768) {
        const targetElement = document.getElementById("target-element");
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  })));

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  useEffect(() => {
    if (onChangeIndex && goToSlide !== null) {
      onChangeIndex(goToSlide);
    }
  }, [goToSlide, onChangeIndex]);

  useEffect(() => {
    const handleTouchStart = (e) => {
      setStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
      const endX = e.changedTouches[0].clientX;
      const diffX = endX - startX;

      if (Math.abs(diffX) > 50) { // Threshold for swipe
        if (diffX > 0) {
          setGoToSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : cards.length - 1));
        } else {
          setGoToSlide((prevSlide) => (prevSlide < cards.length - 1 ? prevSlide + 1 : 0));
        }
      } else {
        // This is a tap, not a swipe
        const targetElement = document.getElementById("target-element");
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowLeft":
          setGoToSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : cards.length - 1));
          break;
        case "ArrowRight":
          setGoToSlide((prevSlide) => (prevSlide < cards.length - 1 ? prevSlide + 1 : 0));
          break;
        default:
          break;
      }
    };

    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.addEventListener("touchstart", handleTouchStart);
      carouselElement.addEventListener("touchend", handleTouchEnd);
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener("touchstart", handleTouchStart);
        carouselElement.removeEventListener("touchend", handleTouchEnd);
      }
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [startX, cards.length]);

  return (
    <div
      ref={carouselRef}
      style={{ width: props.width, height: props.height, margin: props.margin }}
    >
      <Carousel
        className={className}
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}

export default withRouter(Carroussel);