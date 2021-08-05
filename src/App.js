import './App.css';
import React, { useRef} from 'react'
import Intro from './Components/intro';
import Dotnav from './Components/Dotnav';
import Video from './Components/Kids';
import Threedee from './Components/Threedee';
import ReactPlayer from 'react-player'

function Playground() {

  const first = useRef(null)
  const second = useRef(null)
  const whoisdpm = useRef(null)
  const home = useRef(null)
  // const emails = useRef(null)
 
  function firstexperiment() {
    first.current.scrollIntoView({ behavior: 'smooth' })
}

function noplacelikehome() {
  home.current.scrollIntoView({ behavior: 'smooth' })
}

function secondexperiment() {
  second.current.scrollIntoView({ behavior: 'smooth' })
}
function dpm() {
  whoisdpm.current.scrollIntoView({ behavior: 'smooth' })
}

// function Interactive() {
//   emails.current.scrollIntoView({ behavior: 'smooth' })
// }


 
    return (
      <>
      <section ref={home}>

      </section>

      <Dotnav 
      onClickfirst={firstexperiment}
      onClicksecond={secondexperiment} 
      onClickthird={noplacelikehome}
      onClicktforth={dpm}
      
      />
      <Intro />  

       <section ref={first} >
         <Threedee/>
       </section>  
      
       <section  ref={second} >
         <Video />
       </section>  
      
       <section className="dpm" ref={whoisdpm} >
        <h1 className="white">Hello</h1>
        <h2 className="mobwork white">Check out my UX/UI work below </h2>
        <h2 className="white mobile-shift">There you have it you've see my experiments, I have around 10 years+ experience doing this type of stuff</h2>
        <h2 className="white mobile-shift">I'm always open for a collaboration so if you like what you've seen let me know</h2>
       </section> 

       <div className="mobwork">
       <h1 className="white">Elixir (CRM tool)</h1>
        <ReactPlayer controls={true} loop={true} muted={true} playing={true} width="100%" height="100%" url='http://dwaynep-marshall.co.uk/v1.mov' /> 
        <h1 className="white">Interactive emails</h1>
        <ReactPlayer controls={true}  loop={true} muted={true} playing={true} width="100%" height="100%" url='http://dwaynep-marshall.co.uk/Interative-email.mov' /> 
       </div>

       
      </>
    );
  }
    

export default Playground;