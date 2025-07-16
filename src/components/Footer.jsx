import React from 'react';
import logo from "../assets/logo.png";
import instagram_icon from "../assets/instagram.png";
import facebook_icon from "../assets/facebook.webp";
import whatsapp_icon from "../assets/whatsapp.webp";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      {/* Logo */}
      <div className="flex items-center gap-5">
        <img src={logo} alt="Shopify Logo" width={40} />
        <p className="text-4xl font-bold text-[#383838]">Shopify</p>
      </div>

      {/* Links */}
      <ul className="flex list-none gap-12 text-xl text-[#252525]">
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">Offices</li>
        <li className="cursor-pointer">Company</li>
        <li className="cursor-pointer">Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="flex gap-5">
        {[instagram_icon, facebook_icon, whatsapp_icon].map((icon, i) => (
          <div
            key={i}
            className="p-2.5 pb-1.5 bg-[#fbfbfb] border border-[#ebebeb] cursor-pointer"
          >
            <img src={icon} alt="Social Icon" width={30} />
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div className="flex flex-col items-center gap-7 w-full mb-7 text-[#1a1a1a] text-lg">
        <hr className="w-4/5 rounded-lg h-1.5 bg-[#c7c7c7]" />
        <p>Copyright © 2023 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
