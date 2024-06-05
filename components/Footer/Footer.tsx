import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#",
  },
  {
    id: 3,
    name: "About",
    link: "/#",
  },
  {
    id: 4,
    name: "Contact",
    link: "/#",
  },
];

const Footer = () => {
  return (
    <div className="bg-[url('/images/f1.jpg')] bg-center bg-no-repeat bg-cover h-full w-full">
      <div className="bg-black/60 min-h-[400px]">
        <div className="container grid grid-cols-1 md:grid-cols-3 pb-20 pt-5">
          <div className="py-8 px-4">
            <a
              href=""
              className="font-semibold font-pacifico text-2xl md:text-3xl text-light"
            >
              CoffePub
            </a>
            <p className="pt-4 text-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, dicta? Repellat iure et suscipit nesciunt alias
            </p>
            <a
              className="inline-block bg-blue-600 py-2 px-4 mt-5 border-2 text-sm rounded-full text-white font-poppins font-semibold"
              href="https://www.linkedin.com/in/osman-d-272a2820b/"
            >
              Visit My LinkedIn Profile
            </a>
          </div>
          <div className="col-span-2 grid grid-cols-2 md:pl-10 sm:grid-cols-3">
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold text-white">
                Important Links
              </h1>
              <ul className="space-y-3 mt-4">
                {Menu.map((data, index) => (
                  <li key={index}>
                    <a
                      className="inline-block text-light hover:scale-110 transition duration-500"
                      href={data.link}
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold text-white">Quick Links</h1>
              <ul className="space-y-3 mt-4">
                {Menu.map((data, index) => (
                  <li key={index}>
                    <a
                      className="inline-block text-light hover:scale-110 transition duration-500"
                      href={data.link}
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-semibold text-white"> Address </h1>
              <div className="mt-4 space-y-4 text-light">
                <p>Turkey Istanbul</p>
                <p>+90 555 444 33 22</p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <a href="https://www.linkedin.com/in/osman-d-272a2820b/">
                  <FaLinkedin className="text-3xl duration-300 text-blue-600 hover:scale-110" />
                </a>
                <a href="https://www.instagram.com/osmndayi/">
                  <FaInstagram className="text-3xl duration-300 text-orange-300 hover:scale-110" />
                </a>
                <a href="https://github.com/osmandayi">
                  <FaGithub className="text-3xl duration-300 text-light hover:scale-110" />
                </a>
                <a href="https://www.youtube.com/channel/UC_dtYrtHRwKxVgYfg4TtNCQ">
                  <FaYoutube className="text-3xl duration-300 text-red-600 hover:scale-110" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
