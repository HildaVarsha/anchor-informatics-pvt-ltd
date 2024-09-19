import React from "react";
import Image from "next/image";
import { Button } from "../ui";

const HomeOpenSourceproject = () => {
  const ImageComponent = ({ src }: { src: string }) => {
    return (
      <Image
        src={src}
        alt="Logo"
        width={100}
        height={100}
        className="object-cover h-72 w-full"
      />
    );
  };
  return (
    <div className="px-4 md:px-0 pb-24 container mx-auto">
      <h1 className="text-5xl font-bold">Expanding the Busines</h1>
      <p className="text-lg py-6 max-w-lg">
        Developing an MVP is the simplest path to business growth, particularly
        with the assistance of professional product builders. You can
        concentrate on the company's goal thanks to it. Initially, it is safer
        and faster to bring in a team of professionals rather than recruiting an
        in-house team to jumpstart your business and get things going.
      </p>
      <div className="py-6 flex flex-col md:flex-row items-center gap-4">
        <ImageComponent
          src={
            "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
        />
        <ImageComponent
          src={
            "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
        />
        <ImageComponent
          src={
            "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
        />
      </div>
      <div className="flex items-center justify-center mt-6">
        <Button className="bg-transparent border-2 border-pink-600 rounded-3xl text-pink-600 hover:text-white">
          KNOW MORE
        </Button>
      </div>
    </div>
  );
};

export default HomeOpenSourceproject;
