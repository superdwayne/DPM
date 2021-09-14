import React from 'react'
import Close from '../Close'
import './Websites.css'

const Elixir = () => {

  return (
    <section className="container">

<Close />
  
    <header>
        <img className="oldsystem" src="http://dwaynep-marshall.co.uk/currentsystem.png" alt="Old system" />
        <section className="centered-title"><h2>Elixir</h2></section>
    </header> 

    <section className="container">
          <section className="project-info">
                <h3>Problem/Challange</h3>
                <h4>We believe that with our current push tool isn’t scalable enough to allow for true customer-centricity.</h4>
          </section>

          <section className="project-info">
                  <h3>Thinking Strategy & Approach</h3>
                  <h4>A traditional UX/UI double diamond approach.</h4>
          </section>
        
          <section className="project-info">
                <h3>Result & Final Experience</h3>
                <h4>We created a React powered system which allowed users to build campaigns outside of Responsys, this approach allowed users to see excatly what they were buliding (including all variants of a campaign)  </h4>
          </section>
    </section>    

    <iframe src="https://player.vimeo.com/video/599419996?h=27242c779c" title="DPM" width="960" height="341" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" ></iframe>
  
    </section>
  )
}
  
  export default Elixir;