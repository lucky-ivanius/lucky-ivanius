"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Josefin_Sans } from "next/font/google";

gsap.registerPlugin(ScrollTrigger);

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

import image01 from "@/assets/wedding/images/_WIL1110.jpg";
import image02 from "@/assets/wedding/images/_WIL1178.jpg";
import image03 from "@/assets/wedding/images/_WIL1200.jpg";
import image04 from "@/assets/wedding/images/_WIL1477.jpg";
import image05 from "@/assets/wedding/images/_WIL1723.jpg";
import image06 from "@/assets/wedding/images/_WIL1570.jpg";
import image07 from "@/assets/wedding/images/_WIL1741.jpg";
import image08 from "@/assets/wedding/images/_WIL1755.jpg";
import image09 from "@/assets/wedding/images/_WIL1769.jpg";
import image10 from "@/assets/wedding/images/_WIL1878.jpg";
import image11 from "@/assets/wedding/images/_WIL1908.jpg";
import image12 from "@/assets/wedding/images/_WIL3049.jpg";
import image13 from "@/assets/wedding/images/_WIL3074.jpg";

import image14 from "@/assets/wedding/images/1.jpg";
import image15 from "@/assets/wedding/images/2.jpg";
import image16 from "@/assets/wedding/images/3.jpg";
import image17 from "@/assets/wedding/images/4.jpg";
import image18 from "@/assets/wedding/images/5.jpg";
import image19 from "@/assets/wedding/images/6.jpg";
import image20 from "@/assets/wedding/images/7.jpg";
import image21 from "@/assets/wedding/images/8.jpg";

const images = [
  image01,
  image02,
  image03,
  image04,
  image05,
  image06,
  image07,
  image08,
  image09,
  image10,
  image11,
  // image12,
  // image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
];

export default function Gallery() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const galleryTextWrapperRef = useRef<HTMLParagraphElement>(null);
  const subtitleTextRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const wrapper = wrapperRef.current!;
      const imageWrapper = imageWrapperRef.current!;
      const galleryTextWrapper = galleryTextWrapperRef.current!;
      const subtitleText = subtitleTextRef.current!;

      const titleTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top 40%",
        },
      });

      titleTimeline
        .from(galleryTextWrapper, { opacity: 0, yPercent: -100 })
        .from(
          subtitleText,
          {
            scale: 0,
            ease: "back.out(1.7)",
          },
          "<50%"
        )
        .from(
          imageWrapper,
          {
            opacity: 0,
            ease: "power4.out",
            duration: 2,
          },
          "<80%"
        );
    },
    { scope: wrapperRef }
  );

  return (
    <section
      ref={wrapperRef}
      id="gallery"
      className=" bg-gradient-to-b via-white from-orange-200 to-sky-100 w-full h-screen flex flex-col items-center justify-between py-6 md:py-12 gap-6"
    >
      <div className="w-full h-1/6 flex flex-col items-center justify-center gap-4">
        <h3
          ref={galleryTextWrapperRef}
          className={`${josefinSans.className} text-4xl md:text-6xl font-bold`}
        >
          Gallery
        </h3>
        <p
          ref={subtitleTextRef}
          className={`${josefinSans.className} text-slate-700 md:text-xl`}
        >
          We&apos;ve got a lot to show you!
        </p>
      </div>
      <div
        ref={imageWrapperRef}
        className="flex items-center justify-center h-5/6 w-11/12 rounded-md overflow-hidden"
      >
        <Carousel
          opts={{ loop: true, align: "start" }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnFocusIn: false,
              stopOnInteraction: false,
              stopOnMouseEnter: false,
            }),
          ]}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="rounded-md md:basis-1/3">
                <Image
                  src={image}
                  alt={`gallery-image-${index}`}
                  className="rounded-md object-cover object-center h-full w-full"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
