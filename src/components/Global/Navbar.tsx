import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/images/logo.png";
import Link from "next/link";
import AppButton from "./AppButton";
import ChevronDown from "@/assets/svgs/chevron-down.svg";
import menu from "@/assets/images/menu.png";
import close from "@/assets/images/close.png";

function Navbar() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="flex justify-between items-center  bg-secondary text-black px-16 py-4 relative overflow-hidden max-lg:px-4">
      <Image
        src={logo}
        alt="logo"
        className="w-[165px] h-[33px] cursor-pointer"
      />
      <div
        className={`flex gap-8 items-center max-lg:fixed max-lg:flex-col max-lg:bg-secondary max-lg:top-0 ${
          isOpen ? "max-lg:left-0" : "max-lg:left-[100%]"
        } max-lg:w-full max-lg:h-[100vh] max-lg:justify-center transition-all duration-300`}
      >
        <Image
          src={close}
          alt="close"
          onClick={() => setisOpen(false)}
          className="hidden max-lg:flex h-[20px] w-[20px] absolute top-4 right-4"
        />
        <Link
          href="#"
          className="text-black transition-all duration-1000  hover:text-primary text-base max-lg:text-3xl "
        >
          Home
        </Link>
        <Link
          href="#"
          className="text-black transition-all duration-200  hover:text-primary text-base max-lg:text-3xl"
        >
          Experiences
        </Link>
        <Link
          href="#"
          className="text-black transition-all duration-200  hover:text-primary text-base max-lg:text-3xl"
        >
          Guide
        </Link>
        <Link
          href="#"
          className="text-black transition-all duration-200  hover:text-primary text-base max-lg:text-3xl flex items-center gap-2"
        >
          Itinaries
          <Image src={ChevronDown} alt="chevrondown" className="mt-[2px]" />
        </Link>
        <Link
          href="#"
          className="text-black transition-all duration-200  hover:text-primary text-base max-lg:text-3xl"
        >
          FAQ
        </Link>
        <AppButton title="Book a call" />
      </div>
      <Image
        src={menu}
        alt="menu"
        onClick={() => setisOpen(true)}
        className="hidden max-lg:flex h-[30px] w-[30px]"
      />
    </div>
  );
}

export default Navbar;
