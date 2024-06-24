// eslint-disable-next-line no-unused-vars
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Team() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 md:flex-row">
        <h1 className=" teamHead text-7xl mb-4" data-aos="fade-up">
          Directors & Advisors
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 " data-aos="fade-up">
          {/* Director1 */}
          <div className="mt-4 m-3 ">
            <div className="card w-92 p-5 hover:scale-105 duration-200 dark:border  ">
              <figure>
                <img src="images/director1.png" alt="img" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Dr. Shobha</h2>
                <p>Director, Design Engineer </p>
                <div className="card-actions justify-between"></div>
              </div>
            </div>
          </div>
          {/* Director2 */}
          <div className="mt-4 m-3">
            <div className="card w-92 p-5 hover:scale-105 duration-200 dark:border  ">
              <figure>
                <img src="images/director2.png" alt="img" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Mr. Haron Abe</h2>
                <p>Director, Business Analyst </p>
                <div className="card-actions justify-between"></div>
              </div>
            </div>
          </div>

          {/* Advisors  */}

          <div className="mt-4 m-3">
            <div className="card w-92 p-5 hover:scale-105 duration-200 dark:border  ">
              <figure>
                <img src="images/advisor1.png" alt="img" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Dr.Arun</h2>
                <p>Advisor, CEO, LAMED labs Clinical Consultant </p>
                <div className="card-actions justify-between"></div>
              </div>
            </div>
          </div>
          <div className="mt-4 m-3">
            <div className="card w-92 p-5 hover:scale-105 duration-200 dark:border  ">
              <figure>
                <img src="images/advisor2.png" alt="img" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Dr. AudsinDhas</h2>
                <p>Advisor, Executive Dean, University of Wales, London </p>
                <div className="card-actions justify-between"></div>
              </div>
            </div>
          </div>

          <div className="mt-4 m-3">
            <div className="card w-92 p-5 hover:scale-105 duration-200 dark:border  ">
              <figure>
                <img src="images/advisor3.png" alt="img" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Dr.JayaMariappanam</h2>
                <p>Adviosr, CEO, Samatva Wealth Management LLC, USA </p>
                <div className="card-actions justify-between"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
