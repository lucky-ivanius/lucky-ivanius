import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import LenisProvider from "@/providers/lenis.provider";
import ToastProvider from "@/providers/toast.provider";
import BgMusic from "@/components/wedding/audio/bg-music";
import Invitation from "@/components/wedding/sections/invitation/invitation";
import { AudioProvider } from "@/providers/audio.provider";
import ScrollProgress from "@/components/wedding/scroll-progress/scroll-progress";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Wedding of Lucky Ivanius & Jessica Tionado",
};

export default function Layout({ children }: LayoutProps) {
  return (
    <LenisProvider>
      <AudioProvider audioUrl="/audios/audio.mp3">
        <main id="wedding-invitation" className={`${montserrat.className}`}>
          {children}
        </main>
        <Invitation />
        <BgMusic />
      </AudioProvider>
      <ToastProvider />
    </LenisProvider>
  );
}
