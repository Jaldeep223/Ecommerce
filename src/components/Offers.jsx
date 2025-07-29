import React from 'react';
import exclusive from "../assets/exclusive_image.webp";

const Offers = () => {
  return (
    <div className="w-full px-4 py-12 bg-gradient-to-b from-[#47fdae] to-[#e1ffea22]">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#171717] leading-snug">
            Exclusive <br className="block sm:hidden" /> Offers For You
          </h1>
          <p className="text-lg font-medium text-[#171717] mt-4">
            ONLY ON BEST SELLERS PRODUCTS
          </p>
          <button className="mt-6 w-48 h-11 rounded-full bg-[#ff4141] text-white text-base font-semibold hover:bg-red-600 transition-all duration-200">
            Check Now
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={exclusive}
            alt="Exclusive Offer"
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;
