import React, { useEffect } from "react";
import NavLinkAnimation from "./NavLinkAnimation";
const MonsterEnergySnap = () => {
  const DragableSliderImages = [
    "/src/assets/EijYzVoWAAQAHLI.jpg",
    "/src/assets/3.jpg",
    "/src/assets/2.jpg",
    "/src/assets/3.jpg",
    "/src/assets/3.jpg",
    "/src/assets/3.jpg",
    "/src/assets/3.jpg",
    "/src/assets/3.jpg",
    "/src/assets/3.jpg",
    "/src/assets/3.jpg",
  ];
  useEffect(() => {
    const DragScroll = function (obj) {
      const el = document.querySelector(obj.el);
      const wrap = document.querySelector(obj.wrap);
      const items = document.querySelectorAll(obj.item);

      let progress = 0;
      let oldX = 0;
      let dragging = false;
      let startX = 0;
      let x = 0;
      let maxScroll;

      const init = () => {
        calculate();
        events();
        animateScroll();
      };

      const calculate = () => {
        const wrapWidth = items[0].clientWidth * items.length;
        wrap.style.width = `${wrapWidth}px`;
        maxScroll = wrapWidth - el.clientWidth;
      };

      const handleWheel = (e) => {
        progress += e.deltaY;
        move();
      };

      const handleDragStart = (e) => {
        e.preventDefault();
        dragging = true;
        startX = e.clientX || e.touches[0].clientX;
      };

      const handleDragMove = (e) => {
        if (!dragging) return;
        const x = e.clientX || e.touches[0].clientX;
        progress += (startX - x) * 2.5;
        startX = x;
        move();
      };

      const handleDragEnd = () => {
        dragging = false;
      };

      const move = () => {
        progress = Math.max(0, Math.min(progress, maxScroll));
        x = lerp(x, progress, 0.1);
        wrap.style.transition = "transform 0.3s ease-out";
        wrap.style.transform = `translateX(${-x}px)`;
        oldX = x;
        scaleItems();
      };

      const scaleItems = () => {
        items.forEach((item) => {
          item.style.transition = "transform 0.5s ease-out";
          item.style.transform = `scale(${
            1 - Math.abs(x - progress) * 0.0009
          })`;
        });
      };

      const events = () => {
        el.addEventListener("wheel", handleWheel);
        el.addEventListener("mousedown", handleDragStart);
        el.addEventListener("mousemove", handleDragMove);
        el.addEventListener("mouseup", handleDragEnd);
        el.addEventListener("mouseleave", handleDragEnd);
        el.addEventListener("touchstart", handleDragStart);
        el.addEventListener("touchmove", handleDragMove);
        el.addEventListener("touchend", handleDragEnd);
      };

      const animateScroll = () => {
        move();
        requestAnimationFrame(animateScroll);
      };

      const lerp = (start, end, amt) => {
        return (1 - amt) * start + amt * end;
      };

      init();
    };

    const scroll = new DragScroll({
      el: ".slider",
      wrap: ".slider-wrapper",
      item: ".slider-item",
    });

    return () => {
      document
        .querySelector(".slider")
        .removeEventListener("wheel", scroll.handleWheel);
      document
        .querySelector(".slider")
        .removeEventListener("mousedown", scroll.handleDragStart);
      document
        .querySelector(".slider")
        .removeEventListener("mousemove", scroll.handleDragMove);
      document
        .querySelector(".slider")
        .removeEventListener("mouseup", scroll.handleDragEnd);
      document
        .querySelector(".slider")
        .removeEventListener("mouseleave", scroll.handleDragEnd);
      document
        .querySelector(".slider")
        .removeEventListener("touchstart", scroll.handleDragStart);
      document
        .querySelector(".slider")
        .removeEventListener("touchmove", scroll.handleDragMove);
      document
        .querySelector(".slider")
        .removeEventListener("touchend", scroll.handleDragEnd);
    };
  }, []);

  return (
    <div className="h-[70vh] max-sm:h-[50vh] relative bg-black text-white gap-10 overflow-hidden flex flex-col z-10  items-center justify-center">
      <h1 className="text-[4rem] max-sm:text-[2rem] font-['teko'] uppercase">
        {/* <DescramblerText> # Monster Energy</DescramblerText> */}
        <NavLinkAnimation>#Monster Energy</NavLinkAnimation>
      </h1>
      <div className="slider w-full cursor-grab">
        <div className="slider-wrapper whitespace-nowrap">
          {DragableSliderImages.map((item, index) => (
            <div
              key={index}
              className="slider-item inline-block w-[30vw] max-sm:w-[50vw] p-[1rem] max-sm:p-[.4rem]"
            >
              <div className="relative h-[40vh] max-sm:h-[25vh] overflow-hidden">
                <img
                  className="absolute w-full object-cover h-full"
                  src={item}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonsterEnergySnap;
