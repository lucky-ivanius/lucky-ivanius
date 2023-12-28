"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import bgImage01 from "@/assets/wedding/images/_WIL2860.jpg";
import bgImage02 from "@/assets/wedding/images/_WIL2893.jpg";
import bgImage03 from "@/assets/wedding/images/_WIL2997.jpg";
import bgImage04 from "@/assets/wedding/images/_WIL3012.jpg";

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
          key={index}
          src={image}
          alt={`image-${index}`}
          className={`h-screen object-cover object-center w-[5000px] absolute ${
            index === currentImageIndex
              ? `opacity-${isFirstRender ? 0 : 100}`
              : "opacity-0"
          } transition-opacity duration-1000`}
        />
      ))}
    </>
  );
}
