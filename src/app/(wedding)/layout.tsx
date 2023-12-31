import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import LenisProvider from "@/providers/lenis.provider";
import ToastProvider from "@/providers/toast.provider";
import BgMusic from "@/components/wedding/audio/bg-music";
import { AudioProvider } from "@/providers/audio.provider";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  metadataBase: new URL(`https://${process.env.URL}`),
  title: "The Wedding of Lucky Ivanius & Jessica Tionado",
  description: "Hi, We invite you to join us for our wedding. 💕",
  openGraph: {
    type: "website",
    url: `https://${process.env.URL}`,
    title: "The Wedding of Lucky Ivanius & Jessica Tionado",
    description: "Hi, We invite you to join us for our wedding. 💕",
    images: [
      {
        url: `https://${process.env.URL}/images/front.jpg`,
        width: 600,
        height: 600,
        alt: "The Wedding of Lucky Ivanius & Jessica Tionado",
      },
    ],
  },
};

export default function Layout({ children }: LayoutProps) {
  return (
    <LenisProvider>
      <AudioProvider audioUrl="/audios/bgm.mp3">
        <main id="wedding-invitation" className={`${montserrat.className}`}>
          {children}
        </main>
        {/* <ScrollProgress /> */}
        <BgMusic />
      </AudioProvider>
      <ToastProvider />
    </LenisProvider>
  );
}
