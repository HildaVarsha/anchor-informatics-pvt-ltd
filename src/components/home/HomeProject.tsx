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
    label,
  }: {
    title: string;
    description: string;
    label: string;
  }) => {
    return (
      <div className="w-full">
        <h1 className="text-lg text-sky-500">{title}</h1>
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
          backgroundImage:
            "url(https://images.pexels.com/photos/2808402/pexels-photo-2808402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw", // Full width of the viewport
          height: "100hw",
        }}
        className="px-4 md:px-0"
      >
        <div className="flex flex-col md:flex-row h-full items-center justify-center container mx-auto gap-8 py-24">
          <ProjectContent
            title={"SOCIAL MEDIA"}
            label={"Scope Preparation"}
            description={
              "In the initial stage of our journey inside your product, we concentrate on your vision. This is where we get to know your idea from top to bottom and develop a detailed project brief. It enables us to collect all of the essential data, from market statistics to rival benchmarking and other information. This will save us from getting stalled by a lack of knowledge throughout our immersion session together."
            }
          />
          <div className="w-full flex items-center justify-center md:justify-end">
            <ImageComponent src="https://imgs.search.brave.com/OnZiyHWvhuCCUNMYv1aTNnU8uRkDk89yORbajJbvkjk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYXJ0cy5jb20v/ZmlsZXMvOC9BcHBz/LVBORy1GcmVlLURv/d25sb2FkLnBuZw" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row h-full  items-center justify-center container mx-auto gap-8 py-24">
          <div className="w-full flex items-center justify-center md:justify-start">
            <ImageComponent src="https://imgs.search.brave.com/mbTDI_w3vXQwvIXjlrOqatbGo7K-6RtlhCbQt6mHOh0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL2ZpbmFuY2Ut/cG5nLWdyZWVuLWFy/cm93LWd1eXMtcG5n/LTQ3My5wbmc" />
          </div>
          <ProjectContent
            title={"SOCIAL MEDIA"}
            label="Interactive session"
            description={
              "Bringing all of our research findings, we meet with you to develop a rock-solid value proposition and establish the major assumptions to prove. Then we develop the first draft of your consumers' experience through your product. These early user stories will be used to assess the features in the following stage, Product Rationale. Phase deliverables include a revised value proposition, a list of main assumptions to prove, and first user stories."
            }
          />
        </div>
        <div className="flex flex-col md:flex-row h-full items-center justify-center container mx-auto gap-8 py-24">
          <ProjectContent
            title={"SOCIAL MEDIA"}
            label="Product Justification "
            description={
              "At this point, we will possess all the necessary information to compile the definitive list of User Stories and features that are required to substantiate the primary assumptions in a Minimum Viable Product (MVP) or Proof of Concept (POC). Our team of experts in Tech Architecture, UX/UI, and Product will concentrate on addressing all inquiries that have arisen during our collaborative endeavor."
            }
          />
          <div className="w-full flex items-center justify-center md:justify-end">
            <ImageComponent src="https://imgs.search.brave.com/9PG7SklRkZrDsMyw7pSUn_Z6mJZcsyWd6_2RA4Re6-8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/cG5naW1nLmNvbS90/aHVtYi9maW5hbmNl/LzUtMi1maW5hbmNl/LXBuZy1waWMtdGh1/bWIucG5n" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProject;
