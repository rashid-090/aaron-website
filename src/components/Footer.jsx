import React from 'react'
import { AaronLogo } from "../assets";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";


const SocialLinks =[
  {
    icon:<FaFacebook/>,
    link:`#`
  },
  {
    icon:<FaInstagram/>,
    link:`#`
  },
  {
    icon:<FaLinkedin/>,
    link:`#`
  },
  {
    icon:<FaWhatsappSquare/>,
    link:`#`
  },
]

const Footer = () => {
  return (
    <footer className=' bg-gradient-to-r from-gray-800 to-gray-900  backdrop-blur-md text-white'>
      <div className='w-11/12 xl:w-10/12 mx-auto py-10 grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-10 gap-x-40'>
          <div className='flex flex-col gap-3  '>
            <img className="h-10 w-28 md:h-16 md:w-32 object-contain" src={AaronLogo} alt="" />
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cum facilis quisquam nobis eligendi natus earum nisi perspiciatis ut consequatur.</p>
          </div>
          <div className=''>
            <h4 className='font-semibold text-xl xl:text-2xl tracking-widest capitalize mb-3 text-mainbtn'>We Provide</h4>
            <div className='text-sm tracking-wider'>
              <p>Modal Lift a</p>
              <p>Modal Lift b</p>
              <p>Modal Lift c</p>
              <p>Modal Lift d</p>
            </div>
          </div>
          <div className='flex flex-col gap-1 '>
            <h4 className='font-semibold text-xl xl:text-2xl tracking-widest capitalize text-mainbtn'>Address</h4>
            <p className='text-sm mt-3'>1234 Elm Street, Suite 567<br/> Faketown , AB 98765</p>
            <div className='flex gap-3 items-center'>
              <div className='text-lg'><FaPhone/></div>
              <a href="#" className='hover:text-mainbtnhrv'>+1 800 123-4567</a>
            </div>
            <div className='flex gap-3 items-center'>
              <div className='text-xl'><IoIosMail/></div>
              <a href="#" className='hover:text-mainbtnhrv'>contact@fakemail.com</a>
            </div>
          </div>
      </div>
      <div className='w-11/12 xl:w-10/12 py-5  border-t-2 border-[#ffffff43] mx-auto text-sm font-extralight  flex flex-col items-center md:items-start gap-y-5 justify-between md:flex-row gap-1'>
        <div className='flex gap-1'>
          <p>© 2025 Aaronelevators |</p>
          <a href='https://dostudio.co.in' className='hover:text-mainbtnhrv' target='_blank'>Powered DO Studio</a>
        </div>
        <div className='flex gap-5 text-xl'>
          {SocialLinks?.map((dt,i)=>(
            <a href={dt.link} className='hover:text-mainbtnhrv' key={i}>{dt.icon}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer