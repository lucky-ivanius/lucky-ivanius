import type { Metadata } from "next";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { ThemeProvider } from "@/providers/theme.provider";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  metadataBase: new URL(`https://${process.env.URL}`),
  openGraph: {
    type: "website",
    title: "Lucky Ivanius",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucky Ivanius",
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider {...themeProviderProps}>{children}</ThemeProvider>
      </body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
