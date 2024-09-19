import React from "react";
import { Card } from "../ui";
import {
  BookText,
  ClipboardPlus,
  ProjectorIcon,
  ScrollText,
  GlassWater,
} from "lucide-react";
import Image from "next/image";

const HomeWhatWeDo = () => {
  const CardComponent = ({
    icon,
    label,
    description,
  }: {
    icon: any;
    label: string;
    description: string;
  }) => {
    return (
      <Card className="p-4 flex-grow w-full h-96 flex flex-col">
        <div>{icon}</div>
        <h1 className="text-3xl font-bold py-6">{label}</h1>
        <p className="text-lg flex-grow">{description}</p>
      </Card>
    );
  };

  return (
    <div className="px-4 md:px-0 py-24 container mx-auto">
      <h1 className="text-4xl font-bold text-slate-900">What We Do</h1>
      <p className="py-4 text-lg max-w-3xl">
        We assist entrepreneurs and business leaders in developing and launching
        unique bespoke software solutions to the market across a variety of
        verticals and industries. We can work with you to transform your idea
        into a successful product, whether thats through a Minimum Viable
        Product, UX/UI services, complete product bespoke software development,
        or assistance with company scaling.
      </p>
      <div className="py-12">
        <div className="flex flex-1 items-stretch flex-col md:flex-row h-full gap-6">
          <CardComponent
            icon={<BookText className="w-12 h-12 text-blue-600" />}
            label="Complete Concentration"
            description={
              "We have an intense two-day session together to get to the heart of the products value proposition and attain a state of complete attention."
            }
          />
          <CardComponent
            icon={<ClipboardPlus className="w-12 h-12 text-pink-600" />}
            label="Lower risk"
            description={
              "We dont want to assist you create a full-featured product just to realize that the market doesnt want it. We want you to be successful. That is why we focus on the critical elements required to verify your products primary assumptions, leaving extraneous features behind or preserving them for future versions."
            }
          />
          <CardComponent
            icon={<ScrollText className="w-12 h-12 text-red-600" />}
            label="Cost reductions"
            description={
              "By limiting the feature list to the basic core required to confirm your products assumptions, you reduce both risk and expense. You will spend less money on product development and throughout the early iteration phase since fewer features mean less upkeep."
            }
          />
        </div>
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 pt-6 max-w-3xl mx-auto">
          <CardComponent
            icon={<GlassWater className="w-12 h-12 text-blue-300" />}
            label="Test The Waters"
            description={
              "Choosing the appropriate agency is an important business decision, and we want to make sure were the ideal fit for you. With a Product Scope, you employ a tiny portion of the projects time and budget to evaluate our commercial partnership. You get to know us before committing to the entire project."
            }
          />
          <CardComponent
            icon={<ProjectorIcon className="w-12 h-12 text-pink-600" />}
            label="Product Scope"
            description={
              "We assist entrepreneurs and business executives in the development and introduction of innovative custom software solutions to the market in a variety of industries and verticals. We are capable of assisting you in the transformation of your vision into a successful product"
            }
          />
        </div>
      </div>
      <div className="pt-12 flex flex-col md:flex-row gap-12 justify-between">
        <Image
          src={
            "https://images.pexels.com/photos/653429/pexels-photo-653429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt="CEO"
          width={100}
          height={100}
          className="object-cover h-full w-full"
        />
        <div className="w-full h-full">
          <h1 className="text-3xl font-bold">Anchor Informatics</h1>
          <p className="text-lg text-slate-900 py-6">
            We are very happy to work with Anchor Informatics. The collaboration
            goes far beyond a standard IT service: with Anchor Informatics, we
            have a partner that challenges us in our product decisions and is
            truly passionate about the results developed. The level of
            professionalism and dedication is exceptional in this industry, and
            we are eager to strengthen our collaboration in the future.
          </p>
          <h2 className="text-3xl font-bold text-sky-500">
            Mohammed Rafi – Co-Founder
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HomeWhatWeDo;
