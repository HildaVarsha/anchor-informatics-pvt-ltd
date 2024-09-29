import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const Header = ({ label }: { label: string }) => {
    return <h1 className="text-4xl font-bold text-white pb-8">{label}</h1>;
  };
  const LinkComp = ({ label, href }: { label: string; href: string }) => {
    return (
      <Link href={"#"} className="text-lg  text-white pb-4">
        {label}
      </Link>
    );
  };
  return (
    <div className="px-4 md:px-0 py-16 bg-black">
      <div className="container mx-auto flex  flex-col md:flex-row justify-between border-b border-slate-600 pb-8">
        <div>
          <Image
            src={"/logo.jpg"}
            alt="Logo"
            width={150}
            height={150}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <Header label="Global" />
          <LinkComp label={"Work"} href="/work" />
          <LinkComp label={"About Us"} href="/about-us" />
          <LinkComp label={"Blog"} href="/" />
          <LinkComp label={"News Letter"} href="/" />
          <LinkComp label={"News"} href="/" />
          <LinkComp label={"Careers"} href="/careers" />
        </div>
        <div className="flex flex-col">
          <Header label="Services" />
          <LinkComp label={"Product Scope"} href="/" />
          <LinkComp label={"UX/UI"} href="/" />
          <LinkComp label={"MVP Builder"} href="/" />
          <LinkComp label={"Dedicated Teams"} href="/" />
          <LinkComp label={"Custome Software Development"} href="/" />
        </div>
        <div className="flex flex-col">
          <Header label="Technology" />
          <LinkComp label={"Tech"} href="/" />
          <LinkComp label={"Open Source"} href="/" />
        </div>
        <div className="flex flex-col">
          <Header label="Build" />
          <LinkComp label={"Play with Pricing"} href="/" />
          <LinkComp label={"Book a Call"} href="/" />
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between pt-8">
        <p className="text-slate-500">
          © 2024 Anchor Informatics All rights reserved.
        </p>
        <p className="text-slate-500">Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
