import type { FC, SVGProps } from "react"
import type { IconType } from "react-icons"

export type NavItem = {
  label: string
  description: string
  icon?: IconType | FC<SVGProps<SVGElement>>
  href: string
}

export type NavSections = NavItem[]