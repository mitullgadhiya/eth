import { ComponentProps } from "react"
import dynamic from "next/dynamic"

import { cn } from "@/lib/utils/cn"
import { IS_DEV } from "@/lib/utils/env"

const Twemoji = dynamic(
  () => import("react-emoji-render").then((mod) => mod.Twemoji),
  { ssr: false }
)

export type EmojiProps = ComponentProps<typeof Twemoji>

const Emoji = ({ className, ...props }: EmojiProps) => (
  <Twemoji
    options={{ protocol: IS_DEV ? "http" : "https" }}
    svg
    className={cn("inline-block leading-none [&>img]:!m-0", className)}
    {...props}
  />
)

export default Emoji
