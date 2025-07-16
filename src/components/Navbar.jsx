
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { ShopContext } from '../ShopContext';
import { Menu, X } from 'lucide-react'; // hamburger and close icons

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
   <nav className="mt-6 w-full h-20 shadow-md top-10 bg-white z-50 ">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto mt-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-12" />
          <p className="text-[#171717] text-3xl font-semibold">Shopify</p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-[#626262] text-lg font-medium">
          {["home", "mens", "womens", "kids"].map((item) => (
            <li
              key={item}
              onClick={() => setMenu(item)}
              className="flex flex-col items-center gap-[3px] cursor-pointer font-semibold"
            >
              <Link
                to={item === "home" ? "/" : `/${item}`}
                className="no-underline text-[#626262]"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
              {menu === item && (
                <hr className="w-4/5 h-[3px] rounded-lg bg-[#ff4141] border-none" />
              )}
            </li>
          ))}
        </ul>

        {/* Login + Cart */}
        <div className="hidden md:flex items-center gap-20 ">
          <Link to="/login">
            <button className="w-[120px] h-[40px] border border-[#7a7a7a] rounded-full text-[#515151] text-sm font-medium bg-white hover:bg-gray-100 transition">
              Login
            </button>
          </Link>
          <Link to="/cart" className="relative">
            <img src={cart_icon} alt="cart" className="h-[35px]" />
            <div className="w-[20px] h-[20px] flex items-center justify-center rounded-full text-[12px] bg-red-600 text-white absolute -top-2 -right-2">
              {getTotalCartItems()}
            </div>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu}>
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white px-6 pb-4 pt-2 space-y-4">
          <ul className="flex flex-col gap-4 text-[#626262] text-lg font-medium">
            {["home", "mens", "womens", "kids"].map((item) => (
              <li key={item} onClick={() => { setMenu(item); setMobileOpen(false); }}>
                <Link
                  to={item === "home" ? "/" : `/${item}`}
                  className="block"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-6 mt-4">
            <Link to="/login">
              <button className="w-[120px] h-[40px] border border-[#7a7a7a] rounded-full text-[#515151] text-base font-medium bg-[#ff4141] hover:bg-gray-100 transition">
                Login
              </button>
            </Link>
            <Link to="/cart" className="relative flex items-center">
              <img src={cart_icon} alt="cart" className="h-[30px]" />
              <div className="w-[20px] h-[20px] flex items-center justify-center rounded-full text-[12px] bg-red-600 text-white absolute -top-1 -right-2">
                {getTotalCartItems()}
              </div>
              <span className="ml-3 text-base">Cart</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
