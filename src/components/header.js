import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import GLTFLoader from "three-gltf-loader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Text from "./textheader";
import Navbar from "./navbar";

const viewStyle = {
  // position: "relative",
  zIndex: "-9999",
  width: "100vw",
  height: "100vh",
  backgroundColor: "#2a2a72",
  backgroundImage: "linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)"

  // backgroundImage: "linear-gradient(315deg, #43302e 0%, #ad6f69 74%)"
};

// background-color: #43302e;

const Header = () => {
  const mount = useRef(null);
  //   const [isAnimating, setAnimating] = useState(true);
  //   const controls = useRef(null);

  useEffect(() => {
    let width = mount.current.clientWidth;
    let height = mount.current.clientHeight;
    let frameId;
    let chamber;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 2, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    //Light
    const ambient = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambient);
    const light = new THREE.DirectionalLight(0xffffff, 3);
    light.position.set(50, 50, 100);
    scene.add(light);

    // camera.position.z = 1;
    camera.position.set(0, 10, 20);
    // camera.translateY(6);

    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    // to set background color
    // renderer.setClearColor("#222222");

    // to make object zoomable
    let controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.update();

    // rendering scene
    const renderScene = () => {
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      width = mount.current.clientWidth;
      height = mount.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderScene();
    };

    //frame to fit the screen
    function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
      const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
      const halfFovY = THREE.Math.degToRad(camera.fov * 0.5);
      const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);
      // compute a unit vector that points in the direction the camera is now
      // in the xz plane from the center of the box
      const direction = new THREE.Vector3()
        .subVectors(camera.position, boxCenter)
        .multiply(new THREE.Vector3(1, 0, 1))
        .normalize();

      // move the camera to a position distance units way from the center
      // in whatever direction the camera was from the center already
      camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));

      // pick some near and far values for the frustum that
      // will contain the box.
      camera.near = boxSize / 100;
      camera.far = boxSize * 100;

      camera.updateProjectionMatrix();

      // point the camera to look at the center of the box
      camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
    }

    const loader = new GLTFLoader();
    loader.load("landscape/landscape.gltf", function(gltf) {
      // called when the resource is loaded
      const root = gltf.scene;
      scene.add(root);
      chamber = gltf.scene.children[0];

      // compute the box that contains all the stuff
      // from root and below
      const box = new THREE.Box3().setFromObject(root);

      const boxSize = box.getSize(new THREE.Vector3()).length();
      const boxCenter = box.getCenter(new THREE.Vector3());

      // set the camera to frame the box
      frameArea(boxSize * 0.5, boxSize, boxCenter, camera);

      // update the Trackball controls to handle the new size
      controls.maxDistance = boxSize * 10;
      controls.target.copy(boxCenter);
      controls.update();

      // let axisHelper = new THREE.AxisHelper(100);
      // scene.add(axisHelper);

      //animate have to be located after the object load, or else it will be "undefined"
      animate();
    });

    mount.current.appendChild(renderer.domElement);
    window.addEventListener("resize", handleResize);

    const animate = () => {
      chamber.rotation.z += 0.005;

      renderScene();
      controls.update();
      frameId = window.requestAnimationFrame(animate);
    };

    return () => {
      //   window.removeEventListener("resize", handleResize);
      //   mount.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div>
      <Text />
      <div className="view" ref={mount} style={viewStyle}></div>
    </div>
  );
};

export default Header;
