// https://www.youtube.com/watch?v=Q7AOvWpIVHU&t=453s&ab_channel=Fireship
// https://vitejs.dev/guide/


import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'



// SCENE + CAMERA + RENDERER
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGL1Renderer({ canvas : document.querySelector('#bg') });

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0xffffff );

camera.up.set(0,0,1); // set camera up along the z-axis
camera.position.set(100,100,100); // Set position like this
camera.lookAt(new THREE.Vector3(0,0,0)); // Set look at coordinate like this

renderer.render(scene, camera)



// GEOMETRY AND MATERIAL
const geometry = new THREE.TorusGeometry( 10, 3, 16, 100)
const material = new THREE.MeshStandardMaterial({ color: 0xB22222 });
const torus = new THREE.Mesh( geometry, material);
torus.position.z = 10.

scene.add(torus)

const geometry2 = new THREE.CylinderGeometry( 1, 1, 80, 32 );
const cylinder2 = new THREE.Mesh( geometry2, material );
cylinder2.position.z = 40
scene.add( cylinder2 );


// LIGHTING
const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(0,0,500)

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight)

const gridHelper = new THREE.GridHelper(100, 20);
gridHelper.rotateX(Math.PI / 2); 
scene.add(gridHelper)

// xyz = red green blue
const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper);

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
    requestAnimationFrame( animate );

    //torus.rotation.x += 0.01;
    //torus.rotation.y += 0.005;
    //torus.rotation.z += 0.01;

    controls.update();

    renderer.render( scene, camera );
}

animate()

