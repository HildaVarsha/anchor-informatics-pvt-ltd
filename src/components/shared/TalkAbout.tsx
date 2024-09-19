import Image from "next/image";
import React from "react";
import { Button } from "../ui";
import Link from "next/link";

const TalkAbout = () => {
  const LocationComp = ({ title, src }: { title: string; src: string }) => {
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
            Address: R. Adriano C. de Oliveira 4A, 1600-312
          </p>
          <Link href="tel:+44 7734456458" className="py-2 text-white">
            Phone: <a className="text-pink-600">+44 7734456458</a>
          </Link>
          <Link
            href="mailto:nfo@anchorinformatics.co.uk"
            className="text-white"
          >
            Email: <a className="text-pink-600">info@anchorinformatics.co.uk</a>
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
          <LocationComp
            title={"London"}
            src={
              "https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
          />
          <LocationComp
            title={"Dubai"}
            src={
              "https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
          />
          <LocationComp
            title={"Hydrabad"}
            src="https://images.pexels.com/photos/1537493/pexels-photo-1537493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
      </div>
    </div>
  );
};

export default TalkAbout;
