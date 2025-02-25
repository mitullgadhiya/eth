import { type ReactNode } from "react"
import { MdInfoOutline } from "react-icons/md"

import { cn } from "@/lib/utils/cn"

import Tooltip from "../Tooltip"
import Link from "../ui/Link"

type BigNumberProps = {
  children: ReactNode
  value?: ReactNode
  sourceName?: string
  sourceUrl?: string
  lastUpdated?: number | string
  className?: string
}

const BigNumber = ({
  children,
  value,
  sourceName,
  sourceUrl,
  className,
}: BigNumberProps) => {

  return (
    <div
      className={cn(
        "flex flex-1 shrink-0 flex-col self-stretch py-8",
        className
      )}
    >
      {value ? (
        <>
          <div className="text-4xl font-bold sm:text-5xl">{value}</div>
          <div className="text-sm">
            {children}
            {sourceName && sourceUrl && (
              <Tooltip
                content={
                  <>
                    <p>
                      rami{" "}
                      <Link href={sourceUrl}>{sourceName}</Link>
                    </p>
                  </>
                }
              >
                <MdInfoOutline className="mb-0.5 ms-2 inline align-text-bottom" />
              </Tooltip>
            )}
          </div>
        </>
      ) : (
        <span className="pt-4 text-md text-body-medium">
          error
        </span>
      )}
    </div>
  )
}
export default BigNumber
