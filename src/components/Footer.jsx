import React, { useEffect, useState } from "react";
import { AaronLogo } from "../assets";
import { FaArrowUp, FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const SocialLinks = [
  {
    icon: <FaFacebook />,
    link: `#`,
  },
  {
    icon: <FaInstagram />,
    link: `#`,
  },
  {
    icon: <FaLinkedin />,
    link: `#`,
  },
  {
    icon: <FaWhatsappSquare />,
    link: `#`,
  },
];

const Footer = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      if (scrollTop > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        className={`fixed bottom-4 md:bottom-6 right-4 md:right-6 ${
          visible ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
        style={{ zIndex: 100 }}
      >
        <div
          className="relative"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "0px solid #ddd",
            background: `conic-gradient(#efb13b ${scrollProgress}%, transparent ${scrollProgress}%)`,
          }}
        >
          <button
            onClick={scrollToTop}
            className="absolute top-0 left-0 right-0 bottom-0 mx-auto my-auto w-[35px] h-[35px] bg-[#00000082] backdrop-blur-md text-white rounded-full flex items-center justify-center"
          >
            <MdOutlineKeyboardDoubleArrowUp className="text-white text-xl"/>
          </button>
        </div>
      </div>
      <footer className="md:rounded-b-lg bg-white">
        <div className="w-full py-10 grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10 gap-x-40">
          <div className="flex flex-col items-center justify-center text-center gap-3  ">
            <img
              className="h-10 w-28 md:h-16 md:w-32 object-contain"
              src={AaronLogo}
              alt=""
            />
           
          </div>
          <div className=" flex flex-col items-center">
            <h4 className="font-semibold text-xl xl:text-xl tracking-widest capitalize mb-3 ">
              Quick links
            </h4>
            <div className="text-sm tracking-wider flex flex-col gap-1">
              <a href="#">Home</a>
              <a href="#">Home</a>
              <a href="#">Home</a>
              <a href="#">Home</a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 ">
            <h4 className="font-semibold text-xl tracking-widest uppercase mb-3 ">
              Address
            </h4>
            <p className="text-sm ">
              1234 Elm Street, Suite 567
              <br /> Faketown , AB 98765
            </p>
            <div className="flex gap-3 items-center">
              <div className="text-lg">
                <FaPhone />
              </div>
              <a href="#" className="hover:text-mainbtn">
                +1 800 123-4567
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <div className="text-xl">
                <IoIosMail />
              </div>
              <a href="#" className="hover:text-mainbtn">
                contact@fakemail.com
              </a>
            </div>
          </div>
        </div>
        <div className="w-11/12 xl:w-10/12 py-5  border-t-2 border-[#ffffff43] mx-auto text-sm font-extralight  flex flex-col items-center md:items-start gap-y-5 justify-between md:flex-row gap-1">
          <div className="flex gap-1 text-xs md:text-sm">
            <p>© 2025 Aaronelevators |</p>
            <a
              href="https://dostudio.co.in"
              className="hover:text-mainbtn"
              target="_blank"
            >
              Powered DO Studio
            </a>
          </div>
          <div className="flex gap-5 text-xl">
            {SocialLinks?.map((dt, i) => (
              <a href={dt.link} className="hover:text-white hover:-translate-y-1 duration-200" key={i}>
                {dt.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
