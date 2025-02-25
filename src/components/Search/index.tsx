import { useRef } from "react"
import dynamic from "next/dynamic"
import { useDocSearchKeyboardEvents } from "@docsearch/react"
import * as Portal from "@radix-ui/react-portal"

import { trackCustomEvent } from "@/lib/utils/matomo"

import { useDisclosure } from "@/hooks/useDisclosure"

const SearchModal = dynamic(() => import("./SearchModal"))

type Props = {
  children: (props: ReturnType<typeof useDisclosure>) => React.ReactNode
}

const Search = ({ children }: Props) => {
  const disclosure = useDisclosure()
  const { isOpen, onOpen, onClose } = disclosure

  const searchButtonRef = useRef<HTMLButtonElement>(null)

  const handleOpen = () => {
    onOpen()
    trackCustomEvent({
      eventCategory: "nav bar",
      eventAction: "click",
      eventName: "search open",
    })
  }

  useDocSearchKeyboardEvents({
    isOpen,
    onOpen: handleOpen,
    onClose,
    searchButtonRef,
  })

  return (
    <>
      {children({ ...disclosure, onOpen: handleOpen })}
      <Portal.Root>
        {isOpen && (
          <SearchModal
          />
        )}
      </Portal.Root>
    </>
  )
}

export default Search
