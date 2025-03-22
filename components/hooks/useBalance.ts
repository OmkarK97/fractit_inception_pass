import { useState, useEffect } from 'react';
import { useAbstraxionAccount, useAbstraxionSigningClient } from "@burnt-labs/abstraxion";

export function useBalance() {
  const [isLoading, setIsLoading] = useState(false);
  const [xionBalance, setXionBalance] = useState<number | null>(null);
  const [usdcBalance, setUSDCBalance] = useState<number | null>(null);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState("");

  const { data: { bech32Address }, isConnected } = useAbstraxionAccount();
  const { client } = useAbstraxionSigningClient();

  useEffect(() => {
    const fetchBalance = async () => {
      if (!bech32Address || !client) return;

      try {
        const { amount: xionAmount } = await client.getBalance(bech32Address, "uxion");
        const { amount: usdcAmount } = await client.getBalance(
          bech32Address,
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4"
        );
        setUSDCBalance(Number(usdcAmount) / 1e6);
        setXionBalance(Number(xionAmount) / 1e6);
      } catch (error) {
        console.error("Error fetching balance:", error);
        setStatus('error');
        setMessage("Failed to fetch balance. Please try again.");
      }
    };

    fetchBalance();
  }, [bech32Address, client, status]);


  return {
    isLoading,
    xionBalance,
    usdcBalance,
    status,
    message,
    isConnected,
  };
}

