import React from "react";
import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui";
import { ProjectorIcon } from "lucide-react";

const HomeNews = () => {
  const NewsCard = () => {
    return (
      <Card className="p-6 flex flex-col items-center justify-center">
        <ProjectorIcon className="w-12 h-12 text-sky-600" />
        <h1 className="text-3xl font-bold py-8">Industry leaders entrust </h1>
        <p className="text-lg">
          We don’t just serve the industry – we’re part of the industry and
          build technology that is used worldwide
        </p>
      </Card>
    );
  };
  return (
    <div className="pb-24 container mx-auto">
      <h1 className="text-5xl font-bold">News</h1>
      <p className="text-lg py-4">
        Industry leaders entrust their business visions to us.
      </p>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full py-6"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <NewsCard />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HomeNews;
