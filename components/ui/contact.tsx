"use client";
import { MdEmail, MdHomeWork, MdPhoneAndroid } from "react-icons/md";
import { motion } from "framer-motion";

function Contact() {
  const data = [
    {
      id: 1,
      title: "Alamat",
      description: (
        <address>
          <p className="not-italic">
            Graha Bukopin lt. 7. Jl. Panglima Sudirman no. 10-18, Genteng
            Surabaya
          </p>
        </address>
      ),
      icon: <MdHomeWork className="text-primary1" fontSize={32} />,
    },
    {
      id: 2,
      title: "E-Mail",
      description: (
        <a className="hover:text-blue" href="mailto:support@intilink.com">
          support@intilink.com
        </a>
      ),
      icon: <MdEmail className="text-primary1 " fontSize={32} />,
    },
    {
      id: 3,
      title: "Telepon",
      description: (
        <a className="hover:text-blue" href="https://wa.me/6281257584886">
          +62 812 5758 4886
        </a>
      ),
      icon: <MdPhoneAndroid className="text-primary1 " fontSize={32} />,
    },
  ];

  return (
    <section className="bg-white" id="kontak">
      <div className="container mx-auto flex flex-col gap-8 px-8 py-16">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-4 text-center text-2xl font-semibold text-primary1"
        >
          Kontak Kami
        </motion.h2>
        <div className="flex w-full flex-col gap-4 lg:flex-row">
          {data?.map((item) => (
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.7 }}
              key={item.id}
              className={`flex h-full max-h-80 w-full flex-col items-center gap-4   p-4
        `}
            >
              <div>{item.icon}</div>
              <h5 className="text-xl font-semibold text-primary1">
                {item.title}
              </h5>
              {item.description}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
