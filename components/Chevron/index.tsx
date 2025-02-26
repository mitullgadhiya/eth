import { MdChevronLeft, MdChevronRight } from "react-icons/md"

import { cn } from "@/lib/utils/cn"

export const ChevronNext = ({
  className,
  ...props
}: React.HTMLAttributes<SVGElement>) => {
  return <MdChevronRight className={cn(className)} {...props} />
}

export const ChevronPrev = ({
  className,
  ...props
}: React.HTMLAttributes<SVGElement>) => {
  return <MdChevronLeft className={cn(className)} {...props} />
}
