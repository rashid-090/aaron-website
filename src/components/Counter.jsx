import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaPlus } from "react-icons/fa";


const Counter = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, // 50% of the section must be visible
    triggerOnce: true, // Only trigger once when it appears
  });

  return (
    <div ref={ref} className="w-full  bg-white counter rounded-lg overflow-hidden shadow-[#f7f7f7] text-mainclr">
      {inView && (
        <div className='grid grid-cols-2 xl:grid-cols-4 place-items-center overflow-hidden'>
            <div className='p-3 xl:p-10 relative flex flex-col items-center'>
                 <CountUp className='text-3xl xl:text-4xl font-bold text-mainbtn' start={0} end={1000} suffix='+' />
                 <p className='uppercase text-[10px] md:text-sm font-medium'>Completed Projects</p>
            </div>
            <div className='p-3 xl:p-10 relative flex flex-col items-center'>
                 <CountUp className='text-3xl xl:text-4xl font-bold text-mainbtn' start={0} end={5500} suffix='+' />
                 <p className='uppercase text-[10px] md:text-sm font-medium'>Projects Undertaken</p>
            </div>
            <div className='p-3 xl:p-10 relative flex flex-col items-center'>
                 <CountUp className='text-3xl xl:text-4xl font-bold text-mainbtn' start={0} end={400}  suffix='+'/>
                 <p className='uppercase text-[10px] md:text-sm font-medium'>Ongoing Installations</p>
            </div>
            <div className='p-3 xl:p-10 relative flex flex-col items-center'>
                 <CountUp className='text-3xl xl:text-4xl font-bold text-mainbtn' start={0} end={300}  suffix='+'/>
                 <p className='uppercase text-[10px] md:text-sm font-medium'>Channel Partners</p>
            </div>
        </div>
      )}
    </div>
  );
};

export default Counter;
