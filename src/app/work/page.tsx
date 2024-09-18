import {
  WorkBanner,
  WorkProductFive,
  WorkProductFour,
  WorkProductOne,
  WorkProductTwo,
} from "@/components/work";
import React from "react";

const Work = () => {
  return (
    <div>
      <WorkBanner />
      <WorkProductOne />
      <WorkProductTwo />
      <WorkProductFour />
      <WorkProductFive />
    </div>
  );
};

export default Work;
