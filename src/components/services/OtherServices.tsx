import React from "react";
import { Card } from "../ui";
import Image from "next/image";
import { ProjectorIcon } from "lucide-react";
import { OTHER_SERVICES } from "@/core/ServicesConstants";

const OtherServices = () => {
  const CardComponent = ({
    icon,
    label,
    description,
  }: {
    icon: any;
    label: string;
    description: string;
  }) => {
    return (
      <Card className="p-4">
        {icon}
        <h1 className="text-3xl font-bold py-6">{label}</h1>
        <p className="text-lg">{description}</p>
      </Card>
    );
  };
  return (
    <div className="px-4 md:px-0 pb-24 container mx-auto">
      <h1 className="text-4xl font-bold text-center">
        Other Services We provide
      </h1>
      <div className="py-12">
        <div className="flex flex-col md:flex-row flex-wrap  items-center justify-around gap-6">
          {OTHER_SERVICES?.map((item, index) => {
            return (
              <div key={index} className="w-full md:w-[30%]">
                <CardComponent
                  key={index}
                  icon={<ProjectorIcon className="w-12 h-12 text-pink-600" />}
                  label={item.title}
                  description={item.text}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OtherServices;
