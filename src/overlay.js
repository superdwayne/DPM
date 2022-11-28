import React, { forwardRef } from "react"

const Overlay = forwardRef(({ active,  caption, scroll }, ref) => (

  <div
    ref={ref}
    onScroll={(e) => {
      scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
      
    }}
    className="scroll">
    <div style={{ height: "100vh" }}>
      <div className="dot">
     
      {active ? null :  <h1 className="mob">You may begin scrolling</h1>} 
       
    </div>
    </div>
    <div style={{ height: "300vh" }}>
      <div className="dot">
        <p>Creative technologist / genius </p>
        <h2>I'm Dwayne Paisley-Marshall.</h2>
        <p>Please make yourself comfortable as you explore my curated work collection.</p>
        <p>In a rush? Check out my <a href="https://linktr.ee/dpm1987">linktree </a></p>
        <p>I'm a dreamer and a realist, I curate experiences and I push boundaries, I'm always thinking, always learning and always up for a challange.</p>
        <p>Check out my digital fashion collection  <a href="https://dpm-fashion.vercel.app/"> here </a>  </p>
      </div>
    </div>

    <div style={{ height: "200vh" }}>
      <div className="dot">
        
    </div>
    </div>


    <div style={{ height: "20vh" }}>
      <div className="dot" id="left" >
        <p>Metaverse / web3  </p>
        <h2>Meta-universe</h2>
        <p>
          Finding it hard to keep up with the metaverse? 
          Use <a href="https://metaversebullets.vercel.app/">this application</a> to help you explore the metaverse universe 
        </p>
      </div>
    </div>

    <div style={{ height: "100vh" }}>
      <div className="dot">
        
    </div>
    </div>


    <div style={{ height: "150vh" }}>
    <div className="dot" >
        <p>digital fashion</p>
        <h2>Drip your avatar</h2>
        <p>Want to learn how you can drip your avatar in the lastest fashion? Scan QR code or click <a href="https://medium.com/@DPM.XYZ/">here </a> </p>
      </div>
    </div>

    <div style={{ height: "40vh" }}>
      <div className="dot">
        
    </div>
    </div>


    <div style={{ height: "150vh" }}>
      <div className="dot" id="left" >
        <p>Insights / </p>
        <h2>Journey into my mind</h2>
        <p> Have you ever wondered what goes on in the mind of a Creative technologist? Go on <a href="https://dpm-creative-mind.vercel.app/">Take a look</a> </p>
      </div>
    </div>

    <div style={{ height: "30vh" }}>
      <div className="dot">
        
    </div>
    </div>

    <div style={{ height: "200vh" }}>
      <div className="dot"  >
        <p>Filters / AR  </p>
        <h2>Become a creative technologist</h2>
        <p>Check out my <a href="https://lens.snapchat.com/bf7d0656fd4c41cbbfaba0a482d961f3">snap filters</a>, you're already one step closer to becoming a creative technologist </p>
      </div>
    </div>

    <div style={{ height: "30vh" }}>
      <div className="dot">
        
    </div>
    </div>

    <div style={{ height: "200vh" }}>
      <div className="dot" id="left"  >
        <p>Spatial / Awareness  </p>
        <h2>Want to join me in the metaverse?</h2>
        <p>Come and Join me in my <a href="https://spatial.io/s/DPMs-Digital-Place-62c7ff3e2897ef00011f084b?share=3582572487467949506"> digital gallery</a> </p>
      </div>
    </div>
  </div>
))

export default Overlay
