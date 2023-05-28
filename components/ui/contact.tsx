import { MdEmail, MdHomeWork, MdPhoneAndroid } from "react-icons/md";

function Contact() {
  const data = [
    {
      id: 1,
      title: "Alamat",
      description: (
        <address className="not-italic">Jl. Taman Surya No. 1 Surabaya</address>
      ),
      icon: <MdHomeWork className="text-primary1" fontSize={20} />,
    },
    {
      id: 2,
      title: "Telepon",
      description: (
        <a href="mailto:support@intilink.com">support@intilink.com</a>
      ),
      icon: <MdPhoneAndroid className="text-primary1" fontSize={20} />,
    },
    {
      id: 3,
      title: "E-Mail",
      description: <a href="https://wa.me/6282136526483">+62 821 3652 6483</a>,
      icon: <MdEmail className="text-primary1" fontSize={20} />,
    },
  ];

  return (
    <section className="bg-white" id="kontak">
      <div className="container mx-auto flex flex-col gap-8 px-8 py-16">
        <h2 className="mb-4 text-center text-2xl font-semibold text-primary1">
          Kontak Kami
        </h2>
        <div className="flex w-full flex-col gap-4 lg:flex-row">
          {data?.map((item) => (
            <div
              key={item.id}
              className={`flex h-full max-h-80 w-full flex-col items-center gap-4   p-4
        `}
            >
              <div>{item.icon}</div>
              <h5 className="text-xl font-semibold text-primary1">
                {item.title}
              </h5>
              <p className="text-center text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
