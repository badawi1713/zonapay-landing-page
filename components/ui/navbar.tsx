"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";

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
        <a href="#">
          <Image
            className="mt-1.5 block h-auto lg:hidden"
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
            className="mt-1.5 hidden h-auto lg:block 2xl:hidden"
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
            className="mt-1.5 hidden h-auto 2xl:block"
            src={
              animateHeader
                ? "/assets/images/img-logo-horizontal.png"
                : "/assets/images/img-logo-horizontal-white.png"
            }
            alt="logo"
            width={130}
            height={50}
          />
        </a>
        {/* <ul className="ml-auto hidden items-center gap-8 md:flex"> */}
        <ul className="ml-auto flex items-center gap-3 md:gap-8">
          <li
            className={`text-xs md:text-sm md:font-medium ${
              animateHeader ? "text-primary1" : "text-white"
            } 2xl:text-lg`}
          >
            <a href={"#tentang-kami"}>Tentang Kami</a>
          </li>
          <li
            className={`text-xs md:text-sm md:font-medium ${
              animateHeader ? "text-primary1" : "text-white"
            } 2xl:text-lg`}
          >
            <a href={"#layanan"}>Layanan</a>
          </li>
          <li
            className={`text-xs md:text-sm md:font-medium ${
              animateHeader ? "text-primary1" : "text-white"
            } 2xl:text-lg`}
          >
            <a href={"#kontak"}>Kontak</a>
          </li>
        </ul>
        {false && (
          <button className="ml-auto md:hidden">
            <HiMenu
              className={`text-xl ${
                animateHeader ? "text-primary1" : "text-white"
              }`}
            />
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
