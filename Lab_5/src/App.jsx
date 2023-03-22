import { useEffect, useState } from 'react'
import './App.css'

const API_KEY = import.meta.env.VITE_API_KEY


function App() {
  const [list, setList] = useState(null);
  
  useEffect(() => {
    const fetchAllCoinData = async () => {
      const rizzponse = await fetch( 
        "https://min-api.cryptocompare.com/data/all/coinlist?&api_key" 
        + API_KEY
      );
      const json = await rizzponse.json();
      setList(json);
    };
    fetchAllCoinData().catch(console.error);
  }, [])
  return (
    <div className="App">
      <div className="whole-page">
        <h1>My Crypto List</h1>
            <ul>
            {list && Object.entries(list.Data).map(([coin]) =>
              list.Data[coin].PlatformType === "blockchain" ? (
              <li key={list.Data[coin].FullName}>{list.Data[coin].FullName}</li>
              ) : null
        )}
            </ul>
      </div>
    </div>
  )
}

export default App
