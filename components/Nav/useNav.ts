import { useTheme } from "next-themes"
import { BsBook, BsCodeSquare, BsCompass, BsPinAngle } from "react-icons/bs"
import { PiUsersFourLight } from "react-icons/pi"

import type { NavSections } from "./types"

export const useNav = () => {
  const { setTheme, resolvedTheme } = useTheme()

  const linkSections: NavSections = [
    {
      label: "Home",
      description: "Get back to the start",
      icon: BsCompass,
      href: "/",
    },
    {
      label: "Swap",
      description: "Invest in Ramicoin",
      icon: BsPinAngle,
      href: "/swap/",
    },
    {
      label: "Stake",
      description: "Boost your portfolio",
      icon: BsCodeSquare,
      href: "/stake/",
    },
    {
      label: "Play",
      description: "Predict and win 2x",
      icon: PiUsersFourLight,
      href: "/play/",
    },
    {
      label: "Whitepaper",
      description: "Learn about Ramicoin",
      icon: BsBook,
      href: "/whitepaper/",
    },
  ]

  const toggleColorMode = () => {
    const targetTheme = resolvedTheme === "dark" ? "light" : "dark"
    setTheme(targetTheme)
  }

  return {
    linkSections,
    toggleColorMode,
  }
}
