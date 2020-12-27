import * as THREE from 'https://unpkg.com/three/build/three.module.js';

// const geometry = new THREE.Geometry();

// geometry.vertices.push(
// 	new THREE.Vector3( -10,  10, 0 ),
// 	new THREE.Vector3( -10, -10, 0 ),
// 	new THREE.Vector3(  10, -10, 0 )
// );

// geometry.faces.push( new THREE.Face3( 0, 1, 2 ) );

// geometry.computeBoundingSphere();


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const mutipleCubesProperties = [0xff22, 0xfff0, 0xff00]
var Coloralues;

for (Coloralues of mutipleCubesProperties) {

	const renderer = new THREE.WebGLRenderer(); renderer.setSize( window.innerWidth, window.innerHeight );
document.getElementById("section").appendChild( renderer.domElement );
const geometry = new THREE.BoxGeometry();


	const material = new THREE.MeshBasicMaterial( { color: Coloralues })
  console.log(Coloralues)
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );


camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.z += 0.01;
	renderer.render( scene, camera );

	
}
animate();
}



	
console.log(scene)
console.log(camera)