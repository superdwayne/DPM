import React, { Component } from "react";

import * as THREE from "three";


class ani extends Component {

    componentDidMount() {
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
        
        const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
        camera.position.set( 0, 0, 100 );
        camera.lookAt( 0, 0, 0 );
        
        const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

        const points = [];
        points.push( new THREE.Vector3( - 10, 0, 0 ) );
        points.push( new THREE.Vector3( 0, 10, 0 ) );
        points.push( new THREE.Vector3( 10, 0, 0 ) );
        points.push( new THREE.Vector3( 30, 0, 0 ) );
        //console.log(points)

        const geometry = new THREE.BufferGeometry().setFromPoints( points );
        const line = new THREE.Line( geometry, material );

        const circlegeometry = new THREE.CircleGeometry( 5, 32 );
        const circlematerial = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true } );
         this.circle = new THREE.Mesh( circlegeometry, circlematerial );

        // this.scene.add( line,circle );
        this.scene.add(this.circle);

        this.animate();
        this.renderScene();
        }

        animate = () => {
        
            if (this.circle)
            this.circle.rotation.y += 0.01;
            this.circle.rotation.z += 0.01;
            this.circle.scale.y += 0.18;
            //console.log(this.circle)
           
            this.renderScene();
            this.frameId = window.requestAnimationFrame(this.animate);
          };


          renderScene = () => {
            if (this.renderer) this.renderer.render(this.scene, this.camera);
          };

    render() {
        return (
            
            <div
          style={{ width: window.innerWidth, height: window.innerHeight }}
          ref={mount => { this.mount = mount }}
        />
        )
    }
}

export default ani;