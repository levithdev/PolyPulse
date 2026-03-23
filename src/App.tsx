import { useEffect } from "react"
import { getMarkets } from "./services/api"

function App() {
  useEffect(() => {
    getMarkets()
      .then(data => console.log(data))
      .catch(err => console.log(err))
  })

  return (
    <div>

    </div>
  )
}

export default App
