"use client";
import React from "react";
import { Button } from "./button";
import Image from "next/image";
import { motion } from "framer-motion";

function Hero() {
  const handleNavigate = () => {
    const url =
      "https://play.google.com/store/apps/details?id=com.zonapay&hl=id-ID";
    window.open(url, "_blank");
  };
  return (
    <header className="relative h-auto overflow-hidden bg-gradient-to-b from-gradientBlueX to-gradientBlueY lg:static lg:max-h-screen lg:min-h-screen">
      <div
        className="absolute top-0 z-0 hidden h-full w-full overflow-hidden bg-contain bg-no-repeat opacity-30 lg:right-0 lg:flex"
        style={{
          backgroundPosition: "150% 100%",
          backgroundImage: "url('/assets/images/icon-zonapay-logo.svg')",
        }}
      />
      <div className="container relative z-50 flex h-full flex-col gap-0 py-8 lg:h-screen lg:flex-row lg:items-center lg:justify-center lg:pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="mb-4 text-2xl font-bold text-white lg:w-2/3 lg:text-4xl 2xl:text-5xl">
            Aplikasi untuk Semua Pembayaran
          </h2>
          <h5 className="mb-8 w-full font-light text-white xs:w-4/6 lg:w-2/3 2xl:text-xl">
            Pakai Zonapay, bebas bayar apa saja dan menguntungkan!
          </h5>
          <Button onClick={handleNavigate} className="w-full xs:w-auto">
            Download Sekarang
          </Button>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7 }}
          className="hidden aspect-auto shrink-0 lg:flex xl:hidden"
        >
          <Image
            src={"/assets/images/img-mobile-preview-2.png"}
            className="animate-float"
            width={280}
            height={380}
            alt="zonapay-preview-2"
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7 }}
          className="hidden aspect-auto shrink-0 xl:flex 2xl:hidden"
        >
          <Image
            src={"/assets/images/img-mobile-preview-2.png"}
            className="animate-float"
            width={360}
            height={400}
            alt="zonapay-preview-2"
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7 }}
          className="hidden aspect-auto shrink-0 2xl:block"
        >
          <Image
            src={"/assets/images/img-mobile-preview-2.png"}
            className="animate-float"
            width={460}
            height={480}
            alt="zonapay-preview-2"
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className="md:[180px] bottom-0 right-8 hidden h-[150px] w-[120px] bg-cover bg-no-repeat xs:absolute xs:block sm:h-[180px] sm:w-[130px] md:h-[180px] md:w-[190px] lg:relative lg:hidden"
        style={{
          backgroundImage: "url('/assets/images/img-mobile-preview.png')",
        }}
      />
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto h-[220px] w-3/4 bg-cover bg-no-repeat xs:hidden"
        style={{
          backgroundImage: "url('/assets/images/img-mobile-preview.png')",
        }}
      />
    </header>
  );
}

export default Hero;
