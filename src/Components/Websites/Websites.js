import React from 'react'
import History from '../Hooks/history'
import './Websites.css'


export default function Elixir () {

      return (

            <section className="container-app">

                  <h1>Project Elixir</h1>

                  <section className="container">
                        <section className="project-info">
                              <h3>Project overview</h3>
                              <h4>Our Push and email CRM tool had become too cumbersome to update which lead to a lot of stress in the production team.
                              We needed to find a way to build an application that enabled the CRM team to build campaigns more effcetively.</h4>

                              <img className='width100' src="http://dwaynep-marshall.co.uk/currentsystem.png" alt="Old system" />

                              <h3>Technology breakdown</h3>
                              <h4>We built a react application with a nodeJS backend, this allowed us to send data into the CRM tool (Responsys)
                              by taking this approaph we were able to build campaign outside of Responsys and only use reponsys for sending the campaigns.</h4>

                              <h3>Output</h3>
                              <iframe src="https://player.vimeo.com/video/599419996?h=27242c779c" title="DPM" width="640" height="341" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" ></iframe>
                        </section>


                  </section>
                  <History />
    </section>
      )
}

