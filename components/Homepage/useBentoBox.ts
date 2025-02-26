import { cn } from "@/lib/utils/cn"

import ShareImage from "../../../public/images//upgrades/share.png"
import BitcoinGoldImage from "../../../public/images/btcgld.png"
import BoostPortfolioImage from "../../../public/images/earnmore.png"
import MoneyBagImage from "../../../public/images/moneyBag.png"
import RepeatImage from "../../../public/images/repeat.png"

type Breakpoint = "mobile" | "lg" | "xl"
type Direction = "down" | "up" | "right" | "left"
type Color = "primary" | "accent-a" | "accent-b" | "accent-c"

const gradientStops = "from-20% to-60%"

const colorOptions: Record<Color, string> = {
  primary: cn(
    gradientStops,
    "from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 border-primary/10"
  ),
  "accent-a": cn(
    gradientStops,
    "from-accent-a/10 to-accent-a/5 dark:from-accent-a/20 dark:to-accent-a/10 border-accent-a/10"
  ),
  "accent-b": cn(
    gradientStops,
    "from-accent-b/10 to-accent-b/5 dark:from-accent-b/20 dark:to-accent-b/10 border-accent-b/10"
  ),
  "accent-c": cn(
    gradientStops,
    "from-accent-c/10 to-accent-c/5 dark:from-accent-c/20 dark:to-accent-c/10 border-accent-c/10"
  ),
}

const flow: Record<Breakpoint, Record<Direction, string>> = {
  mobile: {
    down: "flex-col bg-gradient-to-b",
    up: "flex-col-reverse bg-gradient-to-t",
    right: "flex-row bg-gradient-to-r",
    left: "flex-row-reverse bg-gradient-to-l",
  },
  lg: {
    down: "lg:flex-col lg:bg-gradient-to-b",
    up: "lg:flex-col-reverse lg:bg-gradient-to-t",
    right: "lg:flex-row lg:bg-gradient-to-r",
    left: "lg:flex-row-reverse lg:bg-gradient-to-l",
  },
  xl: {
    down: "xl:flex-col xl:bg-gradient-to-b",
    up: "xl:flex-col-reverse xl:bg-gradient-to-t",
    right: "xl:flex-row xl:bg-gradient-to-r",
    left: "xl:flex-row-reverse xl:bg-gradient-to-l",
  },
}

const stylesByPosition: Record<Breakpoint, string[]> = {
  mobile: [
    flow.mobile.down,
    flow.mobile.down,
    flow.mobile.down,
    flow.mobile.down,
    flow.mobile.down,
  ],
  lg: [
    cn("lg:col-span-6 lg:row-start-2", flow.lg.up),
    cn("lg:col-span-6 lg:col-start-7 lg:row-start-2", flow.lg.down),
    cn("lg:col-span-12 lg:row-start-3", flow.lg.right),
    cn("lg:col-span-6 lg:col-start-7 lg:row-start-4", flow.lg.up),
    cn("lg:col-span-6 lg:row-start-4", flow.lg.down),
  ],
  xl: [
    cn("xl:col-span-7 xl:col-start-5 xl:row-start-1", flow.xl.right),
    cn("xl:col-span-4 xl:col-start-2 xl:row-start-2", flow.xl.up),
    cn("xl:col-span-3 xl:col-start-6 xl:row-start-2", flow.xl.down),
    cn("xl:col-span-3 xl:col-start-9 xl:row-span-2 xl:row-start-2", flow.xl.up),
    cn("xl:col-span-7 xl:col-start-2 xl:row-start-3", flow.xl.right),
  ],
}

const getPosition = (position: number): string =>
  cn(
    stylesByPosition.mobile[position],
    stylesByPosition.lg[position],
    stylesByPosition.xl[position]
  )

export const useBentoBox = () => {
  return [
    {
      title: "1.",
      children: "We trade bitcoin and gold on the most reputed exchanges in the world - Binance for bitcoin and Exness for Gold.",
      action: "Invest",
      href: "/swap/",
      eventName: "1.",
      imgSrc: BitcoinGoldImage,
      className: cn(colorOptions["primary"], getPosition(0)),
    },
    {
      title: "2.",
      children: "Profits generated from trading is transferred to the smart pool of Ramicoin every 24 hours.",
      action: "Live Streaming",
      href: "https://youtube.com/@ramicoin/",
      imgSrc: MoneyBagImage,
      imgWidth: 400,
      className: cn(colorOptions["accent-c"], getPosition(1)),
    },
    {
      title: "3.",
      children: "The Smart Pool smart contract handles the distribution of the profits to all the Ramicoin hodlers.",
      action: "Claim Reward",
      href: "/stake/",
      imgSrc: ShareImage,
      imgWidth: 320,
      className: cn(colorOptions["accent-b"], getPosition(2)),
    },
    {
      title: "4.",
      children: "You can multiply your Ramicoin portfolio by staking it and start earning a passive income in Ramicoin itself.",
      action: "Stake Ramicoin",
      href: "/stake/",
      imgSrc: BoostPortfolioImage,
      imgWidth: 324,
      className: cn(colorOptions["accent-a"], getPosition(3)),
    },
    {
      title: "5.",
      children: "Are you good at forecasting! predict the events and win 2x on your investment.",
      action: "Play Now",
      href: "/play/",
      imgSrc: RepeatImage,
      imgWidth: 324,
      className: cn(colorOptions["primary"], getPosition(4)),
    },
  ];
};
