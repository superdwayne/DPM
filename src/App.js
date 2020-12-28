import './App.css';
import React, { Component } from "react";
//import Website from './Components/website';
import SimpleImageSlider from "react-simple-image-slider";


class App extends Component {

  constructor() {
    super();
    this.state = {
        useGPURender: true,
        showNavs: true,
        showBullets: true,
        navStyle: 1,
        slideDuration: 0.5,
        bgColor: "#000000",
        slideIndexText: "",
    };
}

   
  render() {
   const images = [
     { url: "./slider/one.png" },
     { url: "./slider/one.png" },
      
  ];
    
  
  function handleClick(e) {
    console.log(e.target)
  }

    return (
    <div>
     <button onClick={handleClick}> ss</button>
      <SimpleImageSlider width={640} height={504} images={images} showNavs={this.state.showNavs} />
    
    </div>

    );
  }
}

export default App;
