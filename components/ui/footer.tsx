import Image from "next/image";
import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-gradientBlueX">
      <div className="container px-8 py-14">
        <section className="flex flex-col justify-between gap-8 lg:flex-row">
          <div className="flex gap-8">
            <div className="flex flex-col gap-3">
              <h6 className="text-md text-white">Kontak Kami</h6>
              <p className="text-sm not-italic text-white">
                PT Intilink Multi Biller
              </p>
              <address>
                <p className="text-sm not-italic text-white">
                  Graha Bukopin lt. 7. Jl. Panglima Sudirman no. 10-18, Genteng
                  Surabaya
                </p>
              </address>
              <h6 className="text-sm text-white">
                <a href="mailto:support@intilink.com">support@intilink.com</a>
              </h6>
              <h6 className="text-sm text-white">
                <a href="https://wa.me/6281257584886">+62 812 5758 4886</a>
              </h6>
            </div>
            <div className="hidden flex-col gap-4 md:flex lg:ml-20">
              <a
                className="font-regular text-sm text-white hover:text-primary2"
                href="#tentang-kami"
              >
                Tentang Kami
              </a>
              <a
                className="font-regular text-sm text-white hover:text-primary2"
                href="#layanan"
              >
                Layanan
              </a>
              <a
                className="font-regular text-sm text-white hover:text-primary2"
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
            <p className="text-sm text-white">&copy;{year} - Zonapay</p>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
