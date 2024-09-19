import React from "react";
import { Card } from "../ui";
import Image from "next/image";
import Link from "next/link";

const HomeTeamMembers = () => {
  const CardComponent = ({
    src,
    title,
    description,
  }: {
    src: string;
    title: string;
    description: string;
  }) => {
    return (
      <Card className="w-full h-[600px]">
        <Image
          src={src}
          alt="Team Members"
          width={100}
          height={100}
          className="object-cover h-52 w-full"
        />
        <div className="flex flex-col items-center p-4">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-lg py-4 text-center">{description}</p>
          <Link
            href="#"
            className="font-semibold text-pink-600 text-center mt-6"
          >
            CONTACT VIA EMAIL
          </Link>
        </div>
      </Card>
    );
  };
  return (
    <div className="px-4 md:px-0 py-24 container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <CardComponent
          src={
            "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          title={"Certified Ability"}
          description={
            "Handpicked Front-end and Full-Stack software professionals, ideally matched to your needs.We use a systematic process to create the best, long-term devoted team for your project. Our high-speed frontend and fullstack specialists have the knowledge you need to deliver solutions using cutting-edge performance technologies like Angular, React, Node.js, and Python."
          }
        />
        <CardComponent
          src={
            "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          title={"Lower Expenses and Risks"}
          description={
            "Anchor Informatics recruits and assesses roughly 40 individuals for each new team member. We evaluate software developers based on a career profile evaluation, hard skills demonstrated by our technical challenges, and team interviews conducted by both us and you."
          }
        />
        <CardComponent
          src={
            "https://images.pexels.com/photos/775091/pexels-photo-775091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          title={"Training"}
          description={
            "Onboarding a committed workforce costs around 40% less than hiring on a project basis at an hourly rate. Furthermore, you have complete control over a specialized team's availability. These factors combine to create a useful source of delivery power in an industry with a scarcity of competent software professionals, particularly frontend specialists"
          }
        />
      </div>
    </div>
  );
};

export default HomeTeamMembers;
