import Image from "next/image";
import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-blue">
      <div className="container px-8 py-14">
        <section className="flex flex-col justify-between gap-8 lg:flex-row">
          <div className="flex gap-8">
            <div className="flex flex-col gap-4">
              <address className="text-lg font-semibold not-italic text-white">
                Jl. Taman Surya No. 1 Surabaya
              </address>
              <h6 className="text-lg font-semibold text-white">
                <a href="mailto:support@intilink.com">support@intilink.com</a>
              </h6>
              <h6 className="text-lg font-semibold text-white">
                <a href="https://wa.me/6282136526483">+62 821 3652 6483</a>
              </h6>
            </div>
            <div className="hidden flex-col gap-4 md:flex lg:ml-20">
              <a
                className="font-regular text-lg text-white hover:text-primary2"
                href="#tentang-kami"
              >
                Tentang Kami
              </a>
              <a
                className="font-regular text-lg text-white hover:text-primary2"
                href="#layanan"
              >
                Layanan
              </a>
              <a
                className="font-regular text-lg text-white hover:text-primary2"
                href="#kontak"
              >
                Kontak
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-8 md:items-end">
            <a href="#">
              <Image
                className="block h-auto "
                src={"/assets/images/img-logo-horizontal-white.png"}
                alt="logo"
                width={100}
                height={50}
              />
            </a>
            <p className="text-white">&copy;{year} - Zonapay</p>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
