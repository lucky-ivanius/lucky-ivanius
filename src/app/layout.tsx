import type { Metadata } from "next";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme.provider";
import "./globals.css";

const font = Montserrat({ subsets: ["latin"] });

const themeProviderProps: ThemeProviderProps = {
  attribute: "class",
  defaultTheme: "system",
  enableSystem: true,
  disableTransitionOnChange: true,
};

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Lucky Ivanius",
  description: "Personal portfolio",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider {...themeProviderProps}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
