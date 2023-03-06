import React from "react";
import { useState } from "react";

const Flashcard = (props) => {
    // Make sure the state of the component is either a question or an answer
    const [ isQuestion, setIsQuestion ] = useState(true)

    
    return isQuestion ? (
            <div className="content">
                <button
                className='jh-cart-toggle-button'
                onClick={() => setIsQuestion(false)}
            >See Answer
            </button>

                <h3>{props.question_props}</h3>
               

            </div>

    ) : (
    
        <div className="card">
            <div className="content">
                <button
                className='jh-cart-toggle-button'
                onClick={() => setIsQuestion(true)}
            >See Questions</button>
                <h3 >{props.answer_props}</h3>
            </div>
        </div>

    )
    }

export default Flashcard;
