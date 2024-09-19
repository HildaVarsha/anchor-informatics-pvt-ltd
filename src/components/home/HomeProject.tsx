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
        className="object-contain h-full w-full rounded-md"
      />
    );
  };
  const ProjectContent = ({
    title,
    description,
    label,
  }: {
    title: string;
    description: string;
    label: string;
  }) => {
    return (
      <div className="w-full">
        <h1 className="text-lg text-slate-200">{title}</h1>
        <h1 className="py-4 text-4xl font-bold text-white">{label}</h1>
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
          // backgroundImage:
          // "url(https://images.pexels.com/photos/2808402/pexels-photo-2808402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw", // Full width of the viewport
          height: "100hw",
        }}
        className="px-4 md:px-0 bg-blue-600"
      >
        <div className="flex flex-col md:flex-row h-full items-center justify-center container mx-auto gap-8 py-24">
          <ProjectContent
            title={"Product Design"}
            label={"UX/UI"}
            description={
              "A visually pleasing, useful, and simple UX/UI will impress your users and effectively address their problems. These great experiences will not only attract customers to your product, but also keep them using it."
            }
          />
          <div className="w-full flex items-center justify-center md:justify-end">
            <ImageComponent src="https://images.pexels.com/photos/326518/pexels-photo-326518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row h-full  items-center justify-center container mx-auto gap-8 py-24">
          <div className="w-full flex items-center justify-center md:justify-start">
            <ImageComponent src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          </div>
          <ProjectContent
            title={"Product Develop"}
            label="MVP Developer"
            description={
              "We develop your MVP fast and within your budget by following a methodical methodology. Your MVP will be condensed to the most crucial aspects by our product experts. Our highly skilled UX/UI and programming teams will then start from scratch to design and construct your MVP. This enables you to quickly launch and validate the key assumptions of the product so that your company can expand as quickly as possible."
            }
          />
        </div>
        <div className="flex flex-col md:flex-row h-full items-center justify-center container mx-auto gap-8 py-24">
          <ProjectContent
            title={"Product Scope"}
            label="Product Scope "
            description={
              "The Product Scope is a rigorous, systematic 15-day process. The first step is an immersive focus session where you will discuss the product vision from a business perspective with product specialists and former startup founders."
            }
          />
          <div className="w-full flex items-center justify-center md:justify-end">
            <ImageComponent src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProject;
