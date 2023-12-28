"use client";

import Countdown from "@/components/wedding/sections/countdown/countdown";
import Event from "@/components/wedding/sections/event/event";
import Gallery from "@/components/wedding/sections/gallery/gallery";
import ThankYou from "@/components/wedding/sections/thank-you/thank-you";
import Hero from "@/components/wedding/sections/hero/hero";
import Profile from "@/components/wedding/sections/profile/profile";
import { useLayoutEffect } from "react";

export default function Wedding() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <Hero />
      <Profile />
      <Countdown />
      <Event />
      <Gallery />
      <ThankYou />
    </div>
  );
}