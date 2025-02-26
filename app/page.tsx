'use client'
import { Fragment, Suspense } from "react"
import { FaGithub, FaTwitter } from "react-icons/fa6"

import { ChevronNext } from "@/components/Chevron"
import HomeHero from "@/components/Hero/HomeHero"
import BentoCard from "@/components/Homepage/BentoCard"
import { useHome } from "@/components/Homepage/useHome"
import ValuesMarquee from "@/components/Homepage/ValuesMarquee"
import { Image } from "@/components/Image"
import MainArticle from "@/components/MainArticle"
import StatsBoxGrid from "@/components/StatsBoxGrid"
import { ButtonLink } from "@/components/ui/buttons/Button"
import SvgButtonLink, {
  type SvgButtonLinkProps,
} from "@/components/ui/buttons/SvgButtonLink"
import {
  Section,
  SectionBanner,
  SectionContent,
  SectionHeader,
  SectionTag,
} from "@/components/ui/section"
import { SkeletonLines } from "@/components/ui/skeleton"
import {
  Swiper,
  SwiperContainer,
  SwiperNavigation,
  SwiperSlide,
} from "@/components/ui/swiper"

import { cn } from "@/lib/utils/cn"

import AboutRamiTokenImage from "/public/images/heroes/aboutrami.png"
import CommunityImage from "/public/images/heroes/community-hero.png"
import SmartPoolImage from "/public/images/heroes/smart-pool.png"
import TradingDataImage from "/public/images/heroes/trading-data.png"
import HeroImage from "/public/images/home/hero.png"

const HomePage = () => {
  const {
    subHeroCTAs,
    popularTopics,
    bentoItems,
  } = useHome()


  return (
    <MainArticle className="flex w-full flex-col items-center">
      <HomeHero heroImg={HeroImage} className="w-full" />
      <div className="w-full space-y-32 px-4 md:mx-6 lg:space-y-48">
        <div className="my-20 grid w-full grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-x-10">
          {subHeroCTAs.map(
            ({ label, description, href, className, Svg }) => {
              const Link = (
                props: Omit<
                  SvgButtonLinkProps,
                  "Svg" | "href" | "label" | "children"
                >
              ) => (
                <SvgButtonLink
                  Svg={Svg}
                  href={href}
                  label={label}
                  {...props}
                >
                  <p className="text-body">{description}</p>
                </SvgButtonLink>
              )
              return (
                <Fragment key={label}>
                  <Link className={cn("xl:hidden", className)} variant="col" />
                  <Link
                    className={cn("hidden xl:block", className)}
                    variant="row"
                  />
                </Fragment>
              )
            }
          )}
        </div>

        {/* Use Cases - A new way to use the internet */}
        <Section
          id="use"
          className={cn(
            "max-lg:-mx-4 max-lg:flex max-lg:w-[100vw] max-lg:flex-col max-lg:overflow-hidden max-lg:px-4 sm:max-lg:-mx-6 sm:max-lg:px-6", // Mobile: Swiper cards
            "lg:grid lg:grid-cols-bento lg:gap-4" // Desktop: BentoBox grid
          )}
        >
          <div
            className={cn(
              "flex flex-col",
              "lg:col-span-12 xl:col-span-3 xl:col-start-2"
            )}
          >
            <div className="w-fit rounded-full bg-primary-low-contrast px-4 py-0 text-sm uppercase text-primary">
              what do we do ?
            </div>
            <h2 className="mb-4 me-4 mt-2 text-5xl font-black xl:mb-6 xl:text-7xl">
              Our Business
            </h2>
          </div>

          {/* Mobile */}
          <SwiperContainer
            className={cn(
              "lg:hidden", // Mobile only
              "[&_.swiper-slide]:overflow-visible [&_.swiper-slide]:rounded-2xl [&_.swiper-slide]:shadow-card-hover",
              "[&_.swiper-slide-shadow]:!bg-transparent",
              "[&_.swiper]:mx-auto [&_.swiper]:mt-4 [&_.swiper]:!flex [&_.swiper]:h-fit [&_.swiper]:max-w-128 [&_.swiper]:flex-col [&_.swiper]:items-center"
            )}
          >
            <Swiper
              effect="cards"
            >
              {bentoItems.map(({ className, ...item }) => (
                <SwiperSlide key={item.title}>
                  <BentoCard
                    imgHeight={220}
                    {...item}
                    className={cn(className, "bg-background text-body")}
                    imgWidth={undefined} // Intentionally last to override box
                    eventName=""
                  />
                </SwiperSlide>
              ))}
              <SwiperNavigation />
            </Swiper>
          </SwiperContainer>
          {/* Desktop */}
          {bentoItems.map(({ className, ...item }) => (
            <BentoCard
              key={item.title}
              {...item}
              className={cn(className, "max-lg:hidden")} // Desktop only
              eventName=""
            />
          ))}
        </Section>

        {/* Activity - The strongest ecosystem */}
        <Section id="activity" variant="responsiveFlex">
          <SectionBanner>
            <Image src={TradingDataImage} alt="" width={800} height={500} />
          </SectionBanner>

          <SectionContent>
            <SectionTag>stats</SectionTag>
            <SectionHeader>
              Trading Data
            </SectionHeader>
            <div className="py-16 lg:py-32">
              <p className="mt-8 text-xl font-bold">
                Built on Binance Smart Chain
              </p>
              <Suspense fallback={<SkeletonLines noOfLines={10} />}>
                <StatsBoxGrid />
              </Suspense>
            </div>
          </SectionContent>
        </Section>

        {/* Learn - Understand Ethereum */}
        <Section
          id="learn"
          variant="responsiveFlex"
          className="md:flex-row-reverse"
        >
          <SectionBanner>
            <Image src={AboutRamiTokenImage} alt="" width={800} height={500} />
          </SectionBanner>

          <SectionContent>
            <SectionTag>Learn</SectionTag>
            <SectionHeader>
              Tokenomics
            </SectionHeader>
            <div className="flex flex-col gap-y-16 lg:gap-y-32">
              <p className="text-lg">
                Do Your Own Reasearch.
              </p>
              <div className="flex flex-col gap-y-8">
                <h3 className="text-xl font-bold">
                  The Ramicoin Allocation (%)
                </h3>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                  {popularTopics.map(
                    ({ label, Svg, href }) => (
                      <SvgButtonLink
                        key={label}
                        Svg={Svg}
                        href={href}
                        className={cn(
                          "text-accent-b hover:text-accent-b-hover [&>:first-child]:flex-row",
                        )}
                      >
                        <p className="text-start text-xl font-bold text-body group-hover:underline">
                          {label}
                        </p>
                      </SvgButtonLink>
                    )
                  )}
                </div>
                <div className="flex py-8 sm:justify-center lg:justify-start">
                  <ButtonLink
                    href="/whitepaper/"
                    size="lg"
                    variant="outline"
                    isSecondary
                    className="max-sm:self-start"
                  >
                    Whitepaper{" "}
                    <ChevronNext />
                  </ButtonLink>
                </div>
              </div>
            </div>{" "}
          </SectionContent>
        </Section>

        {/* Values - The Internet Is Changing */}
        <ValuesMarquee />

        {/* Builders - Blockchain's biggest builder community */}
        <Section id="builders" variant="responsiveFlex">
          <SectionBanner className="relative">
            <Image src={SmartPoolImage} alt="" width={800} height={500} />
          </SectionBanner>

          <SectionContent>
            <SectionTag>Creators</SectionTag>
            <SectionHeader>
              Smart Pool
            </SectionHeader>
            <p className="text-lg">
              {/* Ramicoin is home to all the investors looking to find an edge and start earning consistently from trading with pooled funds. */}
              The smart contracts are the engine of the Ramicoin ecosystem that takes care of managing and distributing funds.
            </p>
            <div className="flex flex-wrap gap-3 py-8">
              <ButtonLink
                href="/whitepaper/"
                size="lg"
              >
                Pool Contract<ChevronNext />
              </ButtonLink>
              <div className="flex gap-3">
                <ButtonLink
                  href="https://github.com/mitullgadhiya/"
                  target="blank"
                  size="lg"
                  variant="outline"
                  isSecondary
                  hideArrow
                >
                  <FaGithub />
                </ButtonLink>
              </div>
            </div>
          </SectionContent>
        </Section>

        {/* Ethereum.org community - Built by the community */}
        <Section
          id="community"
          variant="responsiveFlex"
          className="md:flex-row-reverse"
        >
          <SectionBanner>
            <Image src={CommunityImage} alt="" width={800} height={500} />
          </SectionBanner>

          <SectionContent>
            <SectionTag>ramicoin.com community</SectionTag>
            <SectionHeader>
              Grow Together
            </SectionHeader>
            <div className="mt-8 flex flex-col gap-8 text-lg">
              <p>The vision of Ramicoin is to generate cashflow, profiting and distributing new money from trading global assets.</p>
              <p>We only trade assets that are rich in liquidity, globally recognized & secure.</p>
              <p>Bitcoin and Gold</p>
            </div>
            <div className="flex flex-wrap gap-3 py-8">
              <ButtonLink
                href="/swap/"
                size="lg"
              >
                Buy Ramicoin<ChevronNext />
              </ButtonLink>
              <div className="flex gap-3">
                <ButtonLink
                  href="https://twitter.com/ramicoin_bnb/"
                  target="blank"
                  size="lg"
                  variant="outline"
                  isSecondary
                  hideArrow
                >
                  <FaTwitter />
                </ButtonLink>
              </div>
            </div>
          </SectionContent>
        </Section>

        {/* Join ethereum.org */}
        <Section
          id="join"
          className={cn(
            "before:absolute before:-inset-px before:bottom-0 before:z-hide before:rounded-[calc(theme(borderRadius.4xl)+1px)] before:content-['']", // Border/gradient positioning
            "before:bg-gradient-to-b before:from-primary-hover/[0.24] before:to-primary-hover/[0.08] before:dark:from-primary-hover/40 before:dark:to-primary-hover/20", // Border/gradient coloring
            "relative inset-0 rounded-4xl bg-background" // Paint background color over card portion
          )}
        >
          <div className="mb-12 flex flex-col gap-y-8 rounded-4xl bg-radial-a px-8 py-12 lg:mb-20 xl:mb-24">
            <div className="flex flex-col gap-y-4 text-center">
              <h2>Join Ramicoin</h2>
              <p>Open For All!</p>
            </div>
          </div>
        </Section>
      </div>
    </MainArticle>
  )
}

export default HomePage
