import type { CommonHeroProps } from "@/lib/types"

import { Stack } from "@/components/ui/flex"

export type MdxHeroProps = Pick<CommonHeroProps, "title">

const MdxHero = ({ title }: MdxHeroProps) => (
  <Stack className="w-full gap-6 px-6 py-8">
    <h1>{title}</h1>
  </Stack>
)

export default MdxHero
