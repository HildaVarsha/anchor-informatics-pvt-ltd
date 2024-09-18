"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui";

const TopNavBar = () => {
  const [scrollPossition, setScrollPossition] = useState(0);
  const navBarData = [
    {
      id: 1,
      name: "Work",
      path: "/work",
    },
    {
      id: 2,
      name: "Services",
      path: "/",
    },
    {
      id: 3,
      name: "Pricing",
      path: "/",
    },
    {
      id: 4,
      name: "About Us",
      path: "/",
    },
    {
      id: 5,
      name: "Careers",
      path: "/",
    },
    {
      id: 6,
      name: "Tech",
      path: "/",
    },
    {
      id: 7,
      name: "Blog",
      path: "/",
    },
    {
      id: 8,
      name: "Podcast",
      path: "/",
    },
  ];
  const handleScroll = () => {
    setScrollPossition(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  let opacity =
    scrollPossition > 1
      ? parseFloat((scrollPossition / 1.2 / 130).toFixed(1))
      : 0.1;
  opacity = Math.min(opacity, 1);
  opacity < 0.1 ? 0.1 : opacity;

  return (
    <div className="w-full  bg-transparent border-b border-pink-600">
      <div className="flex items-center justify-between container mx-auto py-3">
        <Link href={"/"}>
          <Image
            src={
              "https://images.pexels.com/photos/7260948/pexels-photo-7260948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt="Anchor Informatics"
            width={100}
            height={100}
            className="object-cover h-12 w-12 rounded-full"
          />
        </Link>
        <div className="flex items-center gap-6">
          {navBarData?.map(
            (navbar: { id: number; name: string; path: string }) => (
              <Link
                href={navbar?.path}
                key={navbar?.id}
                className="hover:text-pink-600 font-medium"
                title={navbar?.name}
              >
                {navbar?.name}
              </Link>
            )
          )}
          <Button className="rounded-3xl h-10">Book A Call</Button>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
