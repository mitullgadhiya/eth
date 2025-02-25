import { MdBrightness2, MdWbSunny } from "react-icons/md"

import FooterButton from "./FooterButton"
import FooterItemText from "./FooterItemText"

import useColorModeValue from "@/hooks/useColorModeValue"

type MenuFooterProps = {
  onToggle: () => void
  toggleColorMode: () => void
}

const MenuFooter = ({
  toggleColorMode,
}: MenuFooterProps) => {
  const ThemeIcon = useColorModeValue(MdBrightness2, MdWbSunny)
  const themeLabelKey = useColorModeValue("dark-mode", "light-mode")

  return (
    <div className="grid w-full grid-cols-3 items-center justify-center">
      <FooterButton icon={ThemeIcon} onClick={toggleColorMode}>
        <FooterItemText>{themeLabelKey}</FooterItemText>
      </FooterButton>
    </div>
  )
}

export default MenuFooter
