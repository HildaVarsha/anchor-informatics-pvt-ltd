import React from "react";
import { Card } from "../ui";

const CareerWorkWithUs = () => {
  const CareerCard = () => {
    return (
      <Card className="p-8">
        <h1 className="text-3xl font-semibold pb-6">Shape the Future</h1>
        <p className="text-lg py-6">
          We work with business leaders and entrepreneurs to disrupt and push
          their industries forward. From startup ideas to enterprise-level
          product & software development, we work together as a team to
          transform our clients’ ideas into reality.
        </p>
      </Card>
    );
  };
  return (
    <div className="py-24 bg-blue-950">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center text-white">
          What it Means to Work With Us
        </h1>
        <div className="pt-12 grid grid-cols-2 gap-8">
          <CareerCard />
          <CareerCard />
          <CareerCard />
          <CareerCard />
          <CareerCard />
        </div>
      </div>
    </div>
  );
};

export default CareerWorkWithUs;
