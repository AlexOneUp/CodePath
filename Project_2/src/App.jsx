import React from 'react';
import { useState } from 'react'
import './App.css'
import Flashcard from './components/Flashcard';
import Navbar from './components/Navbar';
import card_seed from './components/card_seed.json';


const App = () => {

  const [index, setIndex] = useState(0);

  // Helper Functions for Next and Previous Buttons
  let callStack = [];

  const nextRandomIndex = () => {
    setIndex(() => {
      // If index is at the end of the JSON, then we want to reset it to 0
      // if (index === card_seed.length - 1) {
      //   return 0;
      // }
      let random = Math.floor(Math.random() * card_seed.length);
      callStack.push(random);
      return random;
      
    });
  }

  const previousIndex = () => {
    setIndex(() => {
      if (index === 0) {
        return Math.floor(Math.random() * card_seed.length);
      }
      return index - 1;
    });
  }

  

  return (
    <div className="App">
      {/* Header */}
      <div className="header-container">
        <Navbar />
      </div>


      {/* Container with Content */}
      <div className="content-container">
        <div className="card">
          <Flashcard 
            question_props={card_seed[index].question} 
            answer_props={card_seed[index].answer}
            difficultyProps={card_seed[index].difficulty}
            image_props={card_seed[index].image}
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
          <button className="previous-button" onClick={previousIndex}>Back</button>
          <button className="next-button" onClick={nextRandomIndex}>Next</button>
        </div>   
      </div>
    </div>
  );
      
    }


export default App
