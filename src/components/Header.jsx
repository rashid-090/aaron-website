import React, { useState, useEffect } from "react";
import { AaronLogo } from "../assets";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const navigate = useNavigate();

  const menus = [
    { name: "home", link: "/" },
    { name: "about", link: "/about" },
    { name: "products", link: "/products" },
    { name: "contact us", link: "/contact-us" },
  ];

  const products = [
    { name: "Elevators", link: "/products/elevators" },
    { name: "Escalators", link: "/products/escalators" },
    { name: "Lifts", link: "/products/lifts" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-[96%] mx-auto left-[50%] -translate-x-[50%] z-[999] transition-all duration-300 xl:py-1 rounded-lg ${
        isScrolled
          ? "bg-white backdrop-blur-md top-3"
          : "bg-white backdrop-blur-md top-6"
      }`}
    >
      <div className="px-3 py-2 flex items-center justify-between">
        <img
          className="h-10 w-28 md:h-12 md:w-32 rounded-lg object-contain"
          src={AaronLogo}
          alt="Logo"
        />
        <div className="flex items-center gap-16">
          <ul className="hidden lg:flex gap-10 text-sm tracking-wider font-light text-black">
            {menus.map((menu, index) => (
              <li
                key={index}
                className="relative hover:cursor-pointer py-4 hover:text-mainbtn duration-100"
                onMouseEnter={() =>
                  menu.name === "products" && setIsDropdownVisible(true)
                }
                onMouseLeave={() =>
                  menu.name === "products" && setIsDropdownVisible(false)
                }
              >
                {menu.name
                  .toLowerCase()
                  .replace(/^./, (firstChar) => firstChar.toUpperCase())}

                {/* Dropdown for Products */}
                {menu.name === "products" && isDropdownVisible && (
                  <ul
                    className="absolute top-2 left-0 bg-white shadow-lg rounded-lg p-3 space-y-2 opacity-0 animate-fadeIn"
                    onMouseEnter={() => setIsDropdownVisible(true)}
                    onMouseLeave={() => setIsDropdownVisible(false)}
                  >
                    {products.map((product, i) => (
                      <li
                        key={i}
                        onClick={() => navigate(product.link)}
                        className="hover:text-mainbtn hover:cursor-pointer"
                      >
                        {product.name}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <button className="bg-mainbtn border-2 border-mainbtn text-white hover:text-white rounded-lg duration-150 px-3 text-sm py-2">
            <Link>CALL NOW</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
