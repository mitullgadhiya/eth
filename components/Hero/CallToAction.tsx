import type { ReactNode } from "react"

import {
  Button,
  ButtonLink,
  type ButtonProps,
} from "@/components/ui/buttons/Button"

import { cn } from "@/lib/utils/cn"

export type CallToActionProps = Omit<
  ButtonProps,
  "children" | "content" | "variant" | "isSecondary"
> & {
  content: ReactNode
  index: number
  href?: string
}

export const CallToAction = ({
  content,
  index,
  className,
  href,
  ...props
}: CallToActionProps) => {

  const buttonProps: ButtonProps = {
    variant: index === 0 ? "solid" : "outline",
    isSecondary: index !== 0,
    className: cn("flex-[1] md:flex-[initial]", className),
  }

  if (href) {
    return (
      <ButtonLink
        href={href}
        buttonProps={{ ...buttonProps, ...props }}
      >
        {content}
      </ButtonLink>
    )
  }

  return (
    <Button {...buttonProps} {...props}>
      {content}
    </Button>
  )
}
