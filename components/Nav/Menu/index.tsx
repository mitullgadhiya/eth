import { BaseHTMLAttributes } from "react"
import { motion } from "framer-motion"
import { List, Root, Viewport, Item, Trigger } from "@radix-ui/react-navigation-menu"
import Link from "next/link"

import { cn } from "@/lib/utils/cn"
import { MAIN_NAV_ID } from "@/lib/constants"

import { Button } from "../../ui/buttons/Button"
import type { NavSections } from "../types"

import { useNavMenu } from "./useNavMenu"

type NavMenuProps = BaseHTMLAttributes<HTMLDivElement> & {
  sections: NavSections
}

const Menu = ({ sections, ...props }: NavMenuProps) => {
  const { activeSection, handleSectionChange } = useNavMenu(sections)

  return (
    <div {...props}>
      <Root orientation="horizontal" onValueChange={handleSectionChange} delayDuration={0}>
        <List id={MAIN_NAV_ID} className="m-0 flex list-none">
          {sections.map(({ label, href }) => {
            const isActive = activeSection === label

            return (
              <Item key={label} value={label}>
                <Trigger asChild>
                  <Link href={href} passHref>
                    <Button
                      className={cn(
                        "relative flex items-center gap-2 whitespace-nowrap px-3 py-2 lg:px-4",
                        isActive ? "text-primary" : "text-body",
                        "after:absolute after:inset-x-0 after:top-full after:h-4 after:content-['']"
                      )}
                      variant="ghost"
                    >
                      {isActive && (
                        <motion.div
                          layoutId="active-section-highlight"
                          className="absolute inset-0 z-0 rounded bg-primary-low-contrast"
                        />
                      )}
                      <span className="relative z-10">{label}</span>
                    </Button>
                  </Link>
                </Trigger>
              </Item>
            )
          })}
        </List>

        <Viewport />
      </Root>
    </div>
  )
}

export default Menu
