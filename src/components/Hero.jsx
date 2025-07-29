import React from 'react';
import hand_icon from "../assets/hand_icon.webp";
import arrow_icon from "../assets/arrow_icon.png";
import men from "../assets/p8.webp";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#47fdae] to-[#e1ffea22] flex items-center justify-center px-4 py-10 mt-9">
      <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Left Section - Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-lg font-semibold text-[#090909]">Best Deals! Best Prices!</h2>

          <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
            <p className="text-4xl sm:text-5xl font-bold text-[#171717]">New</p>
            <img src={hand_icon} alt="hand" className="h-10 sm:h-12" />
          </div>

          <p className="text-4xl sm:text-5xl font-bold text-[#171717]">collections</p>
          <p className="text-4xl sm:text-5xl font-bold text-[#171717]">for everyone</p>

          <button className="mt-6 w-full sm:w-[250px] h-12 rounded-full bg-[#ff4141] text-white text-base sm:text-lg font-medium hover:bg-[#e93e3e] transition flex items-center justify-center gap-2 mx-auto md:mx-0">
            <span>Latest Collection</span>
            <img src={arrow_icon} alt="arrow" className="h-5" />
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={men}
            alt="hero"
            className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[500px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
