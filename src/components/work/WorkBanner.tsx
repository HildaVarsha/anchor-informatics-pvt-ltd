import React from "react";

const WorkBanner = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/4464884/pexels-photo-4464884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw", // Full width of the viewport
        height: "600px",
      }}
      className="flex items-center justify-center h-[600px]"
    >
      <div className="max-w-lg px-4 md:px-0">
        <h1 className="text-6xl font-bold">
          We take digital experiences to the next level
        </h1>
        <p className="text-lg py-4 ">
          The products we build are changing the way industry leaders do their
          core business.
        </p>
      </div>
    </div>
  );
};

export default WorkBanner;
