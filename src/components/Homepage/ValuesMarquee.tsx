import { cn } from "@/lib/utils/cn"

import {
  Section,
  SectionContent,
  SectionHeader,
  SectionTag,
} from "../ui/section"

type ItemProps = React.HTMLAttributes<HTMLButtonElement> & {
  separatorClass: string
  container?: HTMLElement | null
  label: string
  eventCategory: string
  direction: HTMLDivElement["dir"]
}

const Item = ({
  separatorClass,
}: ItemProps) => (
  <>
    <div
      className={cn(
        "h-1.5 min-w-1.5 rounded-full motion-reduce:last:hidden",
        separatorClass
      )}
    />
  </>
)
Item.displayName = "MarqueeItem"



const ValuesMarquee = () => {
 
  return (
    <Section id="values" className="!sm:my-64 !my-48 scroll-m-48">
      <SectionContent className="flex flex-col items-center text-center">
        <SectionTag>Facts</SectionTag>
        <SectionHeader>
          The Money Is Changing
        </SectionHeader>
        <p className="text-lg text-body-medium">
          Join Us
        </p>
      </SectionContent>
      
    </Section>
  )
}
ValuesMarquee.displayName = "ValuesMarquee"

export default ValuesMarquee
