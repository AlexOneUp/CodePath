import React from 'react';
import { useState, useEffect } from 'react'
import './App.css'
import Flashcard from './components/Flashcard';
import AnswerForm from './components/AnswerForm';

import Navbar from './components/Navbar';
import card_seed from './assets/card_seed.json';


const App = () => {
  
  let random = Math.floor(Math.random() * card_seed.length);
  const [currIndex, setCurrIndex] = useState(random);
  
  const [currCard, setCurrCard] = useState(card_seed[currIndex]);

  // Helper Functions for Next and Previous Buttons
  /**
   * Initial Seed information with a random card from card_seed.json 
  **/
 const [cardStack, setCardStack] = useState([
   currIndex
  ]);
  useEffect(() => {
   setCurrCard(card_seed[currIndex]);
  },[currIndex]);
  
  const nextCard = () => {
    const newCard = nextRandomCard();

    // Initial Seed information
    // const tmpCardStack = [...cardStack, currIndex];
    setCardStack(previous => [...previous, newCard]);
    setCurrIndex(newCard);
      // Add new card to the stack
    //   let cardPos = cardStack.length;
    //   cardStack[cardPos] = card_seed[currIndex];
    // console.log(cardStack);
  }

  const nextRandomCard = () => {
    random = Math.floor(Math.random() * card_seed.length);
    
    console.log(random, "This is next ranomd card function");
    return random;
    // setCurrIndex(random);
  }

    const previousCard = () => {
      console.log("This is previous card function", cardStack);
      let cardsCopy = [...cardStack];
      if (cardsCopy.length <= 1) {
        console.log("This is the end of the stack");
        return;
      } else {
        let prevCard = cardsCopy.pop();
        setCurrIndex(prevCard);
        setCardStack([...cardsCopy]);
      }
      // if (cardsCopy.length === 0) {
      //   console.log("This is the end of the stack");
      //   return;
      // } else {
      //   // If previous card was invoked, already, pop once, otherwise pop twice
        
      //   const currCard = cardsCopy.pop();
      //   setCardStack([...cardsCopy]);
      //   setCurrIndex(currCard);
      //   console.log(cardStack);
      // }
      // const newCardStack = cardStack.filter((d) => d.e !== card_seed[index]);
      // setCardStack(newCardStack);
      // console.log(newCardStack);
      // console.log(cardStack);
    };

  

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
            card_counter={cardStack.length}
            question_props={currCard.question} 
            answer_props={currCard.answer}
            difficultyProps={currCard.difficulty}
            image_props={currCard.image}
            />
        </div>
        

        <div className="button-container">
          <button className="previous-button" onClick={previousCard}>Back</button>
          <button className="next-button" onClick={() => {nextCard() 
            console.log(cardStack) }}>Next</button>
        </div>   
      </div>
    </div>
  );
      
    }


export default App
