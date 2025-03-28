import React from 'react'
import { Ban1 } from '../assets'
import { ContactForm } from '../components'

const Contact = () => {
  return (
   <>
   <section className="mt-20">
           <div className="relative p-5 py-20 h-full flex justify-center items-center rounded-lg overflow-hidden">
             {/* <img
               className="absolute object-cover top-0 left-0 w-full h-full"
               src={Ban1}
               alt=""
             /> */}
             <div className="absolute bg-[#fff] w-full h-full top-0 left-0 p-10 "></div>
             <div className="z-20 relative text-white text-center grid grid-cols-1 md:grid-cols-2 gap-2 w-full md:w-[70%] rounded-2xl border-[5px] shadow-2xl border-gray-200 p-5">
               <div className="flex flex-col justify-center items-start text-center  gap-2 md:text-left md:pl-10">
                 <h4 className="font-normal text-4xl   xl:text-6xl text-mainbtn">
                   Get a Free  Consultation
                 </h4>
                 <p className="text-xs md:text-sm text-black ">
                   Take the first step towards superior vertical mobility.   Contact
                   Kerala's trusted elevation experts for a consultation.
                 </p>
               </div>
               <div>
                 <ContactForm />
   
               </div>
             </div>
           </div>
         </section>
   </>
  )
}

export default Contact