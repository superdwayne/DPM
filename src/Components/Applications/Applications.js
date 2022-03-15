import React from "react";
import './Applications.css'
import History from '../Hooks/history'


function ani(props) {
    return (         
            <section className="container-app">
    
                    <h1>Project AR</h1>

                    <section className="container">
                    <section className="project-info">
                            <h3>Project overview</h3>
                            <h4>I wanted to find a way to provide a different experience via a Physical entity and an Augeumented one. </h4>   
                            
                    
                            <h3>Technology breakdown</h3>

                            <h4>Visual studio code - Liver server<br />
This plugin allows you to have a local server running, this is what I used when testing the experience locally </h4>
                                
        <h4>Vercel - <br />
        I used Vercel to host the application, it's very quick and easy to use, you can host anything from a git repo. </h4>

          <h4>A-frame - <br />
          I used A-frame to create this experience,  I didn't use the react A-frame version, I used A-frame natively.  
          </h4>                          
                            
                            <h3>Output</h3>
                            <h4>
                                <img src="https://miro.medium.com/max/900/0*MX5kRSBdz1WEIxli" alt="QR code window" />
                                <img src="https://miro.medium.com/max/1024/0*FU3fzocx3qevOmEN" alt="AR Marker" />
                             </h4>    
     
                        </section>
                       
                        
                </section> 
                <History />
      </section>

    )
}

export default ani;