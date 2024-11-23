"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const handleHireMeClick = () => {
    window.location.href = "mailto:dwilenggani25@gmail.com";
  };
  const handleDownloadCVClick = () => {
    window.open("/documents/Dwi_Lenggani_CV.pdf", "_blank");
  };
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-slate-50 mb-4 text-4xl lg:text-6xl sm:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I am{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Dwi Lenggani",
                1000,
                "Web Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p>
            Hungry but short on time? At Speedy Buns, we know life moves
            fast—that is why we serve up fresh, hot burgers in record time! Our
            quick, no-fuss service means you will be enjoying a juicy burger in
            just minutes. Whether you are grabbing lunch on the go or picking up
            dinner for the family, we have got you covered. 
          </p>

          <div>
            <button
              className="px-6 py-2 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 hover:bg-slate-200 text-slate-50"
              onClick={handleHireMeClick}
            >
              Hire Me
            </button>
            <button className="px-0.5 py-0.5 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-gray-800 mt-3 text-white">
              <span
                className="block bg-[#121212] hover:bg-slate-800 rounded-full px-6 py-2"
                onClick={handleDownloadCVClick}
              >
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-black h-[250px] w-[250px] lg:h-[410px] lg:w-[410px] relative">
            <Image
              className="rounded-full bg-[#060101] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/images/hero-image.png"
              alt="Hero Image"
              width={350}
              height={350}
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
