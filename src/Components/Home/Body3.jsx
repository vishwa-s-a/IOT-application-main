/* eslint-disable no-unused-vars */
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Body3() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row custom-background fixed-height2">
        <div
          className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-30 "
          data-aos="fade-right"
        >
          <div className="space-y-12 ml-10 mt-10 ">
            <h1 className="text-8xl font-bold">Get Our App</h1>
            <p className="text-2xl font-normal">
              Monitor Health from your smartphone
            </p>
            <p className="text-2xl font-normal">
              Our SmartHealth app is the easiest way to keep track of your
              health when you're on the go.
            </p>
          </div>
        </div>
        <div className="w-full order-1 md:w-1/2" data-aos="fade-left">
          <img src="images/body3.png" className="w-95 h-90 m-15" alt="#" />{" "}
        </div>
      </div>
    </>
  );
}

export default Body3;
