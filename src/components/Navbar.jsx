import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/veda.png";
import cart_icon from "../assets/cart_icon.png";
import { ShopContext } from "../ShopContext";
import { Menu, X } from "lucide-react";

const MENU_ITEMS = ["home", "mens", "womens", "kids"];

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);
  const location = useLocation();

  // Sync menu state with URL path for active highlighting
  useEffect(() => {
    const path = location.pathname.split("/")[1] || "home";
    setMenu(path);
  }, [location]);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  const renderMenuItem = (item, onClickHandler, isMobile = false) => {
    const isActive = menu === item;
    const baseClasses = isMobile
      ? "block py-2 px-3 rounded hover:bg-gray-100 transition"
      : "no-underline hover:text-[#ff4141] transition";

    const activeClasses = isMobile ? "text-[#ff4141]" : "text-[#ff4141]";

    const inactiveClasses = isMobile ? "text-[#626262]" : "text-[#626262]";

    return (
      <li
        key={item}
        onClick={onClickHandler}
        className={
          isMobile
            ? ""
            : "flex flex-col items-center gap-[3px] cursor-pointer font-semibold"
        }
      >
        <Link
          to={item === "home" ? "/" : `/${item}`}
          className={`${baseClasses} ${
            isActive ? activeClasses : inactiveClasses
          }`}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </Link>
        {!isMobile && isActive && (
          <hr className="w-4/5 h-[3px] rounded-lg bg-[#ff4141] border-none" />
        )}
      </li>
    );
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-20 shadow-md bg-white z-50">
      <div className="flex justify-between items-center px-4 md:px-6 py-4 max-w-7xl mx-auto h-full">
        {/* Logo */}
        <div className=" cursor-pointer">
          <img src={logo} alt="logo" className="h-20 w-50" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-[#626262] text-base font-medium">
          {MENU_ITEMS.map((item) => renderMenuItem(item, () => setMenu(item)))}
        </ul>

        {/* Login + Cart - Desktop */}
        <div className="hidden md:flex items-center gap-10">
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
        <div className="md:hidden flex items-center ">
          <button
            onClick={toggleMobileMenu}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 rounded"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="md:hidde bg-white px-6 pb-6 pt-4 space-y-6 border-t border-gray-200 shadow-sm">
          <ul className="flex flex-col gap-6 text-[#626262] text-lg font-medium">
            {MENU_ITEMS.map((item) =>
              renderMenuItem(
                item,
                () => {
                  setMenu(item);
                  setMobileOpen(false);
                },
                true
              )
            )}
          </ul>

          <div className="flex flex-col gap-6 mt-6">
            <Link to="/login">
              <button className="w-40 h-12 border border-[#7a7a7a] rounded-full text-[#515151] text-base font-medium bg-[#ff4141] hover:bg-red-600 transition text-white">
                Login
              </button>
            </Link>
            <Link to="/cart" className="flex items-center gap-3">
              <div className="relative">
                <img src={cart_icon} alt="cart" className="h-8 w-8" />
                <div className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center rounded-full text-xs bg-red-600 text-white">
                  {getTotalCartItems()}
                </div>
              </div>
              <span className="text-base">Cart</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
