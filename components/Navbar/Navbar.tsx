import React from "react";
import NavbarItem from "./NavbarItem";
import Image from "next/image";
import OrderButton from "../Button/OrderButton";
import { FaCoffee } from "react-icons/fa";

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

const Navbar: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-secondary to-secondary/75 shadow-lg text-light">
      <div className="container py-3">
        <div className="flex items-center justify-between">
          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            className="font-pacifico font-bold text-xl lg:text-3xl md:text-2xl items-center justify-center flex gap-2"
          >
            <Image width={50} height={50} src={"/images/logo/3.png"} alt="" />
            CoffePub
          </div>
          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="400"
            className="hidden lg:flex items-center gap-3 justify-between"
          >
            <ul>
              {Menu.map((menu) => (
                <NavbarItem key={menu.id} name={menu.name} link={menu.link} />
              ))}
            </ul>
          </div>
          <div data-aos="fade-down" data-aos-once="true" data-aos-delay="500">
            <OrderButton label="Order" icon={<FaCoffee />}></OrderButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
