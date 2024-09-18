import {
  CareerAvailablePositions,
  CareerBanner,
  CareerLife,
  CareerWorkWithUs,
} from "@/components/career";
import React from "react";

const Careers = () => {
  return (
    <div>
      <CareerBanner />
      <CareerAvailablePositions />
      <CareerLife />
      <CareerWorkWithUs />
    </div>
  );
};

export default Careers;
