import React from "react";
import { Card } from "../ui";
import { Projector } from "lucide-react";
import { HOW_IT_WORKS } from "@/core/ServicesConstants";

const ServicesHowItWorks = () => {
  const CardComp = ({
    points,
    step_title,
    text,
    title,
  }: {
    step_title: string | any;
    title: string | any;
    text: string | any;
    points: string | any;
  }) => {
    return (
      <Card className="p-12">
        <Projector className="w-16 h-16 text-sky-600" />

        <p className="font-bold text-pink-600 pt-4">{step_title}</p>
        <p className="font-bold text-3xl py-4">{title} </p>
        <p className="text-lg">{text}</p>
        {points?.length ? (
          <>
            <h4 className="py-4 font-bold">Phase deliverables:</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {points?.map((item: string | any) => {
                return <li key={item}>{item}</li>;
              })}
            </div>
          </>
        ) : (
          <></>
        )}
      </Card>
    );
  };
  return (
    <div className="px-4 md:px-0 pb-24 bg-slate-200">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center">How It Works</h1>
        <div className="py-12 grid grid-cols-1 gap-8 ">
          {HOW_IT_WORKS?.map((item, index) => {
            return (
              <CardComp
                points={item.points}
                step_title={item.step_title}
                text={item.text}
                title={item.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesHowItWorks;
