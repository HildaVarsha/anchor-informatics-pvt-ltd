import React from "react";
import { Button, Card } from "../ui";
import { OPEN_CAREERS } from "@/core/AboutUsConstans";

const CareerAvailablePositions = () => {
  return (
    <div className="px-4 md:px-0 py-24 container mx-auto">
      <h1 className="text-5xl font-bold text-center pb-8">
        Available Positions
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {OPEN_CAREERS?.map((item, index) => {
          return (
            <Card key={index} className="p-4 rounded-lg w-fit">
              <h1 className="font-semibold text-xl pb-4">{item.title}</h1>
              <Button>Apply Now</Button>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default CareerAvailablePositions;
