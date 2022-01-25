import React from "react";
import './Applications.css'
import History from '../Hooks/history'


function ani(props) {
    return (         
            <section className="container-app">
    
                    <h1>Project Yana</h1>

                    <section className="container">
                    <section className="project-info">
                            <h3>Project overview</h3>
                            <h4>During the first lockdown, my wife and I had a baby girl (Yana) With the restrictions being at their height, no one could come to our house and meet our daughter. </h4>   
                            <h4>I decided to create a booking application that would help us manage the flurry of people wanting to meet her.</h4>                       
                            <img className="yana" src="http://dwaynep-marshall.co.uk/yana.png" alt="Meet Yana" />
                            
                            <h3>Technology breakdown</h3>

                            <h4>
                                I set up a React application which I used as the front end and for the backend I used Node.JS to set up end points that would store the data into a MongoDatabase.
                            </h4>
                            
                            <h3>Output</h3>
                            <h4><a href="http://meet-yana.herokuapp.com/">http://meet-yana.herokuapp.com/</a></h4>    
     
                        </section>
                       
                        
                </section> 
                <History />
      </section>

    )
}

export default ani;