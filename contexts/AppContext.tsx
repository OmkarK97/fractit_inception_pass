import React, { createContext, useContext, useState, useEffect } from 'react';
import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { useAbstraxionAccount, useAbstraxionSigningClient } from "@burnt-labs/abstraxion";
import { useBalance } from "@/components/hooks/useBalance";

interface AppContextType {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  isConnected: boolean;
  NFTData: string;
  totalNFT: string;
  xionBalance: string;
  usdcBalance: string;
  client: CosmWasmClient | null;
  account: any;
  checkNFTBalance: () => Promise<void>;
  checkTotalNFT: () => Promise<void>;
  updateBalancesAndNFT: () => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [NFTData, setNFTData] = useState("0");
  const [totalNFT, setTotalNFT] = useState("0");
  const [client, setClient] = useState<CosmWasmClient | null>(null);
  const [xionBalance, setXionBalance] = useState("0");
  const [usdcBalance, setUsdcBalance] = useState("0");

  const { data: account } = useAbstraxionAccount();
  const { client: signingClient } = useAbstraxionSigningClient();
  //const { xionBalance, usdcBalance } = useBalance();

  const rpc = "https://rpc.xion-testnet-2.burnt.com:443";
  const fixedNft = "xion1h30469h4au9thlakd5j9yf0vn2cdcuwx3krhljrjvdgtjqcjuxvq6wvm5k";

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
        let balanceRes = await signingClient.queryContractSmart(fixedNft, balanceMsg);
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
        let balanceRes = await client.queryContractSmart(fixedNft, getConfigMsg);
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

  const updateBalancesAndNFT = async () => {
    await checkNFTBalance();
    await checkTotalNFT();
    // Fetch XION and USDC balances
    if (signingClient && account) {
      try {
        const xionBalanceResponse = await signingClient.getBalance(account.bech32Address, "uxion");
        const usdcBalanceResponse = await signingClient.getBalance(account.bech32Address, "ibc/57097251ED81A232CE3C9D899E7C8096D6D87EF84BA203E12E424AA4C9B57A64");
        setXionBalance((parseInt(xionBalanceResponse.amount) / 1000000).toFixed(6));
        setUsdcBalance((parseInt(usdcBalanceResponse.amount) / 1000000).toFixed(6));
      } catch (error) {
        console.error("Error fetching balances:", error);
      }
    }
  };

  useEffect(() => {
    if (account && account.bech32Address) {
      updateBalancesAndNFT();
    }
  }, [account]);


  return (
    <AppContext.Provider value={{
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
      updateBalancesAndNFT,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

