"use client";
import Image from "next/image";
import { HiMenu } from "react-icons/hi";
import { useState, useEffect } from "react";

function Navbar() {
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 80) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <nav
      className={`trasition sticky top-0 z-20 w-full duration-500 ease-in-out lg:fixed ${
        animateHeader
          ? "bg-white shadow-xl"
          : " bg-gradientBlueX lg:bg-transparent"
      }`}
    >
      <div className="container flex items-center py-3 md:py-4">
        {/* <h1 className="text-xl text-white md:text-3xl">Zonapay</h1> */}
        <Image
          className="mt-1.5 block lg:hidden"
          src={
            animateHeader
              ? "/assets/images/img-logo-horizontal.png"
              : "/assets/images/img-logo-horizontal-white.png"
          }
          alt="logo"
          width={80}
          height={40}
        />
        <Image
          className="mt-1.5 hidden lg:block 2xl:hidden"
          src={
            animateHeader
              ? "/assets/images/img-logo-horizontal.png"
              : "/assets/images/img-logo-horizontal-white.png"
          }
          alt="logo"
          width={100}
          height={50}
        />
        <Image
          className="mt-1.5 hidden 2xl:block"
          src={
            animateHeader
              ? "/assets/images/img-logo-horizontal.png"
              : "/assets/images/img-logo-horizontal-white.png"
          }
          alt="logo"
          width={130}
          height={50}
        />
        <ul className="ml-auto hidden items-center gap-8 md:flex">
          <li
            className={`text-sm font-medium ${
              animateHeader ? "text-primary1" : "text-white"
            } 2xl:text-lg`}
          >
            Services
          </li>
          <li
            className={`text-sm font-medium ${
              animateHeader ? "text-primary1" : "text-white"
            } 2xl:text-lg`}
          >
            About Us
          </li>
          <li
            className={`text-sm font-medium ${
              animateHeader ? "text-primary1" : "text-white"
            } 2xl:text-lg`}
          >
            Contact
          </li>
        </ul>
        <button className="ml-auto md:hidden">
          <HiMenu
            className={`text-xl ${
              animateHeader ? "text-primary1" : "text-white"
            }`}
          />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
