import React from "react";
import { Button } from "../ui";
import Image from "next/image";

const AboutBeyondWork = () => {
  return (
    <div>
      <div className="px-4 md:px-0 py-24 container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full">
          <Image
            src={
              "https://images.pexels.com/photos/3184351/pexels-photo-3184351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt="Anchor Informatics"
            width={100}
            height={100}
            className="w-full h-[450px] object-cover"
          />
        </div>
        <div className="w-full">
          <h1 className="text-5xl font-bold pb-6">Beyond Work.</h1>
          <p className="text-lg pb-6">
            Our DNA is made of ex-startup founders and the top talent in
            Product, UX/UI, Software development and Machine & Deep Learning. We
            came together from various backgrounds with one vision: to bring a
            lean, user-centric approach to product innovation and software
            development by completely understanding the business needs before
            building anything.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBeyondWork;
