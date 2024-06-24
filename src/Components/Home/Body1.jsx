/* eslint-disable no-unused-vars */
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Body1() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row custom-background fixed-height1">
        <div
          className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-30  "
          data-aos="fade-right"
        >
          <div className="space-y-12 mr-4 mt-10 ">
            <h1 className="try">
              ISAACS - Smartheart Electronics
            </h1>
            <p className="try">
              Empowering those with Alzhiemer's and Parkinson's, our products
              blend innovation with empathy, providing practical solutions for
              daily challenges
            </p>
          </div>
          <div className="but_main flex flex-col md:flex-row items-center">
          <button className="cbtn">
            Internship
          </button>
          <button className="cbtn">
            Training
          </button>
          </div>
        </div>
        <div className="w-full order-1 md:w-1/2 mr-5" data-aos="fade-left">
          <img src="images/body1.png" className="rel" alt="#" />{" "}
        </div>
      </div>
    </>
  );
}

export default Body1;
