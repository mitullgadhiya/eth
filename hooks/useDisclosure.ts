import { useBoolean } from "usehooks-ts"

export const useDisclosure = (defaultValue = false) => {
  const { value, setTrue, setFalse, toggle, setValue } =
    useBoolean(defaultValue)

  return {
    isOpen: value,
    onOpen: setTrue,
    onClose: setFalse,
    onToggle: toggle,
    setValue,
  }
}
