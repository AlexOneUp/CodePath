import React, {Component, useState} from "react";
import RecipeChoices from "./recipeChoices";
import drinksJson from "../assets/drinks.json";

const BaristaForm = () => {

    const onNewDrink = () => {
        setInputs({
            'temperature': '',
            'milk': '',
            'syrup': '',
            'blended': '' });
            
          getNextDrink();        
    };

    const onCheckAnswer = () => {
     
    };

    const [inputs, setInputs] = useState({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': '' });
        
    const ingredients = {
        'temperature' : ['hot', 'lukewarm', 'cold'],
        
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
            
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
            
        'blended': ['yes', 'turbo', 'no']
    }

    const [currentDrink, setCurrentDrink] = useState('');
  
    const [trueRecipe, setTrueRecipe] = useState({});

    const getNextDrink = () => {
        let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
            setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
            setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
    }



    return (
        <div>
            <h2>Hi, I'd like to order a:</h2>
            <div className="drink-container">
                <h2 className="mini-header">{currentDrink}</h2>
                <button
                    type="new-drink-button"
                    className="button newdrink"
                    onClick={onNewDrink}
                >
                    🔄
                </button>
            </div>
            
            <form >
            {/* Will be populated later */}

            </form>
        
            <button type="submit" className="button submit" onClick={onCheckAnswer}>
            Check Answer
            </button>

            <button
            type="new-drink-button"
            className="button newdrink"
            onClick={onNewDrink}
            >
            New Drink
            </button>
            <h3>Temperature</h3>
            <div className="answer-space" >
                {inputs["temperature"]} 
            </div>
            <RecipeChoices
                handleChange={(e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))}
                label="temperature"
                choices={ingredients["temperature"]}
                checked={inputs["syrup"]}
            />
            <h3>Milk</h3>
            <div className="answer-space" >
                {inputs["milk"]} 
            </div>
            <RecipeChoices
                handleChange={(e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))}
                label="milk"
                choices={ingredients["milk"]}
                checked={inputs["milk"]}
            />
            <h3>Syrup</h3>
            <div className="answer-space" >
            {inputs["syrup"]} 
            </div>
            <RecipeChoices
                handleChange={(e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))}
                label="syrup"
                choices={ingredients["syrup"]}
                checked={inputs["syrup"]}
            />
            <h3>Milk</h3>
            <div className="answer-space" >
                {inputs["milk"]} 
            </div>
            <RecipeChoices
                handleChange={(e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))}
                label="milk"
                choices={ingredients["milk"]}
                checked={inputs["milk"]}
            />
           <h3>Blended</h3>
            <div className="answer-space" >
                {inputs["blended"]}
                {inputs["blended"]} 
            </div>
            <RecipeChoices
                handleChange={(e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))}
                label="blended"
                choices={ingredients["blended"]}
                checked={inputs["blended"]}
            /> 
        </div>
    );
    
};

export default BaristaForm;
