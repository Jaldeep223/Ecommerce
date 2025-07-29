import React from 'react';

const LoginSignup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#47fdae] to-[#e1ffea22] pt-12 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl border border-black">
        <h1 className="text-3xl font-semibold text-center mb-8">Sign Up</h1>

        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="h-10 w-full px-5 border border-[#c9c9c9] rounded-md text-[#5c5c5c] text-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#ff4141]"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="h-10 w-full px-5 border border-[#c9c9c9] rounded-md text-[#5c5c5c] text-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#ff4141]"
          />
          <input
            type="password"
            placeholder="Password"
            className="h-10 w-full px-5 border border-[#c9c9c9] rounded-md text-[#5c5c5c] text-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#ff4141]"
          />
          <button
            type="submit"
            className="w-full sm:w-[200px] mx-auto h-10 bg-[#ff4141] rounded-full text-white text-lg font-medium cursor-pointer hover:bg-red-600 transition"
          >
            Continue
          </button>
        </form>

        <p className="mt-6 text-center text-[#5c5c5c] text-lg font-medium">
          Already have an account?{' '}
          <button className="text-[#ff4141] font-semibold hover:underline focus:outline-none">
            Login here
          </button>
        </p>

        <label className="flex items-center justify-center gap-3 mt-4 text-[#5c5c5c] text-base font-medium cursor-pointer select-none">
          <input type="checkbox" className="w-4 h-4" />
          <span>By continuing, I agree to the terms of use &amp; privacy policy.</span>
        </label>
      </div>
    </div>
  );
};

export default LoginSignup;
