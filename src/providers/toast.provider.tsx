"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Toaster } from "../components/ui/sonner";

export default function ToastProvider() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return <Toaster position={isDesktop ? "bottom-right" : "top-center"} />;
}
