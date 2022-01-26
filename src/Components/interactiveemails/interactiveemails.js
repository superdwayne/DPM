import React from "react";
import './interactiveemails.css';
import History from '../Hooks/history'

import { ComparisonSlider } from 'react-comparison-slider';

function tree() {


    return (
        <>

<section className="container-app">
    

    <h1>Interactive Emails</h1>

    <section className="container">
    <section className="project-info">
            <h3>Project overview</h3>
            <h4>I spent a few years in the world of HTML email and I got quite fed up with the speed in which HTML emails are advancing, so I decided to see if I could create an HTML email template that was built using more modern web practices.</h4>
            
            <iframe src="https://player.vimeo.com/video/599418568" title="Fallback" width="640" height="564" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
            
            <h3>Technology breakdown</h3>
            <h4>To achieve the slider in all fairness the technology is more smoke and mirrors. Radio buttons and the input position used to power the slider effect</h4>
          
            <h3>Output</h3>    
            <iframe src="https://player.vimeo.com/video/599419446" title="interactive" width="640" height="564" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
            <section className="interactive">
            <ComparisonSlider
                defaultValue={28}
                itemOne={<iframe src="https://player.vimeo.com/video/603378423?autoplay=1&loop=10&autopause=0" title="Fallback" width="640" height="564" frameBorder="0" allow="autoplay; " allowFullScreen></iframe>}
                itemTwo={ <iframe src="https://player.vimeo.com/video/603378493?autoplay=1&loop=10&autopause=0" title="Interactive" width="640" height="564" frameBorder="0" allow="autoplay; " allowFullScreen></iframe>}
                aspectRatio={1 / 2}
                orientation="horizontal"
            />
             </section>

        </section>
       
        
</section> 
<History />
</section>

            


        </>


    )
}

export default tree;