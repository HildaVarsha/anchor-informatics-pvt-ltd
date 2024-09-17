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
        className="object-cover h-32 w-32"
      />
    );
  };
  return (
    <div className="pb-24 container mx-auto">
      <h1 className="text-5xl font-bold text-center">Clients</h1>
      <p className="text-lg py-4 text-center">
        Industry leaders entrust their business visions to us.
      </p>
      <div className="py-6 grid grid-cols-4 gap-4 gap-y-16">
        <ImageComponent src="https://images.pexels.com/photos/7648474/pexels-photo-7648474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <ImageComponent src="https://images.pexels.com/photos/7648474/pexels-photo-7648474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <ImageComponent src="https://images.pexels.com/photos/7648474/pexels-photo-7648474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <ImageComponent src="https://images.pexels.com/photos/7648474/pexels-photo-7648474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <ImageComponent src="https://images.pexels.com/photos/7648474/pexels-photo-7648474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <ImageComponent src="https://images.pexels.com/photos/7648474/pexels-photo-7648474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <ImageComponent src="https://images.pexels.com/photos/7648474/pexels-photo-7648474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <ImageComponent src="https://images.pexels.com/photos/7648474/pexels-photo-7648474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <ImageComponent src="https://images.pexels.com/photos/7648474/pexels-photo-7648474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      </div>
    </div>
  );
};

export default HomeClients;
