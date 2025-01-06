'use client'

import React from "react";
import Image from "next/image";
import { useAppContext } from "../contexts/AppContext";
import { Progress } from "@/components/ui/progress";

const Hero: React.FC = () => {
  const { NFTData, totalNFT } = useAppContext();

  const max = 10000;
  const cappedValue = Number(totalNFT);
  const percentage = (cappedValue / max) * 100;

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="bg-gradient-to-r from-[#2253FF] to-[#4768df] bg-clip-text text-transparent text-4xl lg:text-5xl font-bold">
            Fractit Club
          </h1>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Inception Pass
          </h2>
        </div>
        
        <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
          Collect the exclusive Fractit Club Inception Pass and become part of
          Fractit&apos;s elite OGs. Unlock premium access to global properties,
          priority bookings, reduced fees, and exclusive rewards. This is your
          gateway to unmatched real estate and lifestyle perks.
        </p>
        
        <div className="space-y-4 bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
          <Progress value={percentage} className="h-2 bg-slate-600"  />
          <div className="flex justify-between text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#2253FF]" />
              <span>
                You Own:{" "}
                {Number(NFTData) <= 1 ? `${NFTData} PASS` : `${NFTData} PASSES`}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-white/20" />
              <span>{totalNFT} Minted/10K</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative aspect-square w-full max-w-md mx-auto lg:ml-auto">
        <div className="absolute inset-0 bg-[#2253FF]/20 blur-[100px] rounded-full" />
        <Image
          src="/assets/mainimg.png"
          alt="Fractit Club Inception Pass"
          width={500}
          height={500}
          className="relative z-10"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;

