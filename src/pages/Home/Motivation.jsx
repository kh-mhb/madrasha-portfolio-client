import React from "react";
import mission from "../../assets/mission.jpg";
import value from "../../assets/value.jpg";
import collaboration from "../../assets/collaboration.jpg";
import vision from "../../assets/vision.png";

const Motivation = () => {
  return (
    
      
      <section className=" my-20">
        <div className="text-center py-5 mt-10">
          <h1 className="sm:text-3xl text-3xl  border-y-4 lg:w-1/3 mx-auto py-3 font-medium title-font mb-4 text-gray-900">
            Our Mission & Vission
          </h1>
        </div>

        <div className="flex flex-wrap justify-center mx-auto md:flex-nowrap">
          <a>
            <div className="flex w-full">
              <div className="relative flex flex-col items-start m-1 transition duration-400 ease-in-out delay-150 transform bg-white  shadow-xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <img
                  className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                  src={vision}
                  alt="blog"
                />
                <div className="px-2 py-8">
                  <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                    <span className="">Vision</span>
                  </h4>
                  <p className="mt-4 text-base font-normal text-gray-500 leading-relax">
                    Install Tailwind CSS without any Javascript Framewrok
                    locally with purgeCSS, enable the dark mode option,
                    prefferences or class is upt to you.
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a>
            <div className="flex w-full">
              <div className="relative flex flex-col items-start m-1 transition duration-400 ease-in-out delay-150 transform bg-white  shadow-xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <img
                  className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                  src={mission}
                  alt="blog"
                />
                <div className="px-6 py-8">
                  <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                    <span className="">Mission</span>
                  </h4>
                  <p className="mt-4 text-base font-normal text-gray-500 leading-relax">
                    Install Tailwind CSS without any Javascript Framewrok
                    locally with purgeCSS, enable the dark mode option,
                    prefferences or class is upt to you.
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a>
            <div className="flex w-full">
              <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white  shadow-xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <img
                  className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                  src={value}
                  alt="blog"
                />
                <div className="px-6 py-8">
                  <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                    <span className="">Value</span>
                  </h4>
                  <p className="mt-4 text-base font-normal text-gray-500 leading-relax">
                    Install Tailwind CSS without any Javascript Framewrok
                    locally with purgeCSS, enable the dark mode option,
                    prefferences or class is upt to you.
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a>
            <div className="flex w-full">
              <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white  shadow-xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <img
                  className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                  src={collaboration}
                  alt="blog"
                />
                <div className="px-6 py-8">
                  <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                    <span className="">Collaboration</span>
                  </h4>
                  <p className="mt-4 text-base font-normal text-gray-500 leading-relax">
                    Install Tailwind CSS without any Javascript Framewrok
                    locally with purgeCSS, enable the dark mode option,
                    prefferences or class is upt to you.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

  )
}

export default Motivation;
