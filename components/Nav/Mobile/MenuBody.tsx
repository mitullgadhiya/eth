import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils/cn"

import type { NavSections } from "../types"
import Link from "next/link"

type MenuBodyProps = {
  onToggle: () => void
  linkSections: NavSections
}

const MenuBody = ({ linkSections, onToggle }: MenuBodyProps) => {
  const pathname = usePathname()

  return (
    <nav className="p-0">
      {Object.values(linkSections).map(({ label, href }) => {
        const isActive = pathname === href

        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "block border-b border-body-light px-4 py-3 text-lg font-bold leading-none first:border-t no-underline",
              isActive ? "text-primary" : "text-body"
            )}
            onClick={onToggle} // Close mobile menu on click
          >
            {label}
          </Link>
        )
      })}
    </nav>
  )
}

export default MenuBody
