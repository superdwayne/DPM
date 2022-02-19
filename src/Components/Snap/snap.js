import React from "react";
import History from '../Hooks/history'

function Snap() {
    return (         
            <section className="container-app">
                    <h1>Project Snap</h1>

                    <section className="container">
                    <section className="project-info">
                            <h3>Project overview</h3>
                            <h4>
                                Snap filters have been around for a while, I decided to see if I could embody my Reader player Me Avatar.
                            </h4>
                           
                            <h3>Technology breakdown</h3>
                            <h4>Ready player Me is an avatar creation platform, I created an avatar and downloaded it as a GLB and imported in into Blender,
                            Once in Blender I decapated it and exported the FBX into Snap lens.</h4>

                            <h3>Output</h3>
                           
                            <img className="cen" src="https://snapcodes.storage.googleapis.com/png/7b56dca9-1e44-3dd6-9e34-bd3351808c73_320_0c7baeb3-b604-4700-993e-7636743d578e.png" alt="Snap code" />
                        
                        </section>
                       
                </section> 
                <History />
      </section>

    )
}

export default Snap;