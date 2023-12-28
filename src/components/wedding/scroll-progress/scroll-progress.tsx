"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgress() {
  const scrollProgressRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const scrollProgress = scrollProgressRef.current;
      if (!scrollProgress) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      tl.to(scrollProgress, {
        width: "100%",
        ease: "none",
      });
    },
    { scope: scrollProgressRef }
  );

  return (
    <div
      ref={scrollProgressRef}
      className="fixed h-0.5 md:h-1 top-0 left-0 bg-gradient-to-r from-sky-800 via-blue-300 to-white"
    ></div>
  );
}
