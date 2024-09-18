import React from "react";
import { Card } from "../ui";
import { Projector } from "lucide-react";

const ServicesHowItWorks = () => {
  const CardComp = () => {
    return (
      <Card className="p-12">
        <Projector className="w-16 h-16 text-sky-600" />

        <p className="font-bold text-pink-600 pt-4">STEP ONE</p>
        <p className="font-bold text-3xl py-4">Immersive Focus</p>
        <p className="text-lg">
          We spend two days together in an intensive session so that we can
          reach a state of absolute focus and dig down to the core of the
          products value proposition.
        </p>
        <h4 className="py-4 font-bold">Phase deliverables:</h4>
        <div className="grid grid-cols-3 gap-8">
          <li>Comprehensive Brief</li>
          <li>Comprehensive Brief</li>
          <li>Comprehensive Brief</li>
          <li>Comprehensive Brief</li>
          <li>Comprehensive Brief</li>
          <li>Comprehensive Brief</li>
        </div>
      </Card>
    );
  };
  return (
    <div className="pb-24 bg-slate-200">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center">How It Works</h1>
        <div className="py-12 grid grid-cols-1 gap-8 ">
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
        </div>
      </div>
    </div>
  );
};

export default ServicesHowItWorks;
