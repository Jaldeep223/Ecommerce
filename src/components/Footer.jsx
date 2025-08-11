import React from 'react';
import logo from "../assets/veda.png";
import instagram_icon from "../assets/instagram.png";
import facebook_icon from "../assets/facebook.webp";
import whatsapp_icon from "../assets/whatsapp.webp";

const Footer = () => {
  return (
    <footer className="w-full px-4 py-10 bg-white text-[#252525]">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">

        {/* Logo */}
        <div className="cursor-pointer ">
          <img src={logo} alt="veda Logo" className="w-60 h-40 object-contain" />
        </div>

        {/* Links */}
        <ul className="flex flex-wrap justify-center gap-6 sm:gap-10 text-base sm:text-lg">
          {["About", "Products", "Offices", "Company", "Contact"].map((item, i) => (
            <li key={i} className="cursor-pointer hover:text-[#ff4141] transition">
              {item}
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4">
          {[instagram_icon, facebook_icon, whatsapp_icon].map((icon, i) => (
            <div
              key={i}
              className="p-2 bg-[#fbfbfb] border border-[#ebebeb] rounded hover:shadow-md transition"
            >
              <img src={icon} alt="Social Icon" className="w-6 h-6 object-contain" />
            </div>
          ))}
        </div>

        {/* Divider + Copyright */}
        <div className="w-full flex flex-col items-center gap-5 mt-6 text-sm sm:text-base text-[#1a1a1a]">
          <hr className="w-4/5 border-t border-[#c7c7c7]" />
          <p>© 2025 वेदा. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
