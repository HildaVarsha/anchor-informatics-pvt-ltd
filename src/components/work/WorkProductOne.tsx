import React from "react";
import { Button } from "../ui";
import Image from "next/image";
import FadeInImage from "../ui/FadeInImage";

const WorkProductOne = ({
  image,
  name,
  title,
  text,
}: {
  name: string | any;
  title: string | any;
  image: string | any;
  text: string | any;
}) => {
  return (
    <div className="bg-blue-700 py-24 px-4 md:px-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="w-full">
          <h1 className="text-white text-5xl font-bold">{name}</h1>
          <h1 className="text-2xl text-white py-4">{title}</h1>
          <p className="text-lg text-white">{text}</p>
          <Button className="rounded-3xl    bg-tranparent border-2 border-slate-100 hover:border-pink-600 mt-4">
            SEE CASE STUDY
          </Button>
        </div>
        <div className="w-full h-full aspect-[6/4] overflow-hidden">
          <FadeInImage image={image} />
        </div>
      </div>
    </div>
  );
};

export default WorkProductOne;
