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
      className={`fixed w-full left-0 top-0 z-40 transition-all duration-300 py-3 ${!isScrolled ? "bg-transparent xl:py-5" : "bg-[#0000003d] backdrop-blur-md xl:py-1"}`}
    >
      <div className="w-11/12 xl:w-10/12 mx-auto  flex items-center justify-between">
        <img className="h-10 w-28 md:h-16 md:w-32 object-contain" src={AaronLogo} alt="Logo" />
        <div className="flex items-center gap-16">
          <ul
            className={`hidden lg:flex gap-10 text-sm tracking-wider !uppercase ${
              !isScrolled ? "":""
            } capitalize text-white`}
          >
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
          <button
            className={`${
              !isScrolled ? "" : ""
            }  bg-mainbtn border-2 border-mainbtn text-white hover:text-white  duration-150 rounded-full px-5  text-sm py-2 xl:py-3 `}
          >
            <Link>CONTACT US</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
