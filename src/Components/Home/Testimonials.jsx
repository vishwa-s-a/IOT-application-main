/* eslint-disable no-unused-vars */
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Testimonials() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="w-full  order-1 md:w-1/2" data-aos="fade-right">
          <img src="images/testimonials.png" className="w-90 h-85 m-15" alt="#" />{" "}
        </div>
        <div
          className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-30 "
          data-aos="fade-left"
        >
          <div className="space-y-12 mr-4 mt-10 ">
            <h1 className="text-6xl font-bold">Testimonials </h1>
            <h1 className="text-2xl font-medium">Feedback makes bond stronger</h1>
          </div>
          <div className="mt-20">
          <button className="btn btn-secondary my-6 mr-5 hover:bg-black hover:text-white text-xl">
            Feedback
          </button>
          <button className="btn btn-secondary my-6 hover:bg-black hover:text-white text-xl">
            Reviews
          </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
