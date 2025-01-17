import React from 'react';
import {AaronLogo} from '../assets'
import Marquee from "react-fast-marquee";

const Allclients=[
    {
        clnt:AaronLogo
    },
    {
        clnt:AaronLogo
    },
    {
        clnt:AaronLogo
    },
    {
        clnt:AaronLogo
    },
    {
        clnt:AaronLogo
    },
    {
        clnt:AaronLogo
    },
    {
        clnt:AaronLogo
    },
    {
        clnt:AaronLogo
    },
]
const Clients = () => {
  return (
    <>
    <Marquee className='' gradient="true" gradientColor='white'>
        {Allclients?.map((clt,i)=>(
            <>
            <img className='h-10 xl:h-full xl:aspect-video object-contain mx-5 xl:mx-10' src={clt.clnt} alt="" />
            </>
        ))}
    </Marquee>
    </>
  )
}

export default Clients