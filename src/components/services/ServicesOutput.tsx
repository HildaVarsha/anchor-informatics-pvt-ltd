import React from "react";
import {
  Card,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui";
import Image from "next/image";
import { SERVICE_OUTPUT } from "@/core/ServicesConstants";

const ServicesOutput = () => {
  const OutputCard = ({
    image,
    text,
    title,
  }: {
    image: string | any;
    title: string | any;
    text: string | any;
  }) => {
    return (
      <Card className="border-0 rounded-none flex flex-col items-center justify-between h-full">
        <Image
          src={
            image ||
            "https://images.pexels.com/photos/7648474/pexels-photo-7648474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt="Services Output"
          width={100}
          height={100}
          className="w-full h-52 object-cover"
        />
        <div className="p-4 flex flex-col flex-grow">
          <h1 className="text-3xl font-bold py-8">{title}</h1>
          <p className="text-lg">{text}</p>
        </div>
      </Card>
    );
  };

  return (
    <div className="px-4 md:px-0 pb-24 bg-blue-950">
      <div className="container mx-auto py-24">
        <h1 className="text-4xl font-bold text-center text-white">
          Output From The Services
        </h1>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full pt-12"
        >
          <CarouselContent>
            {SERVICE_OUTPUT.map((item, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/4 h-full md:h-[530px]"
              >
                <OutputCard {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default ServicesOutput;
