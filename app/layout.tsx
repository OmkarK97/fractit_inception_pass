"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { AbstraxionProvider } from "@burnt-labs/abstraxion";

import "@burnt-labs/abstraxion/dist/index.css";
import "@burnt-labs/ui/dist/index.css";

const inter = Inter({ subsets: ["latin"] });

const treasuryConfig = {
  treasury: "xion1h82c0efsxxq4pgua754u6xepfu6avglup20fl834gc2ah0ptgn5s2zffe9",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Fractit Club Inception Pass – Become Fractit’s Elite OGs</title>
        <meta
          name="description"
          content="Own the Fractit Club Inception Pass and unlock premium benefits, including global property access, priority booking, reduced fees, and exclusive future rewards."
        />
        {/* <meta property="og:image" content="/meta-image.png" /> */}
      </head>
      <body>
        <AbstraxionProvider config={treasuryConfig}>
          {children}
        </AbstraxionProvider>
      </body>
    </html>
  );
}
