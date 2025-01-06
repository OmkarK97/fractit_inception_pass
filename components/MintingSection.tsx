"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useAppContext } from "../contexts/AppContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useAbstraxionSigningClient } from "@burnt-labs/abstraxion";
import { coins } from "@cosmjs/proto-signing";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";
import rej from "@/app/assets/images/TxnError.gif";
import conf from "@/app/assets/images/Loader 2 Fractit.gif";
import tick from "@/app/assets/images/done.gif";
import twitter from "@/public/assets/twiiter.svg";
import instagram from "@/public/assets/instagram.svg";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const MintingSection: React.FC = () => {
  const {
    isConnected,
    NFTData,
    xionBalance,
    usdcBalance,
    account,
    checkNFTBalance,
  } = useAppContext();
  const [paymentOption, setPaymentOption] = useState("XION");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [hash, setHash] = useState("");
  const [loadingModalVisible, setLoadingModalVisible] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [twitterShare, setTwitterShare] = useState(false);
  const [instaShare, setInstaShare] = useState(false);
  const { client } = useAbstraxionSigningClient();

  const fixedNft =
    "xion1hy8w7mrvqt9nh8ps7an0r5mqm0dk6vqvfkuje5wwwkmv5hr9x4lqhlnzy6";
  const GRANTER_ADDRESS =
    "xion1h82c0efsxxq4pgua754u6xepfu6avglup20fl834gc2ah0ptgn5s2zffe9";

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTwitterClicked = localStorage.getItem("twitterShare");
      const storedInstaClicked = localStorage.getItem("instaShare");
      setTwitterShare(storedTwitterClicked === "true");
      setInstaShare(storedInstaClicked === "true");
    }
  }, []);

  const handleTwitterClick = () => {
    setTwitterShare(true);
    if (typeof window !== "undefined") {
      localStorage.setItem("twitterShare", "true");
    }
  };

  const handleInstaClick = () => {
    setInstaShare(true);
    if (typeof window !== "undefined") {
      localStorage.setItem("instaShare", "true");
    }
  };

  const handleApprove = async () => {
    if (!client || !account) {
      toast.error("Wallet not connected");
      return;
    }
    setIsLoading(true);
    setIsError(false);
    setLoadingMessage("Waiting for transaction to confirm..");
    setLoadingModalVisible(true);

    try {
      const mintMsg = {
        mint: {
          denom:
            paymentOption === "XION"
              ? "uxion"
              : "ibc/57097251ED81A232CE3C9D899E7C8096D6D87EF84BA203E12E424AA4C9B57A64",
        },
      };

      const deposit_response = await client.execute(
        account.bech32Address,
        fixedNft,
        mintMsg,
        {
          amount: [{ amount: "0", denom: "uxion" }],
          gas: "500000",
          granter: GRANTER_ADDRESS,
        },
        "",
        paymentOption === "XION"
          ? coins("50000", "uxion")
          : coins(
              "50000",
              "ibc/57097251ED81A232CE3C9D899E7C8096D6D87EF84BA203E12E424AA4C9B57A64"
            )
      );

      setIsSuccess(true);
      setHash(deposit_response.transactionHash);
      setLoadingMessage("Inception Pass Successfully Minted");
      checkNFTBalance();
    } catch (error) {
      console.error("Deposit error:", error);
      toast.error(`Deposit failed`);
      setLoadingMessage("Transaction was rejected. Please try again.");
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setLoadingModalVisible(false);
    setIsSuccess(false);
    setIsError(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative p-[2px] bg-gradient-to-r from-white to-gray-400 rounded-[31px]">
          <a
            href="https://x.com/FractItLabs"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleTwitterClick}
          >
            <div className="w-full sm:w-[177px] h-[47px] bg-[#000000]/70 rounded-[31px] box-border text-white flex items-center justify-center">
              {twitterShare ? "FOLLOWED ON" : "FOLLOW ON"}
              <div className="ml-[0.5rem]">
                <Image src={twitter} alt="Twitter logo" />
              </div>
            </div>
          </a>
        </div>
        <div className="relative p-[2px] bg-gradient-to-r from-white to-gray-400 rounded-[31px]">
          <a
            href="https://www.instagram.com/FractItLabs/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleInstaClick}
          >
            <div className="w-full sm:w-[177px] h-[47px] bg-[#000000]/70 rounded-[31px] box-border text-white flex items-center justify-center">
              {instaShare ? "FOLLOWED ON" : "FOLLOW ON"}
              <div className="ml-[0.5rem]">
                <Image src={instagram} alt="Instagram logo" />
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="font-light text-[#2253FF]">
        FOLLOW US ON SOCIALS TO MINT
      </div>

      <RadioGroup
        defaultValue="XION"
        onValueChange={(value) => setPaymentOption(value)}
        className="flex flex-col space-y-2"
      >
        <Label className="text-md font-semibold">Select which token you want to use for minting:</Label>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="XION" id="xion" />
          <Label htmlFor="xion" className="text-gray-300">
            XION
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="USDC" id="usdc" />
          <Label htmlFor="usdc" className="text-gray-300">
            USDC
          </Label>
        </div>
      </RadioGroup>

      <Button
        className="md:w-[560px] h-12 bg-[#2253FF] hover:bg-[#1a41cc] transition-colors rounded-[31px] mb-5"
        onClick={handleApprove}
        disabled={!isConnected || isLoading || !twitterShare || !instaShare}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>MINTING...</span>
          </div>
        ) : (
          <div>{parseInt(NFTData) > 0 ? "MINT AGAIN" : "MINT NOW"}</div>
        )}
      </Button>

      <div className="space-y-2 text-sm text-gray-400">
        <p>Minting Fee: 0.05 {paymentOption}</p>
        <p>XION Balance: {xionBalance}</p>
        <p>USDC Balance: {usdcBalance}</p>
      </div>

      <Dialog open={loadingModalVisible} onOpenChange={setLoadingModalVisible}>
        <DialogContent className="sm:max-w-md bg-black/95 border-white/10 text-white">
          <DialogTitle />
          <DialogHeader>
            <div className="mx-auto text-center space-y-4">
              {loadingMessage === "Waiting for transaction to confirm.." ? (
                <div className="relative w-32 h-32 mx-auto">
                  <div className="absolute inset-0 bg-[#2253FF]/20 blur-[50px] rounded-full" />
                  <Image
                    src={conf}
                    alt="Confirming"
                    width={128}
                    height={128}
                    className="relative z-10"
                  />
                </div>
              ) : isSuccess ? (
                <>
                  <div className="relative w-32 h-32 mx-auto">
                    <div className="absolute inset-0 bg-green-500/20 blur-[50px] rounded-full" />
                    <Image
                      src={tick}
                      alt="Success"
                      width={128}
                      height={128}
                      className="relative z-10"
                    />
                  </div>
                  <a
                    href={`https://testnet.xion.explorers.guru/transaction/${hash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2253FF] hover:underline text-sm"
                  >
                    Transaction Hash: {hash.slice(0, 5)}...{hash.slice(-5)}
                  </a>
                </>
              ) : (
                <div className="relative w-32 h-32 mx-auto">
                  <div className="absolute inset-0 bg-red-500/20 blur-[50px] rounded-full" />
                  <Image
                    src={rej}
                    alt="Error"
                    width={128}
                    height={128}
                    className="relative z-10"
                  />
                </div>
              )}
              <p className="text-lg font-medium">{loadingMessage}</p>
            </div>
          </DialogHeader>
          <div className="flex justify-center">
            {isSuccess ? (
              <Button
                onClick={handleClose}
                className="bg-[#2253FF] hover:bg-[#1a41cc] text-white"
              >
                Close
              </Button>
            ) : isError ? (
              <Button onClick={handleClose} variant="destructive">
                Try again
              </Button>
            ) : (
              <Button
                onClick={handleClose}
                className="bg-gray-700 hover:bg-gray-600 text-white"
              >
                Close
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MintingSection;
