import React, { useRef, useEffect, useState, useHistory} from 'react'
import { Route} from "react-router-dom";
// import Website from '../Websites';
import Applications from '../Applications';
import Interactiveemails from '../interactiveemails';
import Playground from '../Playground';
import Pagelinks from '../Pagelinks';
import Website from '../../Pages/Websites';

import './menu.css';


export default function Menu() { 

    return (
        <section>
            <Route path="/websites" component={website} />
            <Route path="/applications" component={Apps} />
            <Route path="/interactiveemails" component={emails} />
            <Route path="/playground" component={play}  />
            <Route path="/" exact component={Home}  />
            <Pagelinks />
        </section>   

    )
}


const Home = (props) => {
    console.log(props.location.pathname);
    const Path  = props.location.pathname
    return (
      <section className= { Path === "/" ? "intro twinkling" : null }>
          <section className="intro-copy">
                  <h1>Dwayne Paisley-Marshall</h1>
                  <h2>Creative Technologist</h2>
              </section> 
      </section>
    );
  };
    

  const Apps = () => {
  
    return (
      <div>
        <Applications/>
      </div>
    );
  };

  const website = () => {
  
    return (
      <div>
        <Website />
      </div>
    );
  };

  const emails = () => {
  
    return (
      <div>
        <Interactiveemails/>
      </div>
    );
  };

  const play = () => {
  
    return (
      <div>
        <Playground />
      </div>
    );
  };
