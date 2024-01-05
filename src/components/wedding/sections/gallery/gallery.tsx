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
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Josefin_Sans } from "next/font/google";

gsap.registerPlugin(ScrollTrigger);

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

import image01 from "@/assets/wedding/images/01.jpg";
import image02 from "@/assets/wedding/images/02.jpg";
import image03 from "@/assets/wedding/images/03.jpg";
import image06 from "@/assets/wedding/images/06.jpg";
import image07 from "@/assets/wedding/images/07.jpg";
import image08 from "@/assets/wedding/images/08.jpg";
import image09 from "@/assets/wedding/images/09.jpg";
import image10 from "@/assets/wedding/images/10.jpg";
import image12 from "@/assets/wedding/images/12.jpg";
import image13 from "@/assets/wedding/images/13.jpg";
import image19 from "@/assets/wedding/images/19.jpg";
import image20 from "@/assets/wedding/images/20.jpg";
import image21 from "@/assets/wedding/images/21.jpg";
import image22 from "@/assets/wedding/images/22.jpg";
import image23 from "@/assets/wedding/images/23.jpg";
import image24 from "@/assets/wedding/images/24.jpg";
import image25 from "@/assets/wedding/images/25.jpg";
import image26 from "@/assets/wedding/images/26.jpg";
import image27 from "@/assets/wedding/images/27.jpg";
import image29 from "@/assets/wedding/images/29.jpg";

import { CaretLeftIcon, DoubleArrowDownIcon } from "@radix-ui/react-icons";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";

const images = [
  image01,
  image02,
  image03,
  image06,
  image07,
  image08,
  image09,
  image10,
  image12,
  image13,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
  image29,
];

export default function Gallery() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const galleryTextWrapperRef = useRef<HTMLParagraphElement>(null);
  const subtitleTextRef = useRef<HTMLParagraphElement>(null);
  const swipeWrapperRef = useRef<HTMLParagraphElement>(null);
  const keepScrollingRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const wrapper = wrapperRef.current!;
      const imageWrapper = imageWrapperRef.current!;
      const galleryTextWrapper = galleryTextWrapperRef.current!;
      const subtitleText = subtitleTextRef.current!;
      const swipeWrapper = swipeWrapperRef.current!;
      const keepScrolling = keepScrollingRef.current!;

      const titleTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top 60%",
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
        )
        .fromTo(
          swipeWrapper,
          {
            opacity: 0,
            xPercent: 10,
          },
          {
            opacity: 1,
            xPercent: 0,
            repeat: -1,
            repeatDelay: 0.5,
            duration: 1.2,
          },
          "<"
        );

      gsap.to(keepScrolling, {
        yPercent: 40,
        repeat: -1,
        yoyo: true,
        yoyoEase: "back.out(1.7)",
        duration: 1,
      });

      const disappearTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "bottom 20%",
        },
      });

      disappearTimeline.to(keepScrolling, {
        opacity: 0,
      });

      const backgroundTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: "bottom 90%",
          scrub: true,
        },
      });

      backgroundTimeline.fromTo(
        wrapper,
        {
          background:
            "linear-gradient(180deg, rgb(255, 237, 213) 0%, rgba(255,255,255,1) 50%, rgba(224,242,254,1) 100%)",
        },
        {
          background:
            "linear-gradient(180deg, rgba(255,255,255,1) 20%, rgba(12, 74, 110,1) 70%, rgb(0, 0, 0) 100%)",
        }
      );
    },
    { scope: wrapperRef }
  );

  return (
    <section
      ref={wrapperRef}
      id="gallery"
      className="bg-gradient-to-b via-white from-orange-100 to-sky-100 w-full h-[120vh] flex flex-col items-center justify-start py-6 md:py-12 gap-4"
    >
      <div className="w-full h-[20vh] md:h-[30vh] flex flex-col items-center justify-center gap-4">
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
        <div
          ref={swipeWrapperRef}
          className="flex items-center justify-center text-xs md:hidden"
        >
          <CaretLeftIcon className="text-gray-800 -mr-2" />
          <CaretLeftIcon className="text-gray-800 -mr-2" />
          <CaretLeftIcon className="text-gray-800" />
          <p className="text-gray-800 font-bold">Swipe Left</p>
        </div>
      </div>
      <Carousel
        ref={imageWrapperRef}
        className="flex items-center justify-center h-[80vh] w-11/12 rounded-md overflow-hidden"
        opts={{ loop: true, align: "start" }}
      >
        <div className="hidden md:block relative w-full h-full">
          <CarouselPrevious className="flex left-0 border-0 hover:bg-transparent text-white" />
        </div>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="rounded-md md:basis-1/3">
              <Image
                priority
                placeholder="blur"
                src={image}
                alt={`gallery-image-${index}`}
                className="rounded-md object-cover object-center h-full w-full shadow-md"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block relative w-full h-full">
          <CarouselNext className="flex right-0 border-0 hover:bg-transparent text-white" />
        </div>
      </Carousel>
      <div
        ref={keepScrollingRef}
        className="flex w-full h-[20vh] md:h-[10vh] items-center justify-center gap-2"
      >
        <DoubleArrowDownIcon className="text-white w-6 md:w-12 h-6 md:h-12" />
        <DoubleArrowDownIcon className="text-white w-6 md:w-12 h-6 md:h-12" />
        <DoubleArrowDownIcon className="text-white w-6 md:w-12 h-6 md:h-12" />
      </div>
    </section>
  );
}
