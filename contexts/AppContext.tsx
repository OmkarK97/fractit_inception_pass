'use client'

import React, { createContext, useContext, useState, useEffect } from "react";
import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import {
  useAbstraxionAccount,
  useAbstraxionSigningClient,
} from "@burnt-labs/abstraxion";
import { useBalance } from "@/components/hooks/useBalance";

interface AppContextType {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  isConnected: boolean;
  NFTData: string;
  totalNFT: string;
  xionBalance: number | null;
  usdcBalance: number | null;
  client: CosmWasmClient | null;
  account: any;
  checkNFTBalance: () => Promise<void>;
  checkTotalNFT: () => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [NFTData, setNFTData] = useState("0");
  const [totalNFT, setTotalNFT] = useState("0");
  const [client, setClient] = useState<CosmWasmClient | null>(null);

  const { data: account } = useAbstraxionAccount();
  const { client: signingClient } = useAbstraxionSigningClient();
  const { xionBalance, usdcBalance } = useBalance();

  const rpc = "https://rpc.xion-testnet-1.burnt.com:443";
  const fixedNft =
    "xion1hy8w7mrvqt9nh8ps7an0r5mqm0dk6vqvfkuje5wwwkmv5hr9x4lqhlnzy6";

  useEffect(() => {
    const initializeClient = async () => {
      const newClient = await CosmWasmClient.connect(rpc);
      setClient(newClient);
    };

    if (!client) {
      initializeClient();
    }
  }, [client]);

  useEffect(() => {
    if (account && account.bech32Address) {
      setIsConnected(true);
      checkNFTBalance();
    } else {
      setIsConnected(false);
      setNFTData("0");
    }
  }, [account]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const checkNFTBalance = async () => {
    if (signingClient && account) {
      try {
        let balanceMsg = {
          balance_of: {
            user: account.bech32Address,
          },
        };
        let balanceRes = await signingClient.queryContractSmart(
          fixedNft,
          balanceMsg
        );
        setNFTData(balanceRes.balance);
      } catch (error) {
        console.error("Error fetching NFT balance:", error);
      }
    }
  };

  const checkTotalNFT = async () => {
    if (client) {
      try {
        let getConfigMsg = {
          get_config: {},
        };
        let balanceRes = await client.queryContractSmart(
          fixedNft,
          getConfigMsg
        );
        setTotalNFT(balanceRes.total_mint);
      } catch (error) {
        console.error("Error fetching total NFT:", error);
      }
    }
  };

  useEffect(() => {
    if (client) {
      checkTotalNFT();
    }
  }, [client]);

  return (
    <AppContext.Provider
      value={{
        isMenuOpen,
        toggleMenu,
        isConnected,
        NFTData,
        totalNFT,
        xionBalance,
        usdcBalance,
        client,
        account,
        checkNFTBalance,
        checkTotalNFT,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
