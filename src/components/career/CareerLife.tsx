import Image from "next/image";
import React from "react";

const CareerLife = () => {
  return (
    <div className="py-24 bg-slate-100">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-center">
          Career Life At Anchor
        </h1>
        <p className="py-6 text-xl  max-w-xl text-center">
          Expect endless challenges and rewards. Opportunities to work with
          people from all over the world. A team of life-long learners, fueled
          by collaboration. A culture that fosters innovation and values a happy
          workplace.
        </p>
        <Image
          src={
            "https://images.pexels.com/photos/5380792/pexels-photo-5380792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt="Career"
          width={100}
          height={100}
          className="w-full h-full mt-6"
        />
      </div>
    </div>
  );
};

export default CareerLife;
