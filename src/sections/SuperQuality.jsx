import React from "react";
import Button from "../components/Button";
import {shoe8} from "../assets/images";


const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize  font-bold  max-lg:max-w-lg">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 ">
            We provide you</span><span className="text-coral-red "> Super</span>
          <span className="text-coral-red ">Quality</span> Shoes
        </h2>
        <p className="mt-4  lg:max-w-lg info-text ">
          Ensuring the premium comfort and style, our meticulously crafted
          footwear is designed to elevated your experience, providing you with
          unmatched quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedications to details and excellence ensure your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex justify-center items-center flex-1 ">
        <img src={shoe8} alt="Shoe8" width={570} height={522} className="object-contain" />
      </div>
    </section>
  );
};

export default SuperQuality;
