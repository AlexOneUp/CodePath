import './App.css';
import  React, { useState } from 'react';
import Upgrade from './components/Upgrade';

const App = () => {


  // States for the app
  // count: has a setter method called setCount
  // useState(0) is a hook that takes in the initial value of the state count and sets the value to 0
  // count : 0

  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => {
    setCount(count + multiplier);
  }

  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMultiplier(multiplier * 2);
    }
  }
  const buyPartyPack = () => {
    if (count >= 100) {
      setMultiplier(multiplier * 5);
      setCount(count - 100);
    }
  }

  const buyFullFeast = () => {
    if (count >= 1000) {
      setMultiplier( multiplier * 10);
      setCount(count - 1000);
    }
  }

  return (
    <div className="App">
      <div className='header'>
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
          <img 
          className='samosa' 
          src="https://i0.wp.com/thetwincookingproject.net/wp-content/uploads/2020/10/Sweet-Potato-Mini-Samosas3.jpg?fit=1400%2C2100&ssl=1"
          // On click, update the count by multiplier value
          onClick={updateCount}
          />
        <div className='container'>
          <div className='upgrade'>
            <h3>Doubled Stuffed</h3>
            <p>2x per click</p>
            <button onClick={buyDoubleStuffed}>
              10 samosas
            </button>
      
          </div>

          <div className='upgrade'>
            <h3>Party Pack</h3>
            <p>10x per click</p>
            <button onClick={buyPartyPack}>
              100 samosas
            </button>
          </div>

          <div className='upgrade'>
            <h3>Feast Pack</h3>
            <p>100x per click</p>
            <button onClick={buyFullFeast}>
              1000 samosas
            </button>
          {/* <Upgrade upgrade={upgrade} count={count} setCount={setCount} multiplier={multiplier} setMultiplier={setMultiplier} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App