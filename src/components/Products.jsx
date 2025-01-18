import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Lft1, Lft2, Lft3, Lft4 } from "../assets";

const OurProducts = [
  {
    name: `Home Elevators`,
    disc: `Custom-designed solutions perfect for residential spaces`,
    prodimage: Lft1,
  },
  {
    name: `Passenger Elevators`,
    disc: `Efficient people movers for commercial buildings`,
    prodimage: Lft2,
  },
  {
    name: `Commercial Elevators`,
    disc: `High-capacity solutions for business environments`,
    prodimage: Lft3,
  },
  {
    name: `Structural Elevators`,
    disc: `Robust systems for industrial applications`,
    prodimage: Lft4,
  },
  {
    name: `Capsule Elevators`,
    disc: `Modern panoramic lifting solutions`,
    prodimage: Lft1,
  },
  {
    name: `Glass Elevators`,
    disc: `Elegant, transparent vertical transportation`,
    prodimage: Lft2,
  },
  {
    name: `Car Elevators`,
    disc: `Specialized solutions for automotive transportation`,
    prodimage: Lft3,
  },
  {
    name: `Hospital Elevators`,
    disc: `Medical-grade elevation systems`,
    prodimage: Lft4,
  },
  {
    name: `Freight Elevators`,
    disc: `Heavy-duty cargo transportation`,
    prodimage: Lft1,
  },
  {
    name: `Dumbwaiter Elevators`,
    disc: `Compact service lifting solutions`,
    prodimage: Lft1,
  },
  {
    name: `Kitchen Elevators`,
    disc: `Specialized food service transportation`,
    prodimage: Lft2,
  },
  {
    name: `MRL Elevators`,
    disc: `Space-saving machine room-less systems`,
    prodimage: Lft3,
  },
];

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
  <button
    className="absolute right-12 z-20 -bottom-14 transform -translate-y-1/2  p-2 px-3 rounded-lg shadow-lg bg-mainbtn text-white"
    onClick={onClick}
  >
    <FaArrowLeft />
  </button>
);

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-0 z-20 -bottom-14 transform -translate-y-1/2  p-2 px-3 rounded-lg shadow-lg bg-mainbtn text-white"
    onClick={onClick}
  >
    <FaArrowRight />
  </button>
);

const Products = () => {
  const settings = {
    dots: false,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
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
        <ul className="flex gap-0">{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024, // For tablets and smaller devices
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640, // For mobile devices
        settings: {
          slidesToShow: 2,
          arrows:true,
        },
      },
    ],
  };

  return (
    <div className="mt-5 relative">
      <Slider {...settings}>
        {OurProducts.map((prod, i) => (
          <div key={i} className="p-1 z-10">
            <div className="relative group overflow-hidden bg-gray-100 shadow rounded-lg text-left">
              {/* Product Image */}
              <img
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                src={prod.prodimage}
                alt={prod.name}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent 0 transition-opacity duration-500 flex flex-col justify-end p-4 xl:p-8 text-white">
                <h3 className="text-lg xl:text-2xl xl:pr-40 font-medium text-mainbtn">
                  {prod.name}
                </h3>
                <p className="text-[10px] md:text-xs my-1 md:my-3 ">
                  {prod.disc}
                </p>
                <button className="w-fit border hover:border-mainbtn capitalize hover:bg-mainbtn px-3 py-1 text-[10px] md:text-sm ">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Products;
