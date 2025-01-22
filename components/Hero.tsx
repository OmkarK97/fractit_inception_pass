import React from "react";
import Image from "next/image";
import { useAppContext } from "../contexts/AppContext";
import MintingSection from "./MintingSection";
import "../app/App.css";

const Hero: React.FC = () => {
  const { NFTData, totalNFT } = useAppContext();

  const max = 10000;
  const cappedValue = Number(totalNFT);
  const percentage = (cappedValue / max) * 100;

  return (
    <div className="flex flex-col md:flex-row justify-between items-start relative md:h-[calc(100vh-120px)]">
      {/* Image container */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-end md:items-start order-first md:order-last mb-6 md:mb-0 md:sticky md:top-32">
        <Image
          src="/assets/mainimg.png"
          alt="Fractit Club Inception Pass"
          width={500}
          height={500}
        />
      </div>

      {/* Scrollable content container */}
      <div className="w-full md:w-2/3 flex flex-col md:h-full md:overflow-y-auto md:no-scrollbar">
        {/* Header section */}
        <div className="p-6 md:top-0 z-10">
          <div className="space-y-2">
            <h1 className="puneor text-[#2253FF] text-[30px] md:text-[45px] font-medium md:leading-[52px]">
              Fractit Club
            </h1>
            <h2 className="puneor text-white text-[30px] md:text-[45px] font-medium md:leading-[52px]">
              Inception Pass
            </h2>
          </div>
            <p className="md:w-[550px] font-light text-gray-300 mt-4">
              Collect the exclusive Fractit Club Inception Pass and become part
              of Fractit&apos;s elite OGs. Unlock premium access to global
              properties, priority bookings, reduced fees, and exclusive
              rewards. This is your gateway to unmatched real estate and
              lifestyle perks...
              <span className="md:w-[550px] font-light text-blue-700 hover:underline hover:text-blue-500 hover:cursor-pointer mt-4">
                Read More
              </span>
            </p>
          <div className="w-full md:w-[550px] mt-6">
            <div className="w-full bg-white/20 rounded-full h-4">
              <div
                className="bg-[#2253FF] h-4 rounded-full transition-all"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <div className="text-center mt-2 text-sm font-medium flex flex-row justify-between text-gray-300">
              <div>
                You Own:{" "}
                {Number(NFTData) <= 1 ? `${NFTData} PASS` : `${NFTData} PASSES`}
              </div>
              <div className="text-base">{percentage}% Claimed</div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="p-6">
          <MintingSection />
        </div>
      </div>
    </div>
  );
};

export default Hero;
