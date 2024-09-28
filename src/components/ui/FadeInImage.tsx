"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const FadeInImage = ({ image }: { image: string | any }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it becomes visible
        }
      },
      { threshold: 0.1 } // Image needs to be 10% in the viewport
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      // setIsVisible(false);
      // if (imageRef.current) observer.disconnect();
    };
  }, []);

  return (
    <>
      <Image
        loading="lazy"
        src={image}
        alt="Product One"
        width={100}
        height={100}
        className={`w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 ${
          isVisible ? "animate-fade" : "opacity-0"
        }`}
      />
      <div ref={imageRef}></div>
    </>
  );
};

export default FadeInImage;
