import React from 'react';
import { useState } from 'react'
import './App.css'
import Flashcard from './components/Flashcard';

import card_seed from './components/card_seed.json';

const App = () => {

  const [flashcard, updateFlashcard] = useState([]);
  
  console.log(card_seed[0].question);
  return (
    <div className="App">
      <div className="card-container">
        {/* Don't map, but make a dictionary instead of map */}
        {/* Want to access 1 element at a time and render it */}
          
        {card_seed.map((flashcard) => (
              <Flashcard
                question_props={flashcard.question}
                answer_props={flashcard.answer}
              />
        
            )
          )
        }
      </div>
    </div>
  )
}

export default App
