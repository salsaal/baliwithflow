import Image from "next/image";
import React from "react";
import aboutImage from "@/assets/images/aboutImage.jpeg";
import aboutLady from "@/assets/images/aboutLady.png";
import buttonLine from "@/assets/svgs/button-line.svg";
function About() {
  return (
    <div className="w-full relative mb-[100px] h-[580px] max-lg:h-auto max-lg:pt-20 overflow-hidden max-md:mb-[40px]">
      <Image
        src={aboutImage}
        alt="about"
        className="absolute top-0 left-0 w-full -z-1 h-full object-cover "
      />
      <div className="flex items-center px-16 h-full max-lg:flex-col  max-lg:items-start max-md:px-6">
        <div className="flex flex-col items-start w-1/2 max-lg:w-[75%] max-md:w-full">
          <h1 className="text-white text-[48px] font-semibold">
            About the Host
          </h1>
          <p className="text-white text-[20px] my-4">
            "I’ve spent 6+ years discovering the real Bali—what most people
            never get to see. I created BaliwithFlow to share that magic with
            escapees who crave meaning, depth, and effortless beauty in every
            detail."
          </p>
          <div className="flex items-center mt-4 gap-6">
            <button className="px-5 py-3 bg-[#FBAD2C] flex  text-white rounded-[15px] cursor-pointer">
              Book Escape{" "}
              <Image src={buttonLine} alt="button" className="ml-2" />
            </button>
            <button className="px-5 py-3 bg-[#ffffff20] flex  text-white rounded-[15px] cursor-pointer border-1 border-white">
              Plan personal trip
            </button>
          </div>
        </div>
        <Image
          src={aboutLady}
          alt="aboutLady"
          className="ml-28 mt-auto max-xl:ml-48 max-lg:ml-0 max-lg:self-end max-lg:h-[400px] max-lg:object-cover relative max-sm:left-[100px]"
        />
      </div>
    </div>
  );
}

export default About;
