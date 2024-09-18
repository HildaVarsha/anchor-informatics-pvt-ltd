import React from "react";

const CareerBanner = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw", // Full width of the viewport
        height: "600px",
      }}
      className="flex items-center pl-12 h-[600px]"
    >
      <div className="max-w-lg text-white">
        <h1 className="text-6xl font-bold">
          Great Products Are Built by Great People
        </h1>
        <p className="text-lg py-4">
          Experience, Rigor, and a User-Centric Approach.
        </p>
      </div>
    </div>
  );
};

export default CareerBanner;
