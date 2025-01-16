import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Lft1, Lft2, Lft3, Lft4 } from "../assets";

const OurProducts = [
  {
    name: `Modal 1`,
    disc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cum facilis`,
    prodimage: Lft1,
  },
  {
    name: `Modal 2`,
    disc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cum facilis`,
    prodimage: Lft2,
  },
  {
    name: `Modal 3`,
    disc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cum facilis`,
    prodimage: Lft3,
  },
  {
    name: `Modal 4`,
    disc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cum facilis`,
    prodimage: Lft4,
  },
  {
    name: `Modal 1`,
    disc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cum facilis`,
    prodimage: Lft1,
  },
  {
    name: `Modal 2`,
    disc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cum facilis`,
    prodimage: Lft2,
  },
  {
    name: `Modal 3`,
    disc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cum facilis`,
    prodimage: Lft3,
  },
  {
    name: `Modal 4`,
    disc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cum facilis`,
    prodimage: Lft4,
  },
];

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
  <button
    className="absolute -left-2 z-20 top-1/2 transform -translate-y-1/2 bg-mainbtn text-white p-2 rounded-full shadow-lg hover:bg-mainbtnhrv"
    onClick={onClick}
  >
    <FaArrowLeft />
  </button>
);

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <button
    className="absolute -right-2 z-20 top-1/2 transform -translate-y-1/2 bg-mainbtn text-white p-2 rounded-full shadow-lg hover:bg-mainbtnhrv"
    onClick={onClick}
  >
    <FaArrowRight />
  </button>
);

const Products = () => {
  const settings = {
    dots: false,
    arrows:false,
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
          slidesToShow: 2,
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
    <div className="mt-8 relative">
      <Slider {...settings}>
        {OurProducts.map((prod, i) => (
          <div key={i} className="p-1 z-10">
            <div className="relative group overflow-hidden bg-gray-100 shadow">
              {/* Product Image */}
              <img
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                src={prod.prodimage}
                alt={prod.name}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 text-white">
                <h3 className="text-xl xl:text-2xl 2xl:text-3xl font-semibold group-hover:translate-y-0 transform -translate-y-full transition-transform duration-500 group-hover:text-mainbtn">
                  {prod.name}
                </h3>
                <p className="text-xs my-3 group-hover:translate-y-0 transform translate-y-full transition-transform duration-500">
                  {prod.disc}
                </p>
                <button className="w-fit border hover:border-mainbtn capitalize hover:bg-mainbtn duration-150 px-3 py-1 text-sm group-hover:translate-y-0 transform translate-y-full transition-transform duration-500">
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
