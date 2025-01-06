'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useAppContext } from "../contexts/AppContext";
import { BalanceDisplay } from "@/components/BalanceDisplay";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useAbstraxionSigningClient } from "@burnt-labs/abstraxion";
import { coins } from "@cosmjs/proto-signing";
import { toast } from "react-toastify";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from 'lucide-react';
import rej from "@/app/assets/images/TxnError.gif";
import conf from "@/app/assets/images/Loader 2 Fractit.gif";
import tick from "@/app/assets/images/done.gif";

const MintingSection: React.FC = () => {
  const { isConnected, NFTData, xionBalance, usdcBalance, account, checkNFTBalance } = useAppContext();
  const [radioValue, setRadioValue] = useState("XION");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [hash, setHash] = useState("");
  const [loadingModalVisible, setLoadingModalVisible] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const { client } = useAbstraxionSigningClient();

  const fixedNft = "xion1hy8w7mrvqt9nh8ps7an0r5mqm0dk6vqvfkuje5wwwkmv5hr9x4lqhlnzy6";
  const GRANTER_ADDRESS = "xion1h82c0efsxxq4pgua754u6xepfu6avglup20fl834gc2ah0ptgn5s2zffe9";

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
          denom: radioValue === "XION" ? "uxion" : "ibc/57097251ED81A232CE3C9D899E7C8096D6D87EF84BA203E12E424AA4C9B57A64",
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
        radioValue === "XION"
          ? coins("50000", "uxion")
          : coins("50000", "ibc/57097251ED81A232CE3C9D899E7C8096D6D87EF84BA203E12E424AA4C9B57A64")
      );

      setIsSuccess(true);
      setHash(deposit_response.transactionHash);
      setLoadingMessage("Inception Pass Successfully Minted");
      checkNFTBalance(); // Update NFT balance
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

  useEffect(() => {
    if (isSuccess) {
      checkNFTBalance(); // Update NFT balance after successful mint
    }
  }, [isSuccess, checkNFTBalance]);

  return (
    <Card className="bg-black/40 backdrop-blur-xl border-white/10">
      <CardContent className="space-y-6 p-6">
        <BalanceDisplay xionBalance={xionBalance} usdcBalance={usdcBalance} />
        
        <div className="space-y-4">
          <label className="text-sm text-gray-300">
            Select the token for minting NFT
          </label>
          <Select
            value={radioValue}
            onValueChange={setRadioValue}
          >
            <SelectTrigger className="w-full bg-white/10 border-white/20 text-white">
              <SelectValue placeholder="Select token" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-white/20 text-white">
              <SelectItem value="XION">XION</SelectItem>
              <SelectItem value="USDC">USDC</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          className="w-full h-12 bg-[#2253FF] hover:bg-[#1a41cc] transition-colors"
          onClick={handleApprove}
          disabled={!isConnected || isLoading}
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>MINTING...</span>
            </div>
          ) : parseInt(NFTData) > 0 ? (
            "MINT AGAIN"
          ) : (
            "MINT NOW"
          )}
        </Button>

        <p className="text-sm text-gray-400 text-center">
          Minting Fee: 0.01 XION
        </p>
      </CardContent>

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
              <Button
                onClick={handleClose}
                variant="destructive"
              >
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
    </Card>
  );
};

export default MintingSection;

