import React from 'react';
import { useState } from 'react'
import './App.css'
import Flashcard from './components/Flashcard';

import card_seed from './components/card_seed.json';


const App = () => {

  const [index, setIndex] = useState(0);

  // Helper Functions for Next and Previous Buttons

  const increaseIndex = () => {
    setIndex(() => {
      // If index is at the end of the JSON, then we want to reset it to 0
      if (index === card_seed.length - 1) {
        return 0;
      }
      return index + 1;
    });
  }

  const decreaseIndex = () => {
    setIndex(() => {
      return index - 1;
    });
  }

  const resetIndex = () => {
    setIndex( () => {
      return 0;
    })
  }
  

  return (
    <div className="App">
      <div className="card-container">
        <Flashcard 
          question_props={card_seed[index].question} 
          answer_props={card_seed[index].answer} 
          />
        {/* 
        Don't map, but make a dictionary instead of map 
        Want to access 1 element at a time and render it 
        {card_seed.map((flashcard) => (
          <Flashcard
            question_props={flashcard.question}
            answer_props={flashcard.answer}
          />
          )
         )
        } */}
      </div>
      <div className="button-container">
        <button className="previous-button" onClick={decreaseIndex}>Previous</button>
        <button className="next-button" onClick={increaseIndex}>Next</button>
        <button className="reset-button" onClick={resetIndex}>Reset</button>
      </div>   
    </div>
  );
      
    }


export default App
