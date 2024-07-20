import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

const Card = ({
  progress,
  range,
  targetScale,
  i,
  src,
  name,
  title,
  country,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      ref={container}
      className="h-screen  flex items-center justify-center sticky top-0"
      style={{ overflow: "hidden" }}
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * -2}px)`,
        }}
        data-index={i}
        className="flex imgdiv flex-col relative mt-[20vh] h-[75vh] w-[65vw] max-xs:h-[40vh] max-sm:h-[50vh] max-md:w-[90%] max-xs:w-[95%] max-xl:w-[80%] origin-top"
      >
        <div className="flex h-full mt-[10px]">
          <div className="relative w-full bg-none h-full overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <img
                className="object-cover w-full h-full"
                src={src}
                alt="image"
              />
              <div className="absolute h-[20vh] max-sm:h-[12vh] text-white text-5xl left-10 max-sm:left-3 bottom-0">
                <h3 className="font-['Teko'] max-sm:text-lg text-2xl text-green-500">
                  {title}
                </h3>
                <h1 className="font-['Teko'] max-sm:text-[2rem] text-[4rem]">
                  {name}
                </h1>
                <div className="flex gap-4 max-sm:gap-2 items-center">
                  <img
                    className="h-6 max-sm:h-3"
                    src={
                      country === "Japan"
                        ? "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg"
                        : "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                    }
                    alt=""
                  />
                  <h4 className="text-lg">{country}</h4>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Roster = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const projects = [
    {
      title: "ATHLETICS",
      name: "Rob Gronkowski",
      src: "https://web-assests.monsterenergy.com/mnst/a4d80c32-11b8-449f-8717-fca9824f464f.webp",
      country: "United States",
    },
    {
      title: "GAMING",
      name: "Team Liquid",
      src: "https://web-assests.monsterenergy.com/mnst/d79a7142-225f-47ea-add5-c970f611f71e.webp",
      country: "United States",
    },
    {
      title: "SKATEBOARD",
      name: "Liz Akama",
      src: "https://web-assests.monsterenergy.com/mnst/30703c2c-1d97-4a0e-9fe5-db6465742a48.webp",
      country: "Japan",
    },
    {
      title: "SKATEBOARD",
      name: "Nyjah Huston",
      src: "https://web-assests.monsterenergy.com/mnst/e69c01ef-f438-42d3-967c-705b4c6f70fb.webp",
      country: "United States",
    },
    {
      title: "MONSTER GIRL",
      name: "Bradi",
      src: "https://web-assests.monsterenergy.com/mnst/bcbe996e-870f-4efd-a83c-a4b211aaec88.webp",
      country: "United States",
    },
  ];
  const rostertextRef = useRef();
  return (
    <div ref={container} className="relative bg-black">
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.1;
        return (
          <Card
            rostertextRef={rostertextRef}
            key={`${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

export default Roster;
