import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/css2.css";
import "./styles/ladi.css";
import "./styles/page.css";
import "./styles/element.css";

import { eventData } from "./eventData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Đám cưới Tuấn Anh - Lan Anh",
  description: "HiHi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="Cache-Control" content="no-cache" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Expires" content="-1" />
        <meta name="keywords" content="" />
        <meta name="description" content="Đám cưới Tuấn Anh - Lan Anh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          id="viewport"
          name="viewport"
          content="width=420,user-scalable=no,initial-scale=3.657142857142857,minimum-scale=3.657142857142857,maximum-scale=3.657142857142857"
        />
        <meta property="og:title" content="Đám cưới Tuấn Anh - Lan Anh" />
        <meta property="og:type" content="website" />
       
        <meta
          property="og:description"
          content="Đám cưới Tuấn Anh & Lan Anh"
        />
        <meta name="format-detection" content="telephone=no" />
      
        <meta name="revisit-after" content="days" />
        <link rel="dns-prefetch" />
    <link rel="preload" href="/images/_DAT1220.avif" as="image" />

        <link
          rel="preconnect"
          href="https://fonts.googleapis.com/"
          crossOrigin=""
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin=""
        />
       
        
       
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <script
          id="script_event_data"
          type="application/json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(eventData),
          }}
        />
      </body>
    </html>
  );
}
