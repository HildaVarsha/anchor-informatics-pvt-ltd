"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import ContactForm from "./ContactUs";

const TopNavBar = () => {
  const pathname = usePathname();
  const navBarData = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Services",
      path: "/services",
    },
    {
      id: 3,
      name: "Work",
      path: "/work",
    },

    {
      id: 4,
      name: "About Us",
      path: "/about-us",
    },
    {
      id: 5,
      name: "Careers",
      path: "/careers",
    },
  ];

  return (
    <div className="w-full  bg-transparent border-b border-pink-600">
      <div className="flex items-center justify-between container mx-auto py-3">
        <Link href={"/"}>
          <Image
            src={"/logo.jpg"}
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
                className={`font-bold ${
                  pathname == navbar?.path
                    ? "text-pink-600 hover:text-pink-700"
                    : "hover:text-pink-600 "
                }`}
                title={navbar?.name}
              >
                {navbar?.name}
              </Link>
            )
          )}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
