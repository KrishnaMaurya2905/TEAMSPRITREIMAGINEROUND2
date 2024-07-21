import React, { useEffect } from "react";
import NavLinkAnimation from "./NavLinkAnimation";
const MonsterEnergySnap = () => {
  const DragableSliderImages = [
    "https://res.cloudinary.com/dqzci9flc/image/upload/v1721480363/372707732_7117288621702485_7671708406808279130_n_glvzzv.webp",
    "https://res.cloudinary.com/dqzci9flc/image/upload/v1721480360/386180647_1293568164628943_2419545368542252995_n_cn5vkp.webp",
    "https://res.cloudinary.com/dqzci9flc/image/upload/v1721480917/427984392_627415589511877_4946698606460443972_n_nd4ajc.webp",
    "https://res.cloudinary.com/dqzci9flc/image/upload/v1721502758/358394955_798433725263978_8454628538345894334_n_g4bniq_clkvwi.webp",
    "https://res.cloudinary.com/dqzci9flc/image/upload/v1721480366/363869677_264588033036057_5705013995868926740_n_bilruu.webp",
    "https://res.cloudinary.com/dqzci9flc/image/upload/v1721480345/418151056_1370813243572202_442690503800903250_n_mujxso.webp",
    "https://res.cloudinary.com/dqzci9flc/image/upload/v1721480344/e18719ac-c25a-4ce6-8077-2fab9f781c33.__CR0_1202_3335_1796_PT0_SX650_V1____2_rmycqf.webp",
    "https://res.cloudinary.com/dqzci9flc/image/upload/v1721504322/310723447_195926169540501_3326165987140872952_n.webp_z4z0pw_tljeky.webp", 
    "https://res.cloudinary.com/dqzci9flc/image/upload/v1721480918/358507613_1122871839100868_3245888769577614314_n_xhdmlv.webp",
    "https://res.cloudinary.com/dqzci9flc/image/upload/v1721480372/331166736_719107593005978_5404562749894080970_n_kvtici.webp",
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
    <div className="h-[70vh] max-sm:h-[50vh] relative bg-transparent text-white gap-10 overflow-hidden flex flex-col z-10  items-center justify-center">
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
