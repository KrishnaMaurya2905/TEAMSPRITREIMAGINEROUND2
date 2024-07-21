import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const Partners = () => {
    gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
     const rows = gsap.utils.toArray('.row')
     rows.forEach((row)=>{
           ScrollTrigger.create({
            trigger:row,
            // start:()=> `top+=${}`
           })
     })
  }, []);
  return (
    <div className="container">
      <div className="clients w-full">
        {Array.from({ length: 10 }).map((item, index) => (
          <div className="row w-full flex justify-center">
            <h1 className="logo">logo1</h1>
            <h1 className="logo">logo1</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
