import React from "react";
import { MdCall } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const ContactForm = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-mainbtn to-mainbtnhrv2 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 xl:w-10/12  text-white h-full mx-auto">
          <div className="h-full flex flex-col gap-8 justify-center py-10 xl:py-14">
            <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                    <div className="text-xl"><MdCall/></div>
                    <h4 className="uppercase text-lg tracking-wider font-semibold">Call us</h4>
                </div>
                <a href="#" className="text-sm">(234) 567-891, 1 (234) 987-654</a>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                    <div className="text-xl"><MdLocationPin/></div>
                    <h4 className="uppercase text-lg tracking-wider font-semibold">location</h4>
                </div>
                <p>121 Rock Steet. 21 Avenue, New York. NY92103-9000</p>
            </div>
            <div className="flex items-center text-2xl gap-5">
                <div className="bg-white hover:bg-black hover:text-white duration-200 cursor-pointer text-mainbtn h-10 w-10 grid place-items-center rounded-full"><FaFacebook/></div>
                <div className="bg-white hover:bg-black hover:text-white duration-200 cursor-pointer text-mainbtn h-10 w-10 grid place-items-center rounded-full"><IoIosMail/></div>
                <div className="bg-white hover:bg-black hover:text-white duration-200 cursor-pointer text-mainbtn h-10 w-10 grid place-items-center rounded-full"><FaLinkedin/></div>
                <div className="bg-white hover:bg-black hover:text-white duration-200 cursor-pointer text-mainbtn h-10 w-10 grid place-items-center rounded-full"><FaWhatsappSquare/></div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white shadow-2xl  border-2 rounded-0 w-full p-7 md:p-10 md:absolute top-[50%] left-[50] md:-translate-y-[50%]">
                <h4 className="text-2xl md:text-3xl text-mainclr font-semibold uppercase">contact us</h4>
                <p className="text-sm text-gray-600 pt-2">Take the first step towards superior vertical mobility.<br/> Contact Kerala's trusted elevation experts for a consultation.</p>
                <form className="flex flex-col gap-5 mt-5">
                    <input className="focus:border-mainbtn py-2 border-b w-full" type="text"  placeholder="Full Name"/>
                    <input className="focus:border-mainbtn py-2 border-b  w-full" type="email"  placeholder="Email Address"/>
                    <textarea className="focus:border-mainbtn py-2  border-b w-full" rows="5" placeholder="Message"></textarea>
                    <button className="bg-gradient-to-r from-mainbtn to-mainbtnhrv hover:from-mainbtn hover:to-mainbtn transition-all duration-500 ease-in-out text-white w-fit px-10 py-2 xl:py-3 uppercase text-sm">Submit</button> 
                </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
