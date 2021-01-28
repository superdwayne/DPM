import './App.css';
import React, { Component } from "react";
import Menu from './Components/menu';
import Request from './api/requests';
import * as THREE from "three";
class App extends Component {

  state = {
    page: window.location.pathname 
}



  componentDidMount() {

    const handleOnClick = () => {
      this.setState( { pages:  window.location.pathname })
      
  };

handleOnClick()
    const params = {
      method: 'GET',
      body: JSON.stringify(),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    Request(`http://localhost:8008/api/index`, params, (response) => {
        console.log(response)
        this.setState({ ranNumb: response });
      
    });
 
    this.setState({ currentpage: window.location.pathname });
   
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    this.scene = new THREE.Scene();
    //Add Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor("#000");
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);

    //add Camera
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 5;

    //
    const shape = new THREE.Shape();
    shape.moveTo(0, 0); shape.lineTo(12, 8); shape.lineTo(12, 8);
    shape.lineTo(12, 0);shape.lineTo(0, 0);

    const extrudeSettings = {
      steps: 2,
      depth: 16,
      bevelEnabled: true,
      bevelThickness: 1,
      bevelSize: 1,
      bevelOffset: 0,
      bevelSegments: 1
    };

    const geometrymesh = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    const materialmesh = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });

    const square = this.mesh = new THREE.Mesh(geometrymesh, materialmesh);
    //console.log(square)    
    this.scene.add(square);

    this.renderScene();
    this.animate();
  }

  animate = () => {
    
    if (this.mesh)
    this.mesh.rotation.y += 0.01;
    this.mesh.rotation.z += 0.01;
    this.mesh.rotation.x += 0.03;
    this.mesh.scale.y += 0.08;
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };
  renderScene = () => {
    if (this.renderer) this.renderer.render(this.scene, this.camera);
  };
  render() {
       
    return (
      <div> 

        <div className={ this.props.handleOnClick ==="/ani" ? 'hide' : 'explore' } id="explore"
          style={{ width: window.innerWidth, height: window.innerHeight }}
          ref={ mount => { this.mount = mount } }
        />
        <section className="overlay">
          <h1>Dwayne Paisley-Marshall</h1>
          <h2>Creative Front end developer</h2>
          <h2><Menu /></h2>
        </section>
        
      </div>

    );
  }
}

export default App;
