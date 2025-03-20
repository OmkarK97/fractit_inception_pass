"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { AbstraxionProvider } from "@burnt-labs/abstraxion";

import "@burnt-labs/abstraxion/dist/index.css";
import "@burnt-labs/ui/dist/index.css";

const inter = Inter({ subsets: ["latin"] });

const treasuryConfig = {
  rpc: "https://rpc.xion-testnet-2.burnt.com:443",
  treasury: "xion1a5s4fgc333jgl6423efww6egcw30pku3z9pulhm0tpjyuyu9xwkqnz8098",
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
