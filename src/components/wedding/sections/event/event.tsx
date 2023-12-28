"use client";
import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";
import { Rakkas } from "next/font/google";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { SewingPinFilledIcon } from "@radix-ui/react-icons";

import bgImage from "@/assets/wedding/images/_WIL1352.jpg";
import { weddingData } from "@/data/wedding";

gsap.registerPlugin(ScrollTrigger);

const rakkas = Rakkas({
  subsets: ["latin"],
  weight: "400",
});

export default function Event() {
  const wrapperRef = useRef<HTMLElement>(null);
  const eventImageRef = useRef<HTMLImageElement>(null);
  const eventScheduleRef = useRef<HTMLDivElement>(null);
  const headerTextRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current!;
    const eventImage = eventImageRef.current!;
    const eventSchedule = eventScheduleRef.current!;
    const headerText = headerTextRef.current!;

    const imageTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "center bottom",
        end: "bottom 25%",
        scrub: 2,
      },
    });

    imageTimeline.fromTo(
      eventImage,
      {
        objectPosition: "40% top",
      },
      { objectPosition: "60% top" }
    );

    const scheduleTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "top 25%",
      },
    });

    scheduleTimeline
      .fromTo(eventSchedule, { yPercent: 100 }, { yPercent: 0, duration: 0.5 })
      .fromTo(eventSchedule, { opacity: 0 }, { opacity: 1, duration: 1.2 }, "<")
      .fromTo(
        headerText,
        { scaleY: 0 },
        { scaleY: 1, duration: 0.5, ease: "power1.in", delay: 0.2 },
        "<"
      );

    return () => {
      scheduleTimeline.kill();
    };
  }, []);

  return (
    <section ref={wrapperRef} id="event" className="relative">
      <Image
        ref={eventImageRef}
        src={bgImage}
        alt="event-bg-image"
        className="h-screen object-cover object-top w-[10000px] absolute"
      />
      <div className="relative h-screen flex flex-col items-center justify-center md:justify-start md:pt-24">
        <div
          ref={eventScheduleRef}
          className="w-11/12 sm:w-4/5 md:w-1/2 rounded-md p-8 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 gap-6"
        >
          <h3
            ref={headerTextRef}
            className={`${rakkas.className} text-4xl font-bold overflow-hidden text-center`}
          >
            Wedding Event
          </h3>
          <div className="w-full">
            <h5 className="text-sm md:text-lg">{weddingData.event.name}</h5>
            <p className="font-light text-sm md:text-base text-neutral-400">
              {weddingData.event.schedule.date.text} -{" "}
              {weddingData.event.schedule.startTime}
            </p>
          </div>
          <div className="w-full">
            <h5 className="text-sm md:text-lg">
              Venue: {weddingData.event.venue.name}
            </h5>
            <p className="text-sm md:text-base text-neutral-400 w-full">
              {weddingData.event.venue.address}
            </p>
          </div>
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-2">
            <Link
              className="w-2/3 md:w-auto"
              href={weddingData.event.venue.url}
              target="_blank"
            >
              <Button className="w-full text-xs md:text-sm" variant="outline">
                <SewingPinFilledIcon className="mr-2" />
                Get Direction
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
