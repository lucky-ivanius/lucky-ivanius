"use client";
import { Beau_Rivage, Josefin_Sans } from "next/font/google";
import CoupleName from "./couple-name";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { weddingData } from "@/data/wedding";

const beauRivage = Beau_Rivage({
  subsets: ["latin"],
  weight: "400",
});

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: "400",
});

gsap.registerPlugin(ScrollTrigger);

export default function WeddingOf() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const wrapper = wrapperRef.current!;

    gsap.fromTo(
      wrapper,
      {
        opacity: 0,
        y: "100%",
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 1,
        ease: "expo.out",
      }
    );
  });

  return (
    <div
      ref={wrapperRef}
      className="w-full py-4 flex flex-col items-center justify-center text-white bg-slate-900 bg-opacity-10"
    >
      <p className={`${josefinSans.className} mb-4 text-xl`}>The Wedding of</p>
      <CoupleName id="groom" {...weddingData.couple.groom} />
      <p
        className={`${beauRivage.className} text-center text-5xl leading-relaxed`}
      >
        &
      </p>
      <CoupleName id="bride" {...weddingData.couple.bride} />
    </div>
  );
}
