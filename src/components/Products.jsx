import React from 'react'
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
  ];


const Products = () => {
  return (
    <>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 xl:gap-5 mt-10">
            {OurProducts?.map((prod, i) => (
              <div
                key={i}
                className="relative group overflow-hidden bg-gray-100 shadow"
              >
                {/* Product Image */}
                <img
                  className="object-cover w-full h-80 xl:h-[500px] transition-transform duration-500 group-hover:scale-110 "
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
                    learn more
                  </button>
                </div>
              </div>
            ))}
          </div>
    </>
  )
}

export default Products