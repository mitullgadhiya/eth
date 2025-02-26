"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import { useBentoBox } from "@/components/Homepage/useBentoBox";
import CreatorFeeImage from "@/components/icons/creator-fee.svg";
import LiquidityImage from "@/components/icons/liquidity-share.svg";
import MarketingImage from "@/components/icons/marketing-share.svg";
import ChooseNetworkIcon from "@/components/icons/network-layers.svg";
import TryAppsIcon from "@/components/icons/phone-homescreen.svg";
import PresaleImage from "@/components/icons/presale-share.svg";
import EthTokenIcon from "@/components/icons/rami-token.svg";
import PickWalletIcon from "@/components/icons/rami-wallet.svg";

import { cn } from "@/lib/utils/cn";

export const useHome = () => {
  const asPath = usePathname();

  const [isModalOpen, setModalOpen] = useState(false);
  const [activeCode, setActiveCode] = useState(0);

  const bentoItems = useBentoBox();

  const toggleCodeExample = (id: number): void => {
    setActiveCode(id);
    setModalOpen(true);
  };

  const subHeroCTAs = [
    {
      label: "1",
      description: "Connect Wallet",
      href: "/",
      Svg: PickWalletIcon,
      className: "text-primary hover:text-primary-hover",
      eventName: "find wallet",
    },
    {
      label: "2",
      description: "Buy Ramicoin",
      href: "/swap/",
      Svg: EthTokenIcon,
      className: "text-accent-a hover:text-accent-a-hover",
      eventName: "get eth",
    },
    {
      label: "3",
      description: "Stake Ramicoin",
      href: "/stake/", // TODO: Update with new networks page when ready
      Svg: ChooseNetworkIcon,
      className: "text-accent-b hover:text-accent-b-hover",
      eventName: "L2",
    },
    {
      label: "4",
      description: "Play To Win",
      href: "/play/",
      Svg: TryAppsIcon,
      className: cn(
        "text-accent-c hover:text-accent-c-hover",
        "[&_svg]:-scale-x-100"
      ),
      eventName: "dapps",
    },
  ];

  const popularTopics = [
    {
      label: "Liuidity",
      Svg: LiquidityImage,
      href: "/",
      eventName: "start guides",
    },
    {
      label: "Creator Fee",
      Svg: CreatorFeeImage,
      href: "/",
      eventName: "ethereum",
    },
    {
      label: "Presale",
      Svg: PresaleImage,
      href: "/swap/",
      eventName: "wallets",
    },
    {
      label: "Marketing",
      Svg: MarketingImage,
      href: "/",
      eventName: "whitepaper",
    },
  ];

  return {
    asPath,
    isModalOpen,
    setModalOpen,
    activeCode,
    toggleCodeExample,
    subHeroCTAs,
    popularTopics,
    bentoItems,
  };
};
