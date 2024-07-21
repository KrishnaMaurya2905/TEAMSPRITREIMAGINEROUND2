import React, { useState , useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
const Unleashed = () => {
  const unleashedData = [
    [
      {
        Date: "08.07.24",
        UnleashedCategory: "MOTOR / 2-WHEEL",
        Description: "Hymas On Top",
        img: "https://res.cloudinary.com/dqzci9flc/image/upload/v1721503243/1e98d39c-e38b-4877-8ddc-1a4eaecafeac_f4qtr6.webp",
      },
      {
        Date: "28.05.24",
        UnleashedCategory: "ACTION / SKATEBOARD",
        Description: "Nyjah Back On Top",
        img: "https://res.cloudinary.com/dqzci9flc/image/upload/v1721503251/dd95a9f5-4479-4b8c-ae96-3735acf51ebc_kl8jwm.webp",
      },
      {
        Date: "02.05.22",
        UnleashedCategory: "MUSIC",
        Description: "BTS of GuapDad 4000's 'Black Iverson' Video",
        img: "https://res.cloudinary.com/dqzci9flc/image/upload/v1721503271/264bc9a1-c18c-4937-a37d-12e1c783c812_pzmunk.webp",
      },
      {
        Date: "26.01.24",
        UnleashedCategory: "GAMING",
        Description: "How Team Liquid Brazil Came Together And Became A Top Game Changers Team",
        img: "https://res.cloudinary.com/dqzci9flc/image/upload/v1721503290/9bce0ebe-5681-403d-8738-cf6ff4a5b34e_slrfy1.webp",
      },
    ],
    [
      {
        Date: "03.06.24",
        UnleashedCategory: "MMA",
        Description: "Sean Strickland Defeats Paulo Costa at UFC 302",
        img: "https://res.cloudinary.com/dqzci9flc/image/upload/v1721503281/38245f09-5599-4fd0-a82d-939a741500c4_wskvzy.webp",
      },
      {
        Date: "31.05.24",
        UnleashedCategory: "LIFESTYLE",
        Description: "Rehab Monster Green Tea Launch",
        img: "https://res.cloudinary.com/dqzci9flc/image/upload/v1721503262/b39100f8-7b09-4b17-8f46-f53f833d2d83_swh4qg.webp",
      },
      {
        Date: "29.01.18",
        UnleashedCategory: "GIRLS",
        Description: "Ready to kick off the fourth and final day of XGames Aspen 2018!",
        img: "https://res.cloudinary.com/dqzci9flc/image/upload/v1721503535/334574226_462636252670091_1349743941195074492_n_i6ws4c.webp",
      },
      {
        Date: "02.07.24",
        UnleashedCategory: "GAMING",
        Description: "The Golden Road: A Path Paved by Legends",
        img: "https://res.cloudinary.com/dqzci9flc/image/upload/v1721503179/78ea620e-393a-4e90-bb77-2bdac2803ccb_rkdeas.webp",
      },
    ],
  ];
  
  const scrollRef = useRef()
  useEffect(() => {
    let scroll;

    if (scrollRef.current) {
      scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.005,
        multiplier: 1,
        touchMultiplier: 1.5,
        class: 'is-inview',
      });
    }
  }, []);


  const [loadMoreUnleashed, setLoadMoreUnleashed] = useState(true);

  return (
    <div ref={scrollRef} className="w-full bg-transparent h-fit flex max-md:flex-col items-center p-5 max-sm:p-0 justify-center">
      {unleashedData.map((item, index) => (
        <UnleashedXCol
          key={index}
          item={item}
          index={index}
          loadMoreUnleashed={loadMoreUnleashed}
        />
      ))}
      <div
        onClick={() => {
          setLoadMoreUnleashed((prev) => !prev);
        }}
        className="w-[10%] text-white md:hidden h-[5vh]"
      >dfgfdg</div>
    </div>
  );
};

const UnleashedXCol = ({ item, index, loadMoreUnleashed }) => {
  return (
    <div
      className={`w-[49%] max-md:w-full flex gap-0 ${
        index === 1 ? "flex-col-reverse" : "flex-col"
      } ${index === 1 && loadMoreUnleashed ? "max-md:hidden" : ""} h-full`}
    >
      <div
        className={`h-[50vh] p-14  flex flex-col justify-between  text-white w-full ${index === 1 ? "max-md:hidden" : ""}`}
      > 
      <h1 className="w-[70%] text-7xl font-['Teko'] ">
      Power your passion, ignite your drive 
      </h1>
      <p className="w-[80%] text-xl ">
      Step into the wild with Monster Energy. Unleash your inner beast and fuel your journey to greatness.
      </p>
       </div>
      {item.map((data, idx) => (
        <div
          key={idx}
          className={`card w-full py-10 px-14 max-md:px-5 text-white max-md:h-[65vh] max-sm:h-[50vh] h-[75vh] flex flex-col justify-between border-[#292929b2] overflow-hidden  scale-1`}
        >
          <div className="w-full h-[20%]">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-['roboto'] ">{data.Date}</h3>
              <h4 className="text-sm ">{data.UnleashedCategory}</h4>
            </div>
            <p className="mt-10 max-sm:text-sm text-[2rem] font-['Teko'] leading-none w-[70%]">{data.Description}</p>
          </div>
          <div className="w-full rounded-lg h-[70%] overflow-hidden">
            <img
              data-scroll
              data-scroll-speed="-0.10"
              className="w-full h-[60vh] object-cover max-sm:object-top object-center"
              src={data.img}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Unleashed;






