import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

const Loader = () => {
  const landingTextRef = useRef();
  const landingTextRef2 = useRef();
  const counterRef = useRef();
  const [loaderComplete, setLoaderComplete] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setLoaderComplete(true);
      },
      // paused:true
    });

    const landingtext = gsap.utils.toArray(landingTextRef.current.children);
    const landingtext2 = gsap.utils.toArray(landingTextRef2.current.children);
    const Movements = [-100, 200, -30, -50, 100, -80, 40];
    tl.from(landingtext, {
      yPercent: 100,
      stagger: 0.055,
    })
      .from(landingtext2, {
        yPercent: 100,
        stagger: 0.045,
      })
      .to(counterRef.current, {
        textContent: "2",
        duration: 1,
        ease: "none",
        snap: { textContent: 1 },
      })
      .to(counterRef.current, {
        textContent: "1",
        duration: 1,
        ease: "none",
        snap: { textContent: 1 },
      })
      .to(counterRef.current, {
        textContent: "0",
        duration: 1,
        ease: "none",
        snap: { textContent: 1 },
      })
      .to(counterRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: "none",
      })
      .to(landingtext2, {
        opacity: 0,
        stagger: 0.05,
        ease: "none",
      })
      .to(landingtext, {
       opacity:0,
        ease: "none",
        stagger:0.05
      })
      .to(".block", {
        yPercent: -100,
        stagger: 0.2,
        ease: "none",
        onComplete: () => {
          gsap.to('.loader',{
            display:"none"
          })
        },
      });
  }, []);

  return (
    <div className="w-full loader h-screen flex fixed top-0 z-[999]">
      <div className="absolute z-[9]  h-full  w-full flex flex-col items-center justify-center">
        <div className="landing-wrapper  h-[50vh] flex flex-col gap-5 items-center mix-blend-difference justify-center">
          <div
            ref={landingTextRef}
            className="flex gap-1 h-[5rem] overflow-hidden  text-white text-[5rem] leading-none font-['Monster']"
          >
            <h1>M</h1>
            <h1>O</h1>
            <h1>N</h1>
            <h1>S</h1>
            <h1>T</h1>
            <h1>E</h1>
            <h1>R</h1>
          </div>
          <div
            ref={landingTextRef2}
            className="flex gap-2 h-[2rem] text-[#2BBF3A] overflow-hidden text-[2rem] leading-none font-['Teko']"
          >
            <h1>E</h1>
            <h1>N</h1>
            <h1>E</h1>
            <h1>R</h1>
            <h1>G</h1>
            <h1>Y</h1>
          </div>
        </div>
        <div className="h-[10vh]  relative flex items-center text-white justify-center">
          <div
            ref={counterRef}
            className="h-[2rem] text-[2rem] leading-none font-['Teko'] w-fit overflow-hidden"
          >
            <h1>3</h1>
          </div>
        </div>
      </div>
      <div className="block w-[25%]  h-full bg-black"></div>
      <div className="block w-[25%] h-full bg-black"></div>
      <div className="block w-[25%] h-full bg-black"></div>
      <div className="block w-[25%] h-full bg-black"></div>
    </div>
  );
};

export default Loader;
