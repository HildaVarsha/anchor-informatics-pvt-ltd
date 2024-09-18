import React from "react";
import { Card } from "../ui";
import { Projector } from "lucide-react";

const ServicesKeyBenefits = () => {
  const CardComp = () => {
    return (
      <Card className="p-12">
        <Projector className="w-16 h-16 text-sky-600" />
        <p className="font-bold text-3xl py-8">Immersive Focus</p>
        <p className="text-lg">
          We spend two days together in an intensive session so that we can
          reach a state of absolute focus and dig down to the core of the
          products value proposition.
        </p>
      </Card>
    );
  };
  return (
    <div className="bg-slate-200 py-24">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center">Key Benefits</h1>
        <div className="py-12 grid grid-cols-2 gap-8 ">
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

export default ServicesKeyBenefits;
