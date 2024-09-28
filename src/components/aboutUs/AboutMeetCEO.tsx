import React from "react";
import { Card } from "../ui";
import Image from "next/image";
import Link from "next/link";
import { MailIcon } from "lucide-react";
import { FOUNDERS } from "@/core/AboutUsConstans";

const AboutMeetCEO = () => {
  return (
    <div className="px-4 md:px-0 pb-24 container mx-auto">
      <h1 className="text-5xl font-bold pb-8">Meet the Founders </h1>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {FOUNDERS?.map((item, index) => {
          return (
            <Card key={index} className="p-2 w-full">
              <Image
                src={
                  item.image ||
                  "https://images.pexels.com/photos/3183146/pexels-photo-3183146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
                alt={item.name}
                width={100}
                height={100}
                className="w-full h-full"
              />
              <div className="p-4">
                <h1 className="text-3xl font-bold pb-4">
                  {item.name} {item.role}
                </h1>
                <Link href={"#"} className="w-10 h-10">
                  <MailIcon />
                  {item.email}
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default AboutMeetCEO;
