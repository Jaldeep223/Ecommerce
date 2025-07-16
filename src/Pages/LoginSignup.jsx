import React from 'react';

const LoginSignup = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-[#47fdae] to-[#e1ffea22] pt-[50px] flex items-center justify-center">
      <div className="w-[500px] h-[500px] bg-white mx-auto px-[60px] pt-[20px] pb-[100px] border border-black rounded-[20px]">
        <h1 className="mt-8 text-3xl font-semibold">Sign Up</h1>

        <div className="flex flex-col gap-[30px] mt-[30px] flex items-center justify-center">
          <input
            type="text"
            placeholder="Your Name"
            className="h-[40px] w-sm pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px] font-medium cursor-pointer"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="h-[40px] w-sm pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px] font-medium cursor-pointer"
          />
          <input
            type="password"
            placeholder="Password"
            className="h-[40px] w-sm pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px] font-medium cursor-pointer"
          />
          <button className="w-[200px] h-[40px] mt-[10px] bg-[#ff4141] text-white text-[20px] font-medium cursor-pointer">
            Continue
          </button>
        </div>

        <p className="mt-[20px] text-[#5c5c5c] text-[18px] font-medium">
          Already have an account?{' '}
          <span className="text-[#ff4141] font-semibold cursor-pointer">Login here</span>
        </p>

        <div className="flex items-center justify-center gap-[20px] mt-[25px] text-[#5c5c5c] text-[18px] font-medium ">
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use &amp; privacy policy.</p>
        </div>
      </div>

    </div>
  );
};

export default LoginSignup;
