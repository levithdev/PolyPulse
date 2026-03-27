import type { Market } from "../types/Market"

interface MarketCardProps {
  market: Market
}

export function MarketCard({ market }: MarketCardProps) {

  return (
    <div>
      <h2>{market.question}</h2>
      {market.volume !== undefined && <p>Volume: {market.volume}</p>}
    </div>
  )
}