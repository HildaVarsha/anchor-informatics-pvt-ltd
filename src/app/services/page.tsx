import {
  OtherServices,
  ServicesBanner,
  ServicesHowItWorks,
  ServicesKeyBenefits,
  ServicesOutput,
  ServicesWhyUs,
} from "@/components/services";
import React from "react";

const Services = () => {
  return (
    <div>
      <ServicesBanner />
      <ServicesKeyBenefits />
      <ServicesHowItWorks />
      <ServicesOutput />
      <ServicesWhyUs />
      <OtherServices />
    </div>
  );
};

export default Services;
