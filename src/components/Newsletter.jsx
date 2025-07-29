import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 px-4 bg-gradient-to-b from-[#47fdae] to-[#e1ffea22] flex flex-col items-center text-center gap-6">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#454545]">
        Get Exclusive Offers on Your Email
      </h1>
      <p className="text-base sm:text-lg text-[#454545]">
        Subscribe to our newsletter and stay updated
      </p>

      <form className="flex w-full max-w-md mx-auto mt-4 relative">
        <div className="relative w-full max-w-md mx-auto mt-4">
          <input
            type="email"
            placeholder="Your Email ID"
            required
            className="w-full px-4 py-3 pr-28 bg-white text-[#616161] text-base outline-none border-none rounded-full"
          />
          <button
            type="submit"
            className="absolute top-1/2 right-1 -translate-y-1/2 px-6 py-3.5 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
