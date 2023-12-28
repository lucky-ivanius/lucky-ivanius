"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

export interface LenisProviderProps {
  children: React.ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  return (
    <ReactLenis root autoRaf options={{ lerp: 0.1, duration: 1 }}>
      {children}
    </ReactLenis>
  );
}
