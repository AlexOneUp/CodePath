import { useState } from 'react'
import './App.css'
import APIForm from './Components/APIform';
import Gallery from './Components/gallery';

const ACCESS_KEY = import.meta.env.VITE_NASA_ACCESS_KEY

function App() {
  // ______________________________________________________
  // All states are stored here
  // ______________________________________________________
  const [inputs, setInputs] = useState({
    rover : "",
    sol : "",
    camera : ""
  });
  
  // Checkpoint 1
  const [currentImage, setCurrentImage] = useState(null);

  // Checkpoint 2
  const [prevImages, setPrevImages] = useState([]);


  // ______________________________________________________
  // All functions are stored here
  // ______________________________________________________
  const submitForm = () => {
    if (inputs.url == "" || inputs.url == " ") {
      alert("You forgot to submit an url!");
    }
    else 
    {
      // for (const [key, value] of Object.entries(inputs)) {
      //   if (value == ""){
      //     inputs[key] = defaultValues[key];
      //   }
      // }
    }
    makeQuery();
  }
  

  const makeQuery = () => {
    let camera = ["FHAZ", "RHAZ"]

    let query = `https://api.nasa.gov/mars-photos/api/v1/rovers/${inputs.rover}/photos?sol=${inputs.sol}&api_key=${ACCESS_KEY}`;
    if (camera.includes(inputs.camera)){
      query = `https://api.nasa.gov/mars-photos/api/v1/rovers/${inputs.rover}/photos?sol=${inputs.sol}&camera=${inputs.camera.toLowerCase()}&api_key=${ACCESS_KEY}`
    } else if (inputs.camera == "" && inputs.rover == "" && inputs.sol == ""){
      query = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${ACCESS_KEY}`;
    } else if (inputs.camera == "" && inputs.rover == ""){
      query = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${ACCESS_KEY}`;
    } else {
      query = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${ACCESS_KEY}`;
    }

    console.log(query);
    callAPI(query).catch(console.error);
  }


  const callAPI = async (query) => {
    
    const response = await fetch(query);
    const json = await response.json();
    console.log(json);
    let random = Math.floor(Math.random() * json.photos.length);
    setCurrentImage(json.photos[random].img_src);
    setPrevImages((images) => [...images, json.photos[random].img_src]);
    reset();

  }

  const reset = () => {
    setInputs({
      rover : "",
      sol : "",
      camera : ""
    });
    
  }

    return (
    <div className="whole-page">
      <h1>Mars Rover Picture Generator </h1>
      <h2>Randomly generate a photo or fill out the form!</h2>
      <APIForm
        inputs={inputs}
        handleChange={(e) =>
          setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value.trim(),
          }))
        }
        onSubmit={submitForm}
      />
      <br></br>
      {currentImage ? (
  <img
    className="screenshot"
    src={currentImage}
    alt="Screenshot returned"
  />
) : (
  <div> </div>
)}

    <div className="container">
      <h3> Current Query Status: </h3>
      <p>
        https://api.nasa.gov/mars-photos/api/v1/rovers/{inputs.rover}/photos?&api_key=ACCESS_KEY 
        <br></br>
        &rover={inputs.rover} <br></br>
        &fsol={inputs.sol} <br></br>
        &camera={inputs.camera}
        <br></br>
      </p>
    </div>

    <br></br>   
      <div className="container">
        <Gallery images={prevImages} />
      </div>
    </div>
  );
}

export default App
