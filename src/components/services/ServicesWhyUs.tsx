import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui";
import { WHY_CHOOSE_US } from "@/core/ServicesConstants";

const ServicesWhyUs = () => {
  return (
    <div className="px-4 md:px-0 py-24 container mx-auto">
      <h1 className="text-5xl font-bold">Why Us?</h1>
      <div className="py-12">
        <Accordion type="single" collapsible className="w-full">
          {WHY_CHOOSE_US?.map((item, index) => {
            return (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>{item.text}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default ServicesWhyUs;
