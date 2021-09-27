import React from "react";
import Close from '../Close'
import './Applications.css'


function ani() {
    return (         
            <section className="container-app">
  
                <Close />
   
                <header>
                    <img className="yana dim" src="http://dwaynep-marshall.co.uk/yana.png" alt="Meet Yana" />
                    <section className="centered-title"><h2>Meet Yana</h2></section>
                </header> 


                    <section className="container">
                        <section className="project-info">
                            <h3>Problem/Challange</h3>
                            <h4>We had a baby during the height of lockdown. We wanted to people to meet her safely so I decided to build a booking application so people could meet her, virtually.</h4>
                        </section>
 
                        <section className="project-info">
                                <h3>Thinking Strategy & Approach</h3>
                                <h4>I needed to set up something quickly so I decided to use Mongo (via mongoose) as the databse where the entries would be stored, the information was sent via a nodeJS end point </h4>
                        </section>
                    
                        <section className="project-info">
                            <h3>Result & Final Experience</h3>
                            <h4> Book a slot <a className="underlined" href="https://meet-yana.herokuapp.com/"> here </a> </h4>
                        </section>
                </section> 
      </section>

    )
}

export default ani;