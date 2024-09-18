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

const ServicesOutput = () => {
  const OutputCard = () => {
    return (
      <Card className="border-0 rounded-none flex flex-col items-center justify-center">
        <Image
          src={
            "https://images.pexels.com/photos/7648474/pexels-photo-7648474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt="Services Output"
          width={100}
          height={100}
          className="w-full h-52 object-cover"
        />
        <div className="p-4">
          <h1 className="text-3xl font-bold py-8">Industry leaders entrust </h1>
          <p className="text-lg">
            We don’t just serve the industry – we’re part of the industry and
            build technology that is used worldwide
          </p>
        </div>
      </Card>
    );
  };
  return (
    <div className="pb-24 bg-blue-950">
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
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <OutputCard />
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
