import type { Metadata } from "next";

import {
  Cormorant_Garamond,
  Manrope,
  Great_Vibes,
} from "next/font/google";

import "./globals.css";

import {
  WeddingProvider,
} from "@/components/wedding/WeddingProvider";

/* =========================================================
   FONTS
========================================================= */

const editorial = Cormorant_Garamond({
  subsets: [
    "latin",
    "vietnamese",
  ],

  variable:
    "--font-editorial",

  weight: [
    "400",
    "500",
    "600",
    "700",
  ],

  display: "swap",
});

const sans = Manrope({
  subsets: [
    "latin",
    "vietnamese",
  ],

  variable:
    "--font-sans",

  display: "swap",
});

const script = Great_Vibes({
  subsets: [
    "latin",
  ],

  weight: "400",

  variable:
    "--font-script",

  display: "swap",
});

/* =========================================================
   METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    default:
      "Nguyễn Nam & Huỳnh Thư",

    template:
      "%s | Nguyễn Nam & Huỳnh Thư",
  },

  description:
    "Câu chuyện cưới của Nguyễn Nam và Huỳnh Thư.",

  applicationName:
    "Wedding Story",

  authors: [
    {
      name:
        "Nguyễn Nam & Huỳnh Thư",
    },
  ],

  keywords: [
    "Nguyễn Nam",
    "Huỳnh Thư",
    "Wedding",
    "Wedding Story",
    "Thiệp cưới",
    "Câu chuyện cưới",
  ],

  robots: {
    index: true,
    follow: true,
  },
};

/* =========================================================
   ROOT LAYOUT
========================================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children:
    React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className={`
          ${editorial.variable}
          ${sans.variable}
          ${script.variable}

          min-h-screen
          overflow-x-hidden
          bg-[#F8F5EF]
          antialiased
        `}
      >
        {/* =============================================
            WEDDING PROVIDER

            Quản lý:
            - trạng thái mở thiệp
            - nhạc nền
            - play / pause
            - FloatingControls
        ============================================= */}

        <WeddingProvider>
          {children}
        </WeddingProvider>
      </body>
    </html>
  );
}