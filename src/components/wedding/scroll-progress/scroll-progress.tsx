"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollPercentage = Math.round(
        (scrollTop / (scrollHeight - clientHeight)) * 100
      );
      setScrollPercentage(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed h-0.5 top-0 left-0 bg-gradient-to-r from-sky-800 via-blue-300 to-white"
      style={{ width: `${scrollPercentage}%` }}
    ></div>
  );
}
