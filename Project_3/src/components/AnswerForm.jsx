import React from "react";
import { useState } from "react";
import '../styles/Flashcard.css';

const AnswerForm = (props) => {
    const [ answer, setAnswer ] = useState('');
    const [ isCorrect, setIsCorrect ] = useState(false);
    const [ isSubmitted, setIsSubmitted ] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (answer === props.answer_props) {
            setIsCorrect(true);
            setIsSubmitted(true);
        } else {
            setIsCorrect(false);
            setIsSubmitted(true);
        }
    }

    return (
        <div className="answer-form">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your answer" onChange={(e) => setAnswer(e.target.value)}></input>
                <button type="submit">Submit</button>
            </form>
            {isSubmitted && isCorrect ? <h3>Correct!</h3> : isSubmitted && !isCorrect ? <h3>Incorrect!</h3> : null}
        </div>
    );
}

export default AnswerForm;