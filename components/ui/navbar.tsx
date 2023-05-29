"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [animateHeader, setAnimateHeader] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Prevent scrolling when sidebar is open
      document.documentElement.style.overflow = "hidden";
    } else {
      // Restore scrolling when sidebar is closed
      document.documentElement.style.overflow = "auto";
    }
  };

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
      className={`trasition ${
        isOpen ? "relative" : "sticky"
      } top-0 z-20 w-full duration-500 ease-in-out lg:fixed ${
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
        <ul className="ml-auto hidden items-center gap-8 md:flex">
          {/* <ul className="ml-auto flex items-center gap-3 md:gap-8"> */}
          <li
            className={`text-xs md:text-sm md:font-medium ${
              animateHeader ? "text-primary1" : "text-white"
            } lg:text-lg`}
          >
            <a href={"#tentang-kami"}>Tentang Kami</a>
          </li>
          <li
            className={`text-xs md:text-sm md:font-medium ${
              animateHeader ? "text-primary1" : "text-white"
            } lg:text-lg`}
          >
            <a href={"#layanan"}>Layanan</a>
          </li>
          <li
            className={`text-xs md:text-sm md:font-medium ${
              animateHeader ? "text-primary1" : "text-white"
            } lg:text-lg`}
          >
            <a href={"#kontak"}>Kontak</a>
          </li>
        </ul>
        <button onClick={toggleSidebar} className="ml-auto md:hidden">
          <HiMenu
            fontSize={32}
            className={`text-xl ${
              animateHeader ? "text-primary1" : "text-white"
            }`}
          />
        </button>
      </div>
      {isOpen && (
        <div className="fixed right-0 top-0 h-full w-full transition">
          <AnimatePresence>
            <motion.section
              initial={{ x: 1000 }}
              animate={{ x: isOpen ? 0 : 1000 }}
              exit={{ x: 1000 }}
              transition={{ duration: 0.7 }}
              className="absolute right-0 top-0 z-10 flex h-full w-2/4 flex-col gap-8 overflow-auto bg-white p-3 transition md:w-1/4"
            >
              <header className="flex w-full items-center justify-between gap-3">
                <Image
                  className="mt-1.5"
                  src={"/assets/images/img-logo-horizontal.png"}
                  alt="logo"
                  width={64}
                  height={40}
                />
                <button onClick={toggleSidebar} className="ml-auto">
                  <HiOutlineX fontSize={24} />
                </button>
              </header>
              <ul className="flex flex-col gap-3">
                <li className="hover:text-primary1 md:font-medium">
                  <a onClick={toggleSidebar} href={"#tentang-kami"}>
                    Tentang Kami
                  </a>
                </li>
                <li className="hover:text-primary1 md:font-medium">
                  <a onClick={toggleSidebar} href={"#layanan"}>
                    Layanan
                  </a>
                </li>
                <li className="hover:text-primary1 md:font-medium">
                  <a onClick={toggleSidebar} href={"#kontak"}>
                    Kontak
                  </a>
                </li>
              </ul>
            </motion.section>
          </AnimatePresence>

          <div
            onClick={toggleSidebar}
            className="absolute left-0 top-0 h-full w-full bg-black opacity-30"
          />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
