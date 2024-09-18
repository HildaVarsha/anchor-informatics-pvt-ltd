import React from "react";
import { Card } from "../ui";
import { PlusIcon } from "lucide-react";

const AboutProgressCard = () => {
  return (
    <Card className="p-8 ">
      <div className="flex flex-col md:flex-row items-center  gap-8 justify-between container mx-auto">
        <div className="flex items-center gap-4 w-52">
          <h1 className="text-5xl">80</h1>
          <PlusIcon className="w-10 h-10 font-semibold text-pink-600" />
          <p>Completed projects</p>
        </div>
        <div className="flex items-center gap-4 w-52">
          <h1 className="text-5xl">80</h1>
          <PlusIcon className="w-10 h-10 font-semibold text-pink-600" />
          <p>Completed projects</p>
        </div>
        <div className="flex items-center gap-4 w-52">
          <h1 className="text-5xl">80</h1>
          <PlusIcon className="w-10 h-10 font-semibold text-pink-600" />
          <p>Completed projects</p>
        </div>
        <div className="flex items-center gap-4 w-52">
          <h1 className="text-5xl">80</h1>
          <PlusIcon className="w-10 h-10 font-semibold text-pink-600" />
          <p>Completed projects</p>
        </div>
      </div>
    </Card>
  );
};

export default AboutProgressCard;
