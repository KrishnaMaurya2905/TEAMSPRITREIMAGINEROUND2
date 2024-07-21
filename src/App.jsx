import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import CanvasImageSequence from "./Components/CanvasImageSequence";
import Unleashed from "./Components/Unleashed";
import Roster from "./Components/Roster";
import MonsterEnergySnap from "./Components/MonsterEnergySnap";
import Footer from "./Components/Footer";
import Partners from "./Components/Partners";
import FadingImagecomponent from "./Components/FadingImageComponent";
import Loader from "./Components/Loader";
import HomeProduct from "./HomeProduct";
import gsap from "gsap";
const App = () => {
  const scrollRef = useRef(null);
  const scrollInstance = useRef(null);
  const mouseFollowerRef = useRef(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollInstance.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.1,
      });

      return () => {
        if (scrollInstance.current) scrollInstance.current.destroy();
      };
    }
  }, []);

  const handleMouseMoveEvent = (e) => {
    const { clientX, clientY } = e;
    gsap.to(mouseFollowerRef.current, {
      x: clientX,
      y: clientY,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMoveEvent}
      ref={scrollRef}
      data-scroll-container
      className="relative"
    >
      {/* <Loader /> */}
      <div className="fixed h-screen z-[-1] bg-Glitch w-full">
       <div className="h-full w-full  bg-[#000000f7]">
       <div
          ref={mouseFollowerRef}
          className="absolute z-[9] -translate-x-1/2 -translate-y-1/2 h-[30vh] w-[30vh] rounded-full bg-[#22ff00] blur-[200px] drop-shadow-xl"
        ></div>
       </div>
      </div>
      <Navbar />
      <LandingPage />
      <div className="h-screen w-full bg-transparent"></div>
      <CanvasImageSequence />
      <div className="h-screen w-full bg-transparent"></div>
      <HomeProduct />
      <Unleashed />
      {/* <FadingImagecomponent /> */}
      <Roster />
      <MonsterEnergySnap />
      <div className="h-screen w-full bg-transparent"></div>
      {/* <Partners/> */}
      <Footer />
    </div>
  );
};

export default App;

// import * as THREE from "three";
// import { useRef, useState } from "react";
// import { Canvas, extend, useFrame } from "@react-three/fiber";
// import { useTexture, shaderMaterial } from "@react-three/drei";
// export const ImageFadeMaterial = shaderMaterial(
//   {
//     effectFactor: 1.2,
//     dispFactor: 0,
//     tex: undefined,
//     tex2: undefined,
//     disp: undefined,
//   },
//   ` varying vec2 vUv;
//     void main() {
//       vUv = uv;
//       gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
//     }`,
//   ` varying vec2 vUv;
//     uniform sampler2D tex;
//     uniform sampler2D tex2;
//     uniform sampler2D disp;
//     uniform float _rot;
//     uniform float dispFactor;
//     uniform float effectFactor;
//     void main() {
//       vec2 uv = vUv;
//       vec4 disp = texture2D(disp, uv);
//       vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
//       vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
//       vec4 _texture = texture2D(tex, distortedPosition);
//       vec4 _texture2 = texture2D(tex2, distortedPosition2);
//       vec4 finalTexture = mix(_texture, _texture2, dispFactor);
//       gl_FragColor = finalTexture;
//     }`
// );

// extend({ ImageFadeMaterial });

// function FadingImage() {
//   const ref = useRef();
//   const [texture1, texture2, dispTexture] = useTexture([
//     "https://images.unsplash.com/photo-1721223016439-76be1d2b3bc8?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1721403715005-cd5df8ab90ee?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1721222618631-e6c540963597?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   ]);
//   const [hovered, setHover] = useState(false);
//   useFrame(() => {
//     ref.current.dispFactor = THREE.MathUtils.lerp(
//       ref.current.dispFactor,
//       hovered ? 1 : 0,
//       0.075
//     );
//   });
//   return (
//     <mesh
//       onPointerOver={(e) => setHover(true)}
//       onPointerOut={(e) => setHover(false)}
//     >
//       <planeGeometry />
//       <imageFadeMaterial
//         ref={ref}
//         tex={texture1}
//         tex2={texture2}
//         disp={dispTexture}
//         toneMapped={false}
//       />
//     </mesh>
//   );
// }

// export default function Fade() {
//   return (
//       <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
//         <FadingImage />
//       </Canvas>
//   );
// }
