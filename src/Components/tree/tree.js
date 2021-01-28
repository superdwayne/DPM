import React, { Component } from "react";
import './tree.css';



class tree extends Component {
    render() {
        return (
            <section >

            <section className="intro">
                <h3>How might we ehance a user experence with an email 
                by introducing a product slider?</h3>

                <h3>The technolgy used in emails isnt' as old as you may think
                by adding a litle bit of creative thiking to an email you can 
                creative never before seen experiences in a user inbox 
                </h3>
                <h3> Below is a working concept, there are three videos, one which is the triditonal email
                the others are the same email but enhanced and thus is now interacrive </h3>
            </section>

            <section className="width80">
                <h3>Triditonal</h3>
            <div>
                    <video controls autoPlay className="width80">
                        <source src="./images/fallback.mov" ></source>
                    </video>
                 </div>
            </section>

            <section className="tree">
                <div className="width100">
                    <video controls autoPlay className="width100">
                        <source src="./images/Interative-email.mov" ></source>
                    </video>
                </div>
                <div className="width50">
                    <video controls className="width50">
                        <source src="./images/Interative-email-mobile.mp4" ></source>
                    </video>
                 </div>
            </section>
            
            
        </section>
            
        )
    }
}

export default tree;