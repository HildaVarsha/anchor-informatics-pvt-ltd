import { MenuIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui";
import Link from "next/link";

const MobileNavBar = () => {
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
  const SheetComp = () => {
    return (
      <Sheet>
        <SheetTrigger>
          <MenuIcon className="w-6 h-6 text-pink-600" />
        </SheetTrigger>

        <SheetContent side={"left"} className="w-72 flex flex-col gap-4">
          <SheetHeader className="h-16 bg-pink-600 flex justify-center font-semibold px-2 text-white">
            Anchor Informatics
          </SheetHeader>
          {navBarData?.map(
            (navbar: { id: number; name: string; path: string }) => (
              <Link
                href={navbar?.path}
                key={navbar?.id}
                className="hover:text-pink-600 font-semibold hover:bg-pink-200 px-4 py-2 rounded-md"
                title={navbar?.name}
              >
                {navbar?.name}
              </Link>
            )
          )}
        </SheetContent>
      </Sheet>
    );
    `e`;
  };
  return (
    <div className="bg-white shadow border-b border-pink-700 flex items-center justify-between h-16 w-full px-4">
      <SheetComp />
      <Image
        src={
          "https://images.pexels.com/photos/14354107/pexels-photo-14354107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
        alt="Anchor Informatics"
        width={100}
        height={100}
        className="w-12 h-12 rounded-full"
      />
    </div>
  );
};

export default MobileNavBar;
