import Image from "next/image";
import React from "react";
import { GiFoodTruck } from "react-icons/gi";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="bg-[url('/images/h1.jpg')] bg-center bg-no-repeat bg-cover h-full w-full">
      <div className="min-h-[550px] flex justify-center items-center py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div data-aos="zoom-in">
              <Image
                className="mx-auto spinOne"
                src="/images/2.png"
                alt=""
                width={420}
                height={420}
              />
            </div>
            <div className="flex flex-col justify-center gap-6">
              <h1
                data-aos="fade-up"
                className="text-3xl md:text-4xl font-bold font-sriracha"
              >
                Premium Coffe
              </h1>
              <p
                data-aos="fade-up"
                className="text-sm text-gray-600 tracking-wide"
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                repudiandae enim odio esse iure veniam aperiam voluptatibus
                excepturi ipsum optio quibusdam voluptatum unde tenetur dolorem
                exercitationem velit illo, delectus nemo.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-5">
                  <div
                    className="flex items-center gap-3"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <GrSecure className="text-2xl h-12 w-12 shadow-sm rounded-full p-3 bg-red-300" />
                    <span className="font-poppins">Premium Coffe</span>
                  </div>
                  <div
                    className="flex items-center gap-3"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <IoFastFood className="text-2xl h-12 w-12 shadow-sm rounded-full p-3 bg-green-300" />
                    <span className="font-poppins">Hot Coffe</span>
                  </div>
                  <div
                    className="flex items-center gap-3"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <GiFoodTruck className="text-2xl h-12 w-12 shadow-sm rounded-full p-3 bg-blue-300" />
                    <span className="font-poppins">Cold Coffe</span>
                  </div>
                </div>
                <div
                  data-aos="slide-left"
                  className="border-l-4 border-primary/50 space-y-2 pl-6"
                >
                  <h1 className="text-2xl font-semibold font-sriracha">
                    Tea Lover
                  </h1>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Unde fugit quae sed voluptatem, at debitis distinctio
                    consequuntur, enim alias sunt eligendi voluptas recusandae
                    similique laborum quia accusantium voluptates nihil
                    doloremque!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
