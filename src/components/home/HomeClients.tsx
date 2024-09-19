import React from "react";
import Image from "next/image";

const HomeClients = () => {
  const ImageComponent = ({ src }: { src: string }) => {
    return (
      <Image
        src={src}
        alt="Logo"
        width={100}
        height={100}
        className="object-cover w-full h-[500px]"
      />
    );
  };
  return (
    <div className="px-4 md:px-0 pb-24 container mx-auto">
      <h1 className="text-5xl font-bold text-center">MVP Developer</h1>
      <p className="text-lg py-4 text-center">
        We develop your MVP fast and within your budget by following a
        methodical methodology. Your MVP will be condensed to the most crucial
        aspects by our product experts. Our highly skilled UX/UI and programming
        teams will then start from scratch to design and construct your MVP.
        This enables you to quickly launch and validate the key assumptions of
        the product so that your company can expand as quickly as possible.
      </p>
      <div className="py-6">
        <ImageComponent src="https://images.pexels.com/photos/4427905/pexels-photo-4427905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      </div>
    </div>
  );
};

export default HomeClients;
