import React from 'react';
import exclusive from "../assets/exclusive_image.webp";

const Offers = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-b from-[#47fdae] to-[#e1ffea22]">
      <div className="w-[50%]  max-w-5xl h-auto flex px-[80px] py-10 rounded-lg ">
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-[#171717] text-4xl font-bold leading-tight">Exclusive</h1>
          <h1 className="text-[#171717] text-4xl font-bold leading-tight">Offers For You</h1>
          <p className="text-[#171717] text-lg font-semibold mt-2">
            ONLY ON BEST SELLERS PRODUCTS
          </p>
          <button className="w-[200px] h-[40px] rounded-full bg-[#ff4141] border-none text-white text-base font-medium mt-8 cursor-pointer hover:bg-red-600 transition">
            Check Now
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img
            src={exclusive}
            alt="Exclusive Offer"
            className="h-[330px] rounded-lg object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;


