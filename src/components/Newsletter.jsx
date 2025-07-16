import React from 'react';

const Newsletter = () => {
  return (
    <div className="w-full h-[90vh] flex flex-col items-center justify-center mx-auto px-[140px] mb-[150px] gap-8 bg-gradient-to-b from-[#47fdae] to-[#e1ffea22]">
      <h1 className="text-[#454545] text-[55px] font-semibold">Get Exclusive Offers on Your Email</h1>
      <p className="text-[#454545] text-xl">Subscribe to our newsletter and stay updated</p>
      <div className="flex items-center justify-between bg-white w-[700px] h-[50px] rounded-[80px] border border-[#e3e3e3]">
        <input 
          type="email" 
          placeholder="Your Email id" 
          className="w-[500px] ml-7 border-none outline-none text-[#616161] text-base px-3"
        />
        <button className="w-[200px] h-[50px] rounded-[80px] bg-black text-white text-base cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default Newsletter;
