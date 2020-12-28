import * as THREE from 'https://unpkg.com/three/build/three.module.js';



// const mutipleCubesProperties = [0xff2f]
// var Coloralues;

// for (Coloralues of mutipleCubesProperties) {}

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("section").appendChild(renderer.domElement);


const length = 12, width = 8;

const shape = new THREE.Shape();
shape.moveTo(0, 0);
shape.lineTo(0, width);
shape.lineTo(length, width);
shape.lineTo(length, 0);
shape.lineTo(0, 0);

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
const materialmesh = new THREE.MeshBasicMaterial({ color: 0xffffff });
//const loader = new THREE.TextureLoader();
// const materialmesh = new THREE.MeshBasicMaterial({
//     map: loader.load('https://images.unsplash.com/photo-1422270220275-7aab7dbe9309?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1567&q=80'),
//   });


const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0xffffff })

const mesh = new THREE.Mesh(geometrymesh, materialmesh);
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
//scene.add( mesh );





//Setting position 
camera.position.z = 5;
cube.position.y += 0.5;

function animate() {
	requestAnimationFrame(animate);
	cube.rotation.x += 0.01;
	cube.rotation.z += 0.001;
	
	mesh.rotation.z += 0.01;
	mesh.rotation.x += 0.03;
	mesh.scale.y += 0.08;

	cube.scale.x += 0.01;
	renderer.render(scene, camera);
}
animate();