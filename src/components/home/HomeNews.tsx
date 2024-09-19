import React from "react";
import {
  Card,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui";
import { ProjectorIcon } from "lucide-react";
import { newsData } from "@/core/ServicesConstants";

const HomeNews = () => {
  const NewsCard = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => {
    return (
      <Card className="p-6 flex flex-col items-center justify-center h-[600px]">
        <ProjectorIcon className="w-12 h-12 text-sky-600" />
        <h1 className="text-3xl font-bold py-8">{title} </h1>
        <p className="text-lg">{description}</p>
      </Card>
    );
  };
  return (
    <div className="px-4 md:px-0 pb-24 container mx-auto">
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
          {newsData.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <NewsCard title={item?.title} description={item?.description} />
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
