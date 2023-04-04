import React from "react";

const APIForm = ({inputs, handleChange, onSubmit}) => {

    const inputsInfo = [
        "Input a Martian Rover name: curiosity, opportunity, or spirit",
        "Input sol (Martian day) of the rover's mission (recommend 1000)",
        "Input Camera the rover used to take the photo: FHAZ or RHAZ"
      ];


    return (
      <div>
        <h2> Select Your Image Attributes: </h2>
            <form className="form-container">
        {inputs &&
            Object.entries(inputs).map(([category, value], index) => (
            <li className="form" key={index}>
                <h2>{category} </h2>
                <input
                type="text"
                name={category}
                value={value}
                placeholder="Input this attribute..."
                  onChange={handleChange}
                className="textbox"
                />
                    
                <br></br>
                <p> {inputsInfo[index]}</p>
                    
                </li>

            ))}
        </form>
        <button type="submit" className="button" onClick={onSubmit}>
        Get me a picture Rover! 🎞
        </button>
      </div>
    );
  };
  
  export default APIForm;