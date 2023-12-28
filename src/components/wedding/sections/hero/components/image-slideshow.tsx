"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "https://cgpa4czjw7bucnio.public.blob.vercel-storage.com/_WIL2860.jpg",
  "https://cgpa4czjw7bucnio.public.blob.vercel-storage.com/_WIL2893.jpg",
  "https://cgpa4czjw7bucnio.public.blob.vercel-storage.com/_WIL2997.jpg",
  "https://cgpa4czjw7bucnio.public.blob.vercel-storage.com/_WIL3012.jpg",
];

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
        <img
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
