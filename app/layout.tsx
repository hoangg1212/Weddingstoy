import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Manrope,
  Great_Vibes,
} from "next/font/google";

import "./globals.css";

const editorial = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  variable: "--font-editorial",
  weight: ["400", "500", "600", "700"],
});

const sans = Manrope({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "Our Wedding Story",
  description: "A story written by two hearts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`
          ${editorial.variable}
          ${sans.variable}
          ${script.variable}
        `}
      >
        {children}
      </body>
    </html>
  );
}