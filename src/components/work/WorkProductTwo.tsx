import React from "react";
import { Button } from "../ui";
import Image from "next/image";
import FadeInImage from "../ui/FadeInImage";

const WorkProductTwo = ({
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
    <div
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw", // Full width of the viewport

        backgroundColor: "rgba(0, 0, 0, 0.4)",
      }}
      className="h-full md:h-[600px]"
    >
      <div
        // style={{background:""}}
        className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4 md:px-0 py-24"
      >
        <div className="w-full h-full aspect-[6/4] overflow-hidden">
          <FadeInImage image={image} />
        </div>

        <div className="w-full">
          <h1 className=" text-5xl font-bold">{name}</h1>
          <h1 className="text-2xl  py-4">{title}</h1>
          <p className="text-lg">{text}</p>
          <Button className="rounded-3xl  border-2 border-pink-600 hover:border-pink-600 mt-4">
            SEE CASE STUDY
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkProductTwo;
