import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import images_seed from './assets/images_seed.json';

const App = () => {

  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <div className='card-container'>
          {/* Does not work on back button routing. */}
          
          {images_seed.map((image) => ( 
          <Card 
            source_props={image.url} 
            description_props={image.description} 
            hyperlink_props={image.url}
            /> 
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App