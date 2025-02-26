'use client'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"

import { COLOR_MODE_STORAGE_KEY } from "@/lib/constants"

import { useLocaleDirection } from "@/hooks/useLocaleDirection"

const ThemeProvider = ({ children }: Pick<ThemeProviderProps, "children">) => {
  useLocaleDirection()

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
      storageKey={COLOR_MODE_STORAGE_KEY}
    >
      {children}
    </NextThemesProvider>
  )
}

export default ThemeProvider
