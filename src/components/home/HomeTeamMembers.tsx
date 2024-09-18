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
      <Card className="">
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
            "https://images.pexels.com/photos/775091/pexels-photo-775091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          title={"Need a team?"}
          description={
            " I will help you build a team of top talent to boost your business reach its potential."
          }
        />
        <CardComponent
          src={
            "https://images.pexels.com/photos/775091/pexels-photo-775091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          title={"Need a team?"}
          description={
            " I will help you build a team of top talent to boost your business reach its potential."
          }
        />
        <CardComponent
          src={
            "https://images.pexels.com/photos/775091/pexels-photo-775091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          title={"Need a team?"}
          description={
            " I will help you build a team of top talent to boost your business reach its potential."
          }
        />
      </div>
    </div>
  );
};

export default HomeTeamMembers;
