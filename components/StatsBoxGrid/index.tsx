import BigNumber from "../BigNumber"

import { useStatsBoxGrid } from "./useStatsBoxGrid"

const statsData = {
  tradingCapital: { value: 5000000 },
  totalProfit: { value: 20000 },
  totalInvestors: { value: 2000 },
  roi: { value: 300 },
  ethPrice: { value: 1 },
}

const StatsBoxGrid = () => {
  const metrics = useStatsBoxGrid(statsData)

  const gridBorderClasses = [
    "border-b border-body-light xl:border-e xl:pe-8",
    "border-b border-body-light xl:ps-8",
    "border-b border-body-light xl:border-b-0 xl:border-e xl:pe-8",
    "xl:ps-8",
  ]

  return (
    <div className="grid w-full grid-cols-1 xl:grid-cols-2">
      {metrics.map(({ label, apiProvider, apiUrl, state }, idx) => (
        <BigNumber
          className={gridBorderClasses[idx]}
          key={label}
          value={"value" in state ? state.value : undefined}
          sourceName={apiProvider}
          sourceUrl={apiUrl}
        >
          {label}
        </BigNumber>
      ))}
    </div>
  )
}

export default StatsBoxGrid
