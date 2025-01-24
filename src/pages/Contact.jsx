import React from 'react'
import { Ban1 } from '../assets'
import { ContactForm } from '../components'

const Contact = () => {
  return (
   <>
   <section className="mt-20 xl:mt-28">
        <div className="relative p-5 py-20 h-full flex justify-center items-center rounded-lg overflow-hidden">
          <img
            className="absolute object-cover top-0 left-0 w-full h-full"
            src={Ban1}
            alt=""
          />
          <div className="absolute bg-[#0000007c] w-full h-full top-0 left-0 p-10"></div>
          <div className="z-20 relative text-white text-center flex flex-col gap-2">
            <h4 className="font-normal text-4xl xl:text-6xl">
            Let's Connect
            </h4>
            <p className="text-xs md:text-sm ">
            Ready to transform your space with a perfect vertical solution? We're just a message away.<br/> Share your requirements, and let's start your journey towards smarter, safer mobility.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
   </>
  )
}

export default Contact