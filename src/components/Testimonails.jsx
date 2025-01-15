import React from 'react'
import { MdOutlineStar } from "react-icons/md";
import { RiDoubleQuotesL } from "react-icons/ri";

const CustomerTestimonails = [
    {
        name:`Samual John`,
        desig:`Manager`,
        desc:`I got surprised to see the results! This lift is so compact, stylish & it doesn’t feel like there is any change in my apartment. Perfect option for people Residing in Apartments.`
    },
    {
        name:`Samual John`,
        desig:`Manager`,
        desc:`I got surprised to see the results! This lift is so compact, stylish & it doesn’t feel like there is any change in my apartment. Perfect option for people Residing in Apartments.`
    },
    {
        name:`Samual John`,
        desig:`Manager`,
        desc:`I got surprised to see the results! This lift is so compact, stylish & it doesn’t feel like there is any change in my apartment. Perfect option for people Residing in Apartments.`
    },

]

const Testimonails = () => {
  return (
    <>
    <div className='xl:w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-5 mt-16 '>
        {CustomerTestimonails?.map((testi,i)=>(
            <>
            <div className='bg-gray-100 hover:bg-mainbtn hover:text-white duration-200 border text-gray-700 shadow-xl p-5 py-14 rounded-[2rem] aspect-auto flex text-center flex-col gap-1 items-center justify-center relative' key={i}>
                <div className='bg-mainbtn text-white h-16 w-16 rounded-full grid place-items-center absolute -top-5 shadow-lg'><RiDoubleQuotesL className='text-3xl'/></div>
                <p className='text-sm mt-3'>{testi.desc}</p>
                <h4 className='text-xl font-semibold mt-2'>{testi.name}</h4>
               
                <p className='text-sm font-medium'>{testi.desig}</p>
            </div>
            </>
        ))}
    </div>
    </>
  )
}

export default Testimonails