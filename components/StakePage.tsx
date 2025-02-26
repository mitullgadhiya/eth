'use client'

import { ReactNode } from "react"

import { ChildOnlyProp } from "@/lib/types"

import Card, { CardProps } from "@/components/Card"
import HubHero from "@/components/Hero/HubHero"
import MainArticle from "@/components/MainArticle"
import { ButtonLink } from "@/components/ui/buttons/Button"
import { VStack } from "@/components/ui/flex"

import HeroImage from "/public/images/heroes/st.png"

const Page = (props: ChildOnlyProp) => (
  <VStack className="mx-auto my-0 w-full" {...props} />
)

const Content = (props: ChildOnlyProp) => (
  <MainArticle className="w-full px-8 py-4" {...props} />
)

const StyledCardContainer = (props: ChildOnlyProp) => (
  <div
    className="-mx-4 mb-12 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
    {...props}
  />
)



const StyledCard = (props: CardProps) => {
  return (
    <Card
      className={`m-4 p-6 shadow-[0px_1px_3px_rgba(0,0,0,0.1)] transition-transform duration-100 hover:scale-105 hover:rounded hover:bg-background-highlight hover:shadow-[0px_8px_17px_rgba(0,0,0,0.15)] dark:shadow-[0px_1px_3px_rgba(60,60,60,0.1)]`}
      {...props}
    />
  )
}

interface IDevelopersPath {
  emoji: string
  title: ReactNode
  description: ReactNode
  url: string
  button: ReactNode
}

const paths: Array<IDevelopersPath> = [
  {
    emoji: ":blue_heart:",
    title: "Total Staked",
    description: (
      "0.00"
    ),
    url: "/stake/",
    button: (
      "Stake"
    ),
  },
  {
    emoji: ":moneybag:",
    title: (
      "Reward Balance"
    ),
    description: (
      "1,000,000 USDT"
    ),
    url: "/stake/",
    button: (
      "Claim"
    ),
  },
]

const StakePage = () => {

  return (
    <Page>
      <HubHero
        heroImg={HeroImage}
        header="Rami Staking"
        title="hello"
        description="Boost Your Portfolio"
      />
      <Content>
        <StyledCardContainer>
          {paths.map((path, idx) => (
            <StyledCard
              key={idx}
              emoji={path.emoji}
              title={path.title}
              description={path.description}
            >
              <ButtonLink href={path.url}>{path.button}</ButtonLink>
            </StyledCard>
          ))}
        </StyledCardContainer>
      </Content>
    </Page>
  )
}

export default StakePage
