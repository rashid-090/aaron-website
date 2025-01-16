import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineStar } from "react-icons/md";
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CustomerTestimonails = [
  {
    name: "Samual John",
    desig: "Manager",
    desc: "I got surprised to see the results! This lift is so compact, stylish & it doesn’t feel like there is any change in my apartment. Perfect option for people Residing in Apartments.",
  },
  {
    name: "Michael Brown",
    desig: "Engineer",
    desc: "Amazing product and excellent support! The lift blends seamlessly into my house design. Highly recommend this to everyone looking for convenience and style.",
  },
  {
    name: "Emily Davis",
    desig: "Designer",
    desc: "This is a game-changer for apartments! Compact, elegant, and extremely efficient. Couldn’t be happier with the purchase.",
  },
  {
    name: "Chris Wilson",
    desig: "Architect",
    desc: "This lift is an incredible addition! Stylish, compact, and highly efficient. My clients love it too. Great job!",
  },
];

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
  <button
    className="absolute z-20 left-0  top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-mainbtn to-mainbtnhrv hover:from-mainbtnhrv hover:to-mainbtn duration-200 text-white p-2 rounded-full shadow-lg "
    onClick={onClick}
  >
    <FaArrowLeft />
  </button>
);

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <button
    className="absolute z-20 right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-mainbtn to-mainbtnhrv hover:from-mainbtnhrv hover:to-mainbtn duration-200 text-white p-2 rounded-full shadow-lg "
    onClick={onClick}
  >
    <FaArrowRight />
  </button>
);

const Testimonails = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: (i) => (
      <div className="w-2 h-2 bg-gray-300 hover:bg-mainbtn rounded-full transition-all duration-300 cursor-pointer"></div>
    ),
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <ul className="flex">{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="xl:w-11/12 mx-auto mt-8 relative">
      <Slider {...settings}>
        {CustomerTestimonails.map((testi, i) => (
          <div key={i} className="p-5 z-10">
            <div className="bg-gray-50 hover:bg-gray-100 duration-200 border border-gray-100 text-gray-700 shadow-md hover:shadow-lg p-5 py-10 rounded-[2rem] flex flex-col text-center gap-1 items-center justify-center relative">
              <div className="bg-gradient-to-r from-mainbtn to-mainbtnhrv text-mainclr h-16 w-16 rounded-full grid place-items-center absolute -top-5 shadow-lg">
                <RiDoubleQuotesL className="text-3xl" />
              </div>
              <p className="text-xs mt-3 text-gray-500">"{testi.desc}"</p>
              <div className="flex items-center gap-2 mt-2">
                <h4 className="text-base font-semibold">{testi.name}</h4>-
                <p className="text-xs font-light">{testi.desig}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonails;
