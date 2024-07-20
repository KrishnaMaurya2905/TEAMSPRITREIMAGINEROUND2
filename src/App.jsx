import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import CanvasImageSequence from "./Components/CanvasImageSequence";
import Unleashed from "./Components/Unleashed";
import Roster from "./Components/Roster";
import MonsterEnergySnap from "./Components/MonsterEnergySnap";
import Footer from "./Components/Footer";

const App = () => {
  const scrollRef = useRef(null);
  const scrollInstance = useRef(null);

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

  return (
    <div ref={scrollRef} data-scroll-container>
      <Navbar/>
      <LandingPage/>
      <CanvasImageSequence/>
      <Unleashed/>
      <Roster/>
      <MonsterEnergySnap/>
      <Footer/>
    </div>
  );
};

export default App;
