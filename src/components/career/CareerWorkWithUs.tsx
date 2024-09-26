import React from "react";
import { Card } from "../ui";
import { WORK_WITH_US } from "@/core/AboutUsConstans";

const CareerWorkWithUs = () => {
  const CareerCard = ({text,title}:{title:string|any, text:string|any}) => {
    return (
      <Card className="p-8">
        <h1 className="text-3xl font-semibold pb-6">{title}</h1>
        <p className="text-lg py-6">
          {text}
        </p>
      </Card>
    );
  };
  return (
    <div className="px-4 md:px-0 py-24 bg-blue-950">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center text-white">
          What it Means to Work With Us
        </h1>
        <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {WORK_WITH_US?.map((item, index)=>{
            return(

              <CareerCard {...item} />
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default CareerWorkWithUs;
