import { useState } from "react"
import type { MotionProps } from "framer-motion"

export const useNavMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => setIsOpen(false)

  const containerVariants: MotionProps["variants"] = {
    open: {
      opacity: 1,
      maxHeight: "100vh",
      transition: { duration: 0.2 },
    },
    closed: {
      opacity: 0,
    },
  }

  return {
    isOpen,
    containerVariants,
    onClose,
  }
}
