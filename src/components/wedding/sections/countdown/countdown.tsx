"use client";
import gsap from "gsap";
import Link from "next/link";
import { Josefin_Sans, Montserrat, Rakkas } from "next/font/google";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import { CalendarIcon, HeartFilledIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { weddingData } from "@/data/wedding";
import { useGSAP } from "@gsap/react";

const rakkas = Rakkas({
  subsets: ["latin"],
  weight: "400",
});

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "variable",
});

gsap.registerPlugin(ScrollTrigger);

export default function Countdown() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const now = new Date();
      const timeLeftInSeconds = Math.floor(
        (weddingData.targetDate.getTime() - now.getTime()) / 1000
      );

      if (timeLeftInSeconds <= 0) {
        clearInterval(countdownInterval);
        return;
      }

      const days = Math.floor(timeLeftInSeconds / (24 * 60 * 60));
      const hours = Math.floor((timeLeftInSeconds % (24 * 60 * 60)) / 3600);
      const minutes = Math.floor((timeLeftInSeconds % 3600) / 60);
      const seconds = timeLeftInSeconds % 60;

      setCountdown({ days, hours, minutes, seconds });
    });

    return () => clearInterval(countdownInterval);
  }, []);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const loveIconWrapperRef = useRef<HTMLDivElement>(null);
  const headerTextRef = useRef<HTMLHeadingElement>(null);
  const subHeaderTextRef = useRef<HTMLParagraphElement>(null);
  const dateTextRef = useRef<HTMLDivElement>(null);
  const countdownTickerRef = useRef<HTMLDivElement>(null);
  const addToCalendarButtonRef = useRef<HTMLButtonElement>(null);

  useGSAP(
    () => {
      const wrapper = wrapperRef.current!;
      const loveIconWrapper = loveIconWrapperRef.current!;
      const headerText = headerTextRef.current!;
      const subHeaderText = subHeaderTextRef.current!;
      const dateTextWrapper = dateTextRef.current!;
      const countdownTicker = countdownTickerRef.current!;
      const addToCalendarButton = addToCalendarButtonRef.current!;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top 60%",
          end: "bottom top",
        },
      });

      timeline
        .fromTo(
          headerText,
          { width: "0%" },
          { width: "100%", duration: 1, ease: "power1.in" }
        )
        .fromTo(
          subHeaderText,
          { opacity: 0, yPercent: 100 },
          { opacity: 1, yPercent: 0, ease: "power4.out", duration: 1.2 },
          "<"
        )
        .fromTo(
          dateTextWrapper,
          { yPercent: -100 },
          { yPercent: 0, duration: 0.6, delay: 0.4 },
          "<"
        )
        .fromTo(
          loveIconWrapper,
          { yPercent: 100, opacity: 0, rotate: -180, scale: 0 },
          {
            scale: 1,
            opacity: 1,
            yPercent: 0,
            rotate: 0,
            duration: 1,
            ease: "elastic.out(1,0.3)",
          },
          "<"
        )
        .fromTo(countdownTicker, { scaleY: 0 }, { scaleY: 1 })
        .fromTo(
          loveIconWrapper,
          {
            scale: 1,
          },
          {
            scale: 1.2,
            repeat: -1,
            repeatDelay: 0.2,
            duration: 0.5,
            yoyo: true,
          }
        )
        .fromTo(
          addToCalendarButton,
          { yPercent: -120 },
          { yPercent: 0, duration: 0.2 },
          "<"
        );
    },
    { scope: wrapperRef }
  );

  return (
    <>
      <section
        ref={wrapperRef}
        id="countdown"
        className={`${josefinSans.className} bg-sky-100 flex flex-col items-center justify-center w-full pb-24`}
      >
        <div className="flex flex-col items-center justify-center w-full sm:w-2/3 md:w-1/2 gap-4 sm:gap-8 container">
          <h3
            ref={headerTextRef}
            className={`${rakkas.className} text-4xl font-bold overflow-hidden text-center`}
          >
            Countdown
          </h3>
          <p
            ref={subHeaderTextRef}
            className="w-11/12 text-center font-light md:text-lg"
          >
            We can&apos;t wait to celebrate our special day with you.
          </p>
          <div ref={loveIconWrapperRef}>
            <HeartFilledIcon className="h-6 w-6" />
          </div>
          <div className="overflow-hidden">
            <p ref={dateTextRef} className="py-2 text-2xl text-gray-600">
              15 • 01 • 2024
            </p>
          </div>
          <div
            id="ticker"
            ref={countdownTickerRef}
            className="grid grid-cols-4 gap-8 w-full md:w-2/3 text-gray-700 border-t-2 border-b-2 border-gray-600 py-4 px-8"
          >
            <div className="text-center">
              <p className="text-4xl font-semibold">{countdown.days}</p>
              <p className="text-gray-500">Days</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-semibold">{countdown.hours}</p>
              <p className="text-gray-500">Hours</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-semibold">{countdown.minutes}</p>
              <p className="text-gray-500">Minutes</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-semibold">{countdown.seconds}</p>
              <p className="text-gray-500">Seconds</p>
            </div>
          </div>
          <Link
            className="w-full md:w-auto overflow-hidden"
            href={weddingData.urls.calendar}
          >
            <Button
              ref={addToCalendarButtonRef}
              className={`${montserrat.className} w-full text-xs md:text-sm`}
              variant="default"
            >
              <CalendarIcon className="mr-2" />
              Add to Calendar
            </Button>
          </Link>
        </div>
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 321"
        className="md:hidden fill-current text-sky-100 bg-[#002b44]"
      >
        <path
          fillOpacity="1"
          d="M0,64L24,58.7C48,53,96,43,144,42.7C192,43,240,53,288,74.7C336,96,384,128,432,117.3C480,107,528,53,576,42.7C624,32,672,64,720,112C768,160,816,224,864,240C912,256,960,224,1008,218.7C1056,213,1104,235,1152,250.7C1200,267,1248,277,1296,266.7C1344,256,1392,224,1416,208L1440,192L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}
