import React from 'react';
import { useState } from 'react'
import './App.css'
import Flashcard from './components/Flashcard';



const App = () => {

  const [flashcard, updateFlashcard] = useState([]);

  return (
    <div className="App">
      <div className="card-container">
        <Flashcard flashcard={flashcard} updateFlashcard={updateFlashcard}/>
      </div>
    </div>
  )
}

export default App
