import React from "react";
import { useState } from "react";
import '../styles/AnswerForm.css';

const AnswerForm = (props) => {
    const [ answer, setAnswer ] = useState('');
    const [ isCorrect, setIsCorrect ] = useState(false);
    const [ isSubmitted, setIsSubmitted ] = useState(false);

    const handleSubmit = (e) => {
        // Prevent the page from refreshing
        e.preventDefault();
        // Check if the answer is correct
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
                <label className="label-text">Your Answer: </label>
                <input 
                    type="text" 
                    placeholder="Enter your answer" 
                    onChange={(e) => {
                        // {console.log(e,"look here to see changes in On Change event")}
                        setAnswer(e.target.value)
                        }}>
                </input>
                <button className="submit-button" type="submit">Submit</button>
            </form>
            {isSubmitted && isCorrect ? 
                <h3 className="correct-input">Correct! Congratuations!</h3> : isSubmitted && !isCorrect ? <h3 className="incorrect-input">Incorrect! Try Again</h3> : null}
        </div>
    );
}

export default AnswerForm;