"use client";
import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/Icons/Menu";
import { useState } from "react";
import Remove from "./Icons/Remove";

function Navbar() {
  const [isOpen, setIsopen] = useState(false);

  return (
    <nav className=" max-w-4xl md:max-w-6xl 2xl:max-w-7xl flex justify-between pr-20 items-center my-8 relative">
      <div className=" flex items-center gap-8">
        <div className="relative w-[117px] h-[34px] lg:w-[176px] lg:h-[51px]">
          <Image
            src={"/logo.svg"}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className=" sm:flex hidden gap-6 font-[500] text-[16px] lg:text-[20px]">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>About Us</Link>
          <Link href={"/"}>Pricing</Link>
          <Link href={"/"}>Features</Link>
        </div>
      </div>
      <button className=" bg-black text-white rounded-md px-6 py-[12px] hidden sm:block  lg:text-[20px] lg:px-8  lg:py-4">
        Download
      </button>

     
      {/* hidden navbar section */}
      <div className="sm:hidden relative w-1/3 flex justify-end">
        <div
          onClick={() => setIsopen((prev) => !prev)}
          className=" cursor-pointer"
        >
          {isOpen ? <Remove /> : <Menu />}
        </div>
        {isOpen && (
          <div className=" sm:hidden flex font-semibold flex-col items-center justify-between bg-black text-white rounded-md w-full  text-[16px] absolute top-10 h-[80vh] px-20 py-10 z-10">
            <div className=" flex flex-col items-center gap-6">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>About Us</Link>
            <Link href={"/"}>Pricing</Link>
            <Link href={"/"}>Features</Link>
            </div>
            <button className=" bg-white text-black rounded-md px-6 py-[12px] sm:hidden ">
        Download
      </button>
          </div>
        )}
      </div>

      <Image src={'/Star.svg'} height={48} width={48} className=" absolute right-0 -bottom-5" />
    </nav>
  );
}

export default Navbar;
