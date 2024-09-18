import Image from "next/image";
import React from "react";

const HomeAwards = () => {
  const ImageComponent = ({ src }: { src: string }) => {
    return (
      <Image
        src={src}
        alt="Logo"
        width={100}
        height={100}
        className="object-cover h-32 w-32 rounded-full"
      />
    );
  };
  return (
    <div className="px-4 md:px-0 pb-24 container mx-auto">
      <h1 className="text-5xl font-bold">Awards</h1>
      <p className="text-lg py-6 max-w-lg">
        We are voted a Top Firm by Entrepreneurs and Business Leaders just like
        you.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 py-6 gap-y-32">
        <ImageComponent src="https://images.pexels.com/photos/10950702/pexels-photo-10950702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <ImageComponent src="https://images.pexels.com/photos/10950702/pexels-photo-10950702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <ImageComponent src="https://images.pexels.com/photos/10950702/pexels-photo-10950702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <ImageComponent src="https://images.pexels.com/photos/10950702/pexels-photo-10950702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <ImageComponent src="https://images.pexels.com/photos/10950702/pexels-photo-10950702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <ImageComponent src="https://images.pexels.com/photos/10950702/pexels-photo-10950702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <ImageComponent src="https://images.pexels.com/photos/10950702/pexels-photo-10950702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <ImageComponent src="https://images.pexels.com/photos/10950702/pexels-photo-10950702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <ImageComponent src="https://images.pexels.com/photos/10950702/pexels-photo-10950702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <ImageComponent src="https://images.pexels.com/photos/10950702/pexels-photo-10950702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <ImageComponent src="https://images.pexels.com/photos/10950702/pexels-photo-10950702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <ImageComponent src="https://images.pexels.com/photos/10950702/pexels-photo-10950702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      </div>
    </div>
  );
};

export default HomeAwards;
