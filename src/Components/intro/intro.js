
import './intro.css';

import React from 'react';
import Pagelinks from '../Pagelinks';

function Intro () {
        return (
            <section className="intro twinkling">
              <section className="intro-copy">
                  <h1>Dwayne Paisley-Marshall</h1>
                  <h2>Creative Technologist</h2>
                  <Pagelinks />
              </section>  
            </section>
        )
}

export default Intro;