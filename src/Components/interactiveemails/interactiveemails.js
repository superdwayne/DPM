import React from "react";
import './interactiveemails.css';
import Close from '../Close'


function tree() {
    return (
        <>

<Close />
            <header>
            <img className="dim width100" src="https://tinyurl.com/yez4z6jj" alt="" />
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
                                <iframe src="https://player.vimeo.com/video/599418568" title="Fallback" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                        </div>

                        <div>
                            <iframe  src="https://player.vimeo.com/video/599419446" title="interactive" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                        </div>
                    </section>
               

                                  

            

            <section className="interactive">
                <div className="width50">
                    <iframe src="https://player.vimeo.com/video/603378423?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=d5a89a3c45" width="720" height="1282" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Gmail.MP4"></iframe>
                </div>

                <div className="width50">
                    <iframe src="https://player.vimeo.com/video/603378493?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=39d97d7a69" width="720" height="1282" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Interative-email-mobile.MP4"></iframe>
                </div>
             </section>

        </>


    )
}

export default tree;