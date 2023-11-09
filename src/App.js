import "./App.css";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./card";
import Carousel from "./carousel";

const App = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  console.log(currentCardIndex);

  const cards = [
    {
      key: uuidv4(),
      content: (
        <Card
          copy=""
          caseStudy=" Hello, my name is Dwayne Paisley-Marshall. I'm a Senior Creative Technologist who thrives on blending the imaginative with the practical. With over a decade of hands-on experience, I've navigated the full spectrum of creative tech, from pie-in-the-sky ideas to down-to-earth projects.

But I don't just create; I educate. I'm committed to elevating the industry's understanding of the transformative power of creative technology. Through publications and thought leadership, I aim to craft a narrative that not only showcases what technology can do but also why it matters on a deeper, emotional level.

My ultimate goal is straightforward: to craft digital experiences that are as emotionally resonant as they are technically impressive."
title="Dwayne Paisley-Marshall"
          mediaTypeVideo="video"
          mediaSrcVideo="https://res.cloudinary.com/dx2xhaeds/video/upload/v1698157203/dpmintro_h5yvzw.mov"
          posterSrc="./CT/19.jpeg"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          title="Luxury kidswear report"
          caseStudy="The primary aim of this project is to understand the influence of social media-driven phenomena, specifically Mini-me fashion and Kidfluencer culture, on the luxury kidswear market. Utilizing data analytics capabilities of FARFETCH, a leading global platform for luxury fashion, the project seeks to dissect consumer and industry involvement in these trends. By doing so, we aim to provide actionable insights that can guide both consumers and brands in navigating this rapidly evolving market landscape."
          copy=""
          example="https://stories.farfetch.com/luxurykidswearreport2021/"
          mediaTypeImage="image"
          mediaSrcImage="./CT/15.jpeg"
          mediaTypeVideo="video"
          mediaSrcVideo=" https://res.cloudinary.com/dx2xhaeds/video/upload/v1698157012/Kidsreport_yyx0q5.mov"
          posterSrc="https://pbs.twimg.com/media/FActEzjWYAEijbS?format=jpg&name=medium"
          technology="React, React springs"
          client="Farfetch"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          title="Proximity Art: Breathing Life into Static Art"
          caseStudy="Art has always been a medium to evoke emotions, tell stories, and inspire thought. But what if art itself could respond to the presence of its audience? Proximity Art breaks away from the mold of static art by transforming it into an interactive experience. Using cutting-edge technology, this project leverages physical proximity as a dynamic element, allowing the art to change and evolve as viewers move closer or farther away."
          copy=""
          example=""
          mediaTypeImage="image"
          mediaSrcImage="./CT/14.png"
          mediaSrcVideo="./video/proximity.mp4"
          posterSrc="./CT/19.jpeg"
          technology="ESP32, React, Node.js, AR.js, websockets"
          client="NA"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          title="Immersive AR Shopping Experience"
          caseStudy="Traditional retail experiences are undergoing a seismic shift, influenced by technology and a new age of digital consumers. Immersive AR Shopping Experience aims to bridge the gap between the physical and digital shopping worlds. This project harnesses the power of Augmented Reality to transform the way consumers interact with products, providing an immersive, interactive, and highly personalized shopping experience all from the convenience of their mobile devices."
          copy=""
          example=""
          mediaTypeImage="image"
          mediaSrcImage="./CT/9.png"
          mediaTypeVideo="video"
          mediaSrcVideo="https://res.cloudinary.com/dx2xhaeds/video/upload/v1698157284/Nike_mizl0r.mp4"
          posterSrc="./CT/19.jpeg"
          technology="Google Areo (Beta)"
          client="NIKE"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          title="Gucci Fell from Heaven"
          caseStudy="Who says that fashion and digital animation can't share the same runway? Gucci Fell from Heaven is an experimental project that blends the opulence of Gucci's branding with the limitless possibilities of animation. Utilizing a Gucci-branded avatar in tandem with Miximo, this exploration chains animations together to create a captivating, ever-changing display.
In a space where branding often takes a static form, this project enlivens the Gucci avatar, inviting viewers into a dynamic interaction between fashion and technology."
          copy=""
          example=""
          mediaTypeImage="image"
          mediaSrcImage="./CT/10.png"
          mediaTypeVideo="video"
          mediaSrcVideo="https://res.cloudinary.com/dx2xhaeds/video/upload/v1698157214/Guccifalling_rgcohx.mp4"
          posterSrc="./CT/19.jpeg"
          technology="UX/UI"
          client="Gucci"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          title="Gucci don't run: WebGL"
          caseStudy="In a market saturated with digital renditions of products, it becomes imperative to stand out. This project explores the potential of using lens flare effects to transform the texture of a Gucci shoe, imbuing the digital model with a unique, otherworldly aesthetic. The endeavor is less about solving a problem and more about expanding the limits of digital presentation, particularly in the realm of high-end fashion branding."
          copy=""
          example=""
          mediaTypeImage="image"
          mediaSrcImage="./CT/13.png"
          posterSrc="./CT/19.jpeg"
          technology="Web GL, React, shaders"
          client="Gucci"
          mediaTypeVideo="video"
          mediaSrcVideo="https://res.cloudinary.com/dx2xhaeds/video/upload/v1698169394/gucci-shoe_slde6m.mov"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          title="Keeping up with the Metaverse"
          caseStudy="In a world where the metaverse is continuously unfolding and evolving, staying informed is paramount. Keeping up with the Metaverse initially began as an exploration into web scraping, a technique to extract data from various online sources. However, it soon evolved into a valuable tool for gathering comprehensive insights on the ever-changing metaverse landscape."
          copy=""
          example="https://metaversebullets.vercel.app/"
          mediaTypeImage="image"
          mediaTypeVideo="video"
          mediaSrcVideo="https://res.cloudinary.com/dx2xhaeds/video/upload/v1698429215/Screen_Recording_2023-10-27_at_19.42.56_givjzh.mp4"

          mediaSrcImage="./CT/11.png"
          technology="Blender, React, 3D, Animations"
          client="NA"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          title="Alexander McQueen Immersive"
          caseStudy="Fashion is a canvas where artistry meets technology, and Alexander McQueen Immersive is a testament to this fusion. This project brings the world of Alexander McQueen to life in an immersive web experience, with a unique twist—content dynamically changes based on the real-time weather conditions in London. Powered by a weather API, the website offers visitors a glimpse into McQueen's creations that resonate with the atmospheric mood of the moment."
          copy=""
          example="https://amq-concepts.vercel.app/"
          mediaTypeImage="image"
          mediaSrcImage="./CT/12.png"
          mediaTypeVideo="video"
          mediaSrcVideo="https://res.cloudinary.com/dx2xhaeds/video/upload/v1698168811/AMQ_otanpa.mp4"
          posterSrc="./CT/19.jpeg"
          technology="Node.js, API, React"
          client="Alexander McQueen"
        />
      ),
    },
//     {
//       key: uuidv4(),
//       content: (
//         <Card
//           title="Accessible Machine Learning"
//           caseStudy="Machine learning, while a powerful tool, can often appear as an enigmatic realm for many. Accessible Machine Learning is a project designed to demystify this technology by harnessing the capabilities of Edge Impulse. The aim is to make the process of gathering data for machine learning accessible to a wider audience through two distinct methods.
// The first approach involves utilizing an ESP32 camera, requiring the setup of an HTTPS camera server—an exploration into IoT and computer vision. The second method leverages the ubiquitous mobile phone, ensuring that anyone with a smartphone can participate in the data collection process. By offering these two avenues, this project makes machine learning more inclusive, opening doors to individuals across various tech backgrounds.
// "
//           copy=""
//           mediaTypeImage="image"
//           mediaSrcImage="./CT/18.png"
//           technology="Edge impluse, ESP32, Node.js"
//           client="NA"
//         />
//       ),
//     },
    {
      key: uuidv4(),
      content: (
        <Card
          title="A Gamified Journey Through the Mind of a Creative Technologist"
          caseStudy="Embark on a groundbreaking, interactive experience that takes you deep into the heart of creativity and technology. This unique project serves as a virtual expedition into the mind of a Creative Technologist, offering invaluable insights into the complex interplay between technological acumen and artistic intuition.
          Using an avatar, visitors navigate a vivid, simulated 'brain' environment, gaining firsthand exposure to the dynamic tensions and harmonies that drive creative technological endeavors. Built on W3worlds' leading-edge technologies, this immersive journey promises an unparalleled understanding of the field."
          copy=""
          mediaTypeVideo="video"
          mediaSrcVideo="https://res.cloudinary.com/dx2xhaeds/video/upload/v1698168756/DPM-world_lbtzyn.mov"
          example="https://spaces.w3rlds.com/91077c4e-3daf-4a9c-ae50-9944d6ec39f1"
          mediaTypeImage="image"
          mediaSrcImage="./CT/20.png"
          technology="Blender, React"
          client="NA"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          title="AR Logos in the Real World Canvas"
          caseStudy="At the intersection of technology and client relationship-building lies AR Logos Interaction with Real World Canvas. This innovative project was designed for a client summer party with a dual aim: to celebrate existing business relationships and open doors to new ones.
By deploying augmented reality, the garden of the summer venue became an interactive canvas, adorned with the logos of various clients. Guests had the opportunity to explore the work done for these clients in an immersive and engaging way, blurring the lines between the digital and physical realms.
"
          mediaTypeVideo="video"
          mediaSrcVideo="https://res.cloudinary.com/dx2xhaeds/video/upload/v1698157216/logos_tu5rhe.mp4"
          copy=""
          mediaTypeImage="image"
          mediaSrcImage="./CT/17.png"
          technology="UX/UI"
          client="AKQA"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          title="Lego realverse"
          caseStudy="The initiative focuses on harnessing the universal language of play to unite people across ages and backgrounds. By developing a scalable live event with multiple play areas, the project aims to serve as a dynamic platform for connection, fun, and learning. To ensure inclusivity, the event will incorporate interactive elements that engage both on-site and remote participants. The goal is to create a comprehensive, multi-faceted experience that transcends geographical barriers."
          copy=""
          mediaTypeImage="image"
          mediaSrcImage="./CT/21.png"
          technology="Concepting"
          client="Lego"
        />
      ),
    },
    
  ];

  const [positions, setPositions] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  
  const handleImageClick = (e) => {
    e.target.style.filter = 'grayscale(100%)';
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!isMobile) {
      setPositions((prevPositions) => {
        const newPositions = [...prevPositions, { x: e.clientX, y: e.clientY }];
        return newPositions.slice(-10); // Keep the last 10 positions
      });
    }
  };

  const scrollToAppDiv = () => {
    const appDiv = document.querySelector('.App');
    if (appDiv) {
      appDiv.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header onMouseMove={handleMouseMove}>
        <h1 className="soria center">Dwayne Paisley-Marshall <br />
        Creative Technologist  <p className="animate-pulse mobile" onClick={scrollToAppDiv}>↓</p> </h1>
        
        {!isMobile &&
        positions.map((position, index) => (
          <img
            key={index}
            src="./CT/19.jpeg"
            alt="follow me"
            onClick={handleImageClick}
            style={{
              position: 'absolute',
              top: position.y,
              left: position.x,
              transform: 'translate(-50%, -50%)',
              width: '20%',
              opacity: 2 - index / 20, // Fade out the older positions
            }}
          />
        ))}
      </header>

      <div className="App">
      <img src="./CT/arrows.png" id="arrows" className="mobile" />
        <Carousel
          cards={cards}
          width="100vw"
          height="100vh"
          offset={2}
          showArrows={false}
          onChangeIndex={(index) => setCurrentCardIndex(index)}
        />
       
      </div>

      <section id="target-element"></section>

      <div className="CaseStudies">
        {cards.map((card, index) => (
          <div
            key={index}
            id={`case-study-${index}`}
            style={{ display: currentCardIndex === index ? "block" : "none" }}
          >
            <h1 class="soria">{card.content.props.caseStudy}</h1>

            {currentCardIndex > 0 ? (
              <div className="table">
                <div className="table-cell table-header">TITLE</div>
                <div className="table-cell table-header">TECHNOLOGIES</div>
                <div className="table-cell table-header">CLIENT</div>
                <div className="table-cell table-header">{card.content.props.example ==='' ? null : "EXAMPLE"} </div>
                <div className="table-cell">{card.content.props.title}</div>
                <div className="table-cell">{card.content.props.technology}</div>
                <div className="table-cell">{card.content.props.client}</div>
                {card.content.props.example ==='' ? null : <div className="table-cell"><a className="example" href={card.content.props.example} target="_blank"> {card.content.props.client === "Lego" ?  "Available on request" : "Project"  }</a></div>}
               
              </div>
            ) : null}
            {card.content.props.mediaSrcVideo && currentCardIndex > 0 ? (
            <div className="video-container">
            <div className="case-content">
             
                <>
                  <video
                    autoPlay
                    controls
                    loop
                    muted
                    width={card.content.props.example ? "50%" : "80%"}
                  >
                    <source
                      src={card.content.props.mediaSrcVideo}
                      type="video/mp4"
                    />
                  </video>
                 
                </>
            
            </div>
            
            </div>
            
            ) : null}
            {card.content.props.client === "Lego"  ?  <img src="./CT/22.png" className="w100" />  : null }
           
          </div>
        ))}
       
       
      </div>
      <footer>
        <section className="top" >
          <h1>OPEN TO WORK</h1>
          <h1>FROM JAN 2024</h1>
        </section>
        <section className="middle"><h1 className="soria">LET'S START A PROJECT <br /> <a className="soria" href="mailto:ddpmarshall@gmail.com">ddpmarshall@gmail.com</a></h1>

          </section>
        <section className="bottom">
        <small>
          <a href="https://medium.com/@DPM.XYZ" target="_blank">
            
            MEDIUM
          </a>
          <a href="https://www.instagram.com/ddpmarshall/" target="_blank">
            
            INSTAGRAM
          </a>
          <a href="https://www.linkedin.com/in/ddpmarshall/">
            
            LINKEDIN
          </a>
          <a href="https://github.com/superdwayne">
            
            GITHUB
          </a>
        </small>
        <h1 className="mobile"> SENIOR CREATIVE TECHNOLOGIST </h1>
        </section>
        
      </footer>
    </>
  );
};

export default App;
