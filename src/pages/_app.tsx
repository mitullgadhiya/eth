import { TooltipProvider } from "@radix-ui/react-tooltip"

import { AppPropsWithLayout } from "@/lib/types"

import ThemeProvider from "@/components/ThemeProvider"

import "@/styles/global.css"

import { BaseLayout } from "@/layouts/BaseLayout"

const App = ({ Component, pageProps }: AppPropsWithLayout) => {

  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ThemeProvider>
      <TooltipProvider>
        <BaseLayout
        >
          {getLayout(<Component {...pageProps} />)}
        </BaseLayout>
      </TooltipProvider>
    </ThemeProvider>
  )
}

export default (App)
