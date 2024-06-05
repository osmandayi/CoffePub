import Image from "next/image";
import React from "react";

interface ItemArrayProps {
  id: number;
  img: string;
  name: string;
  description: string;
  aosDelay: string;
}

interface ServiceItemProps {
  item: ItemArrayProps;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ item }) => {
  const { aosDelay, description, id, img, name } = item;

  return (
    <div
      data-aos="fade-down"
      data-aos-once="false"
      data-aos-delay={aosDelay}
      className="rounded-2xl bg-white group hover:bg-light relative shadow-xl w-full md:max-w-96"
    >
      <div className="h-36">
        <Image
          unoptimized={true}
          src={img}
          alt=""
          width={200}
          height={200}
          className="mx-auto transform -translate-y-14 group-hover:scale-110 transition duration-500"
        />
      </div>
      <div className="p-4 text-center">
        <div className="w-full">
          <h1 className="text-xl lg:text-2xl font-bold font-poppins text-gray-700 group-hover:text-gray-950 transition duration-500">
            {name}
          </h1>
          <p className="text-gray-500 group-hover:text-gray-900 transition duration-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
