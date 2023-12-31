"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import bgImage01 from "@/assets/wedding/images/14.jpg";
import bgImage02 from "@/assets/wedding/images/15.jpg";
import bgImage03 from "@/assets/wedding/images/16.jpg";
import bgImage04 from "@/assets/wedding/images/17.jpg";

const images = [bgImage01, bgImage02, bgImage03, bgImage04];

export default function ImageSlideshow() {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(imageInterval);
  }, []);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
    }
  }, [isFirstRender]);

  return (
    <>
      {images.map((image, index) => (
        <Image
          placeholder="blur"
          priority
          key={index}
          src={image}
          alt={`image-${index}`}
          style={{
            objectPosition: "0% 25%",
          }}
          className={`h-screen object-cover w-[5000px] absolute ${
            index === currentImageIndex
              ? `opacity-${isFirstRender ? 0 : 100}`
              : "opacity-0"
          } transition-opacity duration-1000`}
        />
      ))}
    </>
  );
}
