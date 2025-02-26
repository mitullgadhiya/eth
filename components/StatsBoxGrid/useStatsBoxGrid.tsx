const formatLargeUSD = (value: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
    minimumSignificantDigits: 3,
    maximumSignificantDigits: 4,
  }).format(value)
}

const formatLargeNumber = (value: number): string => {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    minimumSignificantDigits: 3,
    maximumSignificantDigits: 4,
  }).format(value)
}

interface StatsData {
  totalProfit: { value: number }
  tradingCapital: { value: number }
  roi: { value: number }
  totalInvestors: { value: number }
}

export const useStatsBoxGrid = (data: StatsData) => {
  const { totalProfit, tradingCapital, roi, totalInvestors } = data

  const totalStakedInUsd = totalProfit.value
  const totalEtherStaked = {
    ...totalProfit,
    value: formatLargeUSD(totalStakedInUsd),
  }

  const valueLocked = {
    ...tradingCapital,
    value: formatLargeUSD(tradingCapital.value),
  }

  const txs = {
    ...roi,
    value: formatLargeNumber(roi.value),
  }

  const medianTxCost = {
    ...totalInvestors,
    value: formatLargeNumber(totalInvestors.value),
  }

  return [
    { apiProvider: "Bscscan", apiUrl: "https://bscscan.com/", label: "Trading Capital", state: valueLocked },
    { apiProvider: "Bscscan", apiUrl: "https://bscscan.com/", label: "Total Profit", state: totalEtherStaked },
    { apiProvider: "Bscscan", apiUrl: "https://bscscan.com/", label: "Inverstors", state: medianTxCost },
    { apiProvider: "CEO", apiUrl: "https://bscscan.com/", label: "*ROI % / per year", state: txs },
  ]
}
