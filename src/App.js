import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])
  const [coinValue, setCoinValue] = useState(0)
  const [money, setMoney] = useState(0)

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json)
        setLoading(false)
      })
  }, [])

  const onChange = (e) => {
    setMoney(e.target.value)
  }

  const coinChange = (e) => {
    setCoinValue(e.target.value)
  }

  return (
    <div>
      <h1>Coin Changer {loading ? "" : `(${coins.length})`}</h1>

      {loading ? <strong>Loading...</strong> : 
      <select onChange={coinChange}>
        <option>----- Select Coin -----</option>
        {coins.map((coin, index) => (
          <option key={index} value={coin.quotes.USD.price}>
            {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
          </option>
        ))}
      </select>
      }
      <hr />

      <div>
        <input type="number" placeholder="How much you have?" onChange={onChange}/>
      </div>

      <h1>
        {(money !== 0 && coinValue !== 0) ? (money / coinValue) : null}
      </h1>

    </div>
  )
}

export default App;