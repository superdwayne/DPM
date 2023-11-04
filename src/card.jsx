import Styles from "./card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";


function Card({ mediaSrcImage, mediaSrcVideo, mediaTypeVideo, mediaTypeImage, posterSrc, title, copy, caseStudy, technology, client, example }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });

  const renderMedia = () => {
    if (mediaTypeImage === 'image') {
      return <img src={mediaSrcImage} alt="" />;
    } else if (mediaTypeVideo === 'video') {
      return (
        <video autoPlay muted width="80%" poster={posterSrc}>
          <source src={mediaSrcVideo} type="video/mp4" />
        </video>
      );
    } else {
      return null;
    }
  };

  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      {renderMedia()}
      <h2>{title}</h2>
      <small>{copy}</small>
     
    </animated.div>
  );
}

export default Card;
