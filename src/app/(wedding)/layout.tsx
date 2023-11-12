import type { Metadata } from "next";
import { Lato } from "next/font/google";

const font = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Lucky Ivanius & Jessica Tionado Wedding",
};

export default function Layout({ children }: LayoutProps) {
  return <div className={font.className}>{children}</div>;
}
