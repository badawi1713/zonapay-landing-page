"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="bg-white" id="tentang-kami">
      <div className="container mx-auto flex flex-col-reverse gap-8 px-8 py-16 md:flex-row">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex h-80 w-full flex-col justify-center rounded-sm md:items-center"
        >
          <Image
            className="hidden drop-shadow-xl md:block"
            src={"/assets/images/img-mobile-preview.png"}
            width={170}
            height={300}
            alt="zonapay-preview-2"
          />
          <Image
            className="mx-auto drop-shadow-xl md:hidden"
            src={"/assets/images/img-mobile-preview-2.png"}
            width={280}
            height={320}
            alt="zonapay-preview-2"
          />
        </motion.div>
        <motion.article
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="mb-4 text-2xl font-semibold text-primary1">
            Tentang Kami
          </h2>
          <p className="text-lg">
            Zonapay merupakan produk andalan yang dimiliki{" "}
            <span className="text-secondary1">PT Intilink Multi Biller</span>,
            aplikasi berbasis server untuk melayani pembayaran tagihan seperti;
            PLN, PDAM, Pulsa, dan lainnya. Sangat sesuai untuk UKM karena
            dilengkapi fitur kasir dan pencatatan keuangan.
          </p>
        </motion.article>
      </div>
    </section>
  );
}

export default About;
