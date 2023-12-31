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

import image01 from "@/assets/wedding/images/01.jpg";
import image02 from "@/assets/wedding/images/02.jpg";
import image03 from "@/assets/wedding/images/03.jpg";
import image06 from "@/assets/wedding/images/06.jpg";
import image07 from "@/assets/wedding/images/07.jpg";
import image08 from "@/assets/wedding/images/08.jpg";
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
import image28 from "@/assets/wedding/images/28.jpg";
import image29 from "@/assets/wedding/images/29.jpg";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CaretLeftIcon,
} from "@radix-ui/react-icons";

const images = [
  image01,
  image02,
  image03,
  image06,
  image07,
  image08,
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
  image28,
  image29,
];

export default function Gallery() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const galleryTextWrapperRef = useRef<HTMLParagraphElement>(null);
  const subtitleTextRef = useRef<HTMLParagraphElement>(null);
  const swipeWrapperRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const wrapper = wrapperRef.current!;
      const imageWrapper = imageWrapperRef.current!;
      const galleryTextWrapper = galleryTextWrapperRef.current!;
      const subtitleText = subtitleTextRef.current!;
      const swipeWrapper = swipeWrapperRef.current!;

      const titleTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "20% 40%",
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
            xPercent: 2,
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
            "linear-gradient(180deg, rgba(254,215,170,1) 0%, rgba(255,255,255,1) 50%, rgba(224,242,254,1) 100%)",
        },
        {
          background:
            "linear-gradient(180deg, rgba(255,255,255,1) 20%, rgba(224,242,254,1) 70%, rgba(0,0,0,1) 100%)",
        }
      );
    },
    { scope: wrapperRef }
  );

  return (
    <section
      ref={wrapperRef}
      id="gallery"
      className=" bg-gradient-to-b via-white from-orange-200 to-sky-100 w-full h-[140vh] flex flex-col items-center justify-start py-6 md:py-12 gap-4"
    >
      <div className="w-full h-[20vh] flex flex-col items-center justify-center gap-4">
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
          className="flex w-full items-center justify-center text-xs"
        >
          <CaretLeftIcon className="text-gray-800 -mr-2" />
          <CaretLeftIcon className="text-gray-800 -mr-2" />
          <CaretLeftIcon className="text-gray-800" />
          <p className="text-gray-800 font-bold">Swipe Left</p>
        </div>
      </div>
      <div
        ref={imageWrapperRef}
        className="flex items-center justify-center h-[80vh] w-11/12 rounded-md overflow-hidden"
      >
        <Carousel
          opts={{ loop: true, align: "start" }}
          // plugins={[
          //   Autoplay({
          //     delay: 2000,
          //     stopOnFocusIn: false,
          //     stopOnInteraction: false,
          //     stopOnMouseEnter: false,
          //   }),
          // ]}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="rounded-md md:basis-1/3">
                <Image
                  priority
                  placeholder="blur"
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
