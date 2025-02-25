import { useTheme } from "next-themes"
import { BsBook, BsCodeSquare, BsCompass, BsPinAngle } from "react-icons/bs"
import { PiUsersFourLight } from "react-icons/pi"

import { trackCustomEvent } from "@/lib/utils/matomo"

import type { NavSections } from "./types"

export const useNav = () => {
  const { setTheme, resolvedTheme } = useTheme()

  const linkSections: NavSections = {
    learn: {
      label: "Home",
      ariaLabel: "home-menu",
      items: [
        {
          label: "Homepage",
          description: "Get back to the start",
          icon: BsCompass,
          href: "/",
        },
      ],
    },
    // use: {
    //   label: "Swap",
    //   ariaLabel: "swap-menu",
    //   items: [
    //     {
    //       label: "Buy Ramicoin",
    //       description: "Invest in Ramicoin",
    //       icon: BsPinAngle,
    //       items: [
    //         {
    //           label: "Markets",
    //           description: "Trade Now",
    //           icon: BsPinAngle,
    //           href: "/swap/",
    //         }
    //       ],
    //     },
    //   ],
    // },
    use: {
      label: "Swap",
      ariaLabel: "swap-menu",
      items: [
        {
          label: "Buy Ramicoin",
          description: "Invest in Ramicoin",
          icon: BsPinAngle,
          href: "/swap/",
        },
      ],
    },
    build: {
      label: "Stake",
      ariaLabel: "stake-menu",
      items: [
        {
          label: "Ramicoin Staking",
          description: "Boost your portfolio",
          icon: BsCodeSquare,
          href: "/stake/",
        },
      ],
    },
    participate: {
      label: "Play",
      ariaLabel: "play-menu",
      items: [
        {
          label: "Play To Win",
          description: "Predict and win 2x",
          icon: PiUsersFourLight,
          href: "/play/",
        },
      ],
    },
    research: {
      label: "Whitepaper",
      ariaLabel: "whitepaper-menu",
      items: [
        {
          label: "Ramicoin Whitepaper",
          description: "Learn about Ramicoin",
          icon: BsBook,
          href: "/whitepaper/",
        },
      ],
    },
  }

  const toggleColorMode = () => {
    const targetTheme = resolvedTheme === "dark" ? "light" : "dark"

    setTheme(targetTheme)

    trackCustomEvent({
      eventCategory: "nav bar",
      eventAction: "click",
      eventName: `${targetTheme} mode`,
    })
  }

  return {
    linkSections,
    toggleColorMode,
  }
}
