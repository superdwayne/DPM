import React from "react";
import './Metaverse.css'
import History from '../Hooks/history'
import Metaverseimg from "./metaverse.png";


function Metaverse() {
    return (         
            <section className="container-app">
                    <h1>Project Metaverse</h1>

                    <section className="container">
                    <section className="project-info">
                            <h3>Project overview</h3>
                            <h4>
                                The purpose of this project is to aid in the ever changing metaverse landscape.
                                I created a application that scrapes different websites for the latest artcles on the metaverse and collates them in one loacation
                            </h4>
                            <img className="yana" src={Metaverseimg} alt="Metaverse" />
                            
                           
                            <h3>Technology breakdown</h3>
                            <h4>Axios is a npm package that allows you to scrape websites for information, using Axios in conjunction with NodeJS (backend) I was abled to scrape various meteverse websites for the lataets articles.</h4>
                            <h4>For a bit of added flare, I created a background which using React three fiber to add more depth to the page. The application is hosted via https://vercel.com/</h4>
                        

                            <h3>Output</h3>
                            <a rel="noopener noreferrer" href="https://metaversebullets.vercel.app/" target="_blank" ><h4>https://metaversebullets.vercel.app/</h4></a>
                        
                        </section>
                       
                        
                </section> 
                <History
                 firstnextStory={'http://dwaynep-marshall.co.uk/yana.png'}
                 secondnextStory={'https://images.unsplash.com/photo-1619472376731-3ca648a34b69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1856&q=80'}
                 />
      </section>

    )
}

export default Metaverse;