import React, { useRef, useState , useEffect } from 'react'


function LifecycleDemo() {


    const Request = (url, params, cb) => {
        fetch(url, params)
          .then((response) => response.json())
          .then((response) => cb(response))
          .catch((error) => alert(error));
      };

    useEffect(() => {
        console.log('mounted');

        const params = {
            method: 'GET',
            body: JSON.stringify(),
            headers: {
              'Content-Type': 'application/json',
            },
          };
        
          Request(`http://localhost:8002/api/index`, params, (response) => {
              console.log(">>>", response.shapes.circle)
             //  this.setState({ ranNumb: response });
            
            });

        return () => console.log('unmounting...');
      }, []) 
      return LifecycleDemo
  }

  function App() {
    // Set up a piece of state, so that we have
    // a way to trigger a re-render.
    const [random, setRandom] = useState(Math.random());
  
    // Set up another piece of state to keep track of
    // whether the LifecycleDemo is shown or hidden
    const [mounted, setMounted] = useState(true);
  
    // This function will change the random number,
    // and trigger a re-render (in the console,
    // you'll see a "render!" from LifecycleDemo)
    const reRender = () => setRandom(Math.random());
  
    // This function will unmount and re-mount the
    // LifecycleDemo, so you can see its cleanup function
    // being called.
    const toggle = () => setMounted(!mounted);
  
    return (
      <>
        <button onClick={reRender}>Re-render</button>
        <button onClick={toggle}>Show/Hide LifecycleDemo</button>
        {mounted && <LifecycleDemo/>}
      </>
    );
  }
  

  export default LifecycleDemo;