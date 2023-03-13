import React from "react";
import { useState } from "react";
import '../styles/Flashcard.css';

const Flashcard = (props) => {
    // Make sure the state of the component is either a question or an answer
    const [ isQuestion, setIsQuestion ] = useState(true)

    let bgColor = '';
    if (props.difficultyProps === 'easy') {
        bgColor = '#39E75F';
    } else if (props.difficultyProps === 'medium') {
        bgColor = '#EFFD5F';
    } else {
        bgColor = '#FF7F7F';
    }

    return isQuestion ? (
        <div className="card" onClick={() => setIsQuestion(false)}>
            <style>
                {`
                .card {
                    background-color: ${bgColor};

                }
                `}
            </style>
            <img src={props.image_props} height={100} width={100}>
            </img>
            <h4>This is the {props.card_counter}th card</h4>
            <div className="content">
                <h2>Question :</h2>
                <h2>Difficulty: {props.difficultyProps}</h2>
                <h3>{props.question_props}</h3>

            </div>
        </div>
    ) : (   
        <div className="card" onClick={() => setIsQuestion(true)}>

            <img src={props.image_props} height={100} width={100}>
            </img>
            
            <div className="content" >
                <h2>Answer :</h2>
                
                <h3 >{props.answer_props}</h3>

            </div>
        </div>

    );
}

export default Flashcard;
