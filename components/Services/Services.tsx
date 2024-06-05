import React from "react";
import ServiceItem from "./ServiceItem";

const ServiceData = [
  {
    id: 1,
    img: "/images/1.png",
    name: "Expresso",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: "/images/3.png",
    name: "Cappicuno",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: "/images/4.png",
    name: "Americano",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati.",
    aosDelay: "500",
  },
  {
    id: 4,
    img: "/images/5.png",
    name: "Latte",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati.",
    aosDelay: "700",
  },
];

const Services = () => {
  return (
    <div className="py-10">
      <div className="container">
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-sriracha font-bold">
            Best Coffe For You
          </h1>
          <div className="flex justify-center m-4">
            <div className="mb-6 h-1 w-full max-w-xl bg-gradient-to-r opacity-50 from-primary to-secondary"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 place-items-center">
          {ServiceData?.map((service, index) => (
            <ServiceItem key={index} item={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
