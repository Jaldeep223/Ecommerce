import React from 'react';
import hand_icon from "../assets/hand_icon.webp";
import arrow_icon from "../assets/arrow_icon.png";
import men from "../assets/p8.webp";

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-[#47fdae] to-[#e1ffea22]">
      {/* Hero container with reduced spacing */}
      <div className="flex items-center justify-between px-6 h-full">
        {/* Left Section - Text */}
        <div className="w-[60%] flex flex-col justify-center pl-4">
          <h2 className="text-[20px] font-semibold text-[#090909]">
            Best Deals! Best Prices!
          </h2>

          <div className="flex items-center  gap-2 mt-2">
            <p className="text-[60px] font-bold text-[#171717]">New</p>
            <img src={hand_icon} alt="hand" className="h-[60px]" />
          </div>

          <p className="text-[60px] font-bold text-[#171717]">collections</p>
          <p className="text-[60px] font-bold text-[#171717]">for everyone</p>

          <button className="flex items-center justify-center gap-2 w-[300px] h-[50px] rounded-full mt-8 bg-[#ff4141] text-white text-[18px] font-medium hover:bg-[#e93e3e] transition">
            <span>Latest Collection</span>
            <img src={arrow_icon} alt="arrow" className="h-[30px]" />
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="w-[40%] flex items-center justify-center">
          <img src={men} alt="hero" className="h-[400px] w-[600px] object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
