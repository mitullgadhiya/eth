'use client'

import type { ImageProps } from "next/image"
import { usePathname } from "next/navigation"

import type { HTMLAttributes } from "react"

import type {
  ChildOnlyProp,
} from "@/lib/types"

import {
  Banner,
  BannerBody,
  BannerGrid,
  BannerGridCell,
} from "@/components/BannerGrid"
import Card from "@/components/Card"
import { Image } from "@/components/Image"
import MainArticle from "@/components/MainArticle"
import { Button, ButtonLink } from "@/components/ui/buttons/Button"
import { Divider } from "@/components/ui/divider"
import { Center, Flex, HStack, Stack, VStack } from "@/components/ui/flex"

import { cn } from "@/lib/utils/cn"

import BlockchainTechImage from "../../public/images/blockchain-tech.png"
import MathImage from "../../public/images/calculate-profit.png"
import TransparecnyImage from "../../public/images/glass-trans.png"
import ProfitCalculationImage from "../../public/images/profit-distribution-calc.png"
import hero from "../../public/images/rami-whitepaper.png"

const Slogan = (props: ChildOnlyProp) => (
  <p className="text-[2rem] leading-xs" {...props} />
)

const Title = (props: ChildOnlyProp) => (
  <h1
    className="text-sm font-medium uppercase leading-xs tracking-wider"
    {...props}
  />
)

const Hero = (props: ChildOnlyProp) => (
  <div
    className="max-w-[800px] flex-[1_1_100%] bg-cover bg-no-repeat"
    {...props}
  />
)

const Summary = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "rounded p-4",
      "border-accent-c/10 bg-gradient-to-t from-accent-c/10 from-20% to-accent-c/5 to-60% dark:from-accent-c/20 dark:to-accent-c/10",
      className
    )}
    {...rest}
  />
)

const Content = (props: ChildOnlyProp) => (
  <div className="w-full px-8 py-4" {...props} />
)

const TwoColumnContent = ({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => (
  <Flex
    className={cn(
      "w-full flex-col gap-8 lg:flex-row lg:items-center lg:gap-0",
      className
    )}
    {...rest}
  />
)

const Section = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => (
  <section className={cn("w-full px-8 py-12", className)} {...rest} />
)

export const Width60 = ({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("w-full flex-[3]", className)}>{children}</div>
)

export const Width40 = (props: ChildOnlyProp) => (
  <Center className="w-full flex-[2] gap-0" {...props} />
)

const H2 = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => (
  <h2
    className={cn("mb-6 text-2xl leading-xs md:text-3xl", className)}
    {...rest}
  />
)

const CardContainer = ({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => (
  <Flex className={cn("-mx-4 flex-wrap", className)} {...rest} />
)

const StatPrimary = (props: ChildOnlyProp) => (
  <div className="mb-4 text-5xl leading-none" {...props} />
)

const StatDescription = (props: ChildOnlyProp) => (
  <div className="text-md text-[#666] dark:text-[#b2b2b2]" {...props} />
)

const ButtonRow = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => (
  <HStack className={cn("flex-wrap gap-4", className)} {...rest} />
)

const NoWrapText = (props: ChildOnlyProp) => (
  <span className="whitespace-nowrap" {...props} />
)

const Image400 = ({ src }: Pick<ImageProps, "src">) => (
  <Image src={src} alt="" width={400} height={400} />
)


const WhatIsRamiCoinPage = () => {

  const locale = usePathname()
  // const localeForNumberFormat = locale;
  const localeForNumberFormat = "en-US";

  const formatNumber = (
    value: number,
    minSignificantDigits: number,
    maxSignificantDigits: number,
    style?: Intl.NumberFormatOptions["style"],
    currency?: string
  ) =>
    new Intl.NumberFormat(localeForNumberFormat, {
      notation: "compact",
      minimumSignificantDigits: minSignificantDigits,
      maximumSignificantDigits: maxSignificantDigits,
      style: style,
      currency: currency,
      currencyDisplay: "narrowSymbol",
    }).format(value)


  const cards = [
    {
      emoji: ":handshake:",
      title: "1. Become A Team",
      description: "We often do things alone but there is even bigger power if we do tasks together as a team.",
    },

    {
      emoji: ":busts_in_silhouette:",
      title: "2. Crowd Funded",
      description: "We accumulate all the funds of the community and let Ramicoin be the leader of your finance",
    },
    {
      emoji: ":chart_with_upwards_trend:",
      title: "3. Trade Markets",
      description: "Trading is carried on truted exchanges: Binance and Exness.",
    },
    {
      emoji: ":gift:",
      title: "4. Profit Sharing",
      description: "The profits generated in every session is transferred to the Ramicoin Smart Pool Contract.",
    },
    {
      emoji: ":gem:",
      title: "5. HODL",
      description: "The profit is distributed to all the holders who have staked their Ramicoin in the Smart Pool Contract according to their share.",
    },
    {
      emoji: ":magnifying_glass_tilted_right:",
      title: "6. Transparency",
      description: "Every trading session is streamed live on the Ramicoin youtube channel: @ramicoin",
    },
  ]

  return (
    <VStack className="mx-0 my-auto w-full gap-0" asChild>
      <MainArticle>
        <Content>
          <Flex className="flex-col-reverse items-center justify-between md:flex-row">
            <Stack className="mb-6 gap-4" asChild>
              <header>
                <Title>What is Ramicoin ?</Title>
                <Stack className="gap-6">
                  <div className="flex flex-col items-center gap-y-5 lg:max-w-2xl">
                    <h1 className="font-black">Ramicoin Whitepaper</h1>
                  </div>
                  <Slogan>We Trade, You Earn</Slogan>
                  <ButtonRow>
                    <Button toId="summary">
                      Learn More
                    </Button>
                  </ButtonRow>
                </Stack>
              </header>
            </Stack>
            <Hero>
              <Image
                src={hero}
                alt="Illustration of a person curious about Ramicoin"
                sizes="(max-width: 992px) 100vw, 750px"
                priority
              />
            </Hero>
          </Flex>
        </Content>
        <div className="w-full bg-background-highlight">
          <Section>
            <Stack className="gap-14">
              <TwoColumnContent id="summary">
                <Width60>
                  <Divider />
                  <Summary>
                    <Slogan>The Problem</Slogan>
                    <Stack className="gap-6 lg:w-full">
                      <h2 className="text-[1.4rem] leading-xs text-[#4c4c4c] dark:text-[#ccc] lg:text-[2.4rem]">
                        Low Liquidity
                      </h2>
                      <Stack className="gap-6 lg:text-[1.4rem]">
                        <p>Everyone wants to or are trying to make money and build a passive cashflow&lsquo; correct!</p>
                        <p>We all agree on one thing that - Trading is the best way to make money from anywhere in the world&lsquo; isn&apos;t it awesome!&apos;</p>
                        <p>But the main problem is that because of small capital they are unable to scale it and end up in disappointment.</p>
                        <p>Ramicoin is exactly solving that problem by leveraging the power of Blockchain Technology and bring everyone together under one roof.</p>
                        <p>How ? Let&apos;s understand.</p>
                      </Stack>
                    </Stack>
                  </Summary>
                  <Divider />
                </Width60>
                <Width40 />
              </TwoColumnContent>
              <Stack className="gap-8">
                <div>
                  <H2>Ramicoin Business Architecture</H2>
                  <CardContainer>
                    {cards.map((card, idx) => (
                      <Card
                        key={idx}
                        emoji={card.emoji}
                        title={card.title}
                        description={card.description}
                        className="m-4 min-w-[240px] flex-[1_1_30%] p-6"
                      />
                    ))}
                  </CardContainer>
                </div>
              </Stack>
            </Stack>
          </Section>

          <Section>
            <Banner>
              <BannerBody>
                <H2>Ramicoin Stats</H2>
                <BannerGrid>
                  <BannerGridCell>
                    <StatPrimary>{formatNumber(4000, 1, 1)}+</StatPrimary>
                    <StatDescription>
                      Total investors worldwide.
                      <NoWrapText>
                        &nbsp;
                      </NoWrapText>
                    </StatDescription>
                  </BannerGridCell>
                  <BannerGridCell>
                    <StatPrimary>{formatNumber(5_000_000_000, 2, 2)}</StatPrimary>
                    <StatDescription>
                      Maximum Supply Of Ramicoin
                      <NoWrapText>
                        &nbsp;
                      </NoWrapText>
                    </StatDescription>
                  </BannerGridCell>
                  <BannerGridCell>
                    <StatPrimary>{formatNumber(53_300_000, 3, 3)}+</StatPrimary>
                    <StatDescription>
                      Total Ramicoin Burnt
                      <NoWrapText>
                        &nbsp;
                      </NoWrapText>
                    </StatDescription>
                  </BannerGridCell>
                  <BannerGridCell>
                    <StatPrimary>
                      {formatNumber(4_000_000_000, 1, 3, "currency", "USD")}
                    </StatPrimary>
                    <StatDescription>
                      Ramicoin Market Cap
                      <NoWrapText>
                        &nbsp;
                      </NoWrapText>
                    </StatDescription>
                  </BannerGridCell>
                  <BannerGridCell>
                    <StatPrimary>
                      {formatNumber(1_000_000_000, 3, 3)}
                    </StatPrimary>
                    <StatDescription>
                      Circulating Supply
                      <NoWrapText>
                        &nbsp;
                      </NoWrapText>
                    </StatDescription>
                  </BannerGridCell>
                  <BannerGridCell>
                    <StatPrimary>
                      {formatNumber(0.005, 1, 3, "currency", "USD")}
                    </StatPrimary>
                    <StatDescription>
                      Presale Price
                      <NoWrapText>
                        &nbsp;
                      </NoWrapText>
                    </StatDescription>
                  </BannerGridCell>
                </BannerGrid>
              </BannerBody>
            </Banner>
          </Section>

          <Section className="bg-[#e8e8ff] dark:bg-[#212131]">
            <TwoColumnContent>
              <Width40>
                <Image400 src={BlockchainTechImage} />
              </Width40>
              <Width60>
                <H2>Technology</H2>
                <Stack className="gap-6">
                  <p>
                    The Ramicoin is built using the most advanced blochchain infrastructure: Binance Smart Chain (BSC) Network.
                  </p>
                  <p>
                    Ramicoin Contract
                  </p>
                  <ButtonRow>
                    <ButtonLink href="https://bscscan.com/token/0xb93235b024a3063e3cf56cab9991f99c513bee78" target="blank">
                      0xB93235b0...991f99C513bEe78
                    </ButtonLink>
                  </ButtonRow>
                </Stack>
              </Width60>
            </TwoColumnContent>
          </Section>

          <Section>
            <TwoColumnContent>
              <Width40>
                <Image400 src={ProfitCalculationImage} />
              </Width40>
              <Width60>
                <H2>Profit Distribution Mechanism</H2>
                <Stack className="gap-6 lg:text-[1.3rem]">
                <p>
                    1. Profit made per day.
                  </p>
                  <p>
                    2. Profit transferred to smart pool.
                  </p>
                  <p>
                    3. Ramicoin stakers earn their share.
                  </p>
                  <ButtonRow>
                    <ButtonLink href="/swap/">
                      Buy Ramicoin
                    </ButtonLink>
                    <ButtonLink href="/" variant="outline" isSecondary>
                      Explorer
                    </ButtonLink>
                  </ButtonRow>
                </Stack>
              </Width60>
            </TwoColumnContent>
          </Section>

          {/* calculation */}
          <Section className="bg-[#ccfcff] dark:bg-[#293233]">
            <TwoColumnContent>
              <Width40>
                <Image400 src={MathImage} />
              </Width40>
              <Width60>
                <H2>Calculations</H2>
                <Stack className="gap-6 lg:text-[1.3rem]">
                  <p>a. Total Staked Ramicoin in smart pool.</p>
                  <p>b. Total profit pool balance. </p>
                  <p>c. Ramicoin staked by individual.</p>
                  <h2>= ((c/a) x b)</h2>
                  <ButtonRow>
                    <ButtonLink href="/stake/">
                      Stake Ramicoin
                    </ButtonLink>
                    <ButtonLink href="/swap/" variant="outline" isSecondary>
                      Invest
                    </ButtonLink>
                  </ButtonRow>
                </Stack>
              </Width60>
            </TwoColumnContent>
          </Section>

          <Section>
            <TwoColumnContent>
              <Width40>
                <Image400 src={TransparecnyImage} />
              </Width40>
              <Width60>
                <H2>Transparency</H2>
                <Stack className="gap-6 lg:text-[1.3rem]">
                  <p>Watch every trading session live on Ramicoin&apos;s offical youtube channel: @ramicoin. We trade in open&lsquo; learn&lsquo; earn and derive value.</p>
                  <p>Put your entries at everyones stop loss.</p>
                </Stack>
              </Width60>
            </TwoColumnContent>
          </Section>
        </div>
        <Divider />
      </MainArticle>
    </VStack>
  )
}

export default WhatIsRamiCoinPage
