import * as React from 'react'
import dpm from './dpm-static.png'
import History from '../Hooks/history'

function Avatars(props) {
    return ( 
                
            <section className="container-app">
    
                    <h1>Project Avatars</h1>

                    <section className="container">
                    <section className="project-info">
                       
                                <h3>Project overview</h3>
                                <h4>With the rise of the Metaverse it more important now than ever to have an avatar ready.
                                So I created avatars from Ready player me (RPM), each avatar has a different personality.
                                <a href="https://readyplayer.me/" rel="noopener noreferrer" target="_blank">https://readyplayer.me/</a> is a cool platform, why don't you check it out.</h4>        
                        
                                <h3>Technology</h3>
                                <h4>When you create an avatar on RPM, you have the option to download it as a GLTF, which is great, however, the Avatar is lifeless (so to speak)</h4>
                                 <img src={dpm} alt="" /> 
                                 <h4>There is a animation library called https://www.mixamo.com/#/ which gives you the ability to add animation to FBX and GLB files. One an animation has been added you'll end up with something like this</h4>      

                                 <iframe src="https://player.vimeo.com/video/663497063?h=d3d8ea124a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="640" height="1004" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="dpm-moving"></iframe>
                                <h4>I lent on the react-xr library from Poimandres which enabled me to load the Avatar into a VR by utlising the VRCanvas </h4>
                        
                                <h3>Output</h3>
                                <iframe src="https://player.vimeo.com/video/663497017?h=6ed15c7d69&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="640" height="640" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Ready player me in VR"></iframe>

                        </section>
                       
                        
                </section> 
             <History />
      </section>

    )
}

export default Avatars;