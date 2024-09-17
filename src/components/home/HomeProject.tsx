import React from "react";
import { Button } from "../ui";
import Image from "next/image";

const HomeProject = () => {
  const ImageComponent = ({ src }: { src: string }) => {
    return (
      <Image
        src={src}
        alt="Mobile App"
        width={100}
        height={100}
        className="object-cover h-96 w-72"
      />
    );
  };
  const ProjectContent = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => {
    return (
      <div className="w-full">
        <h1 className="text-lg text-sky-500">{title}</h1>
        <h1 className="py-4 text-4xl font-bold text-white">Fave</h1>
        <p className="text-white text-lg">{description}</p>
        <Button className="bg-transparent border-2 border-pink-500 rounded-3xl mt-4">
          SEE CASE STUDY
        </Button>
      </div>
    );
  };
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/2808402/pexels-photo-2808402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw", // Full width of the viewport
          height: "100hw",
        }}
        className=""
      >
        <div className="flex h-full items-center justify-center container mx-auto gap-8 py-24">
          <ProjectContent
            title={"SOCIAL MEDIA"}
            description={
              "Fave is a fandom-centric community with highly engaging content where fans can create deeper and lasting connections. The vision to nurture and grow the community is centered on rewarding positive and meaningful engagement with points that can be redeemed for discounts and exclusive experiences."
            }
          />
          <div className="w-full flex items-center justify-end">
            <ImageComponent src="https://images.pexels.com/photos/2228574/pexels-photo-2228574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          </div>
        </div>
        <div className="flex h-full  items-center justify-center container mx-auto gap-8 py-24">
          <div className="w-full flex items-center">
            <ImageComponent src="https://images.pexels.com/photos/2228574/pexels-photo-2228574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          </div>
          <ProjectContent
            title={"SOCIAL MEDIA"}
            description={
              "Fave is a fandom-centric community with highly engaging content where fans can create deeper and lasting connections. The vision to nurture and grow the community is centered on rewarding positive and meaningful engagement with points that can be redeemed for discounts and exclusive experiences."
            }
          />
        </div>
        <div className="flex h-full items-center justify-center container mx-auto gap-8 py-24">
          <ProjectContent
            title={"SOCIAL MEDIA"}
            description={
              "Fave is a fandom-centric community with highly engaging content where fans can create deeper and lasting connections. The vision to nurture and grow the community is centered on rewarding positive and meaningful engagement with points that can be redeemed for discounts and exclusive experiences."
            }
          />
          <div className="w-full flex items-center justify-end">
            <ImageComponent src="https://images.pexels.com/photos/2228574/pexels-photo-2228574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          </div>
        </div>
        <div className="flex h-full  items-center justify-center container mx-auto gap-8 py-24">
          <div className="w-full flex items-center">
            <ImageComponent src="https://images.pexels.com/photos/2228574/pexels-photo-2228574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          </div>
          <ProjectContent
            title={"SOCIAL MEDIA"}
            description={
              "Fave is a fandom-centric community with highly engaging content where fans can create deeper and lasting connections. The vision to nurture and grow the community is centered on rewarding positive and meaningful engagement with points that can be redeemed for discounts and exclusive experiences."
            }
          />
        </div>
        <div className="flex h-full items-center justify-center container mx-auto gap-8 py-24">
          <ProjectContent
            title={"SOCIAL MEDIA"}
            description={
              "Fave is a fandom-centric community with highly engaging content where fans can create deeper and lasting connections. The vision to nurture and grow the community is centered on rewarding positive and meaningful engagement with points that can be redeemed for discounts and exclusive experiences."
            }
          />
          <div className="w-full flex items-center justify-end">
            <ImageComponent src="https://images.pexels.com/photos/2228574/pexels-photo-2228574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          </div>
        </div>
        <div className="flex h-full  items-center justify-center container mx-auto gap-8 py-24">
          <div className="w-full flex items-center">
            <ImageComponent src="https://images.pexels.com/photos/2228574/pexels-photo-2228574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          </div>
          <ProjectContent
            title={"SOCIAL MEDIA"}
            description={
              "Fave is a fandom-centric community with highly engaging content where fans can create deeper and lasting connections. The vision to nurture and grow the community is centered on rewarding positive and meaningful engagement with points that can be redeemed for discounts and exclusive experiences."
            }
          />
        </div>
      </div>
    </>
  );
};

export default HomeProject;
