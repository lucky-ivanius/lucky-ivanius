"use client";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

import bgImage from "@/assets/wedding/images/_WIL1769.jpg";
import { weddingData } from "@/data/wedding";

gsap.registerPlugin(ScrollTrigger);

export default function Profile() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const brideSocialRef = useRef<HTMLDivElement>(null);
  const groomSocialRef = useRef<HTMLDivElement>(null);

  const parseInstagramUrl = (username: string) => {
    return `https://instagram.com/${username}`;
  };

  useGSAP(
    () => {
      const wrapper = wrapperRef.current!;
      const image = imageRef.current!;
      const brideSocial = brideSocialRef.current!;
      const groomSocial = groomSocialRef.current!;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top center",
        },
      });

      timeline
        .fromTo(
          image,
          { filter: "grayscale(100%)" },
          { filter: "grayscale(0%)", duration: 2, ease: "sine.out" }
        )
        .fromTo(
          brideSocial,
          { xPercent: 60, opacity: 0 },
          { xPercent: 0, opacity: 1 },
          "<"
        )
        .fromTo(
          groomSocial,
          { xPercent: -60, opacity: 0 },
          { xPercent: 0, opacity: 1 },
          "<"
        );
    },
    { scope: wrapperRef }
  );

  return (
    <>
      <section
        ref={wrapperRef}
        id="profile"
        className="bg-transparent overflow-hidden relative"
      >
        <div className="h-[50vh] md:h-screen relative">
          <Image
            ref={imageRef}
            src={bgImage}
            alt="profile=bg-image"
            className="h-full object-cover object-center w-full"
          />
          <div className="absolute top-0 h-full w-full flex items-center justify-center gap-y-80">
            <div
              ref={brideSocialRef}
              className="absolute bottom-[25%] left-[5%] md:bottom-[40%] md:left-[25%] flex flex-col items-center justify-center rounded-md bg-gradient-to-r from-slate-800 to-transparent bg-opacity-40 gap-4 p-4 text-white"
            >
              <p className="font-semibold">
                {weddingData.couple.bride.firstName}{" "}
                {weddingData.couple.bride.lastName}
              </p>
              <Link
                href={parseInstagramUrl(
                  weddingData.couple.bride.socials.instagram
                )}
                target="_blank"
              >
                <Button className="text-xs" variant="outline">
                  <InstagramLogoIcon className="mr-2" />@
                  {weddingData.couple.bride.socials.instagram}
                </Button>
              </Link>
            </div>
            <div
              ref={groomSocialRef}
              className="absolute top-[10%] right-[5%] md:top-[15%] md:right-[25%] flex flex-col items-center justify-center rounded-md bg-gradient-to-l from-slate-800 to-transparent bg-opacity-40 gap-4 p-4 text-white"
            >
              <p className="font-semibold">
                {weddingData.couple.groom.firstName}{" "}
                {weddingData.couple.groom.lastName}
              </p>
              <Link
                href={parseInstagramUrl(
                  weddingData.couple.groom.socials.instagram
                )}
                target="_blank"
              >
                <Button className="text-xs" variant="outline">
                  <InstagramLogoIcon className="mr-2" />@
                  {weddingData.couple.groom.socials.instagram}
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 318"
          className="fill-current bg-transparent text-sky-100 absolute bottom-0"
        >
          <path
            fillOpacity="1"
            d="M0,64L24,58.7C48,53,96,43,144,42.7C192,43,240,53,288,74.7C336,96,384,128,432,117.3C480,107,528,53,576,42.7C624,32,672,64,720,112C768,160,816,224,864,240C912,256,960,224,1008,218.7C1056,213,1104,235,1152,250.7C1200,267,1248,277,1296,266.7C1344,256,1392,224,1416,208L1440,192L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
          ></path>
        </svg>
      </section>
    </>
  );
}
