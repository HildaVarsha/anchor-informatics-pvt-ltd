import {
  AboutBeyondWork,
  AboutCompany,
  AboutMeetCEO,
  AboutProgressCard,
  AboutUsBanner,
} from "@/components/aboutUs";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <AboutUsBanner />
      <AboutProgressCard />
      <AboutCompany />
      <AboutBeyondWork />
      <AboutMeetCEO />
    </div>
  );
};

export default AboutUs;
