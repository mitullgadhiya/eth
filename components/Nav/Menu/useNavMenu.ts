import { useState } from "react";
import type { MotionProps } from "framer-motion";

export const useNavMenu = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const containerVariants: MotionProps["variants"] = {
    open: {
      opacity: 1,
      maxHeight: "100vh",
      transition: { duration: 0.2 },
    },
    closed: {
      opacity: 0,
    },
  };

  const handleSectionChange = (activeSection: string) => {
    setActiveSection(activeSection);
  };

  const isOpen = activeSection !== null;

  const onClose = () => {
    setActiveSection(null);
  };

  return {
    activeSection,
    isOpen,
    containerVariants,
    handleSectionChange,
    onClose,
  };
};
