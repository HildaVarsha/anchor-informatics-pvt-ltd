import Image from "next/image";
import React from "react";
import { Button } from "../ui";

const TalkAbout = () => {
  const LocationComp = () => {
    return (
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
        <Image
          src={"/"}
          alt="Location"
          width={250}
          height={100}
          className="object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold text-white pb-4">London</h1>
          <p className="text-white">
            Address: R. Adriano C. de Oliveira 4A, 1600-312
          </p>
          <p className="py-2 text-white">
            Phone: <a className="text-pink-600">+351 930944995</a>
          </p>
          <p className="text-white">
            Email: <a className="text-pink-600">anchorinformatics@gmail.com</a>
          </p>
        </div>
      </div>
    );
  };
  return (
    <div className="bg-slate-800">
      <div className="container mx-auto px-4 md:px-0 py-16 flex flex-col md:flex-row justify-between">
        <div>
          <Image
            src={"/"}
            alt="Logo"
            width={100}
            height={100}
            className="object-cover"
          />
          <h1 className="text-5xl font-bold text-white py-4 max-w-lg">
            Lets talk about your project
          </h1>
          <Button className="bg-transparent border-2 border-pink-600 rounded-3xl mt-4">
            SCHEDULE A CALL
          </Button>
        </div>
        <div className="flex flex-col gap-8 pt-8 md:pt-0">
          <LocationComp />
          <LocationComp />
          <LocationComp />
        </div>
      </div>
    </div>
  );
};

export default TalkAbout;
