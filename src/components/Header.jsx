import React, { useState, useEffect } from "react";
import { AaronLogo } from "../assets";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change based on when the effect should occur
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-[96%] mx-auto left-[50%] -translate-x-[50%]  z-[999] transition-all duration-300 xl:py-1 rounded-lg ${!isScrolled ? "bg-white backdrop-blur-md top-6" : "bg-white backdrop-blur-md top-3"}`}
    >
      <div className="px-3 py-2 flex items-center justify-between">
        <img className="h-10 w-28 md:h-12 md:w-32 rounded-lg object-contain" src={AaronLogo} alt="Logo" />
        <div className="flex items-center gap-16">
          <ul
            className={`hidden lg:flex gap-10 text-sm tracking-wider !capitalize font-light ${
              !isScrolled ? "":""
            } capitalize text-black`}
          >
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>
          <button
            className={`${
              !isScrolled ? "" : ""
            }  bg-mainbtn border-2 border-mainbtn text-white hover:text-white rounded-lg duration-150  px-3  text-sm py-2  `}
          >
            <Link>CALL NOW</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
