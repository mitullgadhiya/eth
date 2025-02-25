import type { MotionProps } from "framer-motion"
import { useRouter } from "next/router"

export const useSubMenu = () => {
  const { asPath, locale } = useRouter()

  const menuVariants: MotionProps["variants"] = {
    closed: { opacity: 0, scaleX: 0.9, originX: 0 },
    open: { opacity: 1, scaleX: 1, originX: 0 },
  }

  return {
    asPath,
    locale,
    menuVariants,
  }
}
