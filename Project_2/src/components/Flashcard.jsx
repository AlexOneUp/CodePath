import React from "react";
import { useState } from "react";

const Flashcard = (props, { flashcard, updateFlashCard }) => {
    // Make sure the state of the component is either a question or an answer
    const [ isQuestion, setIsQuestion ] = useState(true)
    console.log(flashcard);
    
    return isQuestion ? (

            <div className="content">
                <button
                className='jh-cart-toggle-button'
                onClick={() => setIsQuestion(false)}
            >wbcfibwerbhbier
            </button>

                <h3 >State {isQuestion}</h3>
                <button onClick={() => updateFlashCard(0)}>Something TBD</button>

            </div>

    ) : (
    
        <div className="card">
            <div className="content">
                <button
                className='jh-cart-toggle-button'
                onClick={() => setIsQuestion(true)}
            >qqqqqqqqqq</button>
                <h3 >State True {flashcard} </h3>
            </div>
        </div>

    )
    }

export default Flashcard;
