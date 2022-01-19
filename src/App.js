import {useState} from "react"
import { useEffect } from "react/cjs/react.development"

function App() {
  const [loading, setLoading] = useState(true)
  //여기서 coins의 초깃값을 안넣어주면, 초깃값이 undefined라서 오류뜬다. 
  //꼭 빈 배열을 넣어주기
  const [coins, setCoins] = useState([]) 
  useEffect( () => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response)=>response.json())
    .then((json)=> {
      setCoins(json)
      setLoading(false)
    })
  }, [])
  return (
    <div>
      <h1>The Coins ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((coin) =>(
        <li key={coin.id}>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price}</li>
        ))}
      </ul>
    </div>
  )
  } 

export default App