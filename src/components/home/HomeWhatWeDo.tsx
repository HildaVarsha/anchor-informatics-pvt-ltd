import React from "react";
import { Card } from "../ui";
import { ProjectorIcon } from "lucide-react";
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
      <Card className="p-4">
        {icon}
        <h1 className="text-3xl font-bold py-6">{label}</h1>
        <p className="text-lg">{description}</p>
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
        <div className="flex flex-col md:flex-row items-center gap-6">
          <CardComponent
            icon={<ProjectorIcon className="w-12 h-12 text-pink-600" />}
            label="Product Scope"
            description={
              " We help entrepreneurs and business leaders build and launch innovative custom software solutions"
            }
          />
          <CardComponent
            icon={<ProjectorIcon className="w-12 h-12 text-pink-600" />}
            label="Product Scope"
            description={
              " We help entrepreneurs and business leaders build and launch innovative custom software solutions"
            }
          />
          <CardComponent
            icon={<ProjectorIcon className="w-12 h-12 text-pink-600" />}
            label="Product Scope"
            description={
              " We help entrepreneurs and business leaders build and launch innovative custom software solutions"
            }
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-6 max-w-3xl mx-auto">
          <CardComponent
            icon={<ProjectorIcon className="w-12 h-12 text-pink-600" />}
            label="Product Scope"
            description={
              " We help entrepreneurs and business leaders build and launch innovative custom software solutions"
            }
          />
          <CardComponent
            icon={<ProjectorIcon className="w-12 h-12 text-pink-600" />}
            label="Product Scope"
            description={
              " We help entrepreneurs and business leaders build and launch innovative custom software solutions"
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
          <h1 className="text-3xl font-bold">Anchor Info</h1>
          <p className="text-lg text-slate-900 py-6">
            We are very happy to work with Altar.io. The collaboration goes far
            beyond a standard IT service: with Altar.io we have a sparring
            partner that challenges us in our product decisions and is truly
            passionate about the results developed. The level of professionalism
            and dedication is exceptional in this industry and we are eager to
            strengthen our collaboration in the future.
          </p>
          <h2 className="text-3xl font-bold text-sky-500">
            Philip Schoch – Apiax, Co-Founder
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HomeWhatWeDo;
