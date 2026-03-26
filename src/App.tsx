import { useMarket } from "./hook/useMarket"
import type { Market } from "./types/Market"

function App() {
  const { data, isLoading, isError } = useMarket()

  if (isLoading) return <div>carregando...</div>
  if (isError) return <div>Error ao carregar</div>

  return (
    <div>
      {data?.map((market: Market) => (
        <div key={market.id}>{market.question}</div>
      ))}
    </div>
  )
}

export default App
