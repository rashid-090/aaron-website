import React from "react";
import { Ban1, Lft3, LiftvidPost } from "../assets";

const About = () => {
  return (
    <div className="">
      <div>
        <div className="flex  flex-col gap-5 relative">
          <img
            src={Lft3}
            alt="Main"
            className="w-full aspect-video object-cover h-auto rounded-lg shadow-lg mb-4"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white flex flex-col gap-5">
            <h1 className="text-3xl sm:text-4xl xl:text-6xl font-normal ">
              About Us
            </h1>
            <p className="mx-auto text-sm  font-extralight tracking-wide md:tracking-wide md:w-full  ">
              At Aaron Elevators, we're bringing reliable commercial elevators
              in Kerala to businesses, apartments, and industrial spaces. We
              know how important smooth people movement is in busy buildings,
              and that's why we've been helping property owners with top-quality
              elevator solutions that match their needs perfectly.
            </p>
          </div>
        </div>
        <div className="pt-10 grid grid-cols-1 xl:grid-cols-2 gap-10">
          <div className="flex flex-col  gap-5  h-full  justify-center">
            <h1 className="text-2xl sm:text-3xl xl:text-5xl font-normal ">
              About Aaron Elevators
            </h1>
            <p className="mx-auto text-sm text-left font-extralight tracking-wide md:tracking-wide md:w-full ">
              At Aaron Elevators, we're bringing reliable commercial elevators
              in Kerala to businesses, apartments, and industrial spaces. We
              know how important smooth people movement is in busy buildings,
              and that's why we've been helping property owners with top-quality
              elevator solutions that match their needs perfectly.
            </p>
          </div>
          <div>
            <img
              src={Ban1}
              alt="Main"
              className="w-full aspect-video object-cover h-auto rounded-lg shadow-lg mb-4"
            />
          </div>
        </div>
      </div>
      {/* <div>
        <div className="pt-10">
          <p className="mx-auto text-sm text-left font-extralight tracking-wide md:tracking-wide md:w-full ">
            At Aaron Elevators
          </p>
          <h1 className="text-2xl sm:text-3xl xl:text-5xl font-normal ">
            About Aaron Elevators
          </h1>
          <p className="mx-auto text-sm text-left font-extralight tracking-wide md:tracking-wide md:w-full ">
            At Aaron Elevators, we're bringing reliable commercial elevators in
            Kerala to businesses, apartments, and industrial spaces. We know how
            important smooth people movement is in busy buildings, and that's
            why we've been helping property owners with top-quality elevator
            solutions that match their needs perfectly.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default About;
