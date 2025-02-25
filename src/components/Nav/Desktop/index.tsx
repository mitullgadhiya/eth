import { MdBrightness2, MdWbSunny } from "react-icons/md"

import { Button } from "@/components/ui/buttons/Button"
import { HStack } from "@/components/ui/flex"

import useColorModeValue from "@/hooks/useColorModeValue"
import { useEventListener } from "@/hooks/useEventListener"

type DesktopNavMenuProps = {
  toggleColorMode: () => void
}

const DesktopNavMenu = ({ toggleColorMode }: DesktopNavMenuProps) => {

  const ThemeIcon = useColorModeValue(MdBrightness2, MdWbSunny)
  const themeIconAriaLabel = useColorModeValue(
    // TODO: Add i18n support
    "Switch to Dark Theme",
    "Switch to Light Theme"
  )

  /**
   * Adds a keydown event listener to toggle color mode (ctrl|cmd + \)
   * or open the language picker (\).
   * @param {string} event - The keydown event.
   */
  useEventListener("keydown", (e) => {
    if (e.key !== "\\") return
    e.preventDefault()
    if (e.metaKey || e.ctrlKey) {
      toggleColorMode()
    }
  })

  return (
    <HStack className="hidden gap-0 md:flex">
      <Button
        aria-label={themeIconAriaLabel}
        variant="ghost"
        isSecondary
        className="group px-2 xl:px-3 [&>svg]:transition-transform [&>svg]:duration-500 [&>svg]:hover:rotate-12 [&>svg]:hover:text-primary-hover"
        onClick={toggleColorMode}
      >
        <ThemeIcon className="transform-transform duration-500 group-hover:rotate-12 group-hover:transition-transform group-hover:duration-500" />
      </Button>
    </HStack>
  )
}

export default DesktopNavMenu
