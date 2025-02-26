'use client'

import { AnchorHTMLAttributes, forwardRef } from "react"
import NextLink, { type LinkProps as NextLinkProps } from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils/cn"

type BaseProps = {
  hideArrow?: boolean
  isPartiallyActive?: boolean
  activeClassName?: string
}

export type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> &
  Omit<NextLinkProps, "href">

export const BaseLink = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  {
    href,
    children,
    className,
    hideArrow,
    isPartiallyActive = true,
    activeClassName = "text-primary",
    ...props
  }: LinkProps,
  ref
) {
  const asPath = usePathname()

  if (!href) {
    console.warn("Link component is missing href prop")
    return <a {...props} />
  }


  const commonProps = {
    ref,
    ...props,
    className: cn(className),
    href,
  }
  return (
    <NextLink
      {...commonProps}
    >
      {children}
    </NextLink>
  )
})
BaseLink.displayName = "BaseLink"

const InlineLink = forwardRef<HTMLAnchorElement, LinkProps>(
  (props: LinkProps, ref) => {
    return (
      <BaseLink className="visited:text-primary-visited" ref={ref} {...props} />
    )
  }
)
InlineLink.displayName = "InlineLink"

export default InlineLink
