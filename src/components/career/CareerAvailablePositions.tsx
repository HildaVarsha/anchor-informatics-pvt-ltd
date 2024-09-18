import React from "react";
import { Button, Card } from "../ui";

const CareerAvailablePositions = () => {
  return (
    <div className="py-24 container mx-auto">
      <h1 className="text-5xl font-bold text-center pb-8">
        Available Positions
      </h1>
      <div className="grid grid-cols-3 gap-8">
        <Card className="p-4 rounded-lg w-fit">
          <h1 className="font-semibold text-xl pb-4">
            Full Stack Developer(React Js/Node Js)
          </h1>
          <Button>Apply Now</Button>
        </Card>
        <Card className="p-4 rounded-lg w-fit">
          <h1 className="font-semibold text-xl pb-4">
            Full Stack Developer(React Js/Node Js)
          </h1>
          <Button>Apply Now</Button>
        </Card>
        <Card className="p-4 rounded-lg w-fit">
          <h1 className="font-semibold text-xl pb-4">
            Full Stack Developer(React Js/Node Js)
          </h1>
          <Button>Apply Now</Button>
        </Card>
        <Card className="p-4 rounded-lg w-fit">
          <h1 className="font-semibold text-xl pb-4">
            Full Stack Developer(React Js/Node Js)
          </h1>
          <Button>Apply Now</Button>
        </Card>
        <Card className="p-4 rounded-lg w-fit">
          <h1 className="font-semibold text-xl pb-4">
            Full Stack Developer(React Js/Node Js)
          </h1>
          <Button>Apply Now</Button>
        </Card>
        <Card className="p-4 rounded-lg w-fit">
          <h1 className="font-semibold text-xl pb-4">
            Full Stack Developer(React Js/Node Js)
          </h1>
          <Button>Apply Now</Button>
        </Card>
      </div>
    </div>
  );
};

export default CareerAvailablePositions;
