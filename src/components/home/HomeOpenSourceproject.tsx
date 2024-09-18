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
        className="object-cover h-full w-full"
      />
    );
  };
  return (
    <div className="px-4 md:px-0 pb-24 container mx-auto">
      <h1 className="text-5xl font-bold">Open Source</h1>
      <p className="text-lg py-6 max-w-lg">
        We are voted a Top Firm by Entrepreneurs and Business Leaders just like
        you.
      </p>
      <div className="py-6 flex flex-col md:flex-row items-center gap-4">
        <ImageComponent
          src={
            "https://images.pexels.com/photos/7648022/pexels-photo-7648022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
        />
        <ImageComponent
          src={
            "https://images.pexels.com/photos/7648022/pexels-photo-7648022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
        />
        <ImageComponent
          src={
            "https://images.pexels.com/photos/7648022/pexels-photo-7648022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
        />
        <ImageComponent
          src={
            "https://images.pexels.com/photos/7648022/pexels-photo-7648022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
        />
      </div>
      <div className="flex items-center justify-center mt-6">
        <Button className="bg-transparent border-2 border-pink-600 rounded-3xl text-pink-600 hover:text-white">
          SEE ALL OPEN SOURCES
        </Button>
      </div>
    </div>
  );
};

export default HomeOpenSourceproject;
