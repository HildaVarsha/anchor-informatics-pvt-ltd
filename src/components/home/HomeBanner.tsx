import React from "react";
import { Button } from "../ui";

const HomeBanner = () => {
  return (
    <div className="h-full w-full bg-gradient-to-t from-zinc-800 to-zinc-600 relative">
      <video
        className="w-full h-[650px] object-cover opacity-50"
        src={
          "https://videos.pexels.com/video-files/8348724/8348724-uhd_1440_2560_25fps.mp4"
        }
        autoPlay
        muted
        loop
      />
      <div className="absolute top-[25%] left-14 max-w-lg">
        <p className="text-lg text-white">WE ARE ANCHOR INFORMATICS</p>
        <h1 className="text-4xl font-bold py-4 text-white">
          Custom Product & Software Development Focused On Your Success
        </h1>
        <Button className="bg-transparent border-2 border-pink-600 rounded-3xl">
          Book A Call
        </Button>
      </div>
    </div>
  );
};

export default HomeBanner;
