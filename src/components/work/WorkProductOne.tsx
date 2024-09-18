import React from "react";
import { Button } from "../ui";
import Image from "next/image";

const WorkProductOne = () => {
  return (
    <div className="bg-blue-700 py-24 px-4 md:px-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="w-full">
          <h1 className="text-white text-5xl font-bold">Fave</h1>
          <h1 className="text-2xl text-white py-4">
            Social Media Community for Fans
          </h1>
          <p className="text-lg text-white">
            Fave is a fandom-centric community with highly engaging content
            where fans can create deeper and lasting connections. The vision to
            nurture and grow the community is centered on rewarding positive and
            meaningful engagement with points that can be redeemed for discounts
            and exclusive experiences.
          </p>
          <Button className="rounded-3xl bg-tranparent border-2 border-slate-100 hover:border-pink-600 mt-4">
            SEE CASE STUDY
          </Button>
        </div>
        <div className="w-full">
          <Image
            src={
              "https://images.pexels.com/photos/3571094/pexels-photo-3571094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt="Product One"
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkProductOne;
