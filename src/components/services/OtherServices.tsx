import React from "react";
import { Card } from "../ui";
import Image from "next/image";
import { ProjectorIcon } from "lucide-react";

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
    <div className="pb-24 container mx-auto">
      <h1 className="text-4xl font-bold text-center">
        Other Services We provide
      </h1>
      <div className="py-12">
        <div className="flex items-center gap-6">
          <CardComponent
            icon={<ProjectorIcon className="w-12 h-12 text-pink-600" />}
            label="Product Scope"
            description={
              " We help entrepreneurs and business leaders build and launch innovative custom software solutions"
            }
          />
          <CardComponent
            icon={<ProjectorIcon className="w-12 h-12 text-pink-600" />}
            label="Product Scope"
            description={
              " We help entrepreneurs and business leaders build and launch innovative custom software solutions"
            }
          />
          <CardComponent
            icon={<ProjectorIcon className="w-12 h-12 text-pink-600" />}
            label="Product Scope"
            description={
              " We help entrepreneurs and business leaders build and launch innovative custom software solutions"
            }
          />
        </div>
        <div className="flex items-center justify-center gap-6 pt-6 max-w-3xl mx-auto">
          <CardComponent
            icon={<ProjectorIcon className="w-12 h-12 text-pink-600" />}
            label="Product Scope"
            description={
              " We help entrepreneurs and business leaders build and launch innovative custom software solutions"
            }
          />
          <CardComponent
            icon={<ProjectorIcon className="w-12 h-12 text-pink-600" />}
            label="Product Scope"
            description={
              " We help entrepreneurs and business leaders build and launch innovative custom software solutions"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default OtherServices;
