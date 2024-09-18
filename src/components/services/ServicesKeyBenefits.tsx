import React from "react";
import { Card } from "../ui";
import { Projector } from "lucide-react";
import { KEY_BENEFITS } from "@/core/ServicesConstants";

const ServicesKeyBenefits = () => {
  const CardComp = ({ text, title }: { title: string | any, text: string | any }) => {
    return (
      <Card className="p-12">
        <Projector className="w-16 h-16 text-sky-600" />
        <p className="font-bold text-3xl py-8">{title}</p>
        <p className="text-lg">
          {text}
        </p>
      </Card>
    );
  };
  return (
    <div className="bg-slate-200 py-24">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center">Key Benefits</h1>
        <div className="px-4 md:px-0 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {KEY_BENEFITS?.map((item, index) => {

            return <CardComp text={item.text} title={item.title} />
          })}

        </div>
      </div>
    </div>
  );
};

export default ServicesKeyBenefits;
