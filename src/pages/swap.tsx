import { ComponentPropsWithRef } from "react"

import Card from "@/components/Card"
import MySwapBox from "@/components/DJ/MySwapBox"
import MainArticle from "@/components/MainArticle"
import PageHero from "@/components/PageHero"
import PageMetadata from "@/components/PageMetadata"
import { Divider } from "@/components/ui/divider"

import HeroImage from "../../public/images/wallets/wallet-hero.png"

export const StyledCard = (props: ComponentPropsWithRef<typeof Card>) => (
  <Card
    className="m-4 min-w-[280px] max-w-full flex-1 bg-background p-6 md:max-w-[46%] lg:max-w-[31%]"
    {...props}
  />
)

const SwapPage = () => {

  const heroContent = {
    title: "Ramicoin Exchange",
    header: "Trade Digital Assets",
    subtitle: "Buy what matters than just buying a trend.",
    image: HeroImage,
    alt: "Illustration of a person swapping digital assets, representing Ramicoin Exchange",
    // TODO: remove conditional after soft launch
    buttons:
      [
        {
          href: "/swap/",
          content: "Presale",
          matomo: {
            eventCategory: "Header buttons",
            eventAction: "click",
            eventName: "Find_wallet",
          },
        },
        {
          href: "/swap/",
          content: "$0.005",
          matomo: {
            eventCategory: "Header buttons",
            eventAction: "click",
            eventName: "How_to_use_wallet",
          },
          variant: "outline" as const,
        },
      ]

  }

  return (
    <MainArticle className="mx-auto flex w-full flex-col items-center">
      <PageMetadata
        title="Ramicoin Exchange: Buy, Sell Anytime, Any Amount"
        description="Learn how to swap or buy Ramicoin."
        image="/images/wallets/wallet-hero.png"
      />

      <PageHero content={heroContent} isReverse />

      <div className="w-full px-8 py-4">
        <Divider />
        <MySwapBox />
        <Divider />
      </div>
    </MainArticle>
  )
}

export default SwapPage
