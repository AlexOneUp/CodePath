import { useState } from 'react'
import React from 'react'
import './App.css'

import BaristaForm from './components/baristaForm'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BaristaForm />
    </div>
  )
}


export default App
