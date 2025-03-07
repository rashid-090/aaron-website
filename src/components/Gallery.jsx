import React, { useState } from "react";
import { LiftvidPost, Lft3, Lft2, Ban1, mainlift } from "../assets";

const GalleryComponent = () => {
  const [mainImage, setMainImage] = useState(LiftvidPost);

  const images = [mainlift, Lft3, Ban1];

  return (
    <div className="flex flex-col items-center w-full  mx-auto p-4">
      {/* Main Image */}
      <img
        src={mainImage}
        alt="Main"
        className="w-full aspect-video object-cover h-auto rounded-lg shadow-lg mb-4"
      />

      {/* Thumbnails */}
      <div className="flex w-full  justify-center space-x-4  py-2 ">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setMainImage(img)}
            className="h-12 w-12 md:h-28 md:w-28 cursor-pointer rounded-md lg:rounded-md hover:scale-110 transition-transform duration-200"
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryComponent;
