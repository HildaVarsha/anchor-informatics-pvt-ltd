import {
  WorkBanner,
  WorkProductFive,
  WorkProductFour,
  WorkProductOne,
  WorkProductTwo,
} from "@/components/work";
import { WorkContent } from "@/core/WorkContent";
import React from "react";

const Work = () => {
  return (
    <div>
      <WorkBanner />
      {WorkContent?.map((item, index) => {
        if ((index + 1) % 2) {
          return <WorkProductOne key={index} {...item} />;
        } else {
          return <WorkProductTwo key={index} {...item} />;
        }
      })}

      {/* <WorkProductTwo />
      <WorkProductFour />
      <WorkProductFive /> */}
    </div>
  );
};

export default Work;
