import React from "react";
import './interactiveemails.css';
import Close from '../Close'

import { ComparisonSlider } from 'react-comparison-slider';

function tree() {


    return (
        <>

<Close />
            <header>
            <img className="dim width100" src="https://images.unsplash.com/photo-1603791452924-12018321e6bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2787&q=80" alt="" />
    <section className="centered-title"><h2>Interactive Emails</h2></section>

            </header>

            <section className="container">
                        <section className="project-info">
                            <h3>Problem/Challange</h3>
                            <h4>How might we ehance a user experence with an email by introducing a product slider?</h4>
                        </section>

                        <section className="project-info">
                                <h3>Thinking Strategy & Approach</h3>
                                <h4>Mainly inputs and radio buttons and masking them with CSS selector</h4>
                                <h4>I wanted to reduce the need to scroll on for an email, so by introucing a slider a user us able to instantally acccess new content</h4>
                        </section>
                    
                        <section className="project-info">
                            <h3>Result & Final Experience</h3>
                            <h4>A fully interactive email experienece, with revelant fallback for older email clients </h4>
                        </section>

                </section>  

             
                    <section className="tree">
                        <div>
                                <iframe src="https://player.vimeo.com/video/599418568" title="Fallback" width="640" height="564" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                        </div>

                        <div>
                            <iframe  src="https://player.vimeo.com/video/599419446" title="interactive" width="640" height="564" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                        </div>
                    </section>
               

                                  

            

            <section className="interactive">
            <ComparisonSlider
      defaultValue={28}
      itemOne={<iframe src="https://player.vimeo.com/video/603378423?autoplay=1&loop=10&autopause=0" title="Fallback" width="640" height="564" frameBorder="0" allow="autoplay; " allowFullScreen></iframe>}
      itemTwo={  <iframe  src="https://player.vimeo.com/video/603378493?autoplay=1&loop=10&autopause=0" title="Interactive" width="640" height="564" frameBorder="0" allow="autoplay; " allowFullScreen></iframe>}
      aspectRatio={1 / 1}
      orientation="horizontal"
    
    />
             </section>

        </>


    )
}

export default tree;