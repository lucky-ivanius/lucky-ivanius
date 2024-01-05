"use client";
import { Yellowtail, Playfair_Display, Josefin_Sans } from "next/font/google";
import { DoubleArrowDownIcon, HeartFilledIcon } from "@radix-ui/react-icons";
import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const yellowtail = Yellowtail({ subsets: ["latin"], weight: "400" });
const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function ThankYou() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const messageRef = useRef<HTMLParagraphElement>(null);
  const thankYouWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const wrapper = wrapperRef.current!;
      const video = videoRef.current!;
      const message = messageRef.current!;
      const thankYouWrapper = thankYouWrapperRef.current!;

      gsap.context(() => {
        const videoTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: wrapper,
            start: "top center",
          },
        });

        videoTimeline.fromTo(
          video,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            delay: 0.5,
            onComplete: () => {
              videoRef.current!.play();
            },
          }
        );

        const thankYouTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: wrapper,
            start: "top 20%",
          },
        });

        thankYouTimeline
          .fromTo(
            message,
            {
              backgroundImage:
                "linear-gradient(to bottom right, #f3f4f6 0%, #000 0%)",
            },
            {
              backgroundImage:
                "linear-gradient(to bottom right, #f3f4f6 50%, #000 100%)",
              duration: 1.5,
            }
          )
          .from(
            thankYouWrapper,
            {
              yPercent: 100,
              opacity: 0,
              ease: "sine.inOut",
            },
            "<=70%"
          );
      });
    },
    { scope: wrapperRef }
  );

  return (
    <section
      ref={wrapperRef}
      id="thank-you"
      className="h-screen w-full bg-black text-white py-8 px-4"
    >
      <div className="flex flex-col items-center justify-center gap-4 w-full h-full overflow-hidden">
        <p
          ref={messageRef}
          className={`${josefinSans.className} h-1/6 w-full md:w-1/3 z-20 text-sm md:text-xl text-center font-medium text-transparent bg-clip-text bg-gradient-to-br from-gray-100 to-black`}
        >
          Let&apos;s make memories together!
          <br />
          Your presence would mean the world to us on this incredible day of
          love and joy. Can&apos;t wait to celebrate with you and create
          unforgettable moments. 🤍
        </p>
        <video
          ref={videoRef}
          src="/videos/bg.mp4"
          muted
          autoPlay
          loop
          playsInline
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
          preload="auto"
          className="z-0 h-3/6 w-full translate-x-8 md:translate-x-12 scale-[260%] md:scale-125"
        />
        <div
          ref={thankYouWrapperRef}
          className="flex flex-col items-center justify-center w-full h-2/6 gap-2 md:gap-6"
        >
          <h3
            className={`${yellowtail.className} text-center text-3xl md:text-7xl`}
          >
            Thank you
          </h3>
          <HeartFilledIcon className="w-6 h-6 md:w-12 md:h-12" />
          <p
            className={`${playfair_display.className} text-center text-3xl md:text-8xl`}
          >
            Lucky & Jessica
          </p>
        </div>
      </div>
    </section>
  );
}
