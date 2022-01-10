// Three thing we need
// creating a scene
const scene = new THREE.Scene();
// creating a camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
// creating a renderer
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// creating a cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 15;

const lineMaterial = new THREE.LineBasicMaterial({color: 0x00ff00});

const points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );

const lineGeometry = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line(lineGeometry, lineMaterial);

scene.add(line);

// render loop
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
