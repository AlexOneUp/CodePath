import { useState } from 'react'
import './App.css'
import APIForm from './Components/APIform';
import Gallery from './Components/gallery';
import { BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';


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
  const [galleryObject, setGalleryObject] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const [oldObjects, setOldObjects] = useState([]);

  const [curiosityPhotos, setCuriosityPhotos] = useState([]);
  const [opportunityPhotos, setOpportunityPhotos] = useState([]);
  const [spiritPhotos, setSpiritPhotos] = useState([]);

  const [searchInput, setSearchInput] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [apiSize, setApiSize] = useState(0);

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
      let rover = ["curiosity", "opportunity", "spirit"];
      let randomRover = Math.floor(Math.random() * 3);    
      let randomSol = Math.floor(Math.random() * 1001);
      if (randomSol === 0) {randomSol++;}
        
      let query = `https://api.nasa.gov/mars-photos/api/v1/rovers/${inputs.rover}/photos?&api_key=${ACCESS_KEY}`;
        if (camera.includes(inputs.camera[0] || inputs.camera[1])){
          query = `https://api.nasa.gov/mars-photos/api/v1/rovers/${inputs.rover}/photos?sol=${inputs.sol}&camera=${inputs.camera.toLowerCase()}&api_key=${ACCESS_KEY}`
        } else if (inputs.camera == null && inputs.rover == null && inputs.sol == null){
          query = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover[randomRover]}/photos?sol=${randomSol}&api_key=${ACCESS_KEY}`;
        } else if (inputs.camera == "" && inputs.rover == ""){
          query = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover[randomRover]}/photos?sol=${randomSol}&api_key=${ACCESS_KEY}`;
        } else {
          query = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover[randomRover]}/photos?sol=${randomSol}&api_key=${ACCESS_KEY}`;
        }
        
      console.log(query);
      callAPI(query).catch(console.error);
    }
      
      
      const callAPI = async (query) => {
        
        const response = await fetch(query);
        const json = await response.json();
        
        setApiSize(json.photos.length);

        let random = Math.floor(Math.random() * json.photos.length);
        console.log(json);
        setCurrentImage(json.photos[random].img_src);
        // console.log(json.photos.filter((photo) => photo.rover.name === "Curiosity" && photo.camera.name === "FHAZ"));
        setPrevImages((images) => [...images, json.photos[random].img_src]);
        setGalleryObject((roverObjects) => [...roverObjects, json.photos[random]]);
        setGalleryImages((roverObjects) => [...roverObjects, json.photos[random].img_src]);

        setOldObjects((roverObjects) => [...roverObjects, json.photos[random]]);
        console.log(oldObjects, "These are the old objects");
        console.log(galleryObject, "These are the gallery objects");
        console.log(galleryImages, "These are the gallery images");

        if (json.photos[random].rover.name === "Curiosity"){
          console.log(curiosityPhotos, "Curiosity");
          setCuriosityPhotos((roverObjects) => [...roverObjects, json.photos[random].img_src]);
        } else if (json.photos[random].rover.name === "Opportunity"){
          console.log(opportunityPhotos, "Opportunity");
          setSpiritPhotos((roverObjects) => [...roverObjects, json.photos[random].img_src]);
        } else {
          console.log(spiritPhotos, "Spirit");
          setOpportunityPhotos((roverObjects) => [...roverObjects, json.photos[random].img_src]);
        }

    reset();

  }


  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchValue !== '') {
      const filteredData = galleryObject.filter((item) =>
       Object.values(item.rover.name)
          .join('')
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
      const filteredDataImages = filteredData.map((data) => data.img_src);
      setGalleryImages(filteredDataImages);
      // console.log(filteredData.filter((data) => data.img_src))
      setGalleryObject(filteredData);
      // setGalleryObject(filteredData);
      // console.log(galleryObject.filter((photo) => photo.rover.name === "Curiosity"));
    } else {
      if (galleryObject.length === 0) {
        setGalleryObject(prevImages);
        setGalleryImages(prevImages);
      }
     console.log(galleryObject);

    }
  };
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
      <h3>
        You pulled {apiSize} objects from NASA's API this time!
        <p>
        https://api.nasa.gov/mars-photos/api/v1/rovers/{inputs.rover}/photos?&api_key=ACCESS_KEY 
        <br></br>
        &rover={inputs.rover} <br></br>
        &fsol={inputs.sol} <br></br>
        &camera={inputs.camera}
        <br></br>
      </p>
        <br></br>
      </h3>
    </div>

    <br></br>   

      <div className="container">
        <h2>Search Your Rover's Image Bank!</h2>

      <div className="filter">
          <input type="text" placeholder="Search by Rover Name" 
          onChange={(inputString) => searchItems(inputString.target.value)}
          // handleChange={(e) =>
          //   searchItems((prevState) => ({
            //     ...prevState,
            //     [e.target.name]: e.target.value.trim(),
            //   }))
            // }
            // onChange={searchItems}
            />

          {/* <select >
            <option value="Curiosity">Curiosity</option>
            <option value="Opportunity">Opportunity</option>
            <option value="Spirit">Spirit</option>
          </select> */}
        </div>
          {
            searchInput.length > 0 ? (
              <Gallery images={galleryImages} />  
              ) : (
                <Gallery images={prevImages} />
                )
              }
      </div>
    </div>
  );
}

export default App
