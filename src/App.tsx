import { useMarket } from "./hook/useMarket"
import { MarketCard } from "./components/MarketCard"

function App() {
  const { data, isLoading, isError } = useMarket()

  if (isLoading) return <div>carregando...</div>
  if (isError) return <div>Error ao carregar</div>

  return (
    <div>
      {data?.map((market) => (
        <MarketCard key={market.id} market={market} />
      ))}
    </div>
  )
}

export default App
