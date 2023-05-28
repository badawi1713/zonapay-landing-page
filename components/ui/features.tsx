"use client";
import React from "react";
import { MdPhonelinkRing, MdPointOfSale, MdStickyNote2 } from "react-icons/md";
import { motion } from "framer-motion";

function Features() {
  const data = [
    {
      id: 1,
      title: "Payment Point of Online Bank",
      description:
        "Pembayaran online PLN, PDAM, Topup E-Money, Pulsa, Paket Internet, TV kabel, dan lainnya.",
      icon: <MdPhonelinkRing className="text-blue" fontSize={20} />,
    },
    {
      id: 2,
      title: "Aplikasi Kasir",
      description:
        "Kamu bisa miliki aplikasi kasir untuk tokomu sendiri. Buat data pelanggan, daftar menu, terima pembayaran pelanggan online/offline dan bisa buat diskon.",
      icon: <MdPointOfSale className="text-blue" fontSize={20} />,
    },
    {
      id: 3,
      title: "E-Invoice",
      description:
        "Ayo buat tagihan untuk pelanggan atau komunitasmu. Bisa dibuat untuk sekali pembayaran maupun terjadwal.",
      icon: <MdStickyNote2 className="text-blue" fontSize={20} />,
    },
  ];

  return (
    <section className="bg-gray-50" id="layanan">
      <div className="container mx-auto flex flex-col gap-8 px-8 py-16">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-4 text-center text-2xl font-semibold text-blue"
        >
          Layanan
        </motion.h2>
        <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3">
          {data?.map((item) => (
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1 }}
              key={item.id}
              className="flex h-full max-h-80 w-full flex-col items-center gap-4 rounded-md border border-gray-300 bg-gradient-to-tl from-gradientBlueX to-gradientBlueY p-4 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                {item.icon}
              </div>
              <h5 className="text-xl font-semibold text-white">{item.title}</h5>
              <p className="text-center text-lg text-white">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
