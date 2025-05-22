import Image from "next/image";
import React from "react";
import heroImage1 from "@/assets/images/heroImage1.png";
import heroImage2 from "@/assets/images/heroImage2.png";
import heroImage3 from "@/assets/images/heroImage3.png";
import heroImage4 from "@/assets/images/heroImage4.png";
import heroImage5 from "@/assets/images/heroImage5.png";
import heroImage6 from "@/assets/images/heroImage6.png";

import Location from "@/assets/svgs/location.svg";
import Duration from "@/assets/svgs/duration.svg";
import People from "@/assets/svgs/people.svg";
import Trip from "@/assets/svgs/trip.svg";
import World from "@/assets/svgs/world.svg";

function HeroSection() {
  return (
    <div className="w-full py-[120px] bg-secondary px-6 flex flex-col items-center max-md:py-[80px]">
      <div className="flex flex-row justify-between items-center gap-6 max-md:flex-col">
        {/* 1st half */}
        <div className="flex flex-row gap-6 items-center">
          <div className="flex flex-col gap-6">
            <Image
              src={heroImage1}
              alt="heroSectionImage"
              className="cursor-pointer hover:scale-105 transition-all duration-300"
            />
            <Image
              src={heroImage3}
              alt="heroSectionImage"
              className="cursor-pointer hover:scale-105 transition-all duration-300"
            />
          </div>
          <Image
            src={heroImage2}
            alt="heroSectionImage"
            className="cursor-pointer hover:scale-105 transition-all duration-300"
          />
        </div>
        {/* 2nd half */}
        <div className="flex flex-row gap-6 items-center max-md:flex-row-reverse">
          <div className="flex flex-col gap-6">
            <Image
              src={heroImage4}
              alt="heroSectionImage"
              className="cursor-pointer hover:scale-105 transition-all duration-300"
            />
            <Image
              src={heroImage5}
              alt="heroSectionImage"
              className="cursor-pointer hover:scale-105 transition-all duration-300"
            />
          </div>
          <Image
            src={heroImage6}
            alt="heroSectionImage"
            className="cursor-pointer hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-[60px] max-w-[768px]">
        <h1 className="text-primary text-[52px] font-semibold text-center leading-[60px]">
          Balinese Day with a Local Family
        </h1>
        <p className="text-[20px] text-center text-black mt-4">
          Immerse yourself in the heart of Balinese culture by spending a day
          with a local family. This authentic experience offers a unique glimpse
          into daily life, traditions, and the warmth of Balinese hospitality.
        </p>
      </div>

      <div className="w-[98%] mt-20 py-2 border-[#384B4033] border-2 px-8 rounded-4xl grid grid-cols-5 max-xl:grid-cols-3 max-lg:px-0 max-sm:grid-cols-2 max-sm:w-[100%]">
        <div className="px-6 max-sm:px-4 py-4 border-r-1 border-r-[#384B4033] max-xl:border-b-1 max-xl:border-b-[#384B4033] ">
          <div className="flex flex-row items-start">
            <Image src={Location} alt="location" className="mt-[2px]" />
            <div className="flex flex-col items-start ml-4">
              <p className="text-[22px] text-primary font-semibold ">
                Location
              </p>
              <p className="text-[#384B40B2] font-semibold text-[23px] mt-2">
                Kaleki
              </p>
            </div>
          </div>
        </div>
        <div className="px-6 max-sm:px-4 py-4 border-r-1 border-r-[#384B4033] max-xl:border-b-1 max-xl:border-b-[#384B4033] max-sm:border-r-0">
          <div className="flex flex-row items-start">
            <Image src={Duration} alt="location" className="mt-[2px]" />
            <div className="flex flex-col items-start ml-4">
              <p className="text-[22px] text-primary font-semibold ">
                Duration
              </p>
              <p className="text-[#384B40B2] font-semibold text-[23px] mt-2">
                Morning 9-12
              </p>
            </div>
          </div>
        </div>
        <div className="px-6 max-sm:px-4 py-4 border-r-1 border-r-[#384B4033] max-xl:border-b-1 max-xl:border-b-[#384B4033] max-xl:border-r-0">
          <div className="flex flex-row items-start">
            <Image src={People} alt="location" className="mt-[2px]" />
            <div className="flex flex-col items-start ml-4">
              <p className="text-[22px] text-primary font-semibold ">Escapes</p>
              <p className="text-[#384B40B2] font-semibold text-[23px] mt-2">
                8
              </p>
            </div>
          </div>
        </div>
        <div className="px-6 max-sm:px-4 py-4 border-r-1 border-r-[#384B4033] max-xl:col-span-1 max-xl:col-start-1 max-sm:col-start-auto max-sm:border-r-0 max-sm:border-l-1 border-l-[#384b4033]">
          <div className="flex flex-row items-start">
            <Image src={Trip} alt="location" className="mt-[2px]" />
            <div className="flex flex-col items-start ml-4">
              <p className="text-[22px] text-primary font-semibold ">
                Type of trip
              </p>
              <p className="text-[#384B40B2] font-semibold text-[23px] mt-2">
                Private
              </p>
            </div>
          </div>
        </div>
        <div className="px-6 w-full max-sm:px-4 py-4 max-xl:col-span-1 max-xl:col-start-2 max-md:w-[200%] max-sm:col-start-1 max-sm:border-t-1 border-t-[#384B4033]">
          <div className="flex flex-row items-start">
            <Image src={World} alt="location" className="mt-[2px]" />
            <div className="flex flex-col items-start ml-4">
              <p className="text-[22px] text-primary font-semibold ">
                Category
              </p>
              <p className="text-[#384B40B2] font-semibold text-[23px] mt-2">
                Full day trip
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
