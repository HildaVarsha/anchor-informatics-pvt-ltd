"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
  Input,
  Textarea,
} from "../ui";

const TopNavBar = () => {
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
  const AlertComponent = () => {
    return (
      <AlertDialog>
        <AlertDialogTrigger>
          <Button className="rounded-3xl h-10">Book A Call</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-3xl font-bold text-pink-600">
              Contact Us
            </AlertDialogTitle>
            <AlertDialogDescription>
              Our Team will contact you within two days of working days
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="pb-2">
            <h1 className="font-semibold pb-2">Name</h1>
            <Input className="h-12" placeholder="Your Name" />
          </div>
          <div className="pb-2">
            <h1 className="font-semibold pb-2">Email</h1>
            <Input className="h-12" placeholder="Your Email" type="email" />
          </div>
          <div>
            <h1 className="font-semibold pb-2">Message</h1>
            <Textarea className="h-24" placeholder="Your Content" />
          </div>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <Button className="">Send</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  };

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
          <AlertComponent />
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
