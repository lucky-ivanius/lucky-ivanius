import type { Metadata } from "next";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { ThemeProvider } from "@/providers/theme.provider";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

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
      <body>
        <ThemeProvider {...themeProviderProps}>{children}</ThemeProvider>
      </body>
      {/* <Analytics /> */}
    </html>
  );
}
