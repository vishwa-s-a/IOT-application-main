/* eslint-disable no-unused-vars */
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Body2() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row custom-background fixed-height2">
        <div className="w-full order-1 md:w-1/2" data-aos="fade-right">
          <img src="images/body2.png" className="w-95 h-95 mt-5 m-15 " alt="#" />{" "}
        </div>
        <div
          className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-30 "
          data-aos="fade-left"
        >
          <div className="space-y-12 mr-4 mt-10 ">
            <h1 className="text-8xl font-bold">
              Built In Analysis To Track Health
            </h1>
            <p className="text-2xl font-normal">
              Use our built-in analytics dashboard to pull valueable insights
              and monitor to the value of your health over time.
            </p>
          </div>
          <button className="btn btn-secondary my-6 mr-5 hover:bg-black hover:text-white text-xl">
            Mental Health
          </button>
          <button className="btn btn-secondary my-6 hover:bg-black hover:text-white text-xl">
            Physical Health
          </button>
        </div>
      </div>
    </>
  );
}

export default Body2;
