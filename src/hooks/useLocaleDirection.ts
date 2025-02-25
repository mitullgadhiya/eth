import { useEffect } from "react"

export const useLocaleDirection = () => {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr")
  }, [])
}
