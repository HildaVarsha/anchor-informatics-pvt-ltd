import Image from "next/image";
import React from "react";
import { Button } from "../ui";
import Link from "next/link";
import { SERVICE_LOCATIONS } from "@/core/ServicesConstants";

const TalkAbout = () => {
  const LocationComp = ({address,email,phone, title, src }: { title: string; src: string, address:string|any,phone:string|any, email:string|any }) => {
    return (
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-4">
        <Image
          src={src}
          alt="Location"
          width={250}
          height={100}
          className="object-cover rounded-md h-40 w-40"
        />
        <div>
          <h1 className="text-3xl font-bold text-white pb-4">{title}</h1>
          <p className="text-white">
            {address}
          </p>
          <Link href={`tel:${phone}`} className="py-2 text-white">
            Phone: <a className="text-pink-600">{phone}</a> &nbsp;
          </Link>
          <Link
            href={`mailto:${email}`}
            className="text-white"
          >
            Email: <a className="text-pink-600">{email}</a>
          </Link>
        </div>
      </div>
    );
  };
  return (
    <div className="bg-slate-800">
      <div className="container mx-auto px-4 md:px-0 py-16 flex flex-col md:flex-row justify-between">
        <div>
          <Image
            src={"/logo.jpg"}
            alt="Logo"
            width={100}
            height={100}
            className="object-cover"
          />
          <h1 className="text-5xl font-bold text-white py-4 max-w-lg">
            Lets talk about your project
          </h1>
          <Button className="bg-transparent border-2 border-pink-600 rounded-3xl mt-4">
            SCHEDULE A CALL
          </Button>
        </div>
        <div className="flex flex-col gap-8 pt-8 md:pt-0">
          {SERVICE_LOCATIONS?.map((item, index)=>{
            return (

              <LocationComp
              key={index}
              address={item.address}
              email={item.email}
              phone={item.phone}
              title={item.name}
              src={
               item.image 
              }
              />
            )
          })}
          
        </div>
      </div>
    </div>
  );
};

export default TalkAbout;
