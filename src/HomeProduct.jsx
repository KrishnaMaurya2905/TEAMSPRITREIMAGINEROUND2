// import React from "react";

// const HomeProduct = () => {
//   return (
//     <div className="ProductShow h-screen w-full bg-black flex overflow-hidden justify-center  items-center ">
//       <img
//         className="card p-5 h-[40vh] w-[15%] object-contain "
//         src="https://web-assests.monsterenergy.com/mnst/2a7484ad-e9d6-4972-b5ff-46269bb78f35.webp"
//         alt=""
//       />

//       <img
//         className="card p-5 h-[40vh] w-[15%] object-contain  "
//         src="https://web-assests.monsterenergy.com/mnst/ac2c0d32-97c7-4c48-8cca-269e43f22a42.webp"
//         alt=""
//       />

//       <img
//         className="card p-5 h-[40vh] w-[15%] object-contain "
//         src="https://web-assests.monsterenergy.com/mnst/f6dadd8b-12d1-4318-9167-1b83e9caa9c9.webp"
//         alt=""
//       />

//       <img
//         className="card p-5 h-[40vh] w-[15%] object-contain "
//         src="https://web-assests.monsterenergy.com/mnst/1e2a823a-d791-4216-acfd-6216674706fe.webp"
//         alt=""
//       />

//       <img
//         className="card p-5 h-[40vh]  w-[15%] object-contain"
//         src="https://web-assests.monsterenergy.com/mnst/cd27850b-d417-4b3c-bd56-6a7d877c42c1.webp"
//         alt=""
//       />
//     </div>
//   );
// };

// export default HomeProduct;

import React from "react";

const HomeProduct = () => {
  return (
    <div className="ProductShow h-screen w-full bg-[#00000000] flex overflow-hidden justify-center items-center">
      <img
        className="card p-5 h-[40vh] w-[15%] object-contain transform transition-transform duration-300 hover:scale-105 hover:rotate-3  backdrop-blur-lg bg-zinc-800"
        src="https://web-assests.monsterenergy.com/mnst/2a7484ad-e9d6-4972-b5ff-46269bb78f35.webp"
        alt=""
      />

      <img
        className="card p-5 h-[40vh] w-[15%] object-contain transform transition-transform duration-300 hover:scale-105 hover:rotate-3 shadow-lg"
        src="https://web-assests.monsterenergy.com/mnst/ac2c0d32-97c7-4c48-8cca-269e43f22a42.webp"
        alt=""
      />

      <img
        className="card p-5 h-[40vh] w-[15%] object-contain transform transition-transform duration-300 hover:scale-105 hover:rotate-3 shadow-lg"
        src="https://web-assests.monsterenergy.com/mnst/f6dadd8b-12d1-4318-9167-1b83e9caa9c9.webp"
        alt=""
      />

      <img
        className="card p-5 h-[40vh] w-[15%] object-contain transform transition-transform duration-300 hover:scale-105 hover:rotate-3 shadow-lg"
        src="https://web-assests.monsterenergy.com/mnst/1e2a823a-d791-4216-acfd-6216674706fe.webp"
        alt=""
      />

      <img
        className="card p-5 h-[40vh] w-[15%] object-contain transform transition-transform duration-300 hover:scale-105 hover:rotate-3 shadow-lg"
        src="https://web-assests.monsterenergy.com/mnst/cd27850b-d417-4b3c-bd56-6a7d877c42c1.webp"
        alt=""
      />
    </div>
  );
};

export default HomeProduct;
