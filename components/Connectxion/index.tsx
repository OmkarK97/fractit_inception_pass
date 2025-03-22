"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@burnt-labs/ui";
import {
  Abstraxion,
  useAbstraxionAccount,
  useAbstraxionSigningClient,
  useModal,
} from "@burnt-labs/abstraxion";

const ConnectWallet = () => {
  const { data: account } = useAbstraxionAccount();
  const { client, logout } = useAbstraxionSigningClient();
  const [showAbstraxion, setShowAbstraxion] = useModal();
  const [isConnected, setIsConnected] = useState(false);

  console.log(account, "account")

  useEffect(() => {
    if (account && account.bech32Address !== "") {
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  }, [account]);

  return (
    <div>
      <Button
        onClick={() => setShowAbstraxion(true)}
        style={{
          padding: "0",
          border: "none",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Optional shadow for better styling
          backgroundColor: "#2253FF",
          width: "177px",
          height: "47px",
          borderRadius: "31px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderColor: "#0ea5e9",
        }}
      >
        {isConnected ? "LOG OUT" : "LOG IN"}
      </Button>
      <Abstraxion
        onClose={() => {
          setShowAbstraxion(false);
        }}
      />
    </div>
  );
};

export default ConnectWallet;