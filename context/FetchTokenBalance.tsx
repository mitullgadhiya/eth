
 'use client'; // Mark this as a client-side component for Next.js

import React, { createContext, useContext, useEffect, useState } from 'react';
import Web3 from 'web3';
import { useAccount } from "wagmi";
import RamiABI from "@/ABI/RamiABI.json";
import UsdtABI from "@/ABI/UsdtABI.json";
import { formatBalance2d, formatBalanceWithCondition } from '@/utils';

interface FetchTokenBalanceContextType {
  bnbBalance: string;
  RamiToken1Balance: string;
  UsdtToken2Balance: string;
  fetchBalances: () => void;
}

const FetchTokenBalanceContext = createContext<FetchTokenBalanceContextType | undefined>(undefined);

const rpcUrls = [
  'https://bsc-dataseed1.binance.org/',
  'https://bsc-dataseed2.binance.org/',
  'https://bsc-dataseed3.binance.org/',
  'https://bsc-dataseed4.binance.org/',
  'https://bsc-dataseed1.defibit.io/',
  'https://bsc-dataseed2.defibit.io/',
  'https://bsc-dataseed3.defibit.io/',
  'https://bsc-dataseed4.defibit.io/',
  'https://bsc-dataseed1.ninicoin.io/',
  'https://bsc-dataseed2.ninicoin.io/',
  'https://bsc-dataseed3.ninicoin.io/',
  'https://bsc-dataseed4.ninicoin.io/',
];

// Fallback function to try multiple RPC endpoints
const createWeb3WithFallback = async (): Promise<Web3> => {
  for (const url of rpcUrls) {
    try {
      const web3 = new Web3(url);
      // Check if the connection is valid by attempting a basic call
      await web3.eth.net.isListening();
      return web3;
    } catch (error) {
      console.error(`Failed to connect to RPC URL: ${url}, trying next...`);
    }
  }
  throw new Error('All RPC endpoints failed.');
};

const FetchTokenBalanceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { address, isConnected } = useAccount();

  const [bnbBalance, setBnbBalance] = useState<string>('0');
  const [RamiToken1Balance, setRamiToken1Balance] = useState<string>('0');
  const [UsdtToken2Balance, setUsdtToken2Balance] = useState<string>('0');

  const RamiCoinContractAddress = '0xB93235b024a3063e3cf56cAB9991f99C513bEe78'; // Token1 (RAMI) contract address
  const UsdtContractAddress = '0x55d398326f99059fF775485246999027B3197955'; // Token2 (USDT) contract address

  const fetchBalances = async () => {
    try {
      if (!address) return; // Ensure the user is connected

      const web3 = await createWeb3WithFallback();

      // Fetch BNB balance
      const bnb = await web3.eth.getBalance(address);
      setBnbBalance(formatBalance2d(bnb.toString()));

      // Fetch RAMI balance
      const RamiContract = new web3.eth.Contract(RamiABI, RamiCoinContractAddress);
      const token1: string = await RamiContract.methods.balanceOf(address).call();
      setRamiToken1Balance(formatBalanceWithCondition(token1));

      // Fetch USDT balance
      const UsdtContract = new web3.eth.Contract(UsdtABI, UsdtContractAddress);
      const token2: string = await UsdtContract.methods.balanceOf(address).call();
      setUsdtToken2Balance(formatBalanceWithCondition(token2));
    } catch (error) {
      console.error('Error fetching balances:', error);
    }
  };

  useEffect(() => {
    if (isConnected) {
      fetchBalances(); // Fetch initially when connected

      const intervalId = setInterval(fetchBalances, 5000); // Fetch every 5 seconds

      return () => clearInterval(intervalId); // Clear the interval on component unmount or when the connection changes
    }
  }, [isConnected]);

  return (
    <FetchTokenBalanceContext.Provider value={{ bnbBalance, RamiToken1Balance, UsdtToken2Balance, fetchBalances }}>
      {children}
    </FetchTokenBalanceContext.Provider>
  );
};

const useFetchedTokenBalance = () => {
  const context = useContext(FetchTokenBalanceContext);
  if (!context) {
    throw new Error('useFetchedTokenBalance must be used within a FetchTokenBalanceProvider');
  }
  return context;
};

export { FetchTokenBalanceProvider, useFetchedTokenBalance };

