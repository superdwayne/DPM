import "./App.css";
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';

import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./card";
import Carousel from "./carousel";

const App = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const history = useHistory();
  
  const handleCardClick = (url) => {
    history.push(url);
  };

  const [cards, setCards] = useState([  
    {
      key: uuidv4(),
      content: (
        <Card
         url="/home"
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
        url="/dreammachine"
          title="AI video Generation "
          caseStudy="Using tools like the Luma Dream Machine, we unlock new creative opportunities for brands to engage, inspire, and stand out. By blending brand identity with innovative storytelling, we craft compelling narratives that resonate deeply with audiences, driving both connection and growth. "
          copy=""
          example=""
          mediaTypeImage="image"
          mediaSrcImage="https://storage.cdn-luma.com/dream_machine/76065bfe-1e95-48fb-9650-8bc6628a5950/video_0_thumb.jpg"
          mediaTypeVideo="video"
          mediaSrcVideo="https://storage.cdn-luma.com/dream_machine/76065bfe-1e95-48fb-9650-8bc6628a5950/watermarked_video03a178f35ca8948c898f64b9ae01e3653.mp4"
          posterSrc="https://storage.cdn-luma.com/dream_machine/76065bfe-1e95-48fb-9650-8bc6628a5950/video_0_thumb.jpg"
          technology="Comfy UI"
          client=""
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
        url="/fastfashion"
          title="Fast Fashion Redefined "
          caseStudy="Embark on a journey into the future of luxury fashion with Vestiaire Collective as we unveil our groundbreaking AI-enhanced presentation project. This initiative is dedicated to transforming how we experience pre-owned luxury items, employing advanced artificial intelligence to ensure each piece not only meets but exceeds the luxurious look and feel of a brand-new product."
          copy=""
          example=""
          mediaTypeImage="image"
          mediaSrcImage="https://huggingface.co/datasets/DPM1987/images/resolve/main/18.png"
          mediaTypeVideo="video"
          mediaSrcVideo="https://huggingface.co/datasets/DPM1987/images/resolve/main/video%20(8).mp4"
          posterSrc="https://huggingface.co/datasets/DPM1987/images/resolve/main/17.png"
          technology="Comfy UI"
          client=""
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
        url="/farfetch"
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
        url="/NDSM"
          title="Reviving NDSM Street Art through AR and Gaussian Splatting"
          caseStudy="The core objective of this initiative is to capture and immortalize the ever-evolving street art of Stichting NDSM-werf. This project harnesses the cutting-edge techniques of Gaussian splatting and augmented reality to delve into the dynamic world of urban artistry. Leveraging the advanced tools of Luma AI for initial splat creation, PlayCanvas for refinement, Hugging Face for file hosting, and 8th Wall for an augmented reality experience, we aim to unfold the layered history of NDSM's street murals."
          copy=""
          example=""
          mediaTypeImage="image"
          mediaSrcImage="https://res.cloudinary.com/dx2xhaeds/image/upload/v1700062811/NDSM_xgmcnu.png"
          mediaTypeVideo="video"
          mediaSrcVideo="https://res.cloudinary.com/dx2xhaeds/video/upload/v1700061767/Splat_attack_i17ypt.mp4"
          posterSrc="https://res.cloudinary.com/dx2xhaeds/image/upload/v1700062811/NDSM_xgmcnu.png"
          technology="8th wall, Luma.ai, hugging face"
          client="NSDM"
        />
      ),
    },
 
   
    {
      key: uuidv4(),
      content: (
        <Card
         url="/proximity"
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
        url="/digitalfashion"
          title="UCO: Digital idenity"
          caseStudy="Avant-Garde Avatars: The Digital Fashion Revolution takes a bold leap into the future of style, focusing on an avatar named Uco. In this digital realm, Uco becomes a canvas for fashion experiments, blending traditional design principles with futuristic concepts. This project highlights collaborative experiments in digital fashion, where Uco's virtual wardrobe showcases a range of styles from the avant-garde to the ethereal. It's a journey that redefines fashion, challenging and expanding the boundaries of how we perceive style in the digital age."
          copy=""
          mediaTypeVideo="video"
          mediaSrcVideo="https://res.cloudinary.com/dx2xhaeds/video/upload/v1702648470/UCO_jj21pw.mp4"
          mediaTypeImage="image"
          mediaSrcImage="./CT/24.png"
          technology="WebGL, Blender(Rendering), 3D,  "
          client="Farfetch"
        />
      ),
    },
    
    {
      key: uuidv4(),
      content: (
        <Card
        url="/Gucci"
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
        url="/GucciWebGL"
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
        url="/metaverse"
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
        url="/McQueen"
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

    {
      key: uuidv4(),
      content: (
        <Card
        url="/Mind"
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
        url="/ARlogos"
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
        url="/lego"
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
    
    {
      key: uuidv4(),
      content: (
        <Card
        url="/webglavatar"
          title="Dynamic WebGL Avatar"
          caseStudy="Delve into the forefront of digital interaction with our pioneering project, merging Blender's camera animation with a WebGL environment for a real-time, avatar-led journey. As users scroll, they control a Ready Player Me avatar, creating a dynamic and immersive web experience. This seamless integration of technology and user interaction represents not just a technical feat but a new horizon in engaging and interactive digital environments."
          copy=""
          mediaTypeVideo="video"
          mediaSrcVideo="https://res.cloudinary.com/dx2xhaeds/video/upload/v1702641177/HAPEXRPM_q6sgkf.mov"
          mediaTypeImage="image"
          mediaSrcImage="./CT/23.png"
          technology="WebGL, Blender, Animation "
          client="Farfetch"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
         url="/Nike"
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
   
    
  ]);

 

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
 <Router>
      


      <header onMouseMove={handleMouseMove}>
        <h1 className="Baskervville center">Freelance Creative Technologist<p className="animate-pulse mobile" onClick={scrollToAppDiv}>↓</p> 

        </h1>
        <small> Brands I've worked with: <br />Lego, Gucci, Farfetch Coca-Cola, Alexander McQueen, Birkenstock, and Burberry</small>
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
           cards={cards.map((card, index) => ({
            ...card,
            onClick: () => handleCardClick(card.url)
          }))}
              width="100vw"
            height="100vh"
            offset={2}
            showArrows={false}
            onChangeIndex={(index) => setCurrentCardIndex(index)}
            />
        

        <Switch>
          {cards.map((card, index) => (
            <Route exact key={index} path={card.url}>
              <div>
                {/* Replace this with your actual card details */}
                <h2>{card.title}</h2>
                <p>{card.caseStudy}</p>
              </div>
            </Route>
          ))}
        </Switch>

          {/* <Carousel
            cards={cards}
            width="100vw"
            height="100vh"
            offset={2}
            showArrows={false}
            onChangeIndex={(index) => setCurrentCardIndex(index)} /> */}

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
          <h1>AVAILABLE FOR WORK</h1>
          <h1>LET'S START A PROJECT</h1>
        </section>
        <section className="middle"><h1 className="soria"> <a className="soria" href="mailto:ddpmarshall@gmail.com">hello@dwaynep-marshall.co.uk</a></h1>

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
        <h1 className="mobile"> FREELANCE CREATIVE TECHNOLOGIST </h1>
        </section>
        
      </footer>

      </Router>
    </>
  );
};

export default App;
