import './App.css';
import React, { Component } from "react";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';


class App extends Component {
  render() {
    return (

      <ParallaxProvider>

        <div className="App">
         
          <section className="one"></section>
          <section className="DPM">
            <h1>Dwayne</h1>
            <h1>Paisley- </h1>
            <h1>Marshall</h1>
            <h1 className="">Front end dev/</h1>
            <h1>Product designer</h1>
          </section>


          <Parallax className="custom-class white" y={[-5, 20]} >
            <section className="two_point_two"><h2>Case study</h2>
              <h3>Project: Elixir</h3>
              <h3>Role: UX/UI designer & front-end dev</h3>
              <h3>Purpose: To revolutionize the world of Push nofications</h3>
            </section>
            <img src="./images/Elixir_home.png" alt=""  />
          </Parallax>

          

          <Parallax className="custom-class" y={[-5, 20]}>
            <section className="three white">
              <section className="percen70">
                <h2>The problem</h2>
                <h3>1. We have observed that the push too isn’t meeting the demands
                of more personalised and segmentation content for our user which
                is causing the technology of our push campaign to be Stifled. 
                The user interface of our current push tool solution is prone
                to errors and quality control are issue as the interface is a Google sheet
              </h3>

                <h2>Hypothesis</h2>
                <h3>We believe that by introducing a lite CMS system that is powerful enough to handle the demand of proof testing push campaigns alongside creating more segmented and personalised campaigns, for our internal teams this will enhance the user experience and increase the likelihood to convert after opening a
              push campaign alongside improving the confidence of the performance of a push campaign.</h3>

                <h2>Research</h2>
                <h3>User interviews and shadowing sessions were carried out in order to discover
              and pain points and also to get a better understanding of what success look like </h3>
          
              </section>
              
            </section>
              <img src="./images/white.png" alt=""  height="800px" />
            
          </Parallax>

         

          <Parallax  y={[-3, 20]}>
         
            <section className="padding20">
              <h2>Current system</h2>
                <section>
                    <img src="./images/currentsystem.png" alt=""  />

                    <h4>Pros</h4>
                    <li>Overview of historal campaigns</li>
                    <li>Multi user imput  </li>
                    <li>Undo and historcial view from Google sheets </li>

                    <h4>Cons</h4>
                    <li>* Too many data entry points</li>
                    <li>* No visual of message </li>
                    <li>* No error messaging feedback</li>
                    <img src="./images/white.png" alt=""  height="100px" />
                    <h2> Wireframes - low fi</h2>
                  <img src="./images/login.png" className="width25" alt="" />
                  <img src="./images/dashboard.png" className="width25" alt="" />
                  <img src="./images/campaign_main.png" className="width25" alt="" />
                  <img src="./images/campaign_creation.png" className="width25" alt="" />
                  <img src="./images/copy.png" className="width25" alt="" />
                  <img src="./images/campaign_copy.png" className="width25" alt="" />
                  <img src="./images/campaign.png" className="width25" alt="" />
                  <img src="./images/campaign_confirm.png" className="width25" alt="" />
                  <h2> Wireframes - mid-fi / V1 protoype</h2>
                  <img src="./images/midfi-campaign.png" className="width50" alt="" />
                  <img src="./images/midfi-dashboard.png" className="width50" alt="" />


                  <h2>Wireframes - hifi</h2>
                  <img src="./images/login-hifi.png" className="width50" alt="" />
                  <img src="./images/dashboard-hifi.png" className="width50" alt="" />
                  <img src="./images/search-hifi.png" className="width50" alt="" />
                  <img src="./images/search-res-hifi.png" className="width50" alt="" />
                  <img src="./images/dashobard-hifi.png" className="width50" alt="" />
                  <img src="./images/proof-hifi.png" className="width50" alt="" />
                  <img src="./images/bulkedit-hifi.png" className="width50" alt="" />
                  <video controls className="width100">
                    <source src="./images/v1.mov" ></source>
                  </video>
                </section> 
                  
            </section>
          </Parallax>

        
        

        </div>
      </ParallaxProvider>

    );
  }
}

export default App;
